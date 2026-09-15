import { useState } from "react";
import { View, Text, Button } from "react-native";
import * as Network from "expo-network";

export default function NetworkScreen() {
  const [network, setNetwork] = useState(null);

  const handleGetNetwork = async () => {
    try {
      const res = await Network.getNetworkStateAsync();

      console.log("Network Information:");
      console.log(res);

      setNetwork(res);
    } catch (error) {
      console.log("Network Error:", error);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "teal",
        padding: 20,
      }}
    >
      <Text
        style={{
          fontSize: 24,
          color: "white",
          marginBottom: 20,
        }}
      >
        Network Class
      </Text>

      <Button title="Get Network" onPress={handleGetNetwork} />

      {network && (
        <View style={{ marginTop: 20 }}>
          <Text style={{ color: "white" }}>Type: {network.type}</Text>

          <Text style={{ color: "white" }}>
            Connected: {String(network.isConnected)}
          </Text>

          <Text style={{ color: "white" }}>
            Internet: {String(network.isInternetReachable)}
          </Text>
        </View>
      )}
    </View>
  );
}
