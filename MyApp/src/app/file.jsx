import { View, Text, Button } from "react-native";
import { Paths } from "expo-file-system";
import { Color } from "expo-router";

export default function FileSystem() {
  const handleFileSystem = () => {
    console.log(Paths.document);
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "teal",
      }}
    >
      <Text>React Native Expo File System Class</Text>
      <Button
        style={{ backgroundColor: "red" }}
        title="Get Path"
        onPress={handleFileSystem}
      />
    </View>
  );
}
