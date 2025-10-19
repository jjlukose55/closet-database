import { router } from 'expo-router';
import { Text, TouchableOpacity } from 'react-native';

type NavButtonProps = {
  label: string;
  onPress: () => void;
};

export function NavButton({ label, onPress }: NavButtonProps) {
  return (
    <TouchableOpacity className="border border-primary rounded-xl w-24 h-12" onPress={onPress}>
        <Text className="text-black text-center text-lg">{label}</Text>
    </TouchableOpacity>
  );
}

export function MainButton({ label, onPress }: NavButtonProps) {
  return (
    <TouchableOpacity className="border border-primary rounded-xl w-32 h-16" onPress={onPress}>
        <Text className="text-black text-center text-lg">{label}</Text>
    </TouchableOpacity>
  );
}

export function BackButton() {
  return (
    <TouchableOpacity className="border border-primary rounded-xl w-32 h-16" onPress={() => {
      router.back();
    }}>
        <Text className="text-black text-center text-lg">Back</Text>
    </TouchableOpacity>
  );
}