import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

import logo from '../assets/logo.png';

export default function Login(){
    return (
    <View style={styles.container}>
        <Image source={logo} />

        <Text style={styles.label}>SEU E-MAIL *</Text>
    </View>
    );
} 


const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent : 'center',
        alignItems : 'center'
    },
});