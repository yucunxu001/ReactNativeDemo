import api from './api';  // 接口文件
import config from '../config'; // 配置

const checkStatus = (response) => {     // 区分请求状态 200 300去成功 否则去catch
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else if (response.status === 401) {
    throw response;
  } else {
    const error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
};

const parseJSON = (response) => {
  const rJson = response.json();
  return rJson;
};

const changFormat = (obj) => {    // 将对象格式改成 uid=416517039&opsys=other&home=1&isjiu=11 这样格式的字符串
  if (JSON.stringify(obj) === '{}') {
    return '';
  } else {
    const formData = new FormData();
    for (const item in obj) {
      formData.append(item, obj[item]);
    }
    return formData;
  }
};

const requestLog = (url, obj, data) => {
  console.log('========================================================================================');
  console.log(`接口url:${api[url].url}`);
  console.log(`说明:${api[url].explain}`);
  console.log('参数:');
  console.log(obj);
  console.log('返回结果:');
  console.log(data);
};

export const post = (url, obj) => { // 3个参数 url接口地址 obj参数json格式 callBackSuccess请求后的回调函数
  const returnFun = new Promise((resolve, reject) => {
    const fetchUrl = config.host + api[url].url;
    fetch(fetchUrl, {
      method: 'POST',
      mode: 'cors',
      /*
          same-origin：该模式是不允许跨域的，它需要遵守同源策略，否则浏览器会返回一个error告知不能跨域；其对应的response type为basic。
          cors: 该模式支持跨域请求，顾名思义它是以CORS的形式跨域；当然该模式也可以同域请求不需要后端额外的CORS支持；其对应的response
          type为cors。
          no-cors: 该模式用于跨域请求但是服务器不带CORS响应头，也就是服务端不支持CORS；这也是fetch的特殊跨域请求方式；其对应的response
          type为opaque type为opaque。。
      */
      // credentials: "include",
      /*
          fetch默认不携带cookie
          omit: 默认值，忽略cookie的发送
          same-origin: 表示cookie只能同域发送，不能跨域发送
          include: cookie既可以同域发送，也可以跨域发送
      */

      headers: {
        // '_uuid':store.getState().user.id,
      },
      body: changFormat(obj)
    }).then(checkStatus).then(parseJSON).then((data) => { // .then(checkStatus).then(parseJSON).then(function(data) {
      requestLog(url, obj, data);
      resolve(data);
    }).catch((error) => {
      requestLog(url, obj, error);
      if (error.status === 401) {   // 有网络 接口正确  但是接口返回登录信息过期
        // toast('登录信息过期,请重新登录~');
      } else {  // 无网络或者接口错误
        reject(new Error());
        // toast('网络异常');
      }
    });
  });

  return returnFun;
};
