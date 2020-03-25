import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CustomHeader = () => (
      <View style={styles.header}>
     
      <Text style={styles.title}> Senegal Covid-19 </Text>
      <Text style={styles.description}> Les données du Senegal sur le corona virus </Text>
     
     
      </View>
);

export default CustomHeader;
const styles = StyleSheet.create({
    
    header: {
      paddingVertical : 70,
      borderBottomLeftRadius: 50,
      borderBottomRightRadius: 50,
      paddingHorizontal: 20,
     
      backgroundColor:'#FB5252',
      justifyContent:'space-between',
      alignItems:'center'
    },
    title: {
        fontSize: 25,
        fontFamily: 'muli-bold',
        color:'white'
      },
      description: {
        fontSize: 14,
        marginTop: 5,
        fontFamily: 'muli',
        color:'white'
      },
    
  });
  