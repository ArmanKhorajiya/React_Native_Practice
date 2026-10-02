import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

interface Product {
  id: number;
  title: string;
  price: number;
}

const Setting = () => {
  const [data, setData] = useState<Product[]>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(ele) => ele.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.price}>${item.price}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Setting;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "green",
  },

  item: {
    backgroundColor: "white",
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
  },

  title: {
    fontSize: 16,
    fontWeight: "bold",
  },

  price: {
    fontSize: 14,
    marginTop: 5,
  },
});
