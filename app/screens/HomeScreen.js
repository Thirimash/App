import { Button, Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import App from '../../App';



export default function HomeScreen() {

    const LogIn = () => console.log("App executed");
  return (
    <ImageBackground
        style={styles.background}
          source={require("../assets/bg.png")}>
          <Image
               resizeMode="contain"
              style={styles.logo}
              source={require("../assets/Logo.png")} />



          <View style={styles.LoginButton}>
              <Button
                  onPress={LogIn}
                  title="Naciśnij aby wejść do aplikacji"
                  color="#eba534"
              />
        </View>
      </ImageBackground>
      
      
  )
}

    const styles = StyleSheet.create({
        background: {
            flex: 1,
            justifyContent: "flex-end",
            alignItems: "center",
        

        },
        LoginButton: {
            width: "50%",
            backgroundColor: "#eba534",
            position: "absolute",
            bottom: 250,
        },
        logo: {
            width: "100%",
            height: "30%",
            position: "absolute",
            top: 250,
       

        },
        logoContainer: {
        
        }
    
    })