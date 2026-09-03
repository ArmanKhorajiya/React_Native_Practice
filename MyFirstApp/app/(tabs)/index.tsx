import { View, Text, ScrollView } from 'react-native';

type StudentProps = {
  id: number;
  name: string;
  age: number;
  course: string;
  city: string;
};

function Student({ id, name, age, course, city }: StudentProps) {
  return (
    <View style={{ padding: 15, marginTop:15, borderWidth:4, borderColor:'gray',borderRadius:50 }}>
      <Text style={{ color: 'white', fontSize: 18 }}>
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
    <View>
      <Text style={{ color: 'white', fontSize: 28,backgroundColor:'green',borderRadius:30 }}>
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
      <Student
        id={4}
        name="Anim"
        age={14}
        course="10th"
        city="Wankaner"
      />
      <Student
        id={5}
        name="Arhan"
        age={14}
        course="10th"
        city="Wankaner"
      />
      <Student
        id={6}
        name="Anik"
        age={20}
        course="JOB"
        city="Wankaner"
      />
    </View>
  )
}
export default function HomeScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: 'black', padding: 30, borderRadius:20, }}>
      <ScrollView>
        <Students/>
      </ScrollView>
    </View>
  );
}