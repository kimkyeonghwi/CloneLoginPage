import React , { useState} from 'react';
import {View , StyleSheet , TextInput , Button , Text, Alert , TouchableOpacity} from 'react-native';
import { styled } from 'styled-components';


const InputBox = styled(TextInput)`
  margin: 10px;
  border-Width: 0.2px;
  border-Radius: 9px;
  padding: 15px;
  font-Size: 18px;
`
const LoginButton = styled(Button)`
`
const Container = styled.View`
  margin:10px;
`;

const BottomContainer = styled.View`
  margin:10px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const BottomContainerText = styled.Text`
  font-size:14px;
`

const LoginPage = () => {
  
  const [number , setNumber] = useState('');

  // const [password , setPassword] = useState('');
  
  const PhoneNumber = (Phone:string) => {
    const Number = Phone.replace(/^(\d{3})(\d{4})(\d{4})/, `$1-$2-$3`);
    setNumber(Number);
  }

  

  return (
    <View style={{ flex:1, backgroundColor: 'white'}}>
      <Container>
          <InputBox
            maxLength={13}
            onChangeText={PhoneNumber}
            value={number}
            keyboardType={'number-pad'}
          />
          <InputBox
              // value={password}
              // onChangeText={(value) => setPassword(value)}
              secureTextEntry={true}
            />
          <View>
            <LoginButton title='로그인' color='black'/>
          </View>
          <BottomContainer>
            <TouchableOpacity>
              <BottomContainerText>비밀번호 찾기 </BottomContainerText>
            </TouchableOpacity>
              <BottomContainerText>|</BottomContainerText>
            <TouchableOpacity>
              <BottomContainerText> 회원가입</BottomContainerText>
            </TouchableOpacity>
          </BottomContainer>
        </Container>      
      </View>
  );
};



export default LoginPage;
