import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const FieldInput = ({
  onChangeText = () => { },
  value = '',
  label = '',
  placeholder = '',
  endadornment,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.textContainer}>
        <TextInput
          style={styles.textInput}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
        />
        {endadornment}
      </View>
    </View>
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