import React, {useState, useEffect} from 'react';
import {View, FlatList, Alert,Text} from 'react-native';
import Error from '../../components/error/ErrorScreen';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchAllWeatherData} from '../../../redux/actions/weatherAction';
import ForecastCard from '../../components/WeatherForecastCard';
import LottieLoader from '../../components/loader/LottieLoader';
import Geolocation from '@react-native-community/geolocation';
const WeatherForecast = ({actions}) => {
  const [weatherData, setWeatherData] = useState([]);
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (weatherData) {
      getLocation();
    }
  }, [weatherData, loading]);

  const retryClick = () => {
    setLoading(true);
    getLocation();
  };

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
  };

  const onSuccess = (data) => {
    setLoading(false);
    if (data?.list) {
      setWeatherData(data);
    } else {
      setError(true);
    }
  };
  const onError = () => {
    setLoading(false);
    setWeatherData([]);
    setError(true);
  };
  return (
    <View style={{flex: 1}}>
      <LottieLoader loading={loading} />
      {error && <Error retryButton={retryClick} />}
      <FlatList
        data={weatherData?.list}
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
