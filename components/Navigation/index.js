import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator, TransitionPresets } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import Decks from '../Decks/Decks';
import NewDeck from '../NewDeck/NewDeck';
import DeckDetails from '../DeckDetails/DeckDetails';
import NewCard from '../NewCard/NewCard';
import Quiz from '../Quiz/Quiz';
import {white , azure, lightPurp, black } from '../../utils/colors'
import { Platform } from 'react-native';


const Tabs = createBottomTabNavigator(
    {
      Decks: {
        screen: Decks,
        navigationOptions: {
          title: 'FlashCards',
          tabBarLabel: 'Decks',
          tabBarIcon: ({ tintColor }) => <Ionicons name={Platform.OS === 'ios' ? 'ios-list' : 'md-list'} size={30} color={tintColor}/>
        }
      },
      NewDeck: {
        screen: NewDeck,
        navigationOptions: {
          title: 'FlashCards',
          tabBarLabel: 'New Deck',
          tabBarIcon: ({ tintColor }) => <Ionicons name={Platform.OS === 'ios' ? 'ios-add-circle-outline' : 'md-add-circle-outline'} size={30} color={tintColor}/>
        }
      }
    },
      {
      tabBarOptions: {
        activeTintColor: azure,
        style: {
          backgroundColor: white,
        },
      }
    }
);

Tabs.navigationOptions = ({ navigation }) => {
  const { routeName } = navigation.state.routes[navigation.state.index];
  
  const headerTitle = routeName;
  return {
    headerTitle,
  };
};

const MainNavigator = createStackNavigator({
      Home: {
        screen: Tabs,
      },
      DeckDetails: {
        screen: DeckDetails,
        navigationOptions: {
          headerTintColor: azure,
          headerStyle: {
            backgroundColor: white
          }
        }
      },
      NewCard: {
        screen: NewCard,
        navigationOptions: {
          headerTintColor: azure,
          headerStyle: {
            backgroundColor: white
          }
        }
      },
      Quiz: {
        screen: Quiz,
        navigationOptions: {
          headerTintColor: azure,
          headerStyle: {
            backgroundColor: white
          }
        },
      },
  },
  {
    defaultNavigationOptions: {
      ...TransitionPresets.SlideFromRightIOS, // https://reactnavigation.org/docs/4.x/stack-navigator/ -> TransitionPresets
    },
  }
)

export default createAppContainer(MainNavigator);