
import { View, Text, FlatList, StyleSheet, Button } from "react-native";
import { router } from "expo-router";
import Counter from "./counter";
import { useCart } from "./_layout";

export default function ProductScreen() {
  const { products, quantities, increment, decrement } = useCart();

  const totalItems = Object.values(quantities).reduce(
    (total, quantity) => total + quantity,
    0
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Products</Text>

      <Text style={styles.subtitle}>
        Find your everyday essentials
      </Text>

      <View style={styles.cartButton}>
        <Button
          title={`View Cart (${totalItems})`}
          color="#2563EB"
          onPress={() => router.push("/cart")}
        />
      </View>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <View style={styles.productCard}>
            <Text style={styles.productId}>{item.id}</Text>

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
  productName: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "600",
    color: "#FFFFFF",
    flex: 1,
    marginLeft: 10,
  },
});
