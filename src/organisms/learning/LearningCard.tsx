import { Avatar, Button, Divider, Icon } from '@react-native-material/core'
import { ScrollView, Text, View, Image, Dimensions } from 'react-native'
// import { ButtonIconCircle } from '../../../atoms/Buttons/ButtonIconCircle'
import { Children } from 'react'
import { ButtonIconCircle } from '../../atoms/Buttons/ButtonIconCircle'

const scrHeight = Dimensions.get('screen').height

/* @ts-ignore */
export const LearningCard = ({
  title = '',
  /* @ts-ignore */
  children,
  categories = '',
  level = 0,
}) => {

  return (

    <View
      style={{ width: '100%', display: 'flex', backgroundColor: '#fbfbfb', borderWidth: 1, borderColor: '#ccc', borderRadius: 5 }}
    >
      <View style={{ paddingHorizontal: 15, paddingBottom: 5, paddingTop: 15, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>

        <View style={{ flex: 1 }}>
          <Text style={{ fontWeight: "400", fontSize: 20, color: "#111" }}>{title}</Text>
          <View style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
            <Text style={{ fontWeight: "300", fontSize: 16, color: "#666" }}>{categories}</Text>
            <Text style={{ fontWeight: "300", fontSize: 16, color: "#666" }}>{level} Level</Text>
          </View>
        </View>

      </View>

      <View style={{ paddingHorizontal: 15, paddingVertical: 10, gap: 10 }}>


        {/* <Divider /> */}

        <Divider />

        <Text style={{ fontWeight: "300", fontSize: 16, color: "#444" }}>
          {children}
        </Text>
      </View>

      <Divider style={{ marginBottom: 10 }} />

      <View style={{ marginHorizontal: 10, marginBottom: 5, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <View>
          <ButtonIconCircle iconTitle='favorite-outline' size={36} color='#666' />
        </View>
        <View style={{ marginBottom: 5 }}>
          <Button
            title="Read"
            tintColor='#fff'
            color='#3FB049'
            variant='outlined'
          // onPress={() => navigation.push('PostDetails')}
          // trailing={
          //     /* @ts-ignore */
          //     props => <Icon name="send" size={30} color="#3e9b46" {...props} />
          // }

          />
        </View>
      </View>
    </View>


  )
}