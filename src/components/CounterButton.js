import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const variants = {
  primary: { backgroundColor: '#27ae60', color: '#fff' },
  secondary: { backgroundColor: '#95a5a6', color: '#fff' },
  danger: { backgroundColor: '#e74c3c', color: '#fff' },
};

export default function CounterButton({ title, onPress, variant = 'primary', disabled = false }) {
  const v = variants[variant] || variants.primary;

  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor: v.backgroundColor, opacity: disabled ? 0.6 : 1 }
      ]}
      onPress={onPress}
      activeOpacity={0.8}
      disabled={disabled}
    >
      <Text style={[styles.text, { color: v.color }]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: '700',
  },
});
