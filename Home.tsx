import React from 'react';
import {Button, View} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Home = ({navigation}) => {
    return (
        <SafeAreaView>
            <Button title="클릭"
            onPress={()=> navigation.navigate('Login')}/>
        </SafeAreaView>
    );
}

export default Home;