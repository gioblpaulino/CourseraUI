import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
    background-color: #1f1f1f;
    flex: 1;

`;
export const BackButton = styled.TouchableOpacity`
    padding-left: 20px;
    margin-top: 20px;
`;

export const Container = styled.View`
    flex:1;
    align-items: center;
`;
export const Logo = styled.Image`
    align-self: center;
    margin-top: 85px;
`;

export const MsgText = styled.Text`
    color: #fff;
    font-size: 15px;
    text-align: center;
    margin-top: 15px;
    margin-bottom: 25px;
`;

export const LoginButton = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    width: 270px;
    height: 40px;
    border: 1px solid;
    border-radius: 5px;
    background-color: #757575;

`;
export const LoginButtonText = styled.Text`
    font-size: 15px;
    font-weight: bold;
    color: #fff;

`;

export const ForgotButton = styled.TouchableOpacity`
    padding-left: 145px;
    margin-bottom: 10px;
`;
export const ForgotButtonText = styled.Text`
    color: #568CFF;
    font-size: 14px;
`;

export const DivContainer = styled.View`
    align-items: center;
    justify-content: center;
    flex-direction: row;
    margin-top: 20px;
`;

export const DivText = styled.Text`
    font-size: 15px;
    font-style: italic;
    color: #9e9e9e;
    padding: 5px;
`;
export const Division = styled.View`
    width: 120px;
    border: 0.6px solid;
    border-color: #9e9e9e;
`
export const OrgButton = styled.TouchableOpacity`
    margin-top: 20px;
`;
export const OrgButtonText = styled.Text`
    color: #568CFF;
    font-size: 15px;
    font-weight: bold;
`;

