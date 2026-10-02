// Counter:-
import { useState } from "react";
import { Button, View, Text } from "react-native";
const Counter = () => {
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
    <View>
      <Text
        style={{
          color: "black",
          fontSize: 100,
          textAlign:'center'
        }}
      >
        {count}
      </Text>
      <Button title="Increase" onPress={incr} />
      <Button title="Decrease" onPress={decr} />
      <Button title="Reset" onPress={reset} />
    </View>
  );
};
export default Counter;

