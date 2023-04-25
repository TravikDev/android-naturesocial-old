import React, { useState } from 'react'
import { Dimensions, ScrollView, View } from 'react-native'
import { PostFilterContainer } from '../../../../organisms/postsList/PostFilterContainer/PostFilterContainer'
import { PostsListCard } from '../../../../organisms/postsList/PostCard'
import { FeedNewsCard } from '../../../../organisms/feed/FeedNewsCard/FeedNewsCard'
import { Pressable } from '@react-native-material/core'
import { ButtonIconCircle } from '../../../../atoms/Buttons/ButtonIconCircle'
import { PostSortContainer } from '../../../../organisms/postsList/PostSortContainer'
// import { FeedNewsCard } from '../../../organisms/Feed/FeedNewsCa'

const scrHeight = Dimensions.get('screen').height

/* @ts-ignore */
export const ScreenNewsList = ({ navigation }) => {


    const [isExpandedSort, toggleIsExpandedSort] = useState(false)

    const toggleFilterContainer = () => {
        toggleIsExpandedSort(state => !state)
    }


    const [isExpandedFilter, toggleIsExpandedFilter] = useState(false)

    const toggleSortContainer = () => {
        toggleIsExpandedFilter(state => !state)
    }


    const news = [
        { id: 1, title: 'Plants can «scream» from stress through ultrasound', categories: 'Science', content: 'Studies show that ultrasonic signals are an important aspect of plant life strategy and can serve as a means of protection and survival in difficult conditions. ', imageUrl: 'https://telegra.ph/file/72e0bab08f0f093d54952.png' },
        { id: 2, title: 'Method for selecting the exact ripening time of fruits', categories: 'Science', content: 'Scientists from Arizona State University have developed a new method that allows for the precise determination of the ripening moment of fruits and vegetables.', imageUrl: 'https://telegra.ph/file/354e1beb9b4e3174ef135.png' },
        { id: 3, title: 'Genetically modified bacteria protect plants', categories: 'Science', content: 'Spanish scientists have announced their new method for protecting plants from pests, which is based on the use of genetically modified bacteria.', imageUrl: 'https://telegra.ph/file/7ad8da1efd6eac7ad9625.png' },
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

                    {
                        news.sort((a, b) => b.id - a.id).map(post => {
                            return (
                                <FeedNewsCard key={post.id} newsId={post.id} title={post.title} categories={post.categories} imageUrl={post.imageUrl} navigation={navigation}>
                                    {post.content}
                                </FeedNewsCard>
                            )
                        })
                    }

                </View>

            </View>
        </ScrollView>
    )
}
