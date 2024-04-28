import PropTypes from 'prop-types';
import { Image, Pressable, Text } from 'react-native';
import addIcon from '../assets/add-icon.png'
import { useNavigation } from '@react-navigation/native';
const AddCardHeader = () => {
  const navigation = useNavigation();
  const handleAddCard = () => {
    navigation.navigate('CreateCard')
  }
  return (
    <Text>
      <Pressable onPress={handleAddCard}>
        <Image source={addIcon} />
      </Pressable>
    </Text >
  );
};

AddCardHeader.propTypes = {
  // propName: PropTypes.string,
};

export default AddCardHeader;