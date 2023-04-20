import { Avatar, ListItem } from '@react-native-material/core'
import React from 'react'

/* @ts-ignore */
export const ScreenUsersList = ({ navigation }) => {
    return (
        <>
            <ListItem
                onPress={() => navigation.navigate('SingleUser')}
                leadingMode="avatar"
                leading={
                    <Avatar image={{ uri: "https://mui.com/static/images/avatar/4.jpg" }} />
                }
                title="Brunch this weekend?"
                secondaryText="I'll be in your neighborhood doing errands this…"
            />
            <ListItem
                leadingMode="avatar"
                leading={
                    <Avatar image={{ uri: "https://mui.com/static/images/avatar/5.jpg" }} />
                }
                title="Summer BBQ"
                secondaryText="Wish I could come, but I'm out of town this…"
            />
            <ListItem
                leadingMode="avatar"
                leading={
                    <Avatar image={{ uri: "https://mui.com/static/images/avatar/3.jpg" }} />
                }
                title="Oui Oui"
                secondaryText="Do you have Paris recommendations? Have you ever…"
            />
        </>
    )
}
