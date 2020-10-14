import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native'

const audioList = [
    {
        title: 'Play from local',
        isRequire: true,
        url: require(''),
    },
    {
        title: 'Play from local',
        url: '',
    }
]

class SoundScreen extends Component {
    render() {
        return (
            <SafeAreaView style={{flex: 1}}>
                <View style={styles.container}>
                    <Text> SoundScreen </Text>

                    {/* <ScrollView style={styles.container}>
                        {
                            audioList.map((item, index) => {
                                return (
                                    <View style={styles.feature}  key={item.title}>
                                        <Text>{item.title}</Text>

                                        <TouchableOpacity onPress={() => playSound(item, index)}>
                                            <Text style={styles.buttonPlay}> Play </Text>
                                        </TouchableOpacity>

                                        <TouchableOpacity onPress={() => stopSound(item, index)}>
                                            <Text style={styles.buttonStop}> Play </Text>
                                        </TouchableOpacity>
                                    </View>
                                )
                            })
                        }
                    </ScrollView> */}
                </View>
                
            </SafeAreaView>
        )
    }
}

export default SoundScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    headerTitle: {

    },
    feature: {

    },
    buttonPlay: {

    },
    buttonStop: {

    },
})
