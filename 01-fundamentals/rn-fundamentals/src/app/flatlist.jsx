
import { View, Text, FlatList, Button, StyleSheet } from "react-native";
import { useState } from "react";
import Counter from "./counter";
import Cart from "./cart";

const products = [
  { id: 1, name: "Laptop", price: 55000 },
  { id: 2, name: "Smartphone", price: 25000 },
  { id: 3, name: "Headphones", price: 2500 },
  { id: 4, name: "Keyboard", price: 1500 },
  { id: 5, name: "Mouse", price: 700 },
  { id: 6, name: "Monitor", price: 12000 },
  { id: 7, name: "Smartwatch", price: 5000 },
  { id: 8, name: "Tablet", price: 18000 },
  { id: 9, name: "Speaker", price: 2000 },
  { id: 10, name: "Charger", price: 500 },
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

  const [showCart, setShowCart] = useState(false);

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

  if (showCart) {
    return (
      <Cart
        products={products}
        quantities={quantities}
        onBack={() => setShowCart(false)}
      />
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Products</Text>
      <Text style={styles.subtitle}>Find your everyday essentials</Text>

      <View style={styles.cartButton}>
        <Button
          title={`View Cart (${totalItems})`}
          color="#2563EB"
          onPress={() => setShowCart(true)}
        />
      </View>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <View style={styles.productCard}>
            <Text style={styles.productId}>{item.id}</Text>

            <View style={styles.productInfo}>
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.price}>
                ₹{item.price.toLocaleString("en-IN")}
              </Text>
            </View>

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
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  heading: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  subtitle: {
    fontSize: 14,
    color: "#9CAEC8",
    marginTop: 4,
    marginBottom: 16,
  },
  cartButton: {
    marginBottom: 12,
    alignSelf: "flex-start",
  },
  list: {
    paddingBottom: 20,
  },
  productCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1D2D44",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#344761",
    padding: 12,
    marginBottom: 12,
  },
  productId: {
    width: 24,
    color: "#94A3B8",
    fontSize: 14,
  },
  productInfo: {
    flex: 1,
    marginLeft: 10,
    marginRight: 6,
  },
  productName: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "600",
    color: "#FFFFFF",
  },
  price: {
    textAlign: "center",
    color: "#93C5FD",
    fontSize: 14,
    marginTop: 4,
  },
});
