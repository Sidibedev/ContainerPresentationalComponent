import React from "react";
import { Text, View, StyleSheet } from "react-native";
import CustomCard from "../components/CustomCard";

const CoronaWidget = props => {
  const { coronaData } = props;
  return (
    <View style={{ marginTop: -50 }}>
      <CustomCard
        title="Infectés"
        desc="Nombre de cas infectés"
        data={coronaData.confirmed.value}
      />
      <CustomCard
        title="Guéris"
        desc="Nombre de cas guéris"
        data={coronaData.recovered.value}
      />
      <CustomCard
        title="Sous traitement"
        desc="Nombre de cas en sous traitement"
        data={coronaData.confirmed.value - coronaData.recovered.value}
      />
      <CustomCard
        title="Décès"
        desc="Nombre de cas décèdés"
        data={coronaData.deaths.value}
      />
      <Text style={styles.description}>
        Dernière mise à jour: {coronaData.lastUpdate}{" "}
      </Text>
    </View>
  );
};

export default CoronaWidget;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  title: {
    fontSize: 20,
    fontFamily: "muli-bold",
    color: "white"
  },
  description: {
    fontSize: 12,
    marginTop: 5,
    fontFamily: "muli",
    color: "white",
    color: "gray",
    alignSelf: "center",
    fontSize: 10,
    marginTop: 20
  }
});
