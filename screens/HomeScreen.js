import * as React from 'react';
import {StyleSheet, Text, View } from 'react-native';
import CustomHeader from '../components/Header';
import CustomCard from '../components/CustomCard';
import CoronaWidgetContainer from './CoronaWidgetContainer';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <CustomHeader />
      <CoronaWidgetContainer />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
    
  });
