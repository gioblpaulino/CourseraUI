import React from 'react';
import { 
    Wrapper, 
    InfoText, 
    Logo,
    Container,
    AppleButton,
    GoogleButton,
    FaceButton,
    Division,
    SignInButton,
    AppleButtonText,
    GoogleButtonText,
    FaceButtonText,
    SignInButtonText,
    AppleLogo,
    GoogleLogo,
    FbLogo,
    NewButton,
    NewButtonText,
    Footer,

} from './styles'
import Coursera from '../../assets/coursera.png';
import Apple from '../../assets/Apple.png';
import Google from '../../assets/google.png';
import Fb from '../../assets/fb-icon.png';


export default ( {navigation} )=>{
    return (
        <Wrapper>
            <Logo source={Coursera}/>
            <InfoText>
                    Faça os melhores cursos on-line das 
                       melhores universidades e parceiros do 
                    setor.
            </InfoText>
            <Container>
                <AppleButton>
                    <AppleLogo source={Apple}/>
                    <AppleButtonText>Continuar com a Apple</AppleButtonText>
                </AppleButton>
                <GoogleButton>
                    <GoogleLogo source={Google}/>
                    <GoogleButtonText>Continuar com o Google</GoogleButtonText>
                </GoogleButton>
                <FaceButton>
                    <FbLogo source={Fb}/>
                    <FaceButtonText>Continue com o Facebook</FaceButtonText>
                </FaceButton>
                <Division/>
                <SignInButton onPress={() => navigation.navigate('SignIn')}>
                    <SignInButtonText>Entrar com e-mail</SignInButtonText>
                </SignInButton>
                <NewButton>
                    <NewButtonText>Novo no Coursera? Novo no Coursera? Criar conta</NewButtonText>
                </NewButton>
                <Footer>
                    Ao me inscrever para criar uma conta eu aceito as
                        políticas do Coursera de Termos de Serviço, 
                                        Política de PrivacidadeCódigo de Honra.
                </Footer>
            </Container>
        </Wrapper>
    )
}
