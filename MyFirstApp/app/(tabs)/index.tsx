import { useState } from 'react';

import { View, Text, Button } from 'react-native';

export default function HomeScreen() {

  const [isLogin, setIsLogin] = useState(false);

  return (

    <View
      style={{
        flex: 1,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
      }}
    >

      <Text
        style={{
          color: 'white',
          fontSize: 30,
        }}
      >
        {isLogin ? "Logged In" : "Not Logged In"}
      </Text>

      <Button
        title={isLogin ? "Logout" : "Login"}
        onPress={() => setIsLogin(!isLogin)}
      />

    </View>
  );
}