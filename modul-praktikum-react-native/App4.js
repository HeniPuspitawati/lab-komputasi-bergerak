// Lokasi: App.js
import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, ScrollView, StatusBar } from 'react-native';
import StyledButton from './src/components/StyledButton';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#3498db" barStyle="light-content" />
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Button Showcase</Text>
        <Text style={styles.headerSubtitle}>FAHRUL RAHMAN - 105841117522</Text>
      </View>
      
      <ScrollView style={styles.content}>
        {/* Bagian 1: Variants */}
        <Text style={styles.sectionTitle}>Variants</Text>
        <View style={styles.buttonGroup}>
          <StyledButton title="Primary" variant="primary" onPress={() => {}} />
          <StyledButton title="Secondary" variant="secondary" onPress={() => {}} />
          <StyledButton title="Outline" variant="outline" onPress={() => {}} />
          <StyledButton title="Danger" variant="danger" onPress={() => {}} />
        </View>

        {/* Bagian 2: Sizes */}
        <Text style={styles.sectionTitle}>Sizes</Text>
        <View style={styles.buttonGroup}>
          <StyledButton title="Small Button" size="small" onPress={() => {}} />
          <StyledButton title="Medium Button" size="medium" onPress={() => {}} />
          <StyledButton title="Large Button" size="large" onPress={() => {}} />
        </View>

        {/* Bagian 3: States */}
        <Text style={styles.sectionTitle}>States</Text>
        <View style={styles.buttonGroup}>
          <StyledButton title="Normal" onPress={() => {}} />
          <StyledButton title="Disabled" disabled onPress={() => {}} />
        </View>
        
        {/* Padding bawah agar bisa discroll sampai mentok */}
        <View style={{height: 50}} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#3498db',
    padding: 20,
    paddingTop: 40, // Disesuaikan untuk Android
    alignItems: 'center',
    elevation: 4,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#e1f5fe',
    marginTop: 5,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2c3e50',
    marginTop: 20,
    marginBottom: 15,
  },
  buttonGroup: {
    gap: 10, // Jarak antar tombol
  },
});