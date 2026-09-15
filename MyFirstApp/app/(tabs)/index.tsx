// VIEW , TEXT , BUTTON Components:-
// import { View, Button } from 'react-native';
// export default function HomeScreen() {
//   return (
//     <View style={{
//       flex: 1,
//       justifyContent: 'center',
//       alignItems: 'center',
//     }}>
//       <Button
//         color="blue"
//         title="Click Me"
//         onPress={() => console.log("Button Pressed")}
//       />
//     </View>
//   );
// }


// TEXTINPUT,USESTATE:-
// import { useState } from 'react';
// import { View, Text, TextInput } from 'react-native';

// export default function HomeScreen() {

//   const [name, setName] = useState("");
//   const [age,setAge]=useState("");
//   const [city,setCity]=useState("");
//   const [pass,setPass]=useState("");

//   return (
//     <View
//       style={{
//         flex: 1,
//         backgroundColor: 'black',
//         justifyContent: 'center',
//         padding: 30,
//         gap: 20,
//       }}
//     >

//       <TextInput
//         placeholder="Enter Your Name"
//         placeholderTextColor="gray"
//         value={name}
//         onChangeText={setName}
//         style={{
//           color: 'white',
//           borderWidth: 1,
//           borderColor: 'white',
//           padding: 10,
//           fontSize: 18,
//         }}
//       />
//       <TextInput
//         placeholder="Enter Your Age"
//         placeholderTextColor="gray"
//         value={age}
//         onChangeText={setAge}
//         style={{
//           color: 'white',
//           borderWidth: 1,
//           borderColor: 'white',
//           padding: 10,
//           fontSize: 18,
//         }}
//       />
//       <TextInput
//         placeholder="Enter Your Password"
//         placeholderTextColor="gray"
//         value={pass}
//         onChangeText={setPass}
//         secureTextEntry={true}
//         style={{
//           color: 'white',
//           borderWidth: 1,
//           borderColor: 'white',
//           padding: 10,
//           fontSize: 18,
//         }}
//       />
//       <TextInput
//         placeholder="Enter Your City"
//         placeholderTextColor="gray"
//         value={city}
//         onChangeText={setCity}
//         style={{
//           color: 'white',
//           borderWidth: 1,
//           borderColor: 'white',
//           padding: 10,
//           fontSize: 18,
//         }}
//       />

//       <Text style={{color: 'white',fontSize: 22.5,}}>
//         Hello {name},
//         {'\n'}
//         Your Age is {age},
//         {'\n'}
//         And You are from {city}.
//       </Text>
//     </View>
//   );
// }


// IMAGE:-
import {View,Image,Text,ScrollView} from 'react-native';
export default function HomeScreen(){
  return(
    <View style={{
      flex:1,
      backgroundColor:'darkred',
      justifyContent:'center',
      alignItems:'center',
      gap:10
    }}>
      <Text style={{fontSize:20,}}>Spidermon</Text>
      <Image 
        source={require('../../assets/images/spidermon.jpeg')}
        resizeMode='cover'
        style={{
          width:250,
          height:250,
        }}
      />
      <Image 
        source={require('../../assets/images/spidermon.jpeg')}
        resizeMode='contain'
        style={{
          width:250,
          height:250,
        }}
      />
    </View>
  )
}


// // SCROLLVIEW:-
// import { ScrollView, Text } from 'react-native';
// export default function App() {
//   return (
//     <ScrollView style={{
//         flex: 1,
//         backgroundColor: 'darkred',
//       }}
//     >
//       <Text
//         style={{
//           color: 'white',
//           fontSize: 30,
//           margin: 20,
//         }}
//       >
//         ScrollView Example
//       </Text>
//       <Text style={{ color: 'white', fontSize: 25, margin: 20 }}>
//         Item 1
//       </Text>
//       <Text style={{ color: 'white', fontSize: 25, margin: 20 }}>
//         Item 2
//       </Text>
//       <Text style={{ color: 'white', fontSize: 25, margin: 20 }}>
//         Item 3
//       </Text>
//       <Text style={{ color: 'white', fontSize: 25, margin: 20 }}>
//         Item 4
//       </Text>
//       <Text style={{ color: 'white', fontSize: 25, margin: 20 }}>
//         Item 5
//       </Text>
//       <Text style={{ color: 'white', fontSize: 25, margin: 20 }}>
//         Item 6
//       </Text>
//       <Text style={{ color: 'white', fontSize: 25, margin: 20 }}>
//         Item 7
//       </Text>
//       <Text style={{ color: 'white', fontSize: 25, margin: 20 }}>
//         Item 8
//       </Text>
//       <Text style={{ color: 'white', fontSize: 25, margin: 20 }}>
//         Item 9
//       </Text>
//       <Text style={{ color: 'white', fontSize: 25, margin: 20 }}>
//         Item 10
//       </Text>
//     </ScrollView>
//   );
// }