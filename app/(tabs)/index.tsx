import { MainButton, NavButton } from "@/components/buttons";
import PaginationDots from "@/components/pagination-dots";
import { router } from "expo-router";
import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Index() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 items-center justify-start p-4">
        {/* Header */}
        <Text className="font-pro text-4xl font-bold mb-4 self-start">What are you wearing today?</Text>
        {/* Fit Grid */}
        <View className="flex flex-1 flex-row flex-wrap justify-end w-72 gap-1">
          {/* Reset */}
          <TouchableOpacity className="border border-primary rounded-xl p-2" onPress={() => console.log("reset")}>
            <Text className="font-per text-black text-center text-lg">Wear your last fit</Text>
          </TouchableOpacity>
          {/* Top */}
          <TouchableOpacity className="border border-primary rounded-xl p-2 w-full h-24" onPress={() => router.push("/(tabs)/closet/tops")}>
            <Text className="text-black text-center text-lg">Top</Text>
          </TouchableOpacity>
          {/* Bottom */}
          <TouchableOpacity className="border border-primary rounded-xl p-2 w-full h-24" onPress={() => router.push("/(tabs)/closet/bottoms")}>
            <Text className="text-black text-center text-lg">Bottom</Text>
          </TouchableOpacity>
          {/* Row 3 */}
          <View className="flex flex-row w-full gap-1">
            {/* Shoes */}
            <TouchableOpacity className="flex-1 border border-primary rounded-xl p-2 h-24" onPress={() => router.push("/(tabs)/closet/shoes")}>
                <Text className="text-black text-center text-lg">Shoes</Text>
            </TouchableOpacity>
            {/* 3 Accessories */}
            <View className="flex-1 flex-col border border-primary rounded-xl h-24" >
              <ScrollView
                className=""
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
              >
                {[1, 2, 3].map((n) => (
                  <TouchableOpacity
                    key={n}
                    className=""
                    onPress={() => router.push("/(tabs)/closet/accessories")}>
                    <View className="w-[8.75rem]">
                      <Text className="text-black text-center text-lg">Accessory {n}</Text>
                    </View>
                  </TouchableOpacity>
                ))}
              </ScrollView>
              {/* Pagination Dots */}
              <PaginationDots 
              total={3}
              activeIndex={0}
              activeDotClasses="bg-black/50"
              dotClassNames="bg-primary"
              />
            </View>
          </View>
          {/* Image and Caption */}
          <View className="flex flex-row w-full gap-1">
            {/* Image */}
            <TouchableOpacity className="border border-primary rounded-xl p-2 w-16 h-16" onPress={() => console.log("Insert Image Here")}>
                <Text className="text-black text-center text-xs">Image</Text>
            </TouchableOpacity>
            {/* Caption */}
            <View className="border border-primary rounded-xl p-2 flex-1 h-16">
              <TextInput 
              className="text-per justify-center items-center"
              placeholder="Speak your mind here..."
              />
            </View>
          </View>
        </View>
        {/* Footer */}
        <View className="flex flex-row w-full justify-center justify-self-end items-end gap-1">
          <NavButton label="Closet" onPress={() => router.push('/closet')} />
          <MainButton label="Go Out" onPress={() => router.push('/explore')}/>
          <NavButton label="Calendar" onPress={() => router.push('/calendar')} />
        </View>
      </View>
    </SafeAreaView>
  );
}

