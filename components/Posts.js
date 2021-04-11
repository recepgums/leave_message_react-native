/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Button,
} from 'react-native';
import axios from 'axios';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';
import Modal from 'react-native-modal';

export default class Post extends React.Component {
    state={
        paylasimlar:[],
        users:[],
        points:[],
        ready:false,
        isVisible:false
    };


    componentDidMount() {
        axios.get('http://recepgumus.com/leave_message/api/paylasimlar')
            .then(response => {
                console.log(response.data.success);
                this.setState({paylasimlar: response.data.paylasimlar});
                this.setState({users: response.data.user});
                this.setState({points: response.data.points});
                setInterval(() => {if(this.state.points[0]){this.setState({ready:true})}}, 100)
            })
            .catch(error => {
                console.log(error);
            });
    }
    modalDisplay=()=>{
        this.setState({isVisible: !this.state.isVisible})
    }
    onPress=()=>{
        this.setState({visibility:true})
    }
    render() {
        if(this.state.ready){
            return (
                <View>
                    <Button
                        onPress={this.onPress}
                        title={"asdas"} />
                    <Modal isVisible={this.state.isVisible}>
                        <View style={{ flex: 1 }}>
                            <Text>I am the modal content!</Text>
                        </View>
                    </Modal>
                    <ScrollView>

                        <Card>

                            <CardImage
                                source={{uri: 'http://bit.ly/2GfzooV'}}
                                title="Top 10 South African beaches"
                            />
                            <CardTitle
                                subtitle="Number 6"
                            />
                            <CardContent text="Clifton, Western Cape" />
                            <CardAction
                                separator={true}
                                inColumn={false}>
                                <CardButton
                                    title="Share"
                                    color="#FEB557"
                                />
                                <CardButton
                                    title="Explore"
                                    color="#FEB557"
                                />
                            </CardAction>
                        </Card>

                        {this.state.paylasimlar.map(
                            function(data, index) {
                                return (

                                    <Card key={index}>
                                        <CardImage
                                            title={"aaaaaa"}
                                        />
                                        <CardTitle
                                            title={data.baslik}
                                            subtitle={this.state.points[index]}
                                            isSubtitlePositionRight={true}
                                        />
                                        <CardContent text= {data.paylasim} />
                                        <CardAction
                                            style={{backgroundColor:'#28AF4F'}}
                                            separator={true}
                                            inColumn={false}>
                                            <CardButton
                                                onPress={() => {}}
                                                title={this.state.users[index].name}
                                                color="white"
                                            />
                                            <CardButton
                                                style={{justifyContent :'flex-end'}}
                                                onPress={() => {}}
                                                title={data.created_at}
                                                color="white"
                                            />
                                        </CardAction>
                                    </Card>
                                );
                            }.bind(this),
                        )}

                    </ScrollView>
                </View>
            );
        }else{
            return (
                <View><Text>Loading...</Text></View>
            )
        }
    };
}