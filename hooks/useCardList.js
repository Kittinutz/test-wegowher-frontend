import { Alert } from 'react-native';
import { useSelector } from 'react-redux';
import { payByCard } from '../service/omiseService';
import { createCreditCard } from '../service/vaultService';

const useCardList = () => {
  function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
  }
  const creditCardList = useSelector(state => state.creditCard.creditCardList)
  const continuePurchase = (item, price) => async () => {
    const [moth, year] = item.expire.split("/");
    try {
      const payloadCreateToken = {
        expiration_month: moth,
        expiration_year: year,
        name: item.holderName,
        number: item.cardNumber.split(' ').join(''),
        security_code: item.cvv
      }

      const cardRegistration = await createCreditCard(payloadCreateToken)
      const cardToken = cardRegistration.id;
      const payload = {
        amount: price,
        currency: 'thb',
        card: cardToken
      }
      await payByCard(payload)
      Alert.alert("Payment Success!!");
    } catch {
      Alert.alert('Error Payment')
    }
  }
  const handlePayment = (item) => () => {
    const price = getRandomIntInclusive(1000, 100000);

    Alert.alert(`Purchase Air fire ฿${price}`, 'Press Ok to continue', [
      {
        text: 'Cancel',
        style: 'destructive'
      },
      {
        text: 'Ok',
        onPress: continuePurchase(item, price)
      }
    ])
  }
  return {
    creditCardList,
    handlePayment,
  }
};

useCardList.propTypes = {
  // propName: PropTypes.string,
};

export default useCardList;