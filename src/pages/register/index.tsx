import React, { useState } from "react";
import { TextInput, Text, View, Image, TouchableOpacity } from "react-native";
import { style } from "./styles";
import logo2 from "../../assets/logo2.png";
import register from "../register/index";

export default function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={style.container}>
      <View style={style.boxTop}>
        <View style={style.circle}>
          <Image source={logo2} style={style.Image} />
          <Text style={style.text}>Cadastre-se</Text>
        </View>
      </View>
      <View style={style.boxMid}>
        <View style={style.inputsContainer} />
        <TextInput
          style={style.input}
          placeholder="Nome"
          value={name}
          onChangeText={setName}
          secureTextEntry={true}
          autoCapitalize="none"
        />
        <TextInput
          style={style.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={style.input}
          placeholder="Número"
          value={number}
          onChangeText={setNumber}
          secureTextEntry={true}
          autoCapitalize="none"
        />
        <TextInput
          style={style.input}
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
          autoCapitalize="none"
        />
        <TouchableOpacity style={style.button} onPress={() => {}}>
          <Text style={style.buttonText}>Registrar-se</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
