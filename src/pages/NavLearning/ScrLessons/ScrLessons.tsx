import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import { LearningCard } from '../../../organisms/learning'

export const ScrLessons = () => {

  const tasksList = [
    { id: 1, title: 'What is hydroponics?', categories: 'Basics', level: 'Junior', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum natus aperiam dolorem, ab iusto quis! Officiis excepturi voluptatibus ipsam aliquid voluptatum deleniti aspernatur, voluptates, debitis odio iure cumque, nam nihil.' },
    { id: 2, title: 'Second', categories: 'Basics', level: 'Junior', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum natus aperiam dolorem, ab iusto quis! Officiis excepturi voluptatibus ipsam aliquid voluptatum deleniti aspernatur, voluptates, debitis odio iure cumque, nam nihil.' },
    { id: 3, title: 'Third', categories: 'Basics', level: 'Junior', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum natus aperiam dolorem, ab iusto quis! Officiis excepturi voluptatibus ipsam aliquid voluptatum deleniti aspernatur, voluptates, debitis odio iure cumque, nam nihil.' },
  ]

  return (
    <ScrollView>
      <View style={{ display: 'flex', flex: 1, alignItems: 'center', margin: 10, gap: 10 }}>
        {tasksList.map(task => (
          <LearningCard key={task.id} categories={task.categories} title={task.title} >
            {task.description}
          </LearningCard>
        ))}
      </View>
    </ScrollView >
  )
}
