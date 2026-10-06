import { FlatList, Text, View } from "react-native";

const arr = [
  { id: 1, name: "Arman" },
  { id: 2, name: "Nazil" },
];
export default function App() {
  return (
    <View
      style={{
        justifyContent: "center",
        backgroundColor: "darkgreen",
        flex: 1,
      }}
    >
      <Text
        style={{
          textAlign: "center",
          color: "white",
          fontSize: 30,
          alignItems: "center",
        }}
      >
        Arman
      </Text>
      <FlatList
        data={arr}
        keyExtractor={(ele) => ele.id.toString()}
        renderItem={({ item }) => (
          <Text style={{ fontSize: 40, textAlign: "center" }}>{item.name}</Text>
        )}
      />
    </View>
  );
}
