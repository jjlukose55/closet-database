import {
  FlatList,
  ListRenderItem,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

type Post = {
  id: string;
  user: string;
  image: string;
  caption: string;
  time: { year: string; month: string; day: string; hour: string; min: string };
};

type CalendarDay = {
  id: string;
  dayNumber: number | null;
  items: Post[];
};

type CalendarProps = {
  month: number; // 0 = January, 11 = December
  year: number;
  posts?: Post[]; // optional
};

export default function Calendar({ month, year, posts = [] }: CalendarProps) {
  const weekdayLabels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  // Helper: generate 7×5 calendar grid
  function generateCalendarDays(year: number, month: number): CalendarDay[] {
    const firstDayIndex = new Date(year, month, 1).getDay(); // 0-6 (Sun-Sat)
    const daysInMonth = new Date(year, month + 1, 0).getDate(); // actual days in month

    const grid: CalendarDay[] = [];

    // Add empty cells before the first of the month
    for (let i = 0; i < firstDayIndex; i++) {
      grid.push({ id: `empty-${i}`, dayNumber: null, items: [] });
    }

    // Fill in actual days
    for (let day = 1; day <= daysInMonth; day++) {
      const matchingPosts = posts.filter((p) => {
        return (
          parseInt(p.time.year) === year &&
          parseInt(p.time.month) === month + 1 && // JS Date months are 0-indexed
          parseInt(p.time.day) === day
        );
      });

      grid.push({
        id: `day-${day}`,
        dayNumber: day,
        items: matchingPosts,
      });
    }

    // Pad the rest of the grid to 7x6 = 42
    while (grid.length < 42) {
      grid.push({ id: `empty-${grid.length}`, dayNumber: null, items: [] });
    }

    return grid;
  }

  const days = generateCalendarDays(year, month);

  const renderItem: ListRenderItem<CalendarDay> = ({ item }) => (
    <TouchableOpacity className="border border-primary rounded-xl p-2 w-8 h-12 m-1 items-center justify-center">
      {item.dayNumber !== null && (
        <Text className="flex-1 text-sm text-center">{item.dayNumber}</Text>
      )}
    </TouchableOpacity>
  );

  return (
    <View className='items-center h-[23rem]'>
        {/* Weekday header */}
        <View className="flex-row flex-wrap">
            {weekdayLabels.map((label) => (
            <View key={label} className="w-8 h-6 m-1 bg-primary rounded-xl items-center justify-center">
                <Text className="text-xs font-per text-center">{label}</Text>
            </View>
            ))}
        </View>
        {/* Day grid */}
        <FlatList
            className=""
            numColumns={7}
            data={days}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            scrollEnabled={false}
        />
    </View>
  );
}
