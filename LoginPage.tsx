import React , { useState} from 'react';
import {View , TextInput , Text, TouchableOpacity , ScrollView} from 'react-native';
import { styled } from 'styled-components/native';

const InputBox = styled(TextInput)`
  margin: 10px;
  border-Width: 0.2px;
  border-Radius: 9px;
  padding: 15px;
  font-Size: 17px;
`

const Container = styled(ScrollView)`
  flex: 1;
  background-color: white;
`;

const TopContainer = styled.View`
  margin-top: 22px;
  padding: 10px;
`

const MidContainer = styled.View`
  padding: 10px;
`

const LoginButton = styled(TouchableOpacity)`
  flex: 1;
  height:56px;
  margin: 10px;
  background-Color: #DEE2E7;
  justify-Content: center;
  align-Items: center;
  border-Radius: 8px;
` 
const ButtonText = styled.Text`
  font-Size:18px;
  line-Height: 24px;
  color:#FFFFFF;
`

const BottomContainer = styled.View`
  margin:5px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const BottomContainerText = styled.Text`
  font-size:14px;
  color: #64748B;
  margin-left:10px;
`

const LoginPage = () => {
  
  const [number , setNumber] = useState('');
  
  const phoneNumber = (phone:string) => {
    const idNumber = phone.replace(/^(\d{3})(\d{4})(\d{4})/, `$1-$2-$3`);
    setNumber(idNumber);
  }

  

  return (
    <Container>
      <TopContainer>
        <InputBox
          maxLength={13} 
          onChangeText={phoneNumber}
          value={number}
          keyboardType={'number-pad'}
        />
        <InputBox
          secureTextEntry={true}
        />
      </TopContainer>
      <MidContainer>
        <LoginButton activeOpacity={0.4}>
          <ButtonText>로그인</ButtonText>
        </LoginButton>
      </MidContainer>
      <BottomContainer>
        <TouchableOpacity>
          <BottomContainerText>비밀번호 찾기</BottomContainerText>
        </TouchableOpacity>
          <BottomContainerText>|</BottomContainerText>
        <TouchableOpacity>
          <BottomContainerText>회원가입</BottomContainerText>
        </TouchableOpacity>
      </BottomContainer>
    </Container>      
  );
};

export default LoginPage;
