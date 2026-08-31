import { View, Text } from 'react-native';

type StudentProps = {
  id: number;
  name: string;
  age: number;
  course: string;
  city: string;
};

function Student({ id, name, age, course, city }: StudentProps) {
  return (
    <View style={{ flex: 1, backgroundColor: 'white', padding: 30 }}>
      <Text style={{ color: 'black', fontSize: 18 }}>
        Student: {id}{'\n'}
        Name: {name}{'\n'}
        Age: {age}{'\n'}
        Course: {course}{'\n'}
        City: {city}
      </Text>
    </View>
  );
}

function Students(){
  return(
    <View style={{ flex: 1, backgroundColor: 'white', padding: 30 }}>
      <Text style={{ color: 'black', fontSize: 28 }}>
        Students:
      </Text>

      <Student
        id={1}
        name="Arman"
        age={18}
        course="React Native"
        city="Wankaner"
      />
      <Student
        id={2}
        name="Atif"
        age={19}
        course="BCA"
        city="Wankaner"
      />
      <Student
        id={3}
        name="Aman"
        age={14}
        course="10th"
        city="Wankaner"
      />
    </View>
  )
}
export default function HomeScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: 'white', padding: 30, }}>
      <Students/>
    </View>
  );
}