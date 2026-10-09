import { View, Text } from "react-native";
const arr = [
  { id: 1, name: "Arman" },
  { id: 2, name: "Nazil" },
];
export default function MapExample() {
  return (
    <View
      style={{
        justifyContent: "center",
        flex: 1,
      }}
    >
      <Text
        style={{
          textAlign: "center",
          fontSize: 30,
          color: "white",
        }}
      >
        Mapping Array Example:-
      </Text>
      <Text></Text>
      {arr.map((item) => (
        <Text
          style={{
            textAlign: "center",
            fontSize: 30,
            color: "green",
          }}
        >
          {item.name}
        </Text>
      ))}
    </View>
  );
}
