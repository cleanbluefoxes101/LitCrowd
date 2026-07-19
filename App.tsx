import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ActivityIndicator, View } from 'react-native';
import { useAuthStore } from './src/store/authStore';
import { requestLocationPermission } from './src/services/locationService';

// Screens
import SplashScreen from './src/screens/SplashScreen';
import LoginScreen from './src/screens/auth/LoginScreen';
import SignupScreen from './src/screens/auth/SignupScreen';
import VibeMatchScreen from './src/screens/VibeMatchScreen';
import ProfileSetupScreen from './src/screens/ProfileSetupScreen';
import VoiceIntroScreen from './src/screens/VoiceIntroScreen';
import MusicMoodScreen from './src/screens/MusicMoodScreen';
import MatchesScreen from './src/screens/MatchesScreen';
import ChatScreen from './src/screens/ChatScreen';
import ProfileScreen from './src/screens/ProfileScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Auth Stack
const AuthStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#1a1a1a' },
    }}
  >
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Signup" component={SignupScreen} />
  </Stack.Navigator>
);

// Main App Stack
const MainStack = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarStyle: {
        backgroundColor: '#262626',
        borderTopColor: '#404040',
        borderTopWidth: 1,
      },
      tabBarActiveTintColor: '#00d9ff',
      tabBarInactiveTintColor: '#808080',
    }}
  >
    <Tab.Screen
      name="Vibe"
      component={VibeMatchScreen}
      options={{
        tabBarLabel: 'Vibe',
      }}
    />
    <Tab.Screen
      name="Matches"
      component={MatchesScreen}
      options={{
        tabBarLabel: 'Matches',
      }}
    />
    <Tab.Screen
      name="Chat"
      component={ChatScreen}
      options={{
        tabBarLabel: 'Chat',
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        tabBarLabel: 'Profile',
      }}
    />
  </Tab.Navigator>
);

// Root Stack
const RootStack = ({ isAuthenticated, isLoading }) => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#1a1a1a' },
    }}
  >
    {isLoading ? (
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{ animationEnabled: false }}
      />
    ) : isAuthenticated ? (
      <>
        <Stack.Screen
          name="MainApp"
          component={MainStack}
          options={{ animationEnabled: false }}
        />
        <Stack.Screen
          name="ProfileSetup"
          component={ProfileSetupScreen}
          options={{
            cardStyle: { backgroundColor: '#1a1a1a' },
            gestureEnabled: false,
          }}
        />
        <Stack.Screen
          name="VoiceIntro"
          component={VoiceIntroScreen}
        />
        <Stack.Screen
          name="MusicMood"
          component={MusicMoodScreen}
        />
      </>
    ) : (
      <Stack.Screen
        name="Auth"
        component={AuthStack}
        options={{ animationEnabled: false }}
      />
    )}
  </Stack.Navigator>
);

export default function App() {
  const { isAuthenticated, isLoading, initializeAuth } = useAuthStore();

  useEffect(() => {
    initializeAuth();
    requestLocationPermission();
  }, []);

  return (
    <NavigationContainer>
      <RootStack isAuthenticated={isAuthenticated} isLoading={isLoading} />
    </NavigationContainer>
  );
}
