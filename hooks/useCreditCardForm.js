import { useEffect, useState } from "react"

const useCreditCardForm = () => {
  const [showedError, showError] = useState(false);

  const [cardObject, setCardObject] = useState({
    cardNumber: '',
    expire: '',
    holderName: '',
    cvv: '',
  })
  useEffect(() => {
    showError(false);
  }, [cardObject])
  const handleSubmit = () => {
    const isEmptySomeField = Object.values(cardObject).some(field => field === '');
    if (isEmptySomeField) {
      showError(true)
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
    if (expire.length == 2) {
      setCardObject({
        ...cardObject,
        expire: expire += '/',
      })
    } else {
      setCardObject({
        ...cardObject,
        expire: expire,
      })
    }

  }
  const handleChangeCVV = (cvv) => {
    setCardObject({
      ...cardObject,
      cvv
    })
  }

  return {
    handleCardNumberChange,
    handleCardNumberBlur,
    handleCardNumberFocus,
    handleChangeName,
    handleChangeExpireDate,
    handleChangeCVV,
    showedError,
    cardObject,
    handleSubmit
  }
}
export default useCreditCardForm