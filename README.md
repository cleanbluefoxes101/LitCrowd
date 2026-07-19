# LitCrowd 🎵

A South African social discovery app that helps you find your people based on shared vibes, not just looks.

## 🎯 Vision

LitCrowd is a safe space to meet new people in South Africa who share your interests and personality. Instead of traditional dating app mechanics, we focus on matching people with similar lifestyles and interests.

## ✨ Key Features

### 🎯 Vibe Matching
- Users answer simple questions about their weekend activities
- Algorithm groups people with similar personalities
- Activities include: Kota Mission, Soccer, Church, Mall, Netflix, Gaming, Studying

### 🎤 Voice Introductions
- 15-second voice notes instead of traditional bios
- South Africans judge personality through voice quickly
- More authentic than written profiles

### 🎵 Music Mood
- Connect Spotify to show what you're listening to
- Or manually set your music preference
- Find people who vibe with your taste in music

### 👥 Matches & Chat
- See who liked you and mutual matches
- Real-time messaging with matches
- Location-based discovery

## 🛠 Tech Stack

- **Frontend**: React Native with Expo
- **State Management**: Zustand
- **Navigation**: React Navigation
- **Location**: Expo Location API
- **Audio**: Expo AV for voice recordings
- **Storage**: AsyncStorage for local data

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn
- Expo CLI

### Installation

```bash
# Clone the repository
git clone https://github.com/cleanbluefoxes101/LitCrowd.git
cd LitCrowd

# Install dependencies
npm install

# Start the development server
npm start

# For iOS
npm run ios

# For Android
npm run android
```

## 📁 Project Structure

```
src/
├── screens/           # All app screens
│   ├── auth/         # Login & Signup screens
│   ├── VibeMatchScreen.tsx
│   ├── ProfileSetupScreen.tsx
│   ├── VoiceIntroScreen.tsx
│   ├── MusicMoodScreen.tsx
│   ├── MatchesScreen.tsx
│   ├── ChatScreen.tsx
│   └── ProfileScreen.tsx
├── store/            # Zustand stores
│   ├── authStore.ts
│   └── vibeStore.ts
├── services/         # API & utility services
│   └── locationService.ts
└── App.tsx          # Root component with navigation

```

## 🎨 Design

- **Dark Theme**: Elegant dark interface with cyan accents (#00d9ff)
- **South African Focus**: Language and culture-specific features
- **Mobile-First**: Designed for iOS and Android

## 🔄 Workflow

1. **Authentication**: Users sign up with email/password
2. **Profile Setup**: Select weekend activities (Vibes)
3. **Voice Intro**: Record a 15-second voice introduction
4. **Music Mood**: Set music preferences
5. **Vibe Matching**: Swipe through profiles and match with similar people
6. **Messaging**: Chat with matches in real-time

## 📱 Platforms

- ✅ iOS
- ✅ Android

## 🌍 South African Features

- Location-based discovery (km display)
- SA-specific activity options
- Local payment methods (coming soon)
- Afrikaans & English support (coming soon)

## 📋 Roadmap

- [ ] Spotify integration
- [ ] User verification system
- [ ] Group hangout feature
- [ ] Events discovery
- [ ] Payment processing
- [ ] Push notifications
- [ ] Offline mode
- [ ] AI-powered recommendations

## 🔒 Privacy & Safety

- User data is encrypted
- Voice recordings stored securely
- No unsolicited messaging
- Report & block features (coming soon)

## 📝 License

MIT License - see LICENSE file for details

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 💬 Support

For support, contact us at support@litcrowd.app

---

**Finding your vibe, one connection at a time.** 🎵
