import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SmallButton from './assets/svgs/small-button.svg';
import SVG from 'react-native-svg';

export default function App() {
  return (
    <View style={styles.container}>
      <SmallButton width={200} height={200}/>
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
  lorabtext:{
  fontFamily: 'Lora-Bold',
  fontSize: 20, 
  fontWeight: 'bold',
  },
  lorartext:{
    fontFamily: 'Lora-Regular',
    fontSize: 16,
    fontWeight: 'normal',
  },
  notortext:{
    fontFamily: 'NotoSerifAhom-Regular',
    fontSize: 16,
    fontWeight: 'normal',
  }
});
