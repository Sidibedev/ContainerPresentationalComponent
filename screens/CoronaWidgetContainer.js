import React, { Component } from "react";
import { ActivityIndicator } from "react-native";
import CoronaWidget from "./CoronaWidget";

export default class CoronaWidgetContainer extends Component {
  state = { coronaData: null }

  componentDidMount() {
      fetch('https://covid19.mathdro.id/api/countries/senegal' ,{
        method: 'GET',
      })
      .then((response) => response.json())
      .then((responseJson) => this.setState({coronaData: responseJson}))
      .catch((error) =>{ alert(error) })
      }

  render() {
     
    return this.state.coronaData != null ? 
        <CoronaWidget coronaData= {this.state.coronaData} /> 
         : 
        <ActivityIndicator />;
  }
}
