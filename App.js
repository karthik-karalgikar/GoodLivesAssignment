// //web : 92600941072-pdlnu4i3af2snmgvg7k83ps2ica25nkr.apps.googleusercontent.com
// //ios : 92600941072-9dksbqghtimdrnae4v3ulubui2m3jso2.apps.googleusercontent.com
// //android : 92600941072-jtol869bmh56cm1qt0oegr3m7rp0v5vo.apps.googleusercontent.com

// import * as React from 'react';
// import { StatusBar } from 'expo-status-bar';
// import { Button, StyleSheet, Text, View } from 'react-native';
// import * as WebBrowser from "expo-web-browser";
// import * as Google from "expo-auth-session/providers/google";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { async } from 'node-stream-zip';


// WebBrowser.maybeCompleteAuthSession();

// export default function App() {
//   const [userInfo, setUserInfo] = React.useState(null);
//   const [request, response, promptAsync] = Google.useAuthRequest({
//     androidClientId: "92600941072-jtol869bmh56cm1qt0oegr3m7rp0v5vo.apps.googleusercontent.com",
//     iosClientId: "92600941072-9dksbqghtimdrnae4v3ulubui2m3jso2.apps.googleusercontent.com",
//     webClientId: "92600941072-pdlnu4i3af2snmgvg7k83ps2ica25nkr.apps.googleusercontent.com"
//   });

//   React.useEffect( () => {
//     handleSignInWithGoogle();
//   }, [response] )

//   async function handleSignInWithGoogle(){
//     const user = await AsyncStorage.getItem("@user");
//     if(!user){
//       if(response?.type === "success"){
//         await getUserInfo(response.authentication.accessToken);
//       }
      
//     } else {
//       setUserInfo(JSON.parse(user))
//     }
//   }

//   const getUserInfo = async(token) => {
//     if(!token) return;
//     try{
//       const response = await fetch(
//         "https://www.googleapis.com/userinfo/v2/me",
//         {
//           headers: { Authorization: `Bearer ${token}` },
//         }
//       );

//       const user = await response.json();
//       await AsyncStorage.setItem("@user", JSON.stringify(user));
//       setUserInfo(user);
//     } catch(error) {

//     }
//   };


//   return (
//     <View style={styles.container}>
//       <Text>{JSON.stringify(userInfo)}</Text>
//       <Button title = "Sign in with Google" onPress={promptAsync} />
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

//web : 92600941072-pdlnu4i3af2snmgvg7k83ps2ica25nkr.apps.googleusercontent.com
//ios : 92600941072-9dksbqghtimdrnae4v3ulubui2m3jso2.apps.googleusercontent.com
//android : 92600941072-jtol869bmh56cm1qt0oegr3m7rp0v5vo.apps.googleusercontent.com

import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { async } from 'node-stream-zip';


WebBrowser.maybeCompleteAuthSession();

export default function App() {
  const [userInfo, setUserInfo] = React.useState(null);
  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: "92600941072-jtol869bmh56cm1qt0oegr3m7rp0v5vo.apps.googleusercontent.com",
    iosClientId: "92600941072-9dksbqghtimdrnae4v3ulubui2m3jso2.apps.googleusercontent.com",
    webClientId: "92600941072-pdlnu4i3af2snmgvg7k83ps2ica25nkr.apps.googleusercontent.com"
  });

  React.useEffect( () => {
    handleSignInWithGoogle();
  }, [response] )

  async function handleSignInWithGoogle(){
    const user = await AsyncStorage.getItem("@user");
    if(!user){
      if(response?.type === "success"){
        await getUserInfo(response.authentication.accessToken);
      }
      
    } else {
      setUserInfo(JSON.parse(user))
    }
  }

  const getUserInfo = async(token) => {
    if(!token) return;
    try{
      const response = await fetch(
        "https://www.googleapis.com/userinfo/v2/me",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const user = await response.json();
      await AsyncStorage.setItem("@user", JSON.stringify(user));
      setUserInfo(user);
    } catch(error) {

    }
  };


  return (
    <View style={styles.container}>
      <Text>{JSON.stringify(userInfo, null, 2)}</Text>
      <Button title = "Sign in with Google" onPress={() => promptAsync()} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
