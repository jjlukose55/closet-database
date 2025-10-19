import { FlatList, ListRenderItem, Text, TouchableOpacity } from 'react-native';

type ListElement = {
  id: string
  label: string;
  onPress: () => void;
};

type ListProps = {
  listElements: ListElement[];
};

export function SegmentedList({ listElements }: ListProps) {
    const renderItem: ListRenderItem<ListElement> = ({ item, index }) => (
        <TouchableOpacity className={`border-b border-primary p-2 w-80 ${index === 0 ? 'border-t' : ''}`} onPress={item.onPress}>
            <Text className="font-per text-black text-center text-2xl">{item.label}</Text>
        </TouchableOpacity>
    )

  return (
    <FlatList
      className='flex-row flex-wrap p-2'
      data={listElements}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
    />
  );
}