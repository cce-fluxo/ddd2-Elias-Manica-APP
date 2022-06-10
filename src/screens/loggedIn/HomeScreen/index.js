import React from "react";
import {
  SafeAreaView,
  View,
  VirtualizedList,
  StyleSheet,
  Text,
  StatusBar,
  ScrollView,
} from "react-native";

import { Container, ScrollProject } from "./styles";

import { screenHeight, screenWidth } from "../../../constants/dimensions";
import colors from "../../../constants/colors";

import Button from "../../../components/Button";
import Input from "../../../components/Input";

import fluxoLogo from "../../../assets/fluxoLogo.png";

const DATA = [];

const getItem = (data, index) => ({
  id: Math.random().toString(12).substring(0),
  title: `Item ${index + 1}`,
});

const getItemCount = (data) => 50;

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.texto}>Elias</Text>
        <VirtualizedList
          data={DATA}
          renderItem={({ item }) => <Item title={item.title} />}
          getItemCount={getItemCount}
          getItem={getItem}
          horizontal
        />
        <Text style={styles.texto}>Elias2</Text>
        <VirtualizedList
          data={DATA}
          renderItem={({ item }) => <Item title={item.title} />}
          getItemCount={getItemCount}
          getItem={getItem}
          horizontal
        />
        <Text style={styles.texto}>Eliass</Text>
        <VirtualizedList
          data={DATA}
          renderItem={({ item }) => <Item title={item.title} />}
          getItemCount={getItemCount}
          getItem={getItem}
          horizontal
        />
        <VirtualizedList
          data={DATA}
          renderItem={({ item }) => <Item title={item.title} />}
          getItemCount={getItemCount}
          getItem={getItem}
          horizontal
        />
        <VirtualizedList
          data={DATA}
          renderItem={({ item }) => <Item title={item.title} />}
          getItemCount={getItemCount}
          getItem={getItem}
          horizontal
        />
        <VirtualizedList
          data={DATA}
          renderItem={({ item }) => <Item title={item.title} />}
          getItemCount={getItemCount}
          getItem={getItem}
          horizontal
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: "pink",
  },
  item: {
    backgroundColor: "#f9c2ff",
    height: 150,
    justifyContent: "center",
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 20,
  },
  title: {
    fontSize: 32,
  },
  texto: {
    fontSize: 50,
  },
});

export default HomeScreen;
