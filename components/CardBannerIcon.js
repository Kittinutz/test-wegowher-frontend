import PropTypes from 'prop-types';
import { Image, Text, View } from 'react-native';
import Visa from '../assets/visa_color.png'
import MasterCard from '../assets/mastercard_color.png'
import JCB from '../assets/jcb_color.png'
import { useMemo } from 'react';
const CardBannerIcon = ({ cardNumber = '' }) => {
  const computeCardNumber = useMemo(() => {
    let visa, mastercard, jcb = false
    if (/^4/.test(cardNumber)) {
      visa = true
    } else if (/^5/.test(cardNumber)) {
      mastercard = true
    } else if (/^3/.test(cardNumber)) {
      jcb = true
    }
    return {
      visa,
      jcb,
      mastercard
    }
  }, [cardNumber])
  const greyStlye = { tintColor: 'grey' }
  const visaStyle = computeCardNumber.visa ? {} : greyStlye
  const mastercardStyle = computeCardNumber.mastercard ? {} : greyStlye
  const jcbStyle = computeCardNumber.jcb ? {} : greyStlye
  return (
    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
      <Image source={Visa} style={visaStyle} />
      <Image source={MasterCard} style={mastercardStyle} />
      <Image source={JCB} style={jcbStyle} />
    </View>
  );
};

CardBannerIcon.propTypes = {
  // propName: PropTypes.string,
};

export default CardBannerIcon;