import PropTypes from 'prop-types';
import { Image, Pressable, View } from 'react-native'
import BackIcon from '../assets/back-icon.png'
import { useNavigation } from '@react-navigation/native';
const HeaderLeftNavigation = ({
  canGoBack,
  ...props
}) => {
  const navigation = useNavigation();
  return (
    <View>
      {canGoBack ? (
        <Pressable onPress={navigation.goBack}>
          <Image source={BackIcon} />
        </Pressable>
      ) : null}
    </View>

  );
};

HeaderLeftNavigation.propTypes = {
  // propName: PropTypes.string,
};

export default HeaderLeftNavigation;