// import { Avatar, Button, Divider, Icon, Pressable } from '@react-native-material/core'
import { ScrollView, Text, View, Image, Dimensions, StatusBar } from 'react-native'
import { ButtonIconCircle } from '../../../../atoms/Buttons/ButtonIconCircle'
import { PostFilterContainer } from '../../../../organisms/postsList/PostFilterContainer/PostFilterContainer'
// import { PostsListCard } from '../../../../organisms/postsList/PostCard/PostsListCard'
import { FeedPostCard } from '../../../../organisms/feed/FeedPostCard'
import { useState } from 'react'
import { PostSortContainer } from '../../../../organisms/postsList/PostSortContainer/PostSortContainer'
import { SafeAreaView } from 'react-native-safe-area-context'

const scrHeight = Dimensions.get('screen').height

/* @ts-ignore */
export const ScrPostsList = ({ navigation }) => {


    const [isExpandedSort, toggleIsExpandedSort] = useState(false)

    const toggleFilterContainer = () => {
        toggleIsExpandedSort(state => !state)
    }


    const [isExpandedFilter, toggleIsExpandedFilter] = useState(false)

    const toggleSortContainer = () => {
        toggleIsExpandedFilter(state => !state)
    }


    const posts = [
        { id: 1, authorId: 1, title: 'Заголовок', categories: 'Категория', content: 'Не убивайте свои сердца большим количеством еды и питья, потому что сердце, как растение, погибает, если его поливать слишком обильно.', imageUrl: 'https://telegra.ph/file/72e0bab08f0f093d54952.png', createdDate: new Date().toLocaleDateString() },
        { id: 2, authorId: 2, title: 'Загловок', categories: 'Категория', content: 'В один прекрасный день и ты станешь лакомством для червей и удобрением для растений.', imageUrl: 'https://telegra.ph/file/72e0bab08f0f093d54952.png', createdDate: new Date().toLocaleDateString() },
        { id: 3, authorId: 3, title: 'Заголовок', categories: 'Категория', content: ' Многие люди, подобно растениям, наделены скрытыми свойствами: обнаружить их может только случай.', imageUrl: 'https://telegra.ph/file/354e1beb9b4e3174ef135.png', createdDate: new Date().toLocaleDateString() },
    ]

    return (

            <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <StatusBar backgroundColor='#fff' barStyle={'dark-content'} />

                <ScrollView>

                    <View style={{ marginHorizontal: 10, marginBottom: 10, paddingTop: 15 }}>

                        {/* <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{ left: -8 }}>
                                <ButtonIconCircle iconTitle='sort' size={38} func={toggleSortContainer} color='#666' />
                            </View>

                            <View style={{ right: -8 }}>
                                <ButtonIconCircle iconTitle='filter-alt' size={38} func={toggleFilterContainer} color='#666' />
                            </View>

                        </View> */}


                        {/* <View>
                            <PostSortContainer isExpanded={isExpandedSort} />
                            <PostFilterContainer isExpanded={isExpandedFilter} />
                        </View> */}

                        <View style={{ gap: 10 }}>

                            {posts.map(post => (
                                <View key={post.id}>
                                    <FeedPostCard postId={post.id} title={post.title} categories={post.categories} imageUrl={post.imageUrl} navigation={navigation} createdDate={post.createdDate}
                                        authorId={post.authorId}>
                                        {post.content}
                                    </FeedPostCard>
                                </View>
                            ))}

                        </View>

                    </View>
                </ScrollView>
            {/* </View> */}
        </SafeAreaView>
    )
}
