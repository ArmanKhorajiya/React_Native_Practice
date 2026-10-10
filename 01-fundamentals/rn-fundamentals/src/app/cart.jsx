import { View, Text, FlatList, StyleSheet } from "react-native";
import { useCart } from "./_layout";

export default function Cart() {
  const { products, quantities } = useCart();

  const cartItems = products.filter(
    (item) => quantities[item.id] > 0
  );

  const totalItems = cartItems.reduce(
    (total, item) => total + quantities[item.id],
    0
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Your Cart</Text>
      <Text style={styles.subtitle}>{totalItems} item(s) selected</Text>

      {cartItems.length === 0 ? (
        <View style={styles.emptyCart}>
          <Text style={styles.emptyTitle}>Your cart is empty</Text>
          <Text style={styles.emptySubtitle}>
            Add products from the Flatlist tab.
          </Text>
        </View>
      ) : (
        <FlatList
          data={cartItems}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.cartCard}>
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.quantityText}>
                × {quantities[item.id]}
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
    paddingTop: 20,
  },
  heading: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  subtitle: {
    color: "#9CAEC8",
    marginTop: 6,
    marginBottom: 20,
  },
  cartCard: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#1D2D44",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#344761",
    padding: 16,
    marginBottom: 12,
  },
  productName: {
    flex: 1,
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "600",
  },
  quantityText: {
    color: "#FFFFFF",
    backgroundColor: "#2563EB",
    overflow: "hidden",
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 10,
    fontWeight: "bold",
  },
  emptyCart: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  emptyTitle: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "bold",
  },
  emptySubtitle: {
    color: "#9CAEC8",
    marginTop: 8,
  },
});