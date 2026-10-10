import { View, Text, FlatList, Button } from "react-native";
import Counter from "./counter";
import { useState } from "react";
const products = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Smartphone" },
  { id: 3, name: "Headphones" },
  { id: 4, name: "Keyboard" },
  { id: 5, name: "Mouse" },
  { id: 6, name: "Monitor" },
  { id: 7, name: "Smartwatch" },
  { id: 8, name: "Tablet" },
  { id: 9, name: "Speaker" },
  { id: 10, name: "Charger" },
];

export default function ProductScreen() {
  const [quantities, setQuantities] = useState({
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
    10: 0,
  });
  const increment = (id) => {
    setQuantities((previous) => ({
      ...previous,
      [id]: previous[id] + 1,
    }));
  };
  const decrement = (id) => {
    setQuantities((previous) => {
      if (previous[id] <= 0) {
        return previous;
      }

      return {
        ...previous,
        [id]: previous[id] - 1,
      };
    });
  };

  return (
    <View
      style={{
        justifyContent: "center",
        flex: 1,
        backgroundColor: "#172A45",
      }}
    >
      <Text
        style={{
          textAlign: "left",
          margin: 30,
          fontSize: 40,
          color: "#ffffff",
        }}
      >
        Products:
      </Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View
            style={{
              margin: 5,
              flex: 1,
              display: "flex",
              flexDirection: "row",
              gap: 60,
              backgroundColor: "#214c88",
              borderRadius: 12,
              borderStyle: "dashed",
              borderWidth: 1.5,
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 20,
                textAlign: "left",
              }}
            >
              {item.id}
            </Text>
            <Text
              style={{
                textAlign: "center",
                fontSize: 20,
                color: "white",
              }}
            >
              {item.name}
            </Text>
            <Counter
              count={quantities[item.id]}
              incr={() => increment(item.id)}
              decr={() => {
                decrement(item.id);
              }}
            />
          </View>
        )}
      />
    </View>
  );
}
