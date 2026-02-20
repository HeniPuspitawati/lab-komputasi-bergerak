import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator } from 'react-native';

const variants = {
  primary: { backgroundColor: '#3498db', color: '#fff' },
  secondary: { backgroundColor: '#95a5a6', color: '#fff' },
  danger: { backgroundColor: '#e74c3c', color: '#fff' },
  outline: { backgroundColor: 'transparent', color: '#3498db', borderWidth: 1, borderColor: '#3498db' },
};

const sizes = {
  small: { paddingVertical: 6, paddingHorizontal: 12, fontSize: 12 },
  medium: { paddingVertical: 10, paddingHorizontal: 16, fontSize: 14 },
  large: { paddingVertical: 14, paddingHorizontal: 20, fontSize: 16 },
};

export default function StyledButton({ title, onPress, variant = 'primary', size = 'medium', disabled = false, loading = false }) {
  const v = variants[variant] || variants.primary;
  const s = sizes[size] || sizes.medium;

  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: v.backgroundColor, borderWidth: v.borderWidth || 0, borderColor: v.borderColor || 'transparent', opacity: disabled ? 0.6 : 1 }, { paddingVertical: s.paddingVertical, paddingHorizontal: s.paddingHorizontal }]}
      onPress={onPress}
      activeOpacity={0.8}
      disabled={disabled || loading}
    >
      {loading ? (
        <ActivityIndicator color={v.color} />
      ) : (
        <Text style={[styles.text, { color: v.color, fontSize: s.fontSize }]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  text: {
    fontWeight: '600',
  },
});
