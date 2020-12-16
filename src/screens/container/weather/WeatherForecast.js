import React, {useState, useEffect} from 'react';
import {View, FlatList, Alert} from 'react-native';
import Error from '../../components/ErrorScreen';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchAllWeatherData} from '../../../redux/actions/weatherAction';
import ForecastCard from '../../components/WeatherForecastCard';
import LottieLoader from '../../components/LottieLoader';
import Geolocation from '@react-native-community/geolocation';
const WeatherForecast = ({actions}) => {
  const [weatherData, setWeatherData] = useState([]);
  const [lat, setLat] = useState(28.4595);
  const [lng, setLng] = useState(77.0266);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (weatherData) {
      getLocation();
    }
  }, [weatherData, loading]);

  const getLocation = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        const {latitude, longitude} = position.coords;
        actions.fetchAllWeatherData(
          {lat: latitude, lng: longitude},
          onSuccess,
          onError,
        );
      },
      (error) => Alert.alert('Error', JSON.stringify(error)),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
    Geolocation.watchPosition((position) => {
      const lastPosition = JSON.stringify(position);
      console.log('LocationLast', lastPosition);
      // this.setState({lastPosition});
    });
  };

  const onSuccess = (data) => {
    setLoading(false);
    setWeatherData(data);
  };
  const onError = () => {
    setLoading(false);
    setError(true);
  };
  return (
    <View style={{flex: 1}}>
      {error && <Error />}
      <LottieLoader loading={loading} />
      <FlatList
        data={weatherData.list}
        style={{marginTop: 20}}
        keyExtractor={(item) => item.dt_text}
        renderItem={({item}) => (
          <ForecastCard
            key={item.dt_text}
            detail={item}
            location={weatherData.city.name}
          />
        )}
      />
    </View>
  );
};

const mapStateToProps = () => {
  return {};
};
const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      fetchAllWeatherData: bindActionCreators(fetchAllWeatherData, dispatch),
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WeatherForecast);
