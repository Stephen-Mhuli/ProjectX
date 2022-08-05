import { useState, useRef } from "react";
import { StyleSheet, StatusBar, View, FlatList, Animated } from "react-native";

import slides from "../../../Common/slides";
import OnBoardItem from "./OnBoardingItem";
import Paginator from "./Paginator";
import NextButton from "./NextButton";

const OnBoardingScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollX = useRef(new Animated.Value(0)).current;

  const slidesRef = useRef(null);

  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercntThreshold: 50 }).current;

  return (
    <View style={styles.container}>
      <View style={{ flex: 3 }}>
        <FlatList
          horizontal={true}
          data={slides}
          renderItem={({ item }) => <OnBoardItem item={item} />}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          keyExtractor={(item) => item.id}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
          )}
          scrollEventThrottle={32}
          onViewableItemsChanged={viewableItemsChanged.current}
          viewabilityConfig={viewConfig.current}
          ref={slidesRef}
        />
      </View>
      <Paginator data={slides} scrollX={scrollX} />
      <NextButton percentage={(currentIndex + 1) * (100 / slides.length)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c0c0c0",
    paddingTop: StatusBar.currentHeight,
    // marginTop: 10
  },
});

export default OnBoardingScreen;
