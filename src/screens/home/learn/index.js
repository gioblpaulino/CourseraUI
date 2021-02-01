import React from 'react';

import {
    Container,
    ChangeButton,
    ChangeButtonText,
    Mid,
    MidText,
    SettingsButton,
    Header,
    CourseContainer,
    CourseHeader,
    InstName,
    CourseTitle,
    CourseName,
    MoreButton, 
    CourseBarContainer,
    CourseBarText,
    CourseMsgContainer,
    CourseMsgText,
    CourseButtonContainer,
    CourseButtonContainerText,
    CourseScroll
} from './styles';


import {AntDesign, MaterialIcons} from '@expo/vector-icons'
import { StyleSheet} from 'react-native';
import {ProgressBar, Colors} from 'react-native-paper'


const styles = StyleSheet.create({
    headerBottom:{
        borderBottomWidth: 0.2,
        borderColor: 'rgba(255,255,255,0.1)',
    },
})
export default ()=>{
    return (
            <Container>
                <Header style={styles.headerBottom}>
                    <ChangeButton>
                        <ChangeButtonText>Mudar programa</ChangeButtonText>
                    </ChangeButton>
                    <Mid>
                        <MidText>Meus Cursos</MidText>
                    </Mid>
                    <SettingsButton>
                        <AntDesign name="setting" size={25} color="#568cff"/>
                    </SettingsButton>
                </Header>
                <CourseScroll>
                    <CourseContainer>
                        <CourseHeader>
                            <InstName>Insper</InstName>
                            <MoreButton style={styles.buttonCustom}>
                            <MaterialIcons name="more-horiz" size={25} color="#fff" />
                            </MoreButton>
                        </CourseHeader>
                        <CourseTitle>
                            <CourseName style={styles.textCustom}>Administração Financeira</CourseName>
                        </CourseTitle>
                        <CourseBarContainer>
                            <CourseBarText>Continue de onde você parou</CourseBarText>
                            <ProgressBar style={{marginTop:5}} progress={0.1} color={Colors.white}/>
                        </CourseBarContainer>
                        <CourseMsgContainer>
                            <CourseMsgText style={styles.textCustom}>Não deixe que as grandes coisas que você aprendeu desapareçam!
                                Redefina seus prazos e conclua suas tarefas toda semana.
                            </CourseMsgText>
                        </CourseMsgContainer>
                        <CourseButtonContainer>
                            <CourseButtonContainerText>Redefina meus prazos</CourseButtonContainerText>
                        </CourseButtonContainer>
                    </CourseContainer>
                    <CourseContainer>
                        <CourseHeader>
                            <InstName>Universidade Estadual de Campinas</InstName>
                            <MoreButton style={styles.buttonCustom}>
                            <MaterialIcons name="more-horiz" size={25} color="#fff" />
                            </MoreButton>
                        </CourseHeader>
                        <CourseTitle>
                            <CourseName style={styles.textCustom}>Processamento Digital de Sinais - Amostragem </CourseName>
                        </CourseTitle>
                        <CourseBarContainer>
                            <CourseBarText>Continue de onde você parou</CourseBarText>
                            <ProgressBar style={{marginTop:5}} progress={0.1} color={Colors.white}/>
                        </CourseBarContainer>
                        <CourseMsgContainer>
                            <CourseMsgText style={styles.textCustom}>Não deixe que as grandes coisas que você aprendeu desapareçam!
                                Redefina seus prazos e conclua suas tarefas toda semana.
                            </CourseMsgText>
                        </CourseMsgContainer>
                        <CourseButtonContainer>
                            <CourseButtonContainerText>Redefina meus prazos</CourseButtonContainerText>
                        </CourseButtonContainer>
                    </CourseContainer>
                    <CourseContainer>
                        <CourseHeader>
                            <InstName>Insper</InstName>
                            <MoreButton style={styles.buttonCustom}>
                            <MaterialIcons name="more-horiz" size={25} color="#fff" />
                            </MoreButton>
                        </CourseHeader>
                        <CourseTitle>
                            <CourseName style={styles.textCustom}>Administração Financeira</CourseName>
                        </CourseTitle>
                        <CourseBarContainer>
                            <CourseBarText>Continue de onde você parou</CourseBarText>
                            <ProgressBar style={{marginTop:5}} progress={0.1} color={Colors.white}/>
                        </CourseBarContainer>
                        <CourseMsgContainer>
                            <CourseMsgText style={styles.textCustom}>Não deixe que as grandes coisas que você aprendeu desapareçam!
                                Redefina seus prazos e conclua suas tarefas toda semana.
                            </CourseMsgText>
                        </CourseMsgContainer>
                        <CourseButtonContainer>
                            <CourseButtonContainerText>Redefina meus prazos</CourseButtonContainerText>
                        </CourseButtonContainer>
                    </CourseContainer>
                </CourseScroll>
            </Container>
    );
}