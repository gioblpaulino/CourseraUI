import React, { useState } from 'react';
import styled from 'styled-components/native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

const InputAreaMail = styled.View`
    width: 270px;
    height: 40px;
    border: 1px solid;
    border-color: #fff;
    border-radius: 5px;
    flex-direction: row;
    align-items: center;
    margin-bottom: 10px;
    padding-left: 10px;
`;
const InputAreaPass = styled.View`
    width: 270px;
    height: 40px;
    border: 1px solid;
    border-color: #fff;
    border-radius: 5px;
    flex-direction: row;
    align-items: center;
    margin-bottom: 10px;
    padding-left: 10px;
`;

export const Input = styled.TextInput`
    flex:1;
    color: #fff;
    font-size: 13px;
    margin-left: 5px;
`;
export const InputPass = styled.TextInput`
    flex:1;
    color: #fff;
    font-size: 13px;
    margin-left: 5px;
`;

export const EyeButton = styled.TouchableOpacity`
    padding-right: 10px;
`;


export default ()=> {

    const [isVisible, setIsVisible] = useState(true);
    
    function handleToggleVisibility(){
        setIsVisible(( prevState ) => !prevState);
    }
    return (
        <>
            <InputAreaMail>
                <Input
                    textContentType='emailAddress'
                    keyboardType='email-address'
                    autoCapitalize='none'
                    autoCorrect={false}
                    autoCompleteType='email'
                    placeholder="E-mail (Obrigatório)" 
                    placeholderTextColor="#fff"/>
            </InputAreaMail>
            <InputAreaPass>
                <InputPass 
                    secureTextEntry={isVisible}
                    placeholder="Senha (Obrigatório)" 
                    placeholderTextColor="#fff">
                </InputPass>
                <EyeButton onPress={handleToggleVisibility}><MaterialCommunityIcons name={isVisible ? "eye-outline" : "eye-off-outline"} size={20} color="#fff"/></EyeButton>
            </InputAreaPass>
        </>
    );
}