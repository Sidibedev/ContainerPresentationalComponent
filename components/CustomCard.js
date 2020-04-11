import * as React from "react";
import { StyleSheet, Text, View } from "react-native";

const CustomCard = props => (
  <View style={styles.dataCard}>
    <View>
      <Text style={styles.title}> {props.title} </Text>
      <Text style={styles.description}> {props.desc} </Text>
    </View>
    <View>
      <Text style={styles.title}> {props.data} </Text>
    </View>
 </View>
);

export default CustomCard;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  title: {
    fontSize: 20,
    fontFamily: "muli-bold",
    color: "black"
  },
  description: {
    fontSize: 12,
    marginTop: 5,
    fontFamily: "muli",
    color: "black"
  },

  dataCard: {
    width: "90%",
    alignSelf: "center",
    shadowRadius: 10,
    shadowOffset: { width: 2, height: 2 },
    shadowColor: "gray",
    shadowOpacity: 0.7,
    backgroundColor: "#fff",
    marginTop: 20,
    borderRadius: 15,
    paddingVertical: 30,
    paddingHorizontal: 20
  }
});
