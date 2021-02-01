import styled from 'styled-components';

export const Container = styled.SafeAreaView`
    flex:1;
    background-color: #121212;
`;

export const Header = styled.View`
    flex-direction:row;
    padding: 0 15px;
    height: 50px;
    background-color: #1f1f1f;
    justify-content:space-between;
    align-items: center;
`;

export const ChangeButton = styled.TouchableOpacity`

`;
export const ChangeButtonText = styled.Text`
    font-size:15px;
    color:#568CFF;
`;

export const SettingsButton = styled.TouchableOpacity`

`;

export const Mid = styled.View`
    padding-right:80px;
`;
export const MidText = styled.Text`
    font-size: 15px;
    color: #fff;
    font-weight:600;

`;

export const CourseContainer = styled.View`
    border-radius: 3px;
    background-color: #2e2e2e;
    margin-bottom: 20px;
`;

export const CourseHeader = styled.View`
    flex:3;
    flex-direction: row;
    justify-content: space-between;
`;

export const CourseTitle = styled.View`
    padding-left: 15px;
`;
export const InstName = styled.Text`
    margin-top: 10px;
    font-size: 15px;
    color: #fff;
    padding-left:15px;
    
`;
export const CourseName = styled.Text`
    font-size: 20px;
    color: #fff;
`;
export const MoreButton = styled.TouchableOpacity`
    margin-top:10px;
    padding-right: 15px;
`;

export const CourseBarContainer = styled.View`
    margin-top:20px;
    height: 50px;
    margin-left:15px;
    margin-right:15px;
    
`;
export const CourseBarText = styled.Text`
    margin-top: 10px;
    font-size:15px;
    color: #fff;
`;

export const CourseMsgContainer = styled.View`
        height: 100px;
        background-color: #121212;
        border-radius: 3px;
        margin-left: 15px;
        margin-right: 15px;
    
`;
export const CourseMsgText = styled.Text`
    margin-top: 10px;
    font-size: 15px;
    color: #fff;
    padding:10px;
`;

export const CourseButtonContainer = styled.TouchableOpacity`
    height:40px;
    background-color: #0055D2;
    border-radius: 3px;
    margin-top:10px;
    margin-bottom:15px;
    margin-left:15px;
    margin-right:15px;
    justify-content: center;
    align-items:center;
`;
export const CourseButtonContainerText = styled.Text`
    font-size: 15px;
    font-weight: bold;
    color: #fff;
`;

export const CourseScroll = styled.ScrollView`
    padding:10px;
`;