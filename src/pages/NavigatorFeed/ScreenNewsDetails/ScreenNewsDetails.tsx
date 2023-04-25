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
    { id: 1, title: 'Plants can «scream» from stress through ultrasound', categories: 'Science', content: 'Plants are not just silent objects of nature, they can "scream" from stress using ultrasound. When a plant is subjected to stress, such as heat, drought, cold or insect pests, it can produce ultrasonic signals in the frequency range of 20 to 100 kHz. These sounds can serve as a signal to surrounding plants about the stress that has occurred. Studies show that ultrasonic signals are an important aspect of plant life strategy and can serve as a means of protection and survival in difficult conditions. Studying this phenomenon can help improve agricultural production and develop new methods of plant protection against pests and diseases. Despite the fact that plants do not have organs of hearing, they can perceive sounds through their tissue and sensitive receptors. Recent studies have shown that plants can produce electromagnetic waves in the range from radio waves to infrared, and this may be related to their ultrasonic activity.', imageUrl: 'https://telegra.ph/file/72e0bab08f0f093d54952.png', postDate: new Date().toLocaleDateString() },
    { id: 2, title: 'Method for selecting the exact ripening time of fruits', categories: 'Science', content: 'Scientists from Arizona State University have developed a new method that allows for the precise determination of the ripening moment of fruits and vegetables. Their discovery is based on the analysis of genetic changes that occur in plants during ripening. \n \n By correctly assessing the time of harvesting fruits and vegetables, producers will be able to reduce losses associated with overripening or harvesting unripe fruits. This may lead to a decrease in product prices on the market, improvement in product quality, and a reduction in waste. \n \n As a result of the research, scientists found that certain genetic changes occur during the ripening of fruits and vegetables, which can be used to determine their ripening moment. These changes occur at the genetic level and can be detected using modern genome research methods.', imageUrl: 'https://telegra.ph/file/354e1beb9b4e3174ef135.png', postDate: new Date().toLocaleDateString() },
    { id: 3, title: 'Genetically modified bacteria protect plants', categories: 'Science', content: 'Spanish scientists have announced their new method for protecting plants from pests, which is based on the use of genetically modified bacteria.', imageUrl: 'https://telegra.ph/file/7ad8da1efd6eac7ad9625.png', postDate: new Date().toLocaleDateString() },
  ]

  const { newsId } = route.params

  return (
    <ScrollView>
      <View style={{ backgroundColor: '#fff' }}>
        <View
          style={{ width: "100%", display: 'flex', overflow: 'hidden' }}
        >
          <View>
            <Image style={{ height: 180, width: "100%" }} source={{ uri: (news[newsId - 1].imageUrl) }} />
          </View>

          <View style={{ margin: 15, marginTop: 10, gap: 10 }}>
            <View style={{ gap: 5 }}>
              <Text style={{ fontWeight: "400", fontSize: 22, color: "#111" }}>{news[newsId - 1].title}</Text>
              <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ fontWeight: "300", fontSize: 16, color: "#666" }}>{news[newsId - 1].categories}</Text>
                <Text style={{ fontWeight: "300", fontSize: 16, color: "#666" }}>{news[newsId - 1].postDate}</Text>
              </View>
            </View>

            <Divider />

            <Text style={{ fontWeight: "300", fontSize: 16, color: "#111" }}>
              {news[newsId - 1].content}
            </Text>
          </View>

          <Divider />

        </View>

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
