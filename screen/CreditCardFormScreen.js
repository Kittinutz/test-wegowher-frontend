// CreditCardFormScreen.js
import React from 'react';
import { Button, Dimensions, ScrollView, StyleSheet, View } from 'react-native';
import Container from '../components/Container';
import FieldInput from '../components/FieldInput';
import CardBannerIcon from '../components/CardBannerIcon';
import BaseButton from '../components/BaseButton';
const { width } = Dimensions.get('window')
const CreditCardFormScreen = () => {
  return (
    <Container style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      paddingBottom: 100
    }}>
      <View style={styles.coverForm} >
        <FieldInput
          label="ATM/Debit/Credit card number"
          placeholder="0000 0000 0000 0000"
          endadornment={<CardBannerIcon />}
        />
        <FieldInput label="Name on Card" placeholder="Ty Lee" />
        <View style={styles.coverPartCVC}>
          <View style={{ width: width / 2 }}>
            <FieldInput label="Expiry date" placeholder="MM/YY" />
          </View>
          <View style={{ width: width / 2 - (48 + 16) }}>
            <FieldInput label="CVV" placeholder="CVV" />
          </View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            {/* Verified by Visa icon */}
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            {/* MasterCard SecureCode icon */}
            {/* Omise icon */}
          </View>
        </View>
      </View>
      <View style={{ marginTop: 20 }}>
        <BaseButton >Add Button</BaseButton>
      </View>
    </Container>
  );
};
const styles = StyleSheet.create({
  coverForm: {

  },
  coverPartCVC: { flexDirection: 'row', gap: 16 }
})
export default CreditCardFormScreen