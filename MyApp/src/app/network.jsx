import { View, Text } from "react-native";
import * as Network from "expo-network";

export default function App() {
  const state = Network.useNetworkState();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "pink",
      }}
    >
      <Text>Type: {state.type}</Text>
      <Text>Connected: {String(state.isConnected)}</Text>
      <Text>
        Internet Reachable:
        {String(state.isInternetReachable)}
      </Text>
    </View>
  );
}
