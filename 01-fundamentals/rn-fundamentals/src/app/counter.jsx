import { useState } from "react";
import { Button, Text, View } from "react-native";

export default function Counter() {
  const [count, setCount] = useState(0);
  const incr = () => {
    setCount(count + 1);
  };
  const five = () => {
    setCount(count + 5);
  };
  const decr = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const reset = () => {
    setCount(0);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        backgroundColor: "black",
      }}
    >
      <Text
        style={{
          textAlign: "center",
          fontSize: 150,
          color: "orange",
        }}
      >
        {count}
      </Text>
      <Text
        style={{
          textAlign: "center",
          color: "red",
          fontSize: 50,
        }}
      >
        {count === 0 ? "Counter is empty" : "Counter is running..."}
      </Text>
      <Button onPress={incr} title="Add One" />
      <Button onPress={decr} title="Remove One" />
      <Button onPress={five} title="Add Five" />
      <Button onPress={reset} title="Reset" />
    </View>
  );
}
