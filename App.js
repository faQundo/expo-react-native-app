import React, {useState} from 'react';
import { View, Text, StyleSheet, Image, Button, Alert, TouchableOpacity } from 'react-native';
import * as ImagePicker from "expo-image-picker";
import  faztImg from "./assets/fazt.jpg";

const App = () => {

  const [SelectedImage, setSelectedImage] = useState(null)

  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync()

    if(permissionResult.granted === false) {
      alert('Permission to access camera is required');
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync();
    
    if(pickerResult.cancelled === true) {
      return
    }

    setSelectedImage({localUri: pickerResult.uri})
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello World!!</Text>
      <Image 
        style={styles.image} 
        source={{uri: SelectedImage !== null ? SelectedImage.localUri : faztImg}}/>
      {/* <Button
        color="#000"
        title="Start"
        onPress={() => Alert.alert('Hello')}
        /> */}
      <TouchableOpacity
        onPress={openImagePickerAsync}
        style={styles.button}>
        <Text style={styles.buttonText}>Press me</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { color: 'red', flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#00ffff' },
  title: { fontSize: 30 },
  image: {height: 200, width: 200, borderRadius:100},
  button:{
    backgroundColor:'grey',
    margin:10,
    padding:10,
    fontSize:20,
  },
  buttonText:{color:'white'}
});

export default App;