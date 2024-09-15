import { bold } from "discord.js";
import { Button, ImageBackground, StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  boxTop: {
    height: 200,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  boxMid: {
    height: 200,
    width: "100%",
    padding: 20,
    paddingBottom: 50,
  },

  circle: {
    width: 507,
    height: 507,
    borderRadius: 507 / 2,
    backgroundColor: "#D9D9D9",
    //sombra
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
    position: "absolute",
    top: "10%",
    transform: [{ translateY: -150 }],
  },

  Image: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -100 }, { translateY: -30 }],
    //sombra
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  text: {
    marginTop: 440,
    fontSize: 35,
    fontWeight: "bold",
    color: "#404040",
    textAlign: "center",
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 4,
  },
  inputsContainer: {
    marginTop: 200,
    width: "80%",
    alignItems: "center",
  },
  input: {
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    marginBottom: 20,
    paddingHorizontal: 10,
    width: "100%",
  },

  button: {
    backgroundColor: "#404040",
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  button2: {
    backgroundColor: "#646060",
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
  text2: {
    marginTop: 1,
    marginLeft: 240,
    fontWeight: "bold",
    color: "#404040",
  },
  text3: {
    marginTop: 250,
    fontWeight: "bold",
    color: "#404040",
  },
  text4: {
    marginTop: 60,
    fontWeight: "bold",
    color: "#404040",
    textAlign: "center",
  },
  linkText: {
    fontSize: 16,
    color: "#000",
    textDecorationLine: "underline",
  },
});
