import { View, Text, FlatList, Button, StyleSheet } from "react-native";

export default function Cart({ products, quantities, onBack }) {
  const cartItems = products.filter((item) => quantities[item.id] > 0);

  const totalItems = cartItems.reduce(
    (total, item) => total + quantities[item.id],
    0,
  );

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * quantities[item.id],
    0,
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Your Cart</Text>
      <Text style={styles.subtitle}>{totalItems} item(s) selected</Text>

      {cartItems.length === 0 ? (
        <View style={styles.emptyCart}>
          <Text style={styles.emptyTitle}>Your cart is empty</Text>
          <Text style={styles.emptySubtitle}>
            Add some products to get started.
          </Text>
        </View>
      ) : (
        <FlatList
          data={cartItems}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.list}
          renderItem={({ item }) => (
            <View style={styles.cartCard}>
              <View style={styles.itemInfo}>
                <Text style={styles.productName}>{item.name}</Text>
                <Text style={styles.detail}>
                  ₹{item.price.toLocaleString("en-IN")} × {quantities[item.id]}
                </Text>
              </View>

              <Text style={styles.itemTotal}>
                ₹{(item.price * quantities[item.id]).toLocaleString("en-IN")}
              </Text>
            </View>
          )}
        />
      )}

      <View style={styles.summary}>
        <Text style={styles.totalLabel}>Total</Text>
        <Text style={styles.totalPrice}>
          ₹{totalPrice.toLocaleString("en-IN")}
        </Text>
      </View>

      <View style={styles.backButton}>
        <Button title="Back to Products" onPress={onBack} color="#2563EB" />
      </View>
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
    marginBottom: 20,
  },
  list: {
    paddingBottom: 12,
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
  itemInfo: {
    flex: 1,
    marginRight: 12,
  },
  productName: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "600",
  },
  detail: {
    color: "#9CAEC8",
    fontSize: 14,
    marginTop: 6,
  },
  itemTotal: {
    color: "#93C5FD",
    fontSize: 16,
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
  summary: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#1D2D44",
    borderRadius: 14,
    padding: 18,
    marginBottom: 14,
  },
  totalLabel: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "600",
  },
  totalPrice: {
    color: "#60A5FA",
    fontSize: 22,
    fontWeight: "bold",
  },
  backButton: {
    marginBottom: 20,
  },
});
