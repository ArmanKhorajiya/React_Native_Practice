import { useContext } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
} from "react-native";

import { CartContext } from "./cart-context";

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

export default function CartScreen() {
  const { quantities } = useContext(CartContext);

  const cartProducts = products.filter(
    (product) => quantities[product.id] > 0
  );

  const totalItems = Object.values(quantities).reduce(
    (total, quantity) => total + quantity,
    0
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>My Cart</Text>
      <Text style={styles.subtitle}>Total items: {totalItems}</Text>

      {cartProducts.length === 0 ? (
        <Text style={styles.empty}>Your cart is empty.</Text>
      ) : (
        <FlatList
          data={cartProducts}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.list}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.quantity}>
                Qty: {quantities[item.id]}
              </Text>
            </View>
          )}
        />
      )}
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
    marginBottom: 20,
  },
  list: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: "#1D2D44",
    borderWidth: 1,
    borderColor: "#344761",
    borderRadius: 12,
    padding: 18,
    marginBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  productName: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
  quantity: {
    color: "#75D99A",
    fontSize: 16,
    fontWeight: "bold",
  },
  empty: {
    color: "#AAB8CC",
    fontSize: 16,
    marginTop: 30,
    textAlign: "center",
  },
});