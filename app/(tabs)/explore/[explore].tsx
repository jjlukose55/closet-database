import { MainButton, NavButton } from '@/components/buttons';
import PostFeed from '@/components/feed';
import PaginationDots from '@/components/pagination-dots';
import { LinkProps, router, useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { setLastExplorePath } from '../explore';

const pages = ['you', 'friends', 'everyone'] as const;

// Replace with database data
const youPosts = [
  {
    id: '1',
    user: '@justinluk927',
    image: 'https://placehold.co/600x400',
    caption: 'Fit check!',
    time: { year:"2025", month:"05", day:"19" , hour:"12", min:"30" },
  },
  {
    id: '2',
    user: '@justinluk927',
    image: 'https://placehold.co/600x400',
    caption: 'sum light',
    time: { year:"2025", month:"05", day:"19" , hour:"12", min:"30" },
  },
  {
    id: '3',
    user: '@justinluk927',
    image: 'https://placehold.co/600x400',
    caption: 'he got that shit on doe',
    time: { year:"2025", month:"05", day:"19" , hour:"12", min:"30" },
  },
];
// Replace with database data
const friendPosts = [
  {
    id: '1',
    user: '@deliasw0rld',
    image: 'https://placehold.co/600x400',
    caption: 'What’s up stinkies <3!',
    time: { year:"2025", month:"05", day:"19" , hour:"12", min:"30" },
  },
  {
    id: '2',
    user: '@deliasw0rld',
    image: 'https://placehold.co/600x400',
    caption: 'What’s up stinkies <3!',
    time: { year:"2025", month:"05", day:"19" , hour:"12", min:"30" },
  },
  {
    id: '3',
    user: '@deliasw0rld',
    image: 'https://placehold.co/600x400',
    caption: 'What’s up stinkies <3!',
    time: { year:"2025", month:"05", day:"19" , hour:"12", min:"30" },
  },
];
// Replace with database data
const everyonePosts = [
  {
    id: '1',
    user: '@RandomJoe',
    image: 'https://placehold.co/600x400',
    caption: 'yo gert',
    time: { year:"2025", month:"05", day:"19" , hour:"12", min:"30" },
  },
  {
    id: '2',
    user: '@FrankGal',
    image: 'https://placehold.co/600x400',
    caption: 'sybau',
    time: { year:"2025", month:"05", day:"19" , hour:"12", min:"30" },
  },
  {
    id: '3',
    user: '@LightskinMrB',
    image: 'https://placehold.co/600x400',
    caption: '',
    time: { year:"2025", month:"05", day:"19" , hour:"12", min:"30" },
  },
  {
    id: '4',
    user: '@tungtungtungsahur',
    image: 'https://placehold.co/600x400',
    caption: '*bonk*',
    time: { year:"2025", month:"05", day:"19" , hour:"12", min:"30" },
  },
];

const feedConfigs = {
  you: {
    posts: youPosts, // Your posts
    header: "What you've worn today.",
    activeDotClasses: "bg-red-200 w-6 h-1 rounded-full",
  },
  friends: {
    posts: friendPosts, // Your friends' posts
    header: "What your friends are wearing today.",
    activeDotClasses: "bg-blue-200 w-6 h-1 rounded-full",
  },
  everyone: {
    posts: everyonePosts, // Global or public posts
    header: "What the world is wearing today.",
    activeDotClasses: "bg-green-200 w-6 h-1 rounded-full",
  },
} as const;

export default function ExplorePages() {
  const { explore } = useLocalSearchParams();
  const feedIndex = pages.findIndex((p) => p === explore);
  const config = feedConfigs[explore as keyof typeof feedConfigs];

  console.log('feed param:', explore, 'feed index:', feedIndex);

  if (feedIndex === -1 || feedIndex === 3) {
    return <Text className="p-4 text-red-500">Invalid feed</Text>;
  }

  const handlePageDots = (targetIndex: number) => {
    type ValidRoute = LinkProps['href'];
    const route = `/explore/${pages[targetIndex]}` as ValidRoute;
    router.replace(route);
    setLastExplorePath(pages[targetIndex])
  };

  const handleSwipe = (swipeDirection: "left" | "right") => {
    let newIndex = feedIndex;
    if (swipeDirection == "left" && feedIndex != 0){
      newIndex = feedIndex - 1;
    } else if (swipeDirection == "right" && feedIndex != 2){
      newIndex = feedIndex - 1;
    } else { return }
    
    type ValidRoute = LinkProps['href'];
    const route = `/explore/${pages[newIndex]}` as ValidRoute;
    router.replace(route);
    setLastExplorePath(pages[newIndex])
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 items-center justify-between p-4">
        {/* Pagination */}
        <PaginationDots
        total={pages.length}
        activeIndex={feedIndex}
        onDotPress={handlePageDots}
        activeDotClasses={config.activeDotClasses}
        />

        {/* Header */}
        <Text className="font-pro text-4xl font-bold p-2 self-start">
          {config.header}
        </Text>

        {/* Feed */}
        <PostFeed posts={config.posts} />

        {/* Footer */}
        <View className="flex flex-row w-full justify-center justify-self-end items-end gap-1">
          <NavButton label="Closet" onPress={() => router.push('/closet')} />
          <MainButton label="Go Home" onPress={() => router.push('/(tabs)')} />
          <NavButton label="Calendar" onPress={() => router.push('/calendar')} />
        </View>
      </View>
    </SafeAreaView>
  );
}
