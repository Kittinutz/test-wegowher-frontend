import PropTypes from 'prop-types';
import { useMemo } from 'react';
import { Pressable, Text } from 'react-native';

const BaseButton = ({ children, onPress, color, type }) => {
  const bgColor = {
    'success': '#4AD8DA',
  }
  const backgroundColor = useMemo(() => {
    return bgColor[type] ?? '#4AD8DA'
  }, [type])
  return (
    <Pressable style={{
      backgroundColor: backgroundColor,
      height: 45,
      borderRadius: 50,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }} onPress={onPress} >
      <Text style={{ color: '#fff', textAlign: 'center', fontWeight: '700', fontSize: 16, }}>{children}</Text>
    </Pressable>
  );
};

BaseButton.propTypes = {
  // propName: PropTypes.string,
};

export default BaseButton;