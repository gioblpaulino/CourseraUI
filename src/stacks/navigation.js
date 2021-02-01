import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {FontAwesome5, Ionicons, AntDesign, Entypo, FontAwesome} from '@expo/vector-icons'

import Explore from '../screens/home/explore'
import Rcmd from '../screens/home/rcmd'
import Learn from '../screens/home/learn'
import Downloads from '../screens/home/downloads'
import Profile from '../screens/home/profile'

const Tab = createBottomTabNavigator();

const icons = {
    Explore:{
        lib: Ionicons,
        name:"ios-search-sharp",
    },
    Recommendation:{
        lib: Entypo,
        name:"star",
    },
    Learn:{
        lib: FontAwesome5,
        name: "book-open",
    },
    Downloads:{
        lib: AntDesign,
        name:"clouddownload",
    },
    Profile:{
        lib: FontAwesome,
        name: "user-circle-o"
    }
}

export default ()=>{
    return(
            <Tab.Navigator 
                screenOptions={({ route }) =>({
                    tabBarIcon:({color, size}) => {
                        const {lib: Icon, name } = icons[route.name]
                        return <Icon name={name} size={size} color={color}/>
                    },
                })}
                tabBarOptions={{
                    style:{
                        height:70,
                        backgroundColor: "#383838",
                        alignContent:'center',
                        borderTopColor: 'rgba(255,255,255,0.1)'
                    },
                    activeTintColor: "#4C92F2",
                    inactiveTintColor: "#8f8f8f",
                    labelPosition:"below-icon",
                    labelStyle:{
                        marginBottom:15
                    },
                    adaptive:true,

                    
                }}
            >
                <Tab.Screen name="Explore" component={Explore} options={{
                    title: "Explorar",
                }} />
                <Tab.Screen name="Recommendation" component={Rcmd} options={{
                    title: "Recomendação",
                }}/>
                <Tab.Screen name="Learn" component={Learn} options={{
                    title: "Aprender",
                }}/>
                <Tab.Screen name="Downloads" component={Downloads} options={{
                    title: "Downloads",
                }}/>
                <Tab.Screen name="Profile" component={Profile} options={{
                    title: "Perfil",
                }}/>
            </Tab.Navigator>
    );
}
