import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'other';
  timestamp: string;
}

const MOCK_MESSAGES: Message[] = [
  {
    id: '1',
    text: 'Hey! How are you doing?',
    sender: 'other',
    timestamp: '2:30 PM',
  },
  {
    id: '2',
    text: 'Doing great! How about you?',
    sender: 'user',
    timestamp: '2:31 PM',
  },
  {
    id: '3',
    text: 'Same! I saw you like Afrobeats too 🎵',
    sender: 'other',
    timestamp: '2:32 PM',
  },
  {
    id: '4',
    text: 'Yes! Have you been to any concerts?',
    sender: 'user',
    timestamp: '2:33 PM',
  },
  {
    id: '5',
    text: 'A few, would love to go to more',
    sender: 'other',
    timestamp: '2:34 PM',
  },
];

export default function ChatScreen({ route }: any) {
  const [messages, setMessages] = useState(MOCK_MESSAGES);
  const [input, setInput] = useState('');
  const matchName = route?.params?.name || 'Chat';

  const handleSendMessage = () => {
    if (input.trim()) {
      const newMessage: Message = {
        id: String(messages.length + 1),
        text: input,
        sender: 'user',
        timestamp: new Date().toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        }),
      };
      setMessages([...messages, newMessage]);
      setInput('');
    }
  };

  const renderMessage = ({ item }: { item: Message }) => (
    <View
      style={[
        styles.messageContainer,
        item.sender === 'user'
          ? styles.userMessageContainer
          : styles.otherMessageContainer,
      ]}
    >
      <View
        style={[
          styles.messageBubble,
          item.sender === 'user'
            ? styles.userMessageBubble
            : styles.otherMessageBubble,
        ]}
      >
        <Text
          style={[
            styles.messageText,
            item.sender === 'user'
              ? styles.userMessageText
              : styles.otherMessageText,
          ]}
        >
          {item.text}
        </Text>
        <Text style={styles.timestamp}>{item.timestamp}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{matchName}</Text>
      </View>

      <FlatList
        data={messages}
        renderItem={renderMessage}
        keyExtractor={(item) => item.id}
        scrollEnabled={true}
        contentContainerStyle={styles.messagesList}
      />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type a message..."
          placeholderTextColor="#808080"
          value={input}
          onChangeText={setInput}
          multiline
          maxHeight={100}
        />
        <TouchableOpacity
          style={[
            styles.sendButton,
            !input.trim() && styles.sendButtonDisabled,
          ]}
          onPress={handleSendMessage}
          disabled={!input.trim()}
        >
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
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
    borderBottomWidth: 1,
    borderBottomColor: '#262626',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  messagesList: {
    padding: 16,
  },
  messageContainer: {
    marginVertical: 8,
    flexDirection: 'row',
  },
  userMessageContainer: {
    justifyContent: 'flex-end',
  },
  otherMessageContainer: {
    justifyContent: 'flex-start',
  },
  messageBubble: {
    maxWidth: '80%',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 16,
  },
  userMessageBubble: {
    backgroundColor: '#00d9ff',
  },
  otherMessageBubble: {
    backgroundColor: '#262626',
  },
  messageText: {
    fontSize: 14,
    marginBottom: 4,
  },
  userMessageText: {
    color: '#1a1a1a',
  },
  otherMessageText: {
    color: '#ffffff',
  },
  timestamp: {
    fontSize: 11,
    marginTop: 4,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#262626',
    gap: 8,
  },
  input: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 10,
    color: '#ffffff',
    maxHeight: 100,
    fontSize: 14,
  },
  sendButton: {
    backgroundColor: '#00d9ff',
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderRadius: 20,
    justifyContent: 'center',
  },
  sendButtonDisabled: {
    opacity: 0.5,
  },
  sendButtonText: {
    color: '#1a1a1a',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
