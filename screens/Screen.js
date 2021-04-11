import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import {SafeAreaView} from 'react-native-safe-area-context';

export default class Screen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={{flex: 1}}>
                    <TouchableOpacity style={{alignItems: "flex-end", margin: 16}}
                                      onPress={this.props.navigation.openDrawer}
                    >
                        <Icon  name="rocket" size={30} color="#900" />
                    </TouchableOpacity>
                    <View
                        style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
                        <Text style={styles.text}>{this.props.name ?? ''} Screen</Text>
                    </View>
                </SafeAreaView>
            </View>
        )
    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF'
    },
    text: {
        color: '#161924',
        fontSize: 20,
        fontWeight: "500"
    }
});
