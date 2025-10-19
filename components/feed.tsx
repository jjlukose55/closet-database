import { FlatList, View, Text, Image, ListRenderItem, useWindowDimensions, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

type Post = {
  id: string;
  user: string;
  image: string;
  caption: string;
  time: { year: string; month: string; day: string; hour: string; min: string };
};

type Props = {
  posts: Post[];
};

export default function PostFeed({ posts }: Props) {
  const { width } = useWindowDimensions();
  const numColumns = Math.max(1, Math.floor(width / (288 + 8)));

  const renderItem: ListRenderItem<Post> = ({ item }) => (
    <TouchableOpacity 
    className="border border-primary rounded-xl p-2 w-72 h-96 m-1"
    >
      <Text className="font-bold">{item.user}</Text>
      <Text className="mt-2 h-4 text-gray-700">{item.caption}</Text>
      <Image
        source={{ uri: item.image }}
        className="w-full h-64 rounded-lg mt-2"
      />
      <Text className="mt-2 h-4 text-gray-700">{item.time.hour + ":" + item.time.min}</Text>
    </TouchableOpacity>
  );

  return (
    <View className="relative flex-1">
      <FlatList
        data={posts}
        numColumns={numColumns}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingTop: 32 }}
        className="flex-1"
      />

      {/* Top fade overlay */}
      <LinearGradient
        colors={['rgba(255,255,255,1)', 'transparent']}
        className="absolute top-0 left-0 right-0 h-16 z-10"
      />

      {/* Optional: Bottom fade overlay */}
      <LinearGradient
        colors={['transparent', 'rgba(255,255,255,1)']}
        className="absolute bottom-0 left-0 right-0 h-16 z-10"
      />
    </View>
  );
}
