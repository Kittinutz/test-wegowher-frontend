import { Button, Pressable, Text, View } from "react-native";

const HomeScreen = ({ navigation }) => {
  const goToCardScreen = () => {
    navigation.navigate('CardList')
  }
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontFamily: 'FC-rounded' }}>Card</Text>
      <Pressable onPress={goToCardScreen}>
        <Text style={{ fontFamily: 'FC-rounded', fontWeight: 'bold', color: '#0000f2', fontSize: 16, }}>Add Card</Text>
      </Pressable>
    </View>
  );
};


export default HomeScreen;