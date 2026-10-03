// // Counter:-
// import { useState } from "react";
// import { Button, View, Text } from "react-native";
// const Counter = () => {
//   const [count, setCount] = useState(0);
//   const incr = () => {
//     setCount(count + 1);
//   };
//   const decr = () => {
//     if (count > 0) {
//       setCount(count - 1);
//     }
//   };
//   const reset = () => {
//     setCount(0);
//   };

//   return (
//     <View>
//       <Text
//         style={{
//           color: "white",
//           fontSize: 100,
//           textAlign: "center",
//         }}
//       >
//         {count}
//       </Text>
//       <Button title="Increase" onPress={incr} />
//       <Button title="Decrease" onPress={decr} />
//       <Button title="Reset" onPress={reset} />
//     </View>
//   );
// };
// export default Counter;

// Fetch Data using API:-
// import { useEffect, useState } from "react";
// import { View, Text } from "react-native";

// const ApiFetch = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((data) => {
//         setUsers(data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);

//   return (
//     <View>
//       {users.map((user) => (
//         <Text
//           style={{
//             color: "white",
//             backgroundColor: "darkgreen",
//             fontSize: 30,
//           }}
//           key={user.id}
//         >
//           {user.name}
//         </Text>
//       ))}
//     </View>
//   );
// };

// export default ApiFetch;
