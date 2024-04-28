import { useSelector } from 'react-redux';

const useCardList = () => {
  const creditCardList = useSelector(state => state.creditCard.creditCardList)
  return {
    creditCardList,
  }
};

useCardList.propTypes = {
  // propName: PropTypes.string,
};

export default useCardList;