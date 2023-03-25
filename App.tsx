import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';
import { storage } from './firebase-config/fb-config'
import { ref, uploadBytesResumable } from "firebase/firebase-database";
import SmallButton from './assets/svgs/small-button.svg';
import SVG from 'react-native-svg';

export default function App() {

  let blob = response.blob();
  const [fileUpload, setFileUpload] = useState(null);
  const uploadFile = () => {
    const fileRef = ref(storage, 'file/data')
  };

  return (
    <View style={styles.container}>
      <input type="file"
      onChange={(event) => {
        setFileUpload(event.target.files[0])
        }}
      />
      <TouchableOpacity onPress={this.uploadCSV}>
        <SmallButton width={200} height={200} />
      </TouchableOpacity>
    </View>
  );
}

function uploadCSV() {
  let blob = getCSVFile;
  
  const storageRef = ref(storage, 'file/data');

  // 'file' comes from the Blob or File API
  uploadBytesResumable(storageRef, blob).then((snapshot) => {
  console.log('Uploaded a blob or file!');
});
}

async function getCSVFile() {
  var url = "";

  let response = await fetch(url);
  let blob = await response.blob();
  return blob;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});