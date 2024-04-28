import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const FieldInput = ({
  onChangeText = () => { },
  onBlur = () => { },
  onFocus = () => { },
  value = '',
  label = '',
  placeholder = '',
  limit,
  endadornment,
  showedError = ''
}) => {
  const limitType = typeof limit
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.textContainer}>
        <TextInput
          style={styles.textInput}
          placeholder={placeholder}
          value={value}
          onChangeText={v => {
            if (limitType == 'undefined') {
              onChangeText(v)
            } else if (v.length <= limit) {
              onChangeText(v)
            }
          }}
          onBlur={onBlur}
          onFocus={onFocus}
        />
        {endadornment}
      </View>
      {
        showedError && value === '' ? (<Text style={{ fontFamily: 'FC-rounded', color: '#fe0000' }}>
          Please fill the correct information.
        </Text>) : null
      }
    </View >
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    display: 'flex',
    width: '100%',
  },
  label: {
    marginBottom: 8,
    fontSize: 16,
    fontWeight: 'bold',
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#E0E0E0',
    paddingHorizontal: 12,
    height: 56,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    height: 40,
  },
});

export default FieldInput;