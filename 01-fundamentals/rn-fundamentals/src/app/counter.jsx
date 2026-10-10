import { View, Text, Button } from "react-native";

export default function Counter({ count, incr, decr }) {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        gap: 20,
      }}
    >
      <View
        style={{
          width: 30,
          height: 35,
        }}
      >
        <Button title="-" onPress={decr} color={"red"} />
      </View>
      <Text
        style={{
          textAlign: "right",
          fontSize: 20,
          width: "auto",
          height: 22,
          color: "white",
        }}
      >
        {count}
      </Text>

      <View
        style={{
          width: 30,
          height: 35,
        }}
      >
        <Button title="+" onPress={incr} color={"green"} />
      </View>
    </View>
  );
}
