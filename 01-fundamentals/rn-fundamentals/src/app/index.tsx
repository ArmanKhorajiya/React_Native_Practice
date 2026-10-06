import { Button, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={{ alignItems: "center", flex: 1, justifyContent: "center" }}>
      <Text style={{ color: "white" }}>Hello Arman 👋</Text>
      <Text style={{ color: "white" }}>I am learning React-Native</Text>
      <Text style={{ color: "white" }}>This is my screen.</Text>
      <Text style={{ color: "white" }}>CSE student</Text>
      <Student name="Arman" course="B-Tech CSE" />
      
    </View>
  );
}
function Student({ name, course }: { name: string; course: string }) {
  return (
    <View>
      <Text style={{ color: "white" }}>Name:{name}</Text>
      <Text style={{ color: "white" }}>Course:{course}</Text>
    </View>
  );
}
