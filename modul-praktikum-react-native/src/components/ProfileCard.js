import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const ProfileCard = ({ name, nim, jurusan, imageUri, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.85}>
      <Image source={{ uri: imageUri }} style={styles.avatar} />
      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        {nim ? <Text style={styles.meta}>NIM: {nim}</Text> : null}
        {jurusan ? <Text style={styles.meta}>{jurusan}</Text> : null}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    margin: 16,
    padding: 12,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  avatar: {
    width: 72,
    height: 72,
    borderRadius: 36,
    marginRight: 12,
    backgroundColor: '#bdc3c7',
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: '700',
    color: '#2c3e50',
  },
  meta: {
    marginTop: 4,
    color: '#7f8c8d',
  },
});

export default ProfileCard;
