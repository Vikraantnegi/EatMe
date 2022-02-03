import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import CustomDrawer from './navigation/CustomDrawer'
import store from "./app/store";
import { Provider } from "react-redux";
import { LogBox } from 'react-native';
import SplashScreen from 'react-native-splash-screen'
import { OnBoarding, Otp, SignIn, SignUp, ForgotPassword, FoodDetail, 
    Checkout, MyCart, Success, AddCard, MyCard, DeliveryStatus, Map 
} from './screens/index'

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
                    initialRouteName={'Checkout'}
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
                     <Stack.Screen
                        name="FoodDetail"
                        component={FoodDetail}
                    />

                    <Stack.Screen
                        name="Checkout"
                        component={Checkout}
                    />

                    <Stack.Screen
                        name="MyCart"
                        component={MyCart}
                    />

                    <Stack.Screen
                        name="Success"
                        component={Success}
                    />

                    <Stack.Screen
                        name="AddCard"
                        component={AddCard}
                    />

                    <Stack.Screen
                        name="MyCard"
                        component={MyCard}
                    />

                    <Stack.Screen
                        name="DeliveryStatus"
                        component={DeliveryStatus}
                    />

                    <Stack.Screen
                        name="Map"
                        component={Map}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    )
}

export default App