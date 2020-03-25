import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const CustomCard = (props) => (
    <View style={styles.dataCard}>
    <View style={{flexDirection:'row', justifyContent:'space-between', alignItems: 'center'}}>
      <View>
        <Text style={[styles.title, {fontSize: 20, color:'black'}]}>{props.title} </Text>
        <Text style={[styles.description, {color:"gray", fontSize: 12,fontFamily:'muli-bold'}]}>{props.desc}</Text>
      </View>
      <View>
        <Text style={[styles.title, {fontSize: 28, color:'#FB5252'}]}>{props.data}</Text>
      </View>
    </View>
  </View>
);

export default CustomCard;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
     },
    title: {
      fontSize: 20,
      fontFamily: 'muli-bold',
      color:'white'
    },
    description: {
      fontSize: 12,
      marginTop: 5,
      fontFamily: 'muli',
      color:'white'
    },
   
    dataCard: {
      width:'90%',
      alignSelf:'center',
      shadowRadius: 10 ,
      shadowOffset : { width: 2, height: 2},
      shadowColor: 'gray',
      shadowOpacity: 0.7,
      backgroundColor:'#fff',
      marginTop: 20,
      borderRadius: 15,
      paddingVertical: 30,
      paddingHorizontal: 20
      
    }
    
  });
  