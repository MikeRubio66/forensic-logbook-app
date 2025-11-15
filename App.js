import React, {useState} from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
export default function App(){
  const [notes,setNotes]=useState('');
  const pick = async ()=>{
    const r = await ImagePicker.launchCameraAsync();
    if(!r.cancelled) alert('Foto capturada: ' + r.uri);
  }
  return (
    <View style={{padding:20,marginTop:40}}>
      <Text style={{fontSize:20}}>Bitácora Forense</Text>
      <TextInput placeholder="Notas..." value={notes} onChangeText={setNotes} style={{borderWidth:1,marginVertical:10,padding:8}}/>
      <Button title="Tomar foto" onPress={pick}/>
    </View>
  );
}
