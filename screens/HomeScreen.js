import React, { Component } from "react";
import { ActivityIndicator, View } from "react-native";
import CustomHeader from "../components/Header";
import CoronaWidgetContainer from "./CoronaWidgetContainer";
export default function HomeScreen () {
return(
    <View>
      <CustomHeader />
      <CoronaWidgetContainer />
    </View>
   )
  
}
