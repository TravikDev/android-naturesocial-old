// import { Avatar, Button, Divider, Icon, Pressable } from '@react-native-material/core'
import { ScrollView, Text, View, Image, Dimensions } from 'react-native'
import { ButtonIconCircle } from '../../../../atoms/Buttons/ButtonIconCircle'
import { PostFilterContainer } from '../../../../organisms/postsList/PostFilterContainer/PostFilterContainer'
// import { PostsListCard } from '../../../../organisms/postsList/PostCard/PostsListCard'
import { FeedPostCard } from '../../../../organisms/feed/FeedPostCard'
import { useState } from 'react'
import { PostSortContainer } from '../../../../organisms/postsList/PostSortContainer/PostSortContainer'

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
        { id: 1, authorId: 1, title: 'First title', categories: 'App updates', content: 'Studies show that ultrasonic signals are an important aspect of plant life strategy and can serve as a means of protection and survival in difficult conditions. ', imageUrl: 'https://telegra.ph/file/72e0bab08f0f093d54952.png', createdDate: new Date().toLocaleDateString()  },
        { id: 2, authorId: 2, title: 'Second titleMethod for selecting the exact ripening time of fruits', categories: 'Science', content: 'Studies show that ultrasonic signals are an important aspect of plant life strategy and can serve as a means of protection and survival in difficult conditions.', imageUrl: 'https://telegra.ph/file/72e0bab08f0f093d54952.png', createdDate: new Date().toLocaleDateString()  },
        { id: 3, authorId: 3, title: 'Third title', categories: 'Science', content: ' Scientists from Arizona State University have developed a new method that allows for the precise determination of the ripening moment of fruits and vegetables.', imageUrl: 'https://telegra.ph/file/354e1beb9b4e3174ef135.png', createdDate: new Date().toLocaleDateString() },
    ]

    return (
        <ScrollView contentContainerStyle={{ backgroundColor: '#fff' }}>

            <View style={{ marginHorizontal: 10 }}>

                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ left: -8 }}>
                        <ButtonIconCircle iconTitle='sort' size={38} func={toggleSortContainer} color='#666' />
                    </View>

                    <View style={{ right: -8 }}>
                        <ButtonIconCircle iconTitle='filter-alt' size={38} func={toggleFilterContainer} color='#666' />
                    </View>

                </View>


                <View>
                    <PostSortContainer isExpanded={isExpandedSort} />
                    <PostFilterContainer isExpanded={isExpandedFilter} />
                </View>

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
    )
}
