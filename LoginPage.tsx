import React , { useState} from 'react';
import {View , StyleSheet , TextInput , Button , Text, Alert , TouchableOpacity} from 'react-native';
import { styled } from 'styled-components/native';

const InputBox = styled(TextInput)`
  margin: 10px;
  border-Width: 0.2px;
  border-Radius: 9px;
  padding: 15px;
  font-Size: 17px;
`

const Container = styled.View`
  margin:10px;
`;

const MidContainer = styled.View`
  margin-top: 8px;
  padding: 10px;
`

const LoginButton = styled(TouchableOpacity)`
  width:355px;
  height:56px;
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
  margin:10px;
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

  // const [password , setPassword] = useState('');
  
  const phoneNumber = (phone:string) => {
    const number = phone.replace(/^(\d{3})(\d{4})(\d{4})/, `$1-$2-$3`);
    setNumber(number);
  }

  

  return (
    <View style={{ flex:1, backgroundColor: 'white'}}>
      <Container>
          <InputBox
            maxLength={13}
            onChangeText={phoneNumber}
            value={number}
            keyboardType={'number-pad'}
          />
          <InputBox
              // value={password}
              // onChangeText={(value) => setPassword(value)}
              secureTextEntry={true}
            />
          <MidContainer>
            <LoginButton activeOpacity={0.4}>
              <ButtonText>로그인</ButtonText>
            </LoginButton>
            {/* <TouchableOpacity style={styles.Button}>
              <Text style={styles.Text}>로그인</Text>  
            </TouchableOpacity>             */}
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
      </View>
  );
};

const styles = StyleSheet.create({
  Text: {
    fontSize:18,
    lineHeight: 24,
    color:'#FFFFFF',
  },
  Button: {
    width:355,
    height:56,
    backgroundColor: '#DEE2E7',
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  }

})


export default LoginPage;
