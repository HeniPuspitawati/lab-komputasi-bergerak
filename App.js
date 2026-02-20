// Lokasi: App.js
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'react-native';

// Import halaman yang tadi dibuat
import HomeScreen from './src/screens/HomeScreen';
import DetailScreen from './src/screens/DetailScreen';
import ProfileScreen from './src/screens/ProfileScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#3498db" barStyle="light-content" />
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: '#3498db' },
          headerTintColor: 'white',
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: '🏠 Tutorial React Native' }}
        />
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={{ title: '📖 Detail Tutorial' }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ title: '👤 Profil Saya' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}