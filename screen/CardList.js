import PropTypes from 'prop-types';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import Container from '../components/Container';
import useCardList from '../hooks/useCardList';
import CreditCardInfo from '../components/CreditCardInfo';

const CardList = ({ navigation }) => {
  const goToCreateCard = () => {
    navigation.navigate('CreateCard')
  }
  const { creditCardList } = useCardList();

  return (
    <Container style={styles.container}>
      <FlatList
        style={{ flex: 1 }}
        data={creditCardList}
        renderItem={({ item }) => <CreditCardInfo {...item} />}
        contentContainerStyle={{
          ...(creditCardList.length === 0 ? { flexGrow: 1 } :
            {
              paddingVertical: 24,
              paddingHorizontal: 24,
              gap: 16,
            })
        }}
        ListEmptyComponent={(
          <View style={styles.notFoundCardContainer}>
            <Text style={{ fontSize: 40 }}>💳</Text>
            <Text style={{ paddingVertical: 16, ...styles.textStyle }}>No Card Found</Text>
            <Text style={styles.textStyle}>We recommend adding a card </Text>
            <Text style={styles.textStyle}>for easy payment</Text>
            <View>
              <Button color="cyan" title="Add New Card" onPress={goToCreateCard} />
            </View>
          </View>
        )} />
      <View>
        <Button color="cyan" title="Add New Card" onPress={goToCreateCard} />
      </View>

    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 0,
    fontSize: 56,
    paddingVertical: 24,
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