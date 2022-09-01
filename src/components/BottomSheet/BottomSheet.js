import React, {useCallback, useRef, useMemo} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {BottomBar} from '../BottomBar/BottomBar';
import {StationNavigator} from '../../infrastructure/navigation/StationsNavigator';
import {useDispatch} from 'react-redux';
import {setNavigation, toPoint} from '../../store/actions/map';

export function BottomSheetList({
  onPressElement,
  bottomSheetModalRef,
  handlePresentModalPress,
  navigation,
}) {
  const dispatch = useDispatch();
  dispatch(toPoint(onPressElement));
  dispatch(setNavigation(navigation));

  const snapPoints = useMemo(() => ['12%', '50%', '100%'], []);


  return (
    <View style={styles.contentContainer}>
      <View style={styles.container}>
        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={1}
          snapPoints={snapPoints}
          // detached={true}
          keyboardBehavior={'interactive'}
          keyboardBlurBehavior={'restore'}
          >
          <View style={styles.contentContainer}>
            <StationNavigator />
          </View>
        </BottomSheetModal>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    zIndex: 10,
  },
});
