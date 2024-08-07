import { ImageBackground, StyleSheet, Text, View } from "react-native";

import CustomButton from "../components/CustomButton";
import React from "react";
import { containerStyle } from "../styles";

const WelcomeImage = require("../../assets/img/home_screen.jpeg");

const Welcome = ({ navigation }) => {
  return (
    <>
      <ImageBackground
        source={WelcomeImage}
        style={[containerStyle.container, { height: "100%", width: "100%" }]}>
        <View
          style={{
            flex: 4,
            justifyContent: "center",
            alignItems: "center",
          }}>
          <Text
            style={{
              fontSize: 40,
              fontStyle: "italic",
              fontWeight: "bold",
              color: "black",
              backgroundColor: "#f5970a",

              paddingHorizontal: 10,
              borderRadius: 12,
              margin: 7,
            }}>
            FITNESS
          </Text>
          <View
            style={{
              borderWidth: 5,
              borderColor: "#a8a6a5",
              width: 200,
              display: "flex ",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 12,
            }}>
            <Text
              style={{
                textAlign: "center",
                fontSize: 35,
                fontStyle: "italic",
                fontWeight: "bold",
                color: "#f2f5f3",
                borderStyle: "solid",
                borderColor: "#424040",
                borderWidth: 5,
                padding: 4,
                width: 180,
                margin: 4,
                borderRadius: 12,
              }}>
              GUIDE
            </Text>
          </View>
        </View>

        <View style={{ flex: 1, justifyContent: "center" }}>
          <CustomButton
            navigation={navigation}
            title={"Start Your New Journey"}></CustomButton>
        </View>
      </ImageBackground>
    </>
  );
};

export default Welcome;

const styles = StyleSheet.create({});
