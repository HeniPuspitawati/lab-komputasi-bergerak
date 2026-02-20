import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = ({ title, subtitle }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 48,
    paddingBottom: 16,
    backgroundColor: '#2c3e50',
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
  },
  subtitle: {
    color: '#ecf0f1',
    fontSize: 12,
    marginTop: 4,
  },
});

export default Header;
