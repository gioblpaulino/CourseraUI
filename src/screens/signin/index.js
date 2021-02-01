import React from 'react';
import InputArea from '../../components/SignInInput';
import {TouchableWithoutFeedback, Keyboard} from 'react-native';
import {Ionicons} from '@expo/vector-icons'
import { 
    Wrapper, 
    Logo, 
    MsgText, 
    Container,
    LoginButton,
    LoginButtonText,
    ForgotButton,
    OrgButton,
    ForgotButtonText,
    OrgButtonText,
    Division,
    DivContainer,
    DivText,
    BackButton
} from './styles';

import Coursera from '../../assets/coursera.png'

export default ({ navigation, value, onChangeText })=>{
    return(
        <TouchableWithoutFeedback onPress={() =>{
            Keyboard.dismiss();
        }}>
            <Wrapper>
                <BackButton onPress={() => navigation.navigate('Initial')}>
                    <Ionicons name="chevron-back-outline" size={20} color="#568cff" />
                </BackButton>
                <Logo source={Coursera}/>
                <MsgText>Faça o login em sua conta</MsgText>
                <Container>
                    <InputArea value={value} onChangeText={onChangeText} />
                    <ForgotButton>
                        <ForgotButtonText>Esqueceu a senha?</ForgotButtonText>
                    </ForgotButton>
                    <LoginButton onPress={() => navigation.navigate('Navigation')}>
                        <LoginButtonText>Entrar</LoginButtonText>
                    </LoginButton>
                    <DivContainer>  
                        <Division />
                        <DivText>ou</DivText>
                        <Division />
                    </DivContainer>
                    <OrgButton>
                        <OrgButtonText>Faça login com sua organização</OrgButtonText>
                    </OrgButton>
                </Container>
            </Wrapper>
        </TouchableWithoutFeedback>
    )
}