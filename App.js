import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import CustomDrawer from './navigation/CustomDrawer'
import store from "./app/store";
import { Provider } from "react-redux";
import { LogBox } from 'react-native';
import SplashScreen from 'react-native-splash-screen'
import { OnBoarding, Otp, SignIn, SignUp, ForgotPassword } from './screens/index'

LogBox.ignoreAllLogs();

const Stack = createStackNavigator();

const App = () => {

    React.useEffect(() => {
        SplashScreen.hide();
    }, [])

    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false
                    }}
                    initialRouteName={'Otp'}
                >
                    <Stack.Screen
                        name="OnBoarding"
                        component={OnBoarding}
                    />
                    <Stack.Screen
                        name="SignIn"
                        component={SignIn}
                    />
                    <Stack.Screen
                        name="SignUp"
                        component={SignUp}
                    />
                    <Stack.Screen
                        name="ForgotPassword"
                        component={ForgotPassword}
                    />
                    <Stack.Screen
                        name="Otp"
                        component={Otp}
                    />
                    <Stack.Screen
                        name="Home"
                        component={CustomDrawer}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    )
}

export default App