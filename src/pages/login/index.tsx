import React, { useState } from "react";
import { TextInput, Text, View, Image, TouchableOpacity } from "react-native";
import { style } from "./styles";
import logo from "../../assets/logo.png";
import register from "../register/index";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={style.container}>
      <View style={style.boxTop}>
        <View style={style.circle}>
          <Image source={logo} style={style.Image} />
          <Text style={style.text}>Login</Text>
        </View>
      </View>
      <View style={style.boxMid}>
        <View style={style.inputsContainer} />
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
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
          autoCapitalize="none"
        />
        <TouchableOpacity
          onPress={() => alert("Redirecionar para recuperação de senha")}
        >
          <Text style={style.text2}>Esqueceu a senha?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.button} onPress={() => {}}>
          <Text style={style.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
      <Text style={style.text3}>OU</Text>
      <TouchableOpacity style={style.button2} onPress={() => {}}>
        <Text style={style.buttonText}>Entrar com Google</Text>
      </TouchableOpacity>
      <Text style={style.text4}>
        Ainda não possui uma conta?{" "}
        <TouchableOpacity onPress={() => {}}>
          <Text style={style.linkText}>Cadastre-se</Text>
        </TouchableOpacity>
      </Text>
    </View>
  );
}
