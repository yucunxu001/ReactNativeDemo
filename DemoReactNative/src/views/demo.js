import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  ScrollView,
} from 'react-native';
// import { connect } from 'react-redux';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {

  }

  render() {
    return (
      <View style={[css.flex,css.bc]}>
        <ScrollView
          showsVerticalScrollIndicator={false} // 隐藏竖直滚动条
          bounces={false}
          style={css.flex}
        >
          <Text>demo</Text>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({

});

const mapStateToProps = function (store) {
  return {
    common: store.common
  };
};

// export default connect(mapStateToProps)(Index);
export default Index;
