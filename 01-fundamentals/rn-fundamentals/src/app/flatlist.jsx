import { FlatList, Text, View } from "react-native";

const arr = [
  { id: 1, name: "A" },
  { id: 2, name: "B" },
  { id: 3, name: "C" },
  { id: 4, name: "D" },
  { id: 5, name: "E" },
];

export default function FlatListExample() {
  return (
    <View
      style={{
        backgroundColor: "black",
        flex: 1,
        justifyContent: "center",
      }}
    >
      <Text></Text>
      <Text
        style={{
          textAlign: "center",
          fontSize: 35,
          color: "orange",
          flex: 1,
          justifyContent: "center",
        }}
      >
        FlatList Array Example:-
      </Text>

      <FlatList
        data={arr}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text
            style={{
              textAlign: "center",
              color: "darkorange",
              fontSize: 40,
              borderWidth: 5,
              borderColor: "white",
              gap: 50,
            }}
          >
            {item.name}
          </Text>
        )}
      />
    </View>
  );
}
