import { useNavigation } from "@react-navigation/native";
import React from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { HeaderScreen } from "../../../components/HeaderScreen/HeaderScreen";
import { CheckItem } from "../components/CheckList/CheckItem";

export const CheckScreen = () => {
    const renderItem = ({ item }) => (
        <CheckItem item={item}/>
      );
    const data = useSelector(state => state.check.allCheck)
    const navigation = useNavigation()
    return(
        <SafeAreaView style={styles.container}>
            <HeaderScreen navigation={navigation} />
            <View style={styles.contentContainer}>
                <FlatList 
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                />
            </View>
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainer: {
        margin: 20,
        backgroundColor: 'white',
        flex: 1,
        padding: 20,
        borderRadius: 13,
    },
  });

