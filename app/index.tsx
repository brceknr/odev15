import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useRouter } from 'expo-router';

import { signInWithEmailAndPassword } from 'firebase/auth';
import { Button } from '~/components/Button';
import { useAuth } from './src/context/AuthContext';
import { auth } from './src/services/FirebaseConfig';

const Index = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { login } = useAuth();

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        login(user);
        router.push(' ');
      })
      .catch((e) => alert(e.message));
  };

  const handleGoogleSignIn = async () => {};

  return (
    <SafeAreaView className="gap-4">
      <Text className="text-4xl font-bold">Sign In</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        className=" rounded border border-gray-300 p-2"
      />
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry
        className="rounded border border-gray-300 p-2"
      />
      <Text className="text-end text-sm font-bold text-green-800" onPress={handleLogin}>
        Forgot password?{' '}
      </Text>
      <Button title="Sign In" onPress={handleLogin} className="rounded-lg bg-green-900" />

      <View className="my-2 flex-row items-center">
        <View className="h-px flex-1 bg-gray-300" />
        <Text className="mx-2 text-sm text-gray-400">or</Text>
        <View className="h-px flex-1 bg-gray-300" />
      </View>
      <Image
        source={require('../assets/google.png')}
        style={{ width: 25, height: 25, position: 'absolute', left: 20, top: 330 }}
      />
      <TouchableOpacity className="flex-row items-center justify-center gap-2 rounded-lg border border-gray-300 p-2 text-sm font-bold text-black">
        Sign in with Google
        <Text onPress={handleGoogleSignIn}></Text>
      </TouchableOpacity>
      <Image
        source={require('../assets/apple.png')}
        style={{ width: 30, height: 30, position: 'absolute', left: 20, top: 380 }}
      />
      <TouchableOpacity className="flex-row items-center justify-center gap-2 rounded-lg border border-gray-300 p-2 text-sm font-bold text-black">
        <Text onPress={handleGoogleSignIn}>Sign in with Apple</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Index;
