import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import "./globals.css";
// nativewind-interop.ts
import { cssInterop } from 'nativewind';
import { TextInput } from 'react-native';

// Configure cssInterop for TextInput
cssInterop(TextInput, {
  className: {
    target: 'style',
    nativeStyleToProp: {
      textAlign: true,
    },
  },
  placeholderClassName: {
    target: false,
    nativeStyleToProp: {
      color: 'placeholderTextColor',
    },
  },
  selectionClassName: {
    target: false,
    nativeStyleToProp: {
      color: 'selectionColor',
    },
  },
});

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    "GFS Didot": require("../assets/fonts/GFS_Didot/GFSDidot-Regular.ttf"),
    "GFS Neohellenic": require("../assets/fonts/GFS_Neohellenic/GFSNeohellenic-Regular.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return <Stack
      screenOptions={{
        headerShown: false,
      }}
    />
}
