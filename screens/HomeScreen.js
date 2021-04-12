import React, { Component } from 'react';
import axios from 'axios';
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Screen from "./Screen";
import { ListItem, Button, Icon } from 'react-native-elements'
import Card from '../components/Card';

class HomeScreen extends Component {
    constructor() {
        super();
        this.state = {
            texts: [],
            files: [],
        };
    }
    componentDidMount() {
        axios.get(`https://recepgumus.com/api`)
            .then(response => {
                this.setState({ texts: response.data.texts, files: response.data.files });
            })
    }
    renderData() {
        var data = this.state.texts.concat(this.state.files)
        return data.map((items, Id) =>
            <Card key={Id} data={items} />
        );
    }
    render() {
        return (
            <View style={{ flex: 1, marginTop: 50, }}>
                <ScrollView >
                    <TouchableOpacity style={styles.button}>
                        <Text bold size={14} color="white">Share Here </Text>
                    </TouchableOpacity>
                    {this.renderData()}
                </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    file: {
        alignItems: "center",
        backgroundColor: "green",
        padding: 10
    }
});

export default HomeScreen;