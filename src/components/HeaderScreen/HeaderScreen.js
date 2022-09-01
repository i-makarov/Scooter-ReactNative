import React from "react";
import { StyleSheet, View } from "react-native";
import { ArrowBack } from "..";

export const HeaderScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.arrowContainer}>
                <ArrowBack navigation = {navigation}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    },
    arrowContainer: {
        marginLeft: 10,
        marginTop: 10,
    },
  });