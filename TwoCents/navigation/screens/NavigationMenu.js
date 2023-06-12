import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Ionicons from 'react-native-vector-icons/Ionicons';

// Import Menu Screen Components
import HomeScreen from './HomeScreen';
import PostArticle from './SettingsScreen';
import BoughtArticles from './BoughtArticles';

const homeName = 'Home';
const postName = 'Post';
const articleName = 'Article';

// Ionicons.loadFont().then();

// Tab API
const Tab = createBottomTabNavigator();

export default function NavigationMenu(){
    return(
            // <Tab.Navigator 
            // initialRouteName= {homeName}
            // screenOptions={({route}) => ({
            //     tabBarIcon: ({focused, color, size}) => {
            //         let iconName;
            //         let rn = route.name;

            //         if(rn === homeName){
            //             iconName = focused ? 'home' : 'home-outline'
            //         }

            //         return <Ionicons name={iconName} size={size} color={color}/>
            //     }
            // })}
            // >
            <Tab.Navigator>  
                <Tab.Screen name='Home' component={HomeScreen}/>
                <Tab.Screen name='Post' component={PostArticle}/>
                <Tab.Screen name='Articles' component={BoughtArticles}/>
            </Tab.Navigator>
    );
}