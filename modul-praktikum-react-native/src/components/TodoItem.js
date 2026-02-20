import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function TodoItem({ item, onToggle, onDelete }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.checkBox}
        onPress={() => onToggle(item.id)}
      >
        <Text style={styles.checkMark}>
          {item.completed ? '✓' : ' '}
        </Text>
      </TouchableOpacity>

      <View style={styles.content}>
        <Text
          style={[
            styles.title,
            item.completed && styles.completedTitle
          ]}
        >
          {item.title}
        </Text>
        <Text style={styles.date}>{item.date}</Text>
      </View>

      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => onDelete(item.id)}
      >
        <Text style={styles.deleteIcon}>🗑️</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginHorizontal: 15,
    marginVertical: 8,
    borderRadius: 10,
    elevation: 2,
  },
  checkBox: {
    width: 28,
    height: 28,
    borderWidth: 2,
    borderColor: '#3498db',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  checkMark: {
    fontSize: 18,
    color: '#3498db',
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: '#2c3e50',
  },
  completedTitle: {
    textDecorationLine: 'line-through',
    color: '#95a5a6',
  },
  date: {
    fontSize: 12,
    color: '#95a5a6',
    marginTop: 4,
  },
  deleteButton: {
    padding: 8,
  },
  deleteIcon: {
    fontSize: 20,
  },
});
