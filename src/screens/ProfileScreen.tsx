import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { useAuthStore } from '../store/authStore';

export default function ProfileScreen({ navigation }: any) {
  const { user, logout } = useAuthStore();

  const handleLogout = async () => {
    await logout();
    navigation.navigate('Auth');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Profile</Text>
        </View>

        <View style={styles.profileCard}>
          <View style={styles.avatarPlaceholder}>
            <Text style={styles.avatarText}>👤</Text>
          </View>
          <Text style={styles.profileName}>{user?.name}</Text>
          <Text style={styles.profileAge}>{user?.age} years old</Text>
          <Text style={styles.profileLocation}>{user?.location}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Your Vibes</Text>
          <View style={styles.vibesList}>
            <View style={styles.vibeBadge}>
              <Text style={styles.vibeName}>Kota Mission</Text>
            </View>
            <View style={styles.vibeBadge}>
              <Text style={styles.vibeName}>Netflix</Text>
            </View>
            <View style={styles.vibeBadge}>
              <Text style={styles.vibeName}>Soccer</Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Music Mood</Text>
          <View style={styles.musicContainer}>
            <Text style={styles.musicLabel}>🎵 Afrobeats</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Account</Text>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuItemText}>Edit Profile</Text>
            <Text style={styles.menuItemArrow}>›</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuItemText}>Settings</Text>
            <Text style={styles.menuItemArrow}>›</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuItemText}>Privacy</Text>
            <Text style={styles.menuItemArrow}>›</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuItemText}>Help & Support</Text>
            <Text style={styles.menuItemArrow}>›</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
            <Text style={styles.logoutButtonText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
  },
  header: {
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  profileCard: {
    marginHorizontal: 24,
    backgroundColor: '#262626',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    marginBottom: 32,
    borderWidth: 1,
    borderColor: '#404040',
  },
  avatarPlaceholder: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#1a1a1a',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  avatarText: {
    fontSize: 40,
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 4,
  },
  profileAge: {
    fontSize: 14,
    color: '#b0b0b0',
    marginBottom: 4,
  },
  profileLocation: {
    fontSize: 14,
    color: '#00d9ff',
  },
  section: {
    marginHorizontal: 24,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 12,
  },
  vibesList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  vibeBadge: {
    backgroundColor: '#1a1a1a',
    borderRadius: 12,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: '#404040',
  },
  vibeName: {
    color: '#b0b0b0',
    fontSize: 12,
    fontWeight: '500',
  },
  musicContainer: {
    backgroundColor: '#262626',
    borderRadius: 12,
    padding: 12,
    borderLeftWidth: 3,
    borderLeftColor: '#00d9ff',
  },
  musicLabel: {
    color: '#00d9ff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  menuItem: {
    backgroundColor: '#262626',
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 16,
    marginBottom: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#404040',
  },
  menuItemText: {
    color: '#ffffff',
    fontSize: 16,
  },
  menuItemArrow: {
    color: '#808080',
    fontSize: 18,
  },
  footer: {
    paddingHorizontal: 24,
    paddingVertical: 32,
  },
  logoutButton: {
    backgroundColor: '#ff4444',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
  },
  logoutButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
