import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { ScrSignin } from "./ScrSignin"
import { ScrSignup } from "./ScrSignup"
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import { View } from "react-native"
import { ButtonIconCircle } from "../../atoms/Buttons/ButtonIconCircle"

const Stack = createNativeStackNavigator()
const Tab = createMaterialTopTabNavigator()

/* @ts-ignore */
export const NavAuth = ({ navigation }) => {
    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Signin" component={ScrSignin}
                options={{
                    headerTitle: 'Вход',
                    headerLeft: () => <View style={{ marginRight: 10 }}><ButtonIconCircle func={() => navigation.openDrawer()} iconTitle='menu' size={36} color="#333" /></View>
                }}
            />
            <Stack.Screen name="Signup" component={ScrSignup} options={{
                headerTitle: 'Регистрация',
                headerLeft: () => <View style={{ marginRight: 10 }}><ButtonIconCircle func={() => navigation.navigate('Signin')} iconTitle='keyboard-backspace' size={36} color="#333" /></View>
            }} />
        </Stack.Navigator>
    )
}
