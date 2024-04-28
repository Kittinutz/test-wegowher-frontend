import { useEffect, useMemo, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { addCreditCard } from "../store/creditCardSlice";
import { useNavigation } from "@react-navigation/native";

const useCreditCardForm = () => {
  const dispatch = useDispatch()
  const creditCardList = useSelector(state => state.creditCard.creditCardList)
  const [showedError, showError] = useState(false);
  const navigation = useNavigation();
  const [cardObject, setCardObject] = useState({
    cardNumber: '1122 3344 5566 7788',
    expire: '01/23',
    holderName: 'Kittinut',
    cvv: '123',
  })
  useEffect(() => {
    showError(false);
  }, [cardObject])

  const handleSubmit = () => {
    const isEmptySomeField = Object.values(cardObject).some(field => field === '');
    if (isEmptySomeField) {
      showError(true)
    } else {
      dispatch(addCreditCard(cardObject))
      navigation.goBack();
    }
  }
  const handleCardNumberChange = cardNumber => {
    setCardObject({
      ...cardObject,
      cardNumber: cardNumber.replace(/\s/g, '')
    })
  }
  const handleCardNumberBlur = () => {
    setCardObject({
      ...cardObject,
      cardNumber: cardObject?.cardNumber?.match(/.{1,4}/g)?.join(' ') || '',
    })
  }
  const handleCardNumberFocus = () => {
    setCardObject({
      ...cardObject,
      cardNumber: cardObject?.cardNumber?.split(' ').join(''),
    })
  }
  const handleChangeName = (holderName) => {
    setCardObject({
      ...cardObject,
      holderName: holderName,
    })
  }
  const handleChangeExpireDate = (expire) => {
    setCardObject({
      ...cardObject,
      expire: expire,
    })

  }
  const handleChangeCVV = (cvv) => {
    setCardObject({
      ...cardObject,
      cvv
    })
  }

  const handleExpireBlur = () => {
    setCardObject({
      ...cardObject,
      expire: cardObject.expire.match(/.{1,2}/g).join('/'),
    })
  }
  const handleExpireFocus = () => {
    setCardObject({
      ...cardObject,
      expire: cardObject.expire.split('/').join('')
    })
  }

  return {
    handleCardNumberChange,
    handleCardNumberBlur,
    handleCardNumberFocus,
    handleChangeName,
    handleChangeExpireDate,
    handleExpireBlur,
    handleExpireFocus,
    handleChangeCVV,
    showedError,
    cardObject,
    handleSubmit,
  }
}
export default useCreditCardForm