import React, { useState } from 'react'
import { View, Text, ScrollView, Dimensions, Image, Pressable, SafeAreaView, StatusBar } from "react-native"
import { ButtonIconCircle } from '../../../atoms/Buttons/ButtonIconCircle'
import { AppBar, Avatar, Backdrop, BackdropSubheader, Divider, Icon, IconButton } from '@react-native-material/core'
import { SpoilerComments } from '../../../atoms/Spoilers/SpoilerComments'
import { PostDetailsIndicator } from '../../../atoms/Indicators/PostDetailsIndicator'

const scrHeight = Dimensions.get('screen').height
const scrWidth = Dimensions.get('screen').width

/* @ts-ignore */
export const ScrSystemDetails = ({ route, navigation }) => {

  const posts = [
    { id: 1, authorId: 1, title: 'First title', categories: 'App updates', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, veniam iste hic accusamus, suscipit similique provident et voluptates quaerat, magnam non! Odit, dolorem. Officia provident qui hic dolorum natus ipsum. Iure, quis sint! Beatae ratione voluptates, quia neque asperiores voluptas, fugit nam a perferendis debitis magni quidem reiciendis suscipit. Rerum esse, hic alias tempore quae asperiores libero unde distinctio perferendis. Nam praesentium rem, et quas optio iure non enim quo amet repellat totam tempora nesciunt earum temporibus consectetur natus. Quae beatae quas ipsa illo debitis nisi, consectetur nesciunt est aut. Error repellat amet quis fugit modi quam blanditiis ex facilis labore? Fugit eos odit necessitatibus, quas quaerat debitis porro ratione quasi ut enim impedit adipisci, quidem officia aliquid iure delectus. Corrupti tempore veniam perspiciatis, fugiat quaerat cumque illo inventore officia repudiandae natus modi perferendis corporis numquam neque voluptate consectetur praesentium laborum incidunt dicta earum accusamus nobis aliquid magni. Corporis, atque? Labore vitae totam ea minima corporis, doloremque sequi ut quo illo neque, dolorum nam dolore commodi perferendis culpa qui sed consequuntur nesciunt dicta fugiat accusantium deleniti rem! Aut, suscipit expedita.', imageUrl: 'https://telegra.ph/file/72e0bab08f0f093d54952.png', postDate: new Date().toLocaleDateString() },
    { id: 2, authorId: 2, title: 'Second titleMethod for selecting the exact ripening time of fruits', categories: 'Science', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, veniam iste hic accusamus, suscipit similique provident et voluptates quaerat, magnam non! Odit, dolorem. Officia provident qui hic dolorum natus ipsum. Iure, quis sint! Beatae ratione voluptates, quia neque asperiores voluptas, fugit nam a perferendis debitis magni quidem reiciendis suscipit. Rerum esse, hic alias tempore quae asperiores libero unde distinctio perferendis. Nam praesentium rem, et quas optio iure non enim quo amet repellat totam tempora nesciunt earum temporibus consectetur natus. Quae beatae quas ipsa illo debitis nisi, consectetur nesciunt est aut. Error repellat amet quis fugit modi quam blanditiis ex facilis labore? Fugit eos odit necessitatibus, quas quaerat debitis porro ratione quasi ut enim impedit adipisci, quidem officia aliquid iure delectus. Corrupti tempore veniam perspiciatis, fugiat quaerat cumque illo inventore officia repudiandae natus modi perferendis corporis numquam neque voluptate consectetur praesentium laborum incidunt dicta earum accusamus nobis aliquid magni. Corporis, atque? Labore vitae totam ea minima corporis, doloremque sequi ut quo illo neque, dolorum nam dolore commodi perferendis culpa qui sed consequuntur nesciunt dicta fugiat accusantium deleniti rem! Aut, suscipit expedita.', imageUrl: 'https://telegra.ph/file/72e0bab08f0f093d54952.png', postDate: new Date().toLocaleDateString() },
    { id: 3, authorId: 3, title: 'Third title', categories: 'Science', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, veniam iste hic accusamus, suscipit similique provident et voluptates quaerat, magnam non! Odit, dolorem. Officia provident qui hic dolorum natus ipsum. Iure, quis sint! Beatae ratione voluptates, quia neque asperiores voluptas, fugit nam a perferendis debitis magni quidem reiciendis suscipit. Rerum esse, hic alias tempore quae asperiores libero unde distinctio perferendis. Nam praesentium rem, et quas optio iure non enim quo amet repellat totam tempora nesciunt earum temporibus consectetur natus. Quae beatae quas ipsa illo debitis nisi, consectetur nesciunt est aut. Error repellat amet quis fugit modi quam blanditiis ex facilis labore? Fugit eos odit necessitatibus, quas quaerat debitis porro ratione quasi ut enim impedit adipisci, quidem officia aliquid iure delectus. Corrupti tempore veniam perspiciatis, fugiat quaerat cumque illo inventore officia repudiandae natus modi perferendis corporis numquam neque voluptate consectetur praesentium laborum incidunt dicta earum accusamus nobis aliquid magni. Corporis, atque? Labore vitae totam ea minima corporis, doloremque sequi ut quo illo neque, dolorum nam dolore commodi perferendis culpa qui sed consequuntur nesciunt dicta fugiat accusantium deleniti rem! Aut, suscipit expedita.', imageUrl: 'https://telegra.ph/file/354e1beb9b4e3174ef135.png', postDate: new Date().toLocaleDateString() },
  ]

  // console.log(route)

  const { postId } = route.params

  // console.log(postId)
  // console.log(navigation)
  const [revealed, setRevealed] = useState(false);

  return (
    <SafeAreaView>
      <StatusBar backgroundColor="#ffffff44" translucent />

      <View style={{ position: 'absolute', top: '4%', left: '4%', zIndex: 50 }}>
        <ButtonIconCircle size={42} iconTitle='keyboard-backspace' color='#fff' func={() => navigation.pop()} />
      </View>

      <ScrollView style={{}}>
        <View style={{ backgroundColor: '#fff' }}>
          <View
            style={{ width: "100%", display: 'flex', overflow: 'hidden' }}
          >
            <View>
              <Image style={{ height: 300, width: "100%" }} source={{ uri: 'https://telegra.ph/file/cba4855a063f0937ac02a.png' }} />
            </View>

            <View style={{ margin: 15, gap: 15 }}>
              <View>
                <Text style={{ fontWeight: "400", fontSize: 22, color: "#111" }}>{posts[postId - 1]?.title}</Text>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Text style={{ fontWeight: "300", fontSize: 16, color: "#666" }}>{posts[postId - 1]?.categories}</Text>
                  <Text style={{ fontWeight: "300", fontSize: 16, color: "#666" }}>{posts[postId - 1]?.postDate}</Text>
                </View>
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
                {posts[postId - 1]?.content}
              </Text>
            </View>

            <Divider />

          </View>

          <View style={{ padding: 15, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <View style={{ display: 'flex', flexDirection: 'row', gap: 15 }}>
              <Pressable onPress={() => navigation.navigate('PublicGarden', { gardenId: posts[postId - 1]?.authorId })}><Avatar label="Kent Dodds" autoColor size={48} /></Pressable>
              <View style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Text onPress={() => navigation.navigate('PublicGarden', { gardenId: posts[postId - 1]?.authorId })} style={{ fontWeight: "400", fontSize: 20, color: "#111" }}>OverGrower</Text>
                <Text style={{ fontWeight: "300", fontSize: 16, color: "#666" }}>30 level</Text>
              </View>
            </View>

            <ButtonIconCircle iconTitle='favorite-outline' size={36} color='#666' />
          </View>

          <Divider />

          {/* @ts-ignore */}
          
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
    </SafeAreaView>
  )
}
