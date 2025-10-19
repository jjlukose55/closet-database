// components/PaginationDots.tsx
import { TouchableOpacity, View } from 'react-native';

type Props = {
  total: number;
  activeIndex: number;
  onDotPress?: (index: number) => void;
  dotClassNames?: string;
  activeDotClasses?: string;
};

export default function PaginationDots({
  total,
  activeIndex,
  onDotPress,
  dotClassNames = 'bg-gray-300 size-4 mx-1 rounded-full',
  activeDotClasses = 'bg-primary w-6 h-1 rounded-full',
}: Props) {
  return (
    <View className="flex-row justify-center items-center p-2">
      {Array.from({ length: total }).map((_, index) => (
        <TouchableOpacity
          key={index}
          className={index === activeIndex ? 
            activeDotClasses : dotClassNames
          }
          onPress={() => onDotPress?.(index)}
        />
      ))}
    </View>
  );
}
