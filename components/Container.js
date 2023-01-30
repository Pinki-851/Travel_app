import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";

export function Container(props) {
  const { children, style } = props;
  return (
    <SafeAreaView style={style}>
      <StatusBar />
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
