import React, { useMemo } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Visa from '../assets/visa_color.png'
const CreditCardInfo = ({ cardNumber }) => {
  const cardNumberSplitting = useMemo(() => {
    return cardNumber.split(' ')
  }, [cardNumber])
  return (
    <View style={styles.card}>
      <View>
        <Image source={Visa} />
      </View>
      <View style={styles.cardDetails}>
        <View style={styles.cardNumberWrapper}>
          {cardNumberSplitting.map((number, index) => {
            return (
              <Text key={number} style={[styles.cardNumber, styles.text]}>{index !== cardNumberSplitting.length - 1 ? '••••' : number}</Text>

            )
          })}

        </View>
        <View style={styles.cardInfo}>
          <View style={styles.identitySection}>
            <Text style={[styles.info, styles.text]}>Name on Card</Text>
            <Text style={styles.text}>Kittinut</Text>
          </View>
          <View style={styles.identitySection}>
            <Text style={[styles.info, styles.text]}>Expires</Text>
            <Text style={styles.text} >05/24</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'FC-rounded'
  },
  cardNumberWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  card: {
    gap: 24,
    borderRadius: 20,
    paddingLeft: 36,
    paddingRight: 72,
    paddingVertical: 36,
    justifyContent: 'space-between',
    shadowColor: '#000',
    backgroundColor: "#fff",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  identitySection: {
    gap: 16,
  },
  visa: {
    backgroundColor: '#4a90e2',
  },


  logo: {
    width: 60,
    height: 40,
  },
  cardDetails: {
    marginTop: -16,
  },
  cardNumber: {
    fontSize: 24,
    color: '#808080',
  },
  cardInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 24,
  },
  info: {
    color: '#8F8F8F',
    fontSize: 16,
  },
});

export default CreditCardInfo;