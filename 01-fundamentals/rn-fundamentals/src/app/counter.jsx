import { useState } from "react";
import { Button, Text, View } from "react-native";

export default function Counter() {
  const [count, setCount] = useState(0);
  const incr = () => {
    setCount(count + 1);
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
          fontSize: 30,
          color: "orange",
        }}
      >
        {count}
      </Text>
      <Button onPress={incr}>Increment</Button>
      <Button onPress={decr}>Decrement</Button>
      <Button onPress={reset}>Reset</Button>
    </View>
  );
}
