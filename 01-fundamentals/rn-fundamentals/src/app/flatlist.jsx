import { FlatList, Text, View } from "react-native";
const arr = [
  { id: 1, name: "A" },
  { id: 2, name: "B" },
  { id: 3, name: "C" },
  { id: 4, name: "D" },
  { id: 5, name: "E" },
];
export default function FlatList() {
  return (
    <View
      style={{
        backgroundColor: "black",
        flex: 1,
        justifyContent: "center",
      }}
    >
      <Text
        style={{
          textAlign: "center",
          fontSize: 50,
          color: "orange",
          justifyContent: "center",
          flex: 1,
        }}
      >
        Map Array Example:-
      </Text>
      {arr.map((item) => (
        <Text
          style={{
            textAlign: "center",
            fontSize: 50,
            color: "orange",
            justifyContent: "center",
            flex: 1,
          }}
          key={item.id}
        >
          {item.name}
        </Text>
      ))}

      <Text
        style={{
          textAlign: "center",
          fontSize: 50,
          color: "orange",
          justifyContent: "center",
          flex: 1,
        }}
      >
        Map Array Example:-
      </Text>
    </View>
  );
}
