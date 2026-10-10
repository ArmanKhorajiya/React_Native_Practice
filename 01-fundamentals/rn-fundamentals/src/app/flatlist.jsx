import { useContext } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Button,
} from "react-native";
import { useRouter } from "expo-router";

import { CartContext } from "./cart-context";
import Counter from "./counter";

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
  const { quantities, setQuantities } = useContext(CartContext);
  const router = useRouter();

  const increment = (id) => {
    setQuantities((previous) => {
      if (previous[id] >= 10) return previous;

      return {
        ...previous,
        [id]: previous[id] + 1,
      };
    });
  };

  const decrement = (id) => {
    setQuantities((previous) => {
      if (previous[id] <= 0) return previous;

      return {
        ...previous,
        [id]: previous[id] - 1,
      };
    });
  };

  const totalItems = Object.values(quantities).reduce(
    (total, quantity) => total + quantity,
    0
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Products</Text>
      <Text style={styles.subtitle}>Select your products</Text>

      <View style={styles.cartButton}>
        <Button
          title={`View Cart (${totalItems})`}
          onPress={() => router.push("/cart")}
          color="#2878D0"
        />
      </View>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.productName}>{item.name}</Text>

            <Counter
              count={quantities[item.id]}
              incr={() => increment(item.id)}
              decr={() => decrement(item.id)}
            />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#101827",
    padding: 16,
    paddingTop: 50,
  },
  heading: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
  },
  subtitle: {
    color: "#AAB8CC",
    fontSize: 15,
    marginTop: 5,
    marginBottom: 15,
  },
  cartButton: {
    marginBottom: 15,
  },
  list: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: "#1D2D44",
    borderWidth: 1,
    borderColor: "#344761",
    borderRadius: 12,
    padding: 15,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
  },
  productName: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
    flex: 1,
    marginLeft: 10,
  },
});