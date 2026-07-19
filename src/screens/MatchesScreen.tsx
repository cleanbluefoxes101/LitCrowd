import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

interface Match {
  id: string;
  name: string;
  age: number;
  lastMessage?: string;
  timestamp?: string;
  profileImage: string;
  unread: number;
}

const MOCK_MATCHES: Match[] = [
  {
    id: '1',
    name: 'Amara',
    age: 26,
    lastMessage: 'Haha, I love that! 😂',
    timestamp: '2 min ago',
    profileImage: 'https://via.placeholder.com/60?text=Amara',
    unread: 2,
  },
  {
    id: '2',
    name: 'Thabo',
    age: 28,
    lastMessage: 'Let me know when you are free',
    timestamp: '1 hour ago',
    profileImage: 'https://via.placeholder.com/60?text=Thabo',
    unread: 0,
  },
  {
    id: '3',
    name: 'Zara',
    age: 24,
    lastMessage: 'Soccer this weekend?',
    timestamp: '3 hours ago',
    profileImage: 'https://via.placeholder.com/60?text=Zara',
    unread: 1,
  },
  {
    id: '4',
    name: 'Sipho',
    age: 27,
    lastMessage: 'You: That sounds cool!',
    timestamp: 'Yesterday',
    profileImage: 'https://via.placeholder.com/60?text=Sipho',
    unread: 0,
  },
];

export default function MatchesScreen({ navigation }: any) {
  const renderMatchItem = ({ item }: { item: Match }) => (
    <TouchableOpacity style={styles.matchCard} onPress={() => {
      // Navigate to chat
      navigation.navigate('ChatScreen', { matchId: item.id, name: item.name });
    }}>
      <Image source={{ uri: item.profileImage }} style={styles.avatar} />
      <View style={styles.matchInfo}>
        <Text style={styles.matchName}>
          {item.name}, {item.age}
        </Text>
        <Text
          style={[
            styles.lastMessage,
            item.unread > 0 && styles.lastMessageUnread,
          ]}
          numberOfLines={1}
        >
          {item.lastMessage}
        </Text>
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.timestamp}>{item.timestamp}</Text>
        {item.unread > 0 && (
          <View style={styles.unreadBadge}>
            <Text style={styles.unreadCount}>{item.unread}</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Matches</Text>
        <Text style={styles.headerSubtitle}>
          {MOCK_MATCHES.length} new vibes
        </Text>
      </View>

      {MOCK_MATCHES.length > 0 ? (
        <FlatList
          data={MOCK_MATCHES}
          renderItem={renderMatchItem}
          keyExtractor={(item) => item.id}
          scrollEnabled={false}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
      ) : (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyTitle}>No Matches Yet</Text>
          <Text style={styles.emptySubtitle}>
            Keep vibing to find your people!
          </Text>
        </View>
      )}
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
  headerSubtitle: {
    fontSize: 13,
    color: '#808080',
    marginTop: 4,
  },
  matchCard: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 16,
    backgroundColor: '#262626',
  },
  matchInfo: {
    flex: 1,
  },
  matchName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 4,
  },
  lastMessage: {
    fontSize: 13,
    color: '#808080',
  },
  lastMessageUnread: {
    color: '#b0b0b0',
    fontWeight: '500',
  },
  rightContainer: {
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  timestamp: {
    fontSize: 12,
    color: '#808080',
    marginBottom: 8,
  },
  unreadBadge: {
    backgroundColor: '#00d9ff',
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  unreadCount: {
    color: '#1a1a1a',
    fontWeight: 'bold',
    fontSize: 12,
  },
  separator: {
    height: 1,
    backgroundColor: '#262626',
    marginLeft: 100,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  emptyTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 12,
  },
  emptySubtitle: {
    fontSize: 16,
    color: '#b0b0b0',
    textAlign: 'center',
  },
});
