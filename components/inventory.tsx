import { FlatList, Image, ListRenderItem, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';

type Item = {
  id: string;
  color: string;
  occasion: string;
  location: string;
  note: string;
  image: string;
};

type Props = {
  items: Item[];
};

export default function Inventory({ items }: Props) {
  const filters = ["Color", "Occasion", "Location"];
  const { width } = useWindowDimensions();
  const numColumns = Math.max(1, Math.floor(width / (96 + 8)));

  const renderItem: ListRenderItem<Item> = ({ item }) => (
    <TouchableOpacity 
    className="border border-primary rounded-xl p-2 w-24 h-32 m-1"
    >
      <Image
        source={{ uri: item.image }}
        className="w-full h-full rounded-lg"
      />
    </TouchableOpacity>
  );

  return (
    <View className='items-center flex-auto'>
      <View className='flex-row grow-0'>
        {filters.map((label) => (
          <TouchableOpacity key={label} className='border border-primary rounded-2xl p-2 w-24 h-8 m-1 items-center'>
            <Text>{label}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <FlatList
      key={numColumns}
      className='flex-row flex-wrap p-2 grow'
      numColumns={numColumns}
      data={items}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      />
    </View>
  );
}
