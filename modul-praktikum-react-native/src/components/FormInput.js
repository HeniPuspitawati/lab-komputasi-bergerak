import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

export default function FormInput({ value, onChangeText, placeholder = '', secureTextEntry = false }) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 12,
  },
  input: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
});
