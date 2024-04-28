// CreditCardFormScreen.js
import React, { useMemo } from 'react';
import { Button, Dimensions, ScrollView, StyleSheet, View } from 'react-native';
import Container from '../components/Container';
import FieldInput from '../components/FieldInput';
import CardBannerIcon from '../components/CardBannerIcon';
import BaseButton from '../components/BaseButton';
import VisaVerify from '../components/Icons/VisaVerify';
import MasterCardVerify from '../components/Icons/MasterCardVerify';
import OmiseVerify from '../components/Icons/OmiseVerify';
import useCreditCardForm from '../hooks/useCreditCardForm';
const { width } = Dimensions.get('window')
const CreditCardFormScreen = () => {
  const {
    handleCardNumberChange,
    handleCardNumberBlur,
    handleCardNumberFocus,
    handleChangeName,
    handleChangeExpireDate,
    handleExpireBlur,
    handleExpireFocus,
    handleChangeCVV,
    cardObject,
    showedError,
    handleSubmit,
  } = useCreditCardForm();


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
          onChangeText={handleCardNumberChange}
          onBlur={handleCardNumberBlur}
          onFocus={handleCardNumberFocus}
          value={cardObject.cardNumber}
          showedError={showedError}
          limit={16}
          endadornment={<CardBannerIcon cardNumber={cardObject.cardNumber} />}
        />
        <FieldInput
          label="Name on Card"
          placeholder="Ty Lee"
          onChangeText={handleChangeName}
          value={cardObject.holderName}
          showedError={showedError}

        />
        <View style={styles.coverPartCVC}>
          <View style={{ width: width / 2 }}>
            <FieldInput
              label="Expiry date"
              placeholder="MM/YY"
              onChangeText={handleChangeExpireDate}
              value={cardObject.expire}
              showedError={showedError}
              onBlur={handleExpireBlur}
              onFocus={handleExpireFocus}
              limit={4}
            />
          </View>
          <View style={{ width: width / 2 - (48 + 16) }}>
            <FieldInput label="CVV"
              limit={3}
              onChangeText={handleChangeCVV}
              value={cardObject.cvv}
              showedError={showedError}
            />

          </View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 24, alignItems: 'center', marginTop: 20 }}>
          <VisaVerify />
          <MasterCardVerify />
          <OmiseVerify />
        </View>
      </View>
      <View style={{ marginTop: 20 }}>
        <BaseButton onPress={handleSubmit}>Add Button</BaseButton>
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