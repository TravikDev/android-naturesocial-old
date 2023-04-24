import React from 'react'
import { View, Text, ScrollView, Dimensions, Image } from "react-native"
import { ButtonIconCircle } from '../../../atoms/Buttons/ButtonIconCircle'
import { Avatar, Divider } from '@react-native-material/core'
import { SpoilerComments } from '../../../atoms/Spoilers/SpoilerComments'
import { PostDetailsIndicator } from '../../../atoms/Indicators/PostDetailsIndicator'

const scrHeight = Dimensions.get('screen').height

/* @ts-ignore */
export const ScreenNewsDetails = ({ route, navigation }) => {


  const news = [
    { id: 1, title: 'Plants can «scream» from stress through ultrasound', categories: 'Science', content: 'Studies show that ultrasonic signals are an important aspect of plant life strategy and can serve as a means of protection and survival in difficult conditions. ', imageUrl: 'https://telegra.ph/file/72e0bab08f0f093d54952.png' },
    { id: 2, title: 'Method for selecting the exact ripening time of fruits', categories: 'Science', content: 'Scientists from Arizona State University have developed a new method that allows for the precise determination of the ripening moment of fruits and vegetables.', imageUrl: 'https://telegra.ph/file/354e1beb9b4e3174ef135.png' },
    { id: 3, title: 'Genetically modified bacteria protect plants', categories: 'Science', content: 'Spanish scientists have announced their new method for protecting plants from pests, which is based on the use of genetically modified bacteria.', imageUrl: 'https://telegra.ph/file/7ad8da1efd6eac7ad9625.png' },
  ]
  // console.log(route)

  const { newsId } = route.params

  // console.log(postId)
  // console.log(navigation)


  return (
    <ScrollView>
      <View style={{ backgroundColor: '#fff' }}>
        <View
          style={{ width: "100%", display: 'flex', overflow: 'hidden' }}
        >
          <View>
            <Image style={{ height: 180, width: "100%" }} source={{ uri: (news[newsId-1].imageUrl) }} />
          </View>

          <View style={{ margin: 15, gap: 15 }}>
            <View>
              <Text style={{ fontWeight: "400", fontSize: 22, color: "#111" }}>{news[newsId-1].title}</Text>
              <Text style={{ fontWeight: "300", fontSize: 16, color: "#666" }}>{news[newsId-1].categories}</Text>
            </View>

            <Divider />
            <View style={{ gap: 10, display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>

              <View style={{ width: '48.5%' }}>
                <PostDetailsIndicator title='Minifermer' subTitle='Quantum Board 400Wt'
                  leadingIcon='emoji-objects' />
              </View>

              <View style={{ width: '48.5%' }}>
                <PostDetailsIndicator title='Daylight' value='16h'
                  leadingIcon='model-training' />
              </View>

              <View style={{ width: '48.5%' }}>
                <PostDetailsIndicator title='EC' value={`700 mS`} leadingIcon='opacity' />
              </View>

              <View style={{ width: '48.5%' }}>
                <PostDetailsIndicator title='pH' value={`6.2`}
                  leadingIcon='science' />
              </View>

            </View>

            <Divider />

            <Text style={{ fontWeight: "300", fontSize: 16, color: "#111" }}>
              {news[newsId-1].content}
            </Text>
          </View>

          <Divider />

        </View>

        <View style={{ padding: 15, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <View style={{ display: 'flex', flexDirection: 'row', gap: 15 }}>
            <Avatar label="Kent Dodds" autoColor size={48} />
            <View style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Text style={{ fontWeight: "400", fontSize: 20, color: "#111" }}>OverGrower</Text>
              <Text style={{ fontWeight: "300", fontSize: 16, color: "#666" }}>30 level</Text>
            </View>
          </View>

          <ButtonIconCircle iconTitle='favorite-outline' size={36} color='#666' />
        </View>

        <Divider />
        <View style={{ margin: 10 }}>
          <SpoilerComments title={`42 Comments`} leadingIcon='messenger-outline'>

            <View style={{ marginHorizontal: 20 }}>
              <View style={{ paddingVertical: 10, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 15 }}>
                  <Avatar label="Kent Dodds" autoColor size={32} />
                  <View style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Text style={{ fontWeight: "400", fontSize: 20, color: "#111" }}>Artem</Text>
                  </View>
                </View>

                <Text style={{ fontSize: 16, color: '#111' }}>#1</Text>
              </View>
              <View>
                <Text style={{ fontSize: 16, color: '#111', fontWeight: '300' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat ab, deleniti molestiae quia odio quis repellat sequi voluptas, eius explicabo, voluptatem culpa accusamus optio quisquam sapiente suscipit ducimus natus fugit.
                  Dolore omnis optio error! Accusantium rem dolore soluta temporibus illum tenetur voluptates reprehenderit iusto nisi nobis amet, corrupti asperiores inventore magni ipsam nesciunt unde facilis commodi! Fugit similique non rerum.</Text>
              </View>
            </View>

            <Divider style={{ marginTop: 10 }} />

            <View style={{ margin: 5, marginHorizontal: 20 }}>
              <View style={{ paddingVertical: 10, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 15 }}>
                  <Avatar label="Kent Dodds" autoColor size={32} />
                  <View style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Text style={{ fontWeight: "400", fontSize: 20, color: "#111" }}>Artem</Text>
                  </View>
                </View>

                <Text style={{ fontSize: 16, color: '#111' }}>#2</Text>
              </View>
              <View>
                <Text style={{ fontSize: 16, color: '#111', fontWeight: '300' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat ab, deleniti molestiae quia odio quis repellat sequi voluptas, eius explicabo, voluptatem culpa accusamus optio quisquam sapiente suscipit ducimus natus fugit.
                  Dolore omnis optio error! Accusantium rem dolore soluta temporibus illum tenetur voluptates reprehenderit iusto nisi nobis amet, corrupti asperiores inventore magni ipsam nesciunt unde facilis commodi! Fugit similique non rerum.</Text>
              </View>
            </View>

          </SpoilerComments>
        </View>

      </View>
      {/* <Button title="What" onPress={() => navigation.pop()} /> */}
      {/* </View> */}
    </ScrollView>
  )
}
