import React, { Component } from "react";
export default class HomeScreen extends Component {
  state = { coronaData: null };

  componentDidMount() {
    getCoronaData().then(coronaData => this.setState({ coronaData }));
  }

  render() {
    <View>
      <View style={styles.header}>
        <Text style={styles.title}> Senegal Covid-19 </Text>
        <Text style={styles.description}>
          Les données du Senegal sur le corona virus
        </Text>
      </View>
      <View style={{ marginTop: -50 }}>
        <View style={styles.dataCard}>
          <View>
            <Text style={styles.title}>Infectés</Text>
            <Text style={styles.description}>Nombre de cas infectés</Text>
          </View>
          <View>
            <Text style={styles.title}>{coronaData.confirmed.value}</Text>
          </View>
        </View>
        <View style={styles.dataCard}>
          <View>
            <Text style={[styles.title, { fontSize: 20, color: "black" }]}>
              Guéris
            </Text>
            <Text style={styles.description}>Nombre de cas guéris</Text>
          </View>
          <View>
            <Text style={styles.title}>{coronaData.recovered.value}</Text>
          </View>
        </View>
        <View style={styles.dataCard}>
          <View>
            <Text style={styles.title}>Sous traitement</Text>
            <Text style={styles.description}>
              Nombre de cas sous traitement
            </Text>
          </View>
          <View>
            <Text style={styles.title}>
              {coronaData.confirmed.value - coronaData.recovered.value}
            </Text>
          </View>
        </View>
        <View style={styles.dataCard}>
          <View>
            <Text style={styles.title}>Décès</Text>
            <Text style={styles.description}>Nombre de cas décèdés</Text>
          </View>
          <View>
            <Text style={styles.title}>{coronaData.deaths.value}</Text>
          </View>
        </View>
      </View>
    </View>;
  }
}
