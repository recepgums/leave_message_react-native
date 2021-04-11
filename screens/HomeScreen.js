import React from "react";
import axios from 'axios';
import {View,Text} from "react-native";
import Screen from "./Screen";
import { Card, ListItem, Button, Icon } from 'react-native-elements'

export  default class HomeScreen extends React.Component{
    state = {
        persons: []
    };

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
                const persons = res.data;
                this.setState({ persons });
            })
    }

    render() {
        return (
            <Screen navigation={navigation} name="Home">
                <View>
                    { this.state.persons.map(person => <Text>
                        {person.name}
                    </Text>)}
                </View>
            </Screen>

        )
    }
}
