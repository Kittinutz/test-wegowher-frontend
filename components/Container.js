import { SafeAreaView, StyleSheet, View } from "react-native";

const Container = ({ children, style }) => {
  return (
    <View style={{
      ...styles.container,
      ...style
    }}>
      {children}
    </View >
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#fff',
    flex: 1
  },
});
export default Container;