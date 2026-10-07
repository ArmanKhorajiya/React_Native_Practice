import { FlatList, Text, View } from "react-native";
const arr = [
  { id: 1, name: "A" },
  { id: 2, name: "B" },
  { id: 3, name: "C" },
  { id: 4, name: "D" },
  { id: 5, name: "E" },
];
export default function Demo() {
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
        FlatList Array Example:-
      </Text>
      <FlatList
        data={arr}
        keyExtractor={(ele) => {
          ele.id.toString();
        }}
        renderItem={({ item }) => (
          <Text
            style={{
              textAlign: "center",
              color: "darkorange",
              fontSize: 40,
            }}
          >
            {item.name}
          </Text>
        )}
      />
    </View>
  );
}
