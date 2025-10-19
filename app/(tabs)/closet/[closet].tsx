import { BackButton } from '@/components/buttons';
import Inventory from '@/components/inventory';
import { useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const pages = ['tops', 'bottoms', 'shoes', 'accessories'] as const;

// Replace with database data
const topData = [
  {
    id: '1',
    color: 'blue',
    occasion: 'casual',
    location: 'closet',
    note: 'comfy',
    image: 'https://placehold.co/50x50',
  },
  {
    id: '2',
    color: 'red',
    occasion: 'formal',
    location: 'rack',
    note: 'dry clean only',
    image: 'https://placehold.co/50x50',
  },
  {
    id: '3',
    color: 'green',
    occasion: 'workout',
    location: 'drawer',
    note: 'stretchy',
    image: 'https://placehold.co/50x50',
  },
];
// Replace with database data
const bottomData = [
  {
    id: '4',
    color: 'blue',
    occasion: 'casual',
    location: 'closet',
    note: 'comfy',
    image: 'https://placehold.co/50x50',
  },
  {
    id: '5',
    color: 'red',
    occasion: 'formal',
    location: 'rack',
    note: 'dry clean only',
    image: 'https://placehold.co/50x50',
  },
  {
    id: '6',
    color: 'green',
    occasion: 'workout',
    location: 'drawer',
    note: 'stretchy',
    image: 'https://placehold.co/50x50',
  },
];
// Replace with database data
const shoeData = [
  {
    id: '7',
    color: 'green',
    occasion: 'workout',
    location: 'drawer',
    note: 'stretchy',
    image: 'https://placehold.co/50x50',
  },
];
// Replace with database data
const accessoryData = [
  {
    id: '8',
    color: 'green',
    occasion: 'workout',
    location: 'drawer',
    note: 'stretchy',
    image: 'https://placehold.co/50x50',
  },
];

const pageConfigs = {
  'tops': {
    header: "Tops",
    items: topData,
  }, 
  'bottoms': {
    header: "Bottoms",
    items: bottomData,
  }, 
  'shoes': {
    header: "Shoes",
    items: shoeData,
  }, 
  'accessories': {
    header: "Accessories",
    items: accessoryData,
  }, 
} as const;

export default function ClosetPages() {
  const { closet } = useLocalSearchParams();
  const pageIndex = pages.findIndex((p) => p === closet);
  const config = pageConfigs[closet as keyof typeof pageConfigs];

  console.log('page:', closet, 'page index:', pageIndex);

  if (pageIndex === -1) {
    return <Text className="p-4 text-red-500">Invalid Page</Text>;
  }

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 items-center justify-start p-4">
        {/* Header */}
        <Text className="font-pro text-4xl font-bold p-2 self-start">
          {config.header}
        </Text>
        {/* List of Clothes */}
        <Inventory 
        items={config.items}
        />
        {/* Footer */}
        <View className='justify-self-end'>
          {/* Back Button */}
          <BackButton />
        </View>
      </View>
    </SafeAreaView>
  );
}
