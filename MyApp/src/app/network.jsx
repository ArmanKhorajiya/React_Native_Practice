import { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import * as Network from 'expo-network';

export default function App() {
  useEffect(() => {
    const subscription = Network.addNetworkStateListener((state) => {
      console.log("Network changed:", state);
    });

    return () => {
      subscription.remove();
    };
  }, []);

  return (
    <View 
      style={{ flex: 1, justifyContent: "center", backgroundColor: "aqua" }}
    />
  );
}
