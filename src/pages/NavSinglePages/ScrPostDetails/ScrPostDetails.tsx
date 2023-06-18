import React, { PropsWithChildren, useEffect, useRef, useState } from 'react'
import { View, Text, ScrollView, Dimensions, Image, Pressable, SafeAreaView, StatusBar, ViewStyle, Animated, Easing, FlatList, TextInput } from "react-native"
import { ButtonIconCircle } from '../../../atoms/Buttons/ButtonIconCircle'
import { AppBar, Avatar, Backdrop, BackdropSubheader, Button, Divider, Icon, IconButton } from '@react-native-material/core'
import { SpoilerComments } from '../../../atoms/Spoilers/SpoilerComments'
import { PostDetailsIndicator } from '../../../atoms/Indicators/PostDetailsIndicator'

const scrHeight = Dimensions.get('screen').height
const scrWidth = Dimensions.get('screen').width

/* @ts-ignore */
export const ScrPostDetails = ({ route, navigation }) => {

  const posts = [
    { id: 1, authorId: 1, title: 'First title', categories: 'App updates', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, veniam iste hic accusamus, suscipit similique provident et voluptates quaerat, magnam non! Odit, dolorem. Officia provident qui hic dolorum natus ipsum. Iure, quis sint! Beatae ratione voluptates, quia neque asperiores voluptas, fugit nam a perferendis debitis magni quidem reiciendis suscipit. Rerum esse, hic alias tempore quae asperiores libero unde distinctio perferendis. Nam praesentium rem, et quas optio iure non enim quo amet repellat totam tempora nesciunt earum temporibus consectetur natus. Quae beatae quas ipsa illo debitis nisi, consectetur nesciunt est aut. Error repellat amet quis fugit modi quam blanditiis ex facilis labore? Fugit eos odit necessitatibus, quas quaerat debitis porro ratione quasi ut enim impedit adipisci, quidem officia aliquid iure delectus. Corrupti tempore veniam perspiciatis, fugiat quaerat cumque illo inventore officia repudiandae natus modi perferendis corporis numquam neque voluptate consectetur praesentium laborum incidunt dicta earum accusamus nobis aliquid magni. Corporis, atque? Labore vitae totam ea minima corporis, doloremque sequi ut quo illo neque, dolorum nam dolore commodi perferendis culpa qui sed consequuntur nesciunt dicta fugiat accusantium deleniti rem! Aut, suscipit expedita.', imageUrl: 'https://telegra.ph/file/72e0bab08f0f093d54952.png', postDate: new Date().toLocaleDateString() },
    { id: 2, authorId: 2, title: 'Second titleMethod for selecting the exact ripening time of fruits', categories: 'Science', content: 'Lorem ipsum dolor sit amet', imageUrl: 'https://telegra.ph/file/72e0bab08f0f093d54952.png', postDate: new Date().toLocaleDateString() },
    { id: 3, authorId: 3, title: 'Third title', categories: 'Science', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, veniam iste hic accusamus, suscipit similique provident et voluptates quaerat, magnam non! Odit, dolorem. Officia provident qui hic dolorum natus ipsum. Iure, quis sint! Beatae ratione voluptates, quia neque asperiores voluptas, fugit nam a perferendis debitis magni quidem reiciendis suscipit. Rerum esse, hic alias tempore quae asperiores libero unde distinctio perferendis. Nam praesentium rem, et quas optio iure non enim quo amet repellat totam tempora nesciunt earum temporibus consectetur natus. Quae beatae quas ipsa illo debitis nisi, consectetur nesciunt est aut. Error repellat amet quis fugit modi quam blanditiis ex facilis labore? Fugit eos odit necessitatibus, quas quaerat debitis porro ratione quasi ut enim impedit adipisci, quidem officia aliquid iure delectus. Corrupti tempore veniam perspiciatis, fugiat quaerat cumque illo inventore officia repudiandae natus modi perferendis corporis numquam neque voluptate consectetur praesentium laborum incidunt dicta earum accusamus nobis aliquid magni. Corporis, atque? Labore vitae totam ea minima corporis, doloremque sequi ut quo illo neque, dolorum nam dolore commodi perferendis culpa qui sed consequuntur nesciunt dicta fugiat accusantium deleniti rem! Aut, suscipit expedita.', imageUrl: 'https://telegra.ph/file/354e1beb9b4e3174ef135.png', postDate: new Date().toLocaleDateString() },
  ]

  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      username: 'Travik',
      content: 'Какой-то комментарий',
      createdAt: new Date().toLocaleTimeString(),
      likes: 3
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      username: 'Tester',
      content: 'Second Item',
      createdAt: new Date().toLocaleTimeString(),
      likes: 0
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      username: 'Grower',
      content: 'Third Item',
      createdAt: new Date().toLocaleTimeString(),
      likes: 2
    },
    {
      id: '58692a0f-3da1-471f-bd96-145571e29d72',
      username: 'WhosIsThis',
      content: 'Third Item',
      createdAt: new Date().toLocaleTimeString(),
      likes: 12
    },
    {
      id: '58194a0f-3da1-471f-bd96-145571e29d72',
      username: 'SomeBody',
      content: 'Third Item',
      createdAt: new Date().toLocaleTimeString(),
      likes: 6
    },
    {
      id: '58191a0f-3da5-471f-bd96-145571e29d72',
      username: 'SomeBody',
      content: 'Third Item',
      createdAt: new Date().toLocaleTimeString(),
      likes: 6
    },
    {
      id: '58191a0f-3da4-471f-bd96-145571e29d72',
      username: 'SomeBody',
      content: 'Third Item',
      createdAt: new Date().toLocaleTimeString(),
      likes: 6
    },
    {
      id: '58191a0f-3da2-471f-bd96-145571e29d72',
      username: 'SomeBody',
      content: 'Third Item',
      createdAt: new Date().toLocaleTimeString(),
      likes: 6
    },
  ];

  const { postId } = route.params

  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  // useEffect(() => {

  // }, [fadeAnim]);

  const scrHeight = Dimensions.get('window').height
  const wndHeight = Dimensions.get('screen').height
  const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight : 0

  const [position] = useState(new Animated.ValueXY({ x: 0, y: 0 }));

  const [offscreen, setOffscreen] = useState(false)

  // const [[x, y], setNewPosition] = useState([0, -100])
  const handleOpenComments = () => {

    setOffscreen(true)

    Animated.parallel([
      Animated.timing(position, {
        toValue: { x: 0, y: -(scrHeight - (scrWidth / 16 * 9 - statusBarHeight)) },
        // easing: Easing.elastic(1),
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      })
    ]).start()

    /* @ts-ignore */
    // setNewPosition((state) => {
    //   const [x, y] = state
    //   if(y === -100) return [0, 0]
    //   if(y === 0) return [0, -100]
    // })
  };

  const handleCloseComments = () => {

    Animated.sequence([
      Animated.parallel([
        Animated.timing(position, {
          toValue: { x: 0, y: 0 },
          // easing: Easing.elastic(1),
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        })
      ])
    ]).start(() => {
      setOffscreen(false)
    })

  };

  const postImageRef = useRef(null)

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor="#cccccc55" translucent />

      <View style={{ position: 'absolute', top: '4%', left: '4%', zIndex: 50 }}>
        <ButtonIconCircle size={42} iconTitle='keyboard-backspace' color='#fff' func={() => navigation.pop()} />
      </View>

      <View>
        <Image ref={postImageRef} style={{ height: scrWidth / 16 * 9, width: "100%" }} source={{ uri: (posts[postId - 1].imageUrl) }} />
      </View>

      <ScrollView style={{}}>
        <View style={{ backgroundColor: '#fff' }}>
          <View
            /* @ts-ignore */
            style={{ width: "100%", display: 'flex', overflow: 'hidden', opacity: 1 }}
          >
            <View style={{ margin: 15, gap: 15 }}>
              <View>
                <Text style={{ fontWeight: "400", fontSize: 22, color: "#111" }}>{posts[postId - 1].title}</Text>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Text style={{ fontWeight: "300", fontSize: 16, color: "#666" }}>{posts[postId - 1].categories}</Text>
                  <Text style={{ fontWeight: "300", fontSize: 16, color: "#666" }}>{posts[postId - 1].postDate}</Text>
                </View>
              </View>

              <Divider />
              <View style={{ gap: 10, display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>

                <View style={{ width: '48.5%' }}>
                  <PostDetailsIndicator title='Система' subTitle='Кухня'
                    leadingIcon='emoji-objects' systemId={1} />
                </View>

                <View style={{ width: '48.5%' }}>
                  <PostDetailsIndicator title='Питание' subTitle='Огурец на кухне' nutritionId={1}
                    leadingIcon='model-training' />
                </View>

              </View>

              <Divider />


              <Text style={{ fontWeight: "300", fontSize: 16, color: "#111" }}>
                {posts[postId - 1].content}
              </Text>
            </View>

            <Divider />

          </View>

          <View style={{ margin: 15, marginTop: 10, gap: 10 }}>

            <Text style={{ color: '#111', fontWeight: '300', fontSize: 16 }}>Снимок состояния:</Text>

            <View style={{ display: 'flex', flexDirection: 'row', gap: 10, flexWrap: 'wrap' }}>
              <View style={{ width: '48.5%' }}>
                <PostDetailsIndicator title='EC' value={`700 mS`} leadingIcon='opacity' />
              </View>

              <View style={{ width: '48.5%' }}>
                <PostDetailsIndicator title='pH' value={`6.2`}
                  leadingIcon='science' />
              </View>

              <View style={{ width: '48.5%' }}>
                <PostDetailsIndicator title='EC' value={`700 mS`} leadingIcon='opacity' />
              </View>

              <View style={{ width: '48.5%' }}>
                <PostDetailsIndicator title='pH' value={`6.2`}
                  leadingIcon='science' />
              </View>

            </View>

          </View>

          <Divider />


          <View style={{ padding: 15, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <View style={{ display: 'flex', flexDirection: 'row', gap: 15 }}>
              <Pressable onPress={() => navigation.navigate('PublicGarden', { gardenId: posts[postId - 1].authorId })}><Avatar label="Kent Dodds" autoColor size={48} /></Pressable>
              <View style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Text onPress={() => navigation.navigate('PublicGarden', { gardenId: posts[postId - 1].authorId })} style={{ fontWeight: "400", fontSize: 20, color: "#111" }}>OverGrower</Text>
                <Text style={{ fontWeight: "300", fontSize: 16, color: "#666" }}>30 level</Text>
              </View>
            </View>

            <ButtonIconCircle iconTitle='favorite-outline' size={36} color='#666' />
          </View>

          <Divider />

          {/* @ts-ignore */}

          <View style={{ margin: 10 }}>

            <Button title={`${5} Комментариев`} onPress={handleOpenComments} color='#116611' variant='contained' />

          </View>

        </View>
        {/* <Button title="What" onPress={() => navigation.pop()} /> */}
        {/* </View> */}

        {/* <View style={{ height: 300 }}></View> */}

        <Animated.View style={[{ height: '100%', width: '100%', backgroundColor: '#000000', opacity: fadeAnim, position: 'absolute', zIndex: 9, display: (offscreen ? 'flex' : 'none') }]}>
        </Animated.View>

      </ScrollView>


      <Animated.View style={[{ position: 'absolute', bottom: -(scrHeight + statusBarHeight - scrWidth / 16 * 9), height: (scrHeight + statusBarHeight - scrWidth / 16 * 9), width: '100%', backgroundColor: '#fff', zIndex: 20, borderRadius: 15, borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }, { transform: position.getTranslateTransform() }]}>
        <View style={{}}>
          <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: "space-between", marginVertical: 10, marginLeft: 20, marginRight: 10 }}>
            <Text style={{ fontSize: 18, fontWeight: '400', color: '#111' }}>Комментарии</Text>
            <ButtonIconCircle color='#111' iconTitle='close' size={38} func={handleCloseComments} />
          </View>
          {/* <Button title='Button' onPress={handleToggleComments} /> */}


          <Divider />

          <View style={{ paddingHorizontal: 12 }}>
            <FlatList
              data={DATA}
              ListHeaderComponent={() => <View style={{ marginTop: 15 }}></View>}
              ListFooterComponent={() => <View style={{ marginBottom: 60 }}></View>}
              ItemSeparatorComponent={() => (
                // <Divider style={{ marginVertical: 10 }} />
                <View style={{ marginVertical: 10 }}></View>
              )}
              renderItem={(data) => (
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                  <View style={{ display: 'flex', flexDirection: 'row', gap: 12 }}>
                    <Avatar color='#116611' label={data.item.username} size={24} />
                    <View style={{ display: 'flex', flexDirection: 'column' }}>
                      <Text style={{ color: '#444', fontSize: 12 }}>{data.item.username} · {data.item.createdAt}</Text>
                      <Text style={{ color: '#111', fontSize: 14 }}>{data.item.content}</Text>
                      <View style={{ display: 'flex', flexDirection: 'row', gap: 15, marginVertical: 12, justifyContent: 'space-between', width: 130 }}>
                        <View style={{ position: 'relative', display: 'flex', flexDirection: 'row', gap: 5, alignItems: 'center' }}>
                          <ButtonIconCircle iconTitle='thumb-up-off-alt' color='#111' size={24} />
                          <Text style={{ position: 'absolute', left: 22, color: '#111', fontSize: 12 }}>{data.item.likes}</Text>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row' }}>
                          <ButtonIconCircle iconTitle='thumb-down-off-alt' color='#111' size={24} />
                          {/* <Icon name='thumb-down-off-alt' color='#111' size={18} /> */}
                        </View>
                        <View>
                          <ButtonIconCircle iconTitle='messenger-outline' color='#111' size={24} />
                          {/* <Icon name='thumb-up-off-alt' color='#111' size={18} /> */}
                        </View>
                      </View>
                    </View>
                  </View>
                  <ButtonIconCircle iconTitle="more-vert" size={24} color='#666' />
                </View>
              )} />
          </View>

          <View style={{ position: 'absolute', bottom: 54, height: 54, backgroundColor: "#fff", width: '100%' }}>
            <Divider />
            <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 12, paddingVertical: 5, gap: 12 }}>
              <Avatar color='#116611' label={'Travik'} size={24} />
              <View style={{ height: 38, backgroundColor: '#eee', borderRadius: 4, paddingHorizontal: 4, flex: 1, justifyContent: 'center' }}>
                <TextInput style={{ paddingVertical: 0, color: '#111' }} placeholder='Введите комментарий' placeholderTextColor='#111' />
              </View>
            </View>
          </View>

        </View>
      </Animated.View>

    </SafeAreaView>
  )
}
