import { Button, Icon } from '@react-native-material/core'
import React from 'react'
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import { ButtonSimpleText } from '../../../atoms/Buttons/ButtonSimpleText'
import { ButtonIconCircle } from '../../../atoms/Buttons/ButtonIconCircle'
import { ButtonSingleImage } from '../../../atoms/Buttons/ButtonSingleImage'
import { PostFilterContainer } from '../../organisms/Posts/PostFilterContainer'

/* @ts-ignore */
export const ScreenAddGardenPost = ({ navigation }) => {
  return (
    <ScrollView style={{ backgroundColor: "#fff" }}>
      <View style={{ paddingHorizontal: 10 }}>
      <PostFilterContainer />
      </View>

      <View style={{ paddingHorizontal: 10, gap: 10 }}>

        <View style={styles.inputTitleContainer}>
          <TextInput
            style={styles.title}
            placeholder='Title'
            placeholderTextColor='#111'
            textAlignVertical='top'

          />
        </View>

        <View style={styles.inputContentContainer}>
          <TextInput
            style={styles.title}
            placeholder='Content'
            placeholderTextColor='#111'
            textAlignVertical='top'
            editable
            multiline
            numberOfLines={6}
            maxLength={1000} />
        </View>

        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* <Button title="Clear" style={{ }} /> */}
          <ButtonSingleImage func={() => { }}>
            <View style={{ paddingLeft: 3, top: -2 }}>
              <Icon name='add-photo-alternate' size={32} color='#fff' />
            </View>
          </ButtonSingleImage>

          <ButtonSimpleText>Add Post</ButtonSimpleText>
          {/* <Button title="Add Post" style={{ }} color='#393'/> */}
        </View>

      </View>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  inputTitleContainer: {
    height: 44,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    display: 'flex',
    justifyContent: 'center',
    paddingHorizontal: 10
  },
  inputContentContainer: {
    // height: 150,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    display: 'flex',
    // justifyContent: 'center', 
    paddingHorizontal: 10
  },
  title: {
    color: '#111',
    fontSize: 16,
    fontWeight: "300"
  }
})