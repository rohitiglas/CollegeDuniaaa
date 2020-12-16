import React from 'react';
import {View, StyleSheet, Animated, Easing} from 'react-native';
import LottieView from 'lottie-react-native';
const LottieLoader = ({loading}) => {
  const [progress, setProgress] = React.useState(new Animated.Value(0));

  React.useEffect(() => {
    Animated.timing(progress, {
      toValue: 1,
      duration: 5000,
      easing: Easing.linear,
    }).start();
  }, [progress]);

  if (loading) {
    return (
      <View style={styles.show}>
        <LottieView
          progress={progress}
          source={require('../../assets/loader.json')}
          autoPlay
          loop
        />
      </View>
    );
  }
  return null;
};

export default LottieLoader;

const styles = StyleSheet.create({
  show: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loader: {height: 200, width: 200},
});
