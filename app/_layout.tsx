import '../global.css';

import { Stack } from 'expo-router';
import { AuthProvider } from './src/context/AuthContext';

export default function Layout() {
  return (
    <AuthProvider>
      <Stack />
    </AuthProvider>
  );
}
