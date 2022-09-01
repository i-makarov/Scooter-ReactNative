import { BottomSheetTextInput, BottomSheetView } from '@gorhom/bottom-sheet';
import React, {useMemo, useState, useEffect} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Platform,
  Dimensions,
} from 'react-native';

const deviceWidth = Dimensions.get('window').width;

const SearchComponent = props => {
  const [textInputFocussed, setTextInputFocussed] = useState(false);
  const [searchTerm, setSearchTerm] = useState(props.searchedTerm);
  const handleBlur = () => {
    setTextInputFocussed(false);
    props.setSearchedTerm(searchTerm);
  };
  return (
    <View
      style={[
        styles.container,
      ]}>
      <BottomSheetTextInput
        defaultValue={props.searchedTerm}
        placeholder="Search"
        style={styles.formField}
        ref={ref => (serachInputRef = ref)}
        placeholderTextColor={'#888888'}
        onFocus={() => setTextInputFocussed(true)}
        onBlur={handleBlur}
        onChange={event => props.setSearchedTerm(event.nativeEvent.text)}
        returnKeyType="send"
        onSubmitEditing={event => props.setSearchedTerm(event.nativeEvent.text)}
      />
      {
        (textInputFocussed) 
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 0,
    width: deviceWidth,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 99,
    position: Platform.OS === 'ios' ? 'absolute' : 'relative',
  },
  formField: {
    backgroundColor: '#F4F4F4',
    width: deviceWidth - 40,
    padding: 12,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 20,
    fontSize: 18,
    height: 40,
  },
});

export default SearchComponent;
