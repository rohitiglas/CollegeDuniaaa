import React, {Component} from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';

export default class ForecastCard extends Component {
  render() {
    let time;

    // Create a new date from the passed date time
    const date = new Date(this.props.detail.dt * 1000);

    // Hours part from the timestamp
    const hours = date.getHours();

    // Minutes part from the timestamp
    const minutes = '0' + date.getMinutes();

    time = hours + ':' + minutes.substr(-2);

    return (
      <View style={styles.card}>
        <Text style={styles.notes}>{this.props.location}</Text>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Image
            style={{width: 100, height: 100}}
            source={{
              uri:
                'https://openweathermap.org/img/w/' +
                this.props.detail.weather[0].icon +
                '.png',
            }}
          />
          <Text style={styles.time}>{time}</Text>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.notes}>
            {this.props.detail.weather[0].description}
          </Text>
          <Text style={styles.notes}>
            {Math.round(this.props.detail.main.temp * 10) / 10}&#8451;
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    margin: 20,
    backgroundColor: 'rgba(56, 172, 236, 1)',
    borderWidth: 0,
    borderRadius: 20,
  },
  time: {
    marginRight: 10,
    fontSize: 38,
    color: '#fff',
  },
  notes: {
    margin: 15,
    fontSize: 18,
    color: '#fff',
    textTransform: 'capitalize',
  },
});
