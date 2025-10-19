import PostFeed from "@/components/feed";
import React, { useRef, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from "react-native";
import PagerView from "react-native-pager-view";

const feeds = [
  { key: "you", title: "You", posts: [/* your posts here */] },
  { key: "friends", title: "Friends", posts: [/* friends posts */] },
  { key: "everyone", title: "Everyone", posts: [/* global posts */] },
];

export default function ExploreTabs() {
  const pagerRef = useRef<PagerView>(null);
  const [pageIndex, setPageIndex] = useState(0);
  const { width } = useWindowDimensions();

  return (
    <View style={{ flex: 1 }}>
      {/* Tab Buttons */}
      <View style={styles.tabRow}>
        {feeds.map((feed, i) => (
          <TouchableOpacity
            key={feed.key}
            style={[
              styles.tabButton,
              pageIndex === i && styles.activeTabButton
            ]}
            onPress={() => pagerRef.current?.setPage(i)}
          >
            <Text style={{ fontWeight: pageIndex === i ? "bold" : "normal" }}>
              {feed.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Pager */}
      <PagerView
        style={{ flex: 1 }}
        initialPage={0}
        onPageSelected={e => setPageIndex(e.nativeEvent.position)}
        ref={pagerRef}
      >
        {feeds.map(feed => (
          <View key={feed.key} style={{ flex: 1 }}>
            <PostFeed posts={feed.posts} />
          </View>
        ))}
      </PagerView>
    </View>
  );
}

const styles = StyleSheet.create({
  tabRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 8,
    backgroundColor: "#f0f0f0",
  },
  tabButton: {
    padding: 8,
  },
  activeTabButton: {
    borderBottomWidth: 2,
    borderBottomColor: "blue",
  },
});
