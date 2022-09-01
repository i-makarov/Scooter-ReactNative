import React, {useState, useMemo} from 'react';
import {
  Animated,
  StatusBar,
  View,
  Platform,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native';
import {ListItem} from '../../../components/BottomSheet/ListItem';
import SearchComponent from '../components/SearchComponent/SearchComponent'
import {MARKERS_DATA} from '../../../data';
import 'react-native-gesture-handler';

import {BottomSheetFlatList, BottomSheetView} from '@gorhom/bottom-sheet';
export const StationScreen = () => {
  const onPressElement = {};

  const mockList = MARKERS_DATA;
  const deviceWidth = Dimensions.get('window').width;
  const deviceHeight = Dimensions.get('window').height;
  // const [scrollYValue, setScrollYValue] = useState(new Animated.Value(0));
  const [searchedTerm, setSearchedTerm] = useState('');
  // const clampedScroll = Animated.diffClamp(
  //   Animated.add(
  //     scrollYValue.interpolate({
  //       inputRange: [0, 1],
  //       outputRange: [0, 1],
  //       extrapolateLeft: 'clamp',
  //     }),
  //     new Animated.Value(0),
  //   ),
  //   0,
  //   50,
  // );
  const stationList = useMemo(() => {
    if (searchedTerm.length === 0) {
      return mockList;
    }
    const list = mockList.filter(station => {
      if (
        station.name.includes(searchedTerm) ||
        station.direction.includes(searchedTerm)
      ) {
        return station;
      }
    });
    return list;
  }, [searchedTerm]);

  return (
    <View style={styles.contentContainer}>
      <View style={styles.search}>
        {Platform.OS === 'ios' && (
          <SearchComponent
            searchedTerm={searchedTerm}
            setSearchedTerm={setSearchedTerm}
            // clampedScroll={clampedScroll}
          />
        )}
        {Platform.OS === 'android' && (
          <SearchComponent
            searchedTerm={searchedTerm}
            setSearchedTerm={setSearchedTerm}
            // clampedScroll={clampedScroll}
          />
        )}
      </View>
      {stationList.length === 0 && (
        <Text
          style={{
            textAlign: 'center',
            width: deviceWidth,
            fontSize: 18,
            paddingTop: 20,
          }}>
          No results for {searchedTerm}
        </Text>
      )}
      <BottomSheetFlatList
        data={stationList}
        keyExtractor={i => i.id}
        renderItem={({item}) => (
          <ListItem item={item} onPressElement={onPressElement} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  search: {
    marginTop: 30,
    paddingBottom: 35,
  },
});
