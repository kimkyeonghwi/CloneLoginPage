import React from 'react';
import {Button, View} from 'react-native';

const Home = ({navigation}) => {
    return (
        <View>
            <Button title="클릭"
            onPress={()=> navigation.navigate('로그인')}/>
        </View>
    );
}

export default Home;