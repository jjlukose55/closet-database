import { BackButton } from '@/components/buttons';
import { SegmentedList } from '@/components/lists';
import { router } from "expo-router";
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const closetElements = [
  {
    id: "1",
    label: "Tops",
    onPress: () => router.push('/(tabs)/closet/tops')
  },
  {
    id: "2",
    label: "Bottoms",
    onPress: () => router.push('/(tabs)/closet/bottoms')
  },
  {
    id: "3",
    label: "Shoes",
    onPress: () => router.push('/(tabs)/closet/shoes')
  },
  {
    id: "4",
    label: "Accessories",
    onPress: () => router.push('/(tabs)/closet/accessories')
  }
]

const closet = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className='flex-1 items-center justify-between p-4'>
        <Text className='font-pro text-4xl font-bold mb-4 self-start'>Your Closet</Text>
        <SegmentedList 
        listElements={closetElements}
        />
        {/* Footer */}
        <View className='justify-self-end'>
          {/* Back Button */}
          <BackButton />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default closet
