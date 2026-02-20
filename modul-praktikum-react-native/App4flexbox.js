// Lokasi: App.js
import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, ScrollView, StatusBar } from 'react-native';
import StyledButton from './src/components/StyledButton';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#3498db" barStyle="light-content" />
      
      {/* Header - Judulnya diganti jadi Flexbox Layout */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Flexbox Layout</Text>
        <Text style={styles.headerSubtitle}>FAHRUL RAHMAN - 105841117522</Text>
      </View>
      
      <ScrollView style={styles.content}>
        {/* Bagian 1: Variants (Dibuat Menyamping) */}
        <Text style={styles.sectionTitle}>Variants (Row Layout)</Text>
        <View style={styles.buttonGroup}>
          <StyledButton title="Primary" variant="primary" onPress={() => {}} />
          <StyledButton title="Secondary" variant="secondary" onPress={() => {}} />
          <StyledButton title="Outline" variant="outline" onPress={() => {}} />
          <StyledButton title="Danger" variant="danger" onPress={() => {}} />
        </View>

        {/* Bagian 2: Sizes (Dibuat Menyamping) */}
        <Text style={styles.sectionTitle}>Sizes (Row Layout)</Text>
        <View style={styles.buttonGroup}>
          <StyledButton title="Small" size="small" onPress={() => {}} />
          <StyledButton title="Medium" size="medium" onPress={() => {}} />
          <StyledButton title="Large" size="large" onPress={() => {}} />
        </View>

        {/* Bagian 3: States */}
        <Text style={styles.sectionTitle}>States</Text>
        <View style={styles.buttonGroup}>
          <StyledButton title="Normal" onPress={() => {}} />
          <StyledButton title="Disabled" disabled onPress={() => {}} />
        </View>
        
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
    paddingTop: 40,
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
  // --- SETTINGAN FLEXBOX MENYAMPING ---
  buttonGroup: {
    gap: 10,
    flexDirection: 'row',      // Ini yang bikin menyamping (Row)
    flexWrap: 'wrap',          // Ini biar kalau mentok turun ke bawah
    justifyContent: 'center',  // Posisi di tengah
    marginBottom: 15,
  },
});