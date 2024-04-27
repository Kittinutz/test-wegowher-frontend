import PropTypes from 'prop-types';
import { Button, StyleSheet, Text, View } from 'react-native';
import Container from '../components/Container';

const CardList = ({ navigation }) => {
  const goToCreateCard = () => {
    navigation.navigate('CreateCard')
  }
  return (
    <Container style={styles.container}>
      <View style={styles.notFoundCardContainer}>
        <Text style={{ paddingVertical: 16, ...styles.textStyle }}>No Card Found</Text>
        <Text style={styles.textStyle}>We recommend adding a card </Text>
        <Text style={styles.textStyle}>for easy payment</Text>
        <View>
          <Button color="cyan" title="Add New Card" onPress={goToCreateCard} />
        </View>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    fontSize: 56,
  },
  notFoundCardContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  textStyle: {
    fontSize: 18
  }

});

export default CardList;