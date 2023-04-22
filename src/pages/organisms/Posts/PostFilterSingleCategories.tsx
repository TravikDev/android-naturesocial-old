import { Divider, Pressable } from '@react-native-material/core'
import React, { Fragment, useState } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { SpoilerFilter } from '../../../atoms/Spoilers/SpoilerFilter'

/* @ts-ignore */
export const PostFilterSingleCategories = ({ arrCategories, expanded, setExpanded = f => f }) => {


  const [selectedCategory, setSelectedCategory] = useState(arrCategories[0])

  const handleOnChangeCategory = (category: string) => {
    setSelectedCategory(category)
    setExpanded(false)
  }

  return (
    <View style={{ zIndex: 5 }}>
      {/* @ts-ignore */}
      <Pressable style={styles.pressableTitle} onPress={setExpanded}>
        <Text style={{ color: '#111', fontSize: 16 }}>
          {selectedCategory}
        </Text>
      </Pressable>
      {expanded && (
        arrCategories && (<View style={{ height: 110, width: '100%', backgroundColor: '#fff', zIndex: 10, top: 0, borderWidth: 1, borderColor: '#ccc', borderRadius: 5, left: 0, right: 0, bottom: 0 }}>

          <ScrollView style={{ zIndex: 50 }} nestedScrollEnabled>

            {
              /* @ts-ignore */
              arrCategories.map((category, idx) => (
                <View key={category}>
                  <Pressable style={styles.categoryContainer} onPress={() => handleOnChangeCategory(category)}>
                    <Text style={styles.categoryText}>{category}</Text>
                  </Pressable>
                  {idx !== arrCategories.length - 1 && <Divider />}
                </View>))
            }

          </ScrollView>

        </View>)
      )}
    </View>
  )
}


const styles = StyleSheet.create({
  pressableTitle: {
    height: 42,
    width: '100%',
    borderRadius: 5,
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: "#ccc",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 5,
    zIndex: 10
  },
  categoryContainer: {
    height: 42,
    display: 'flex',
    justifyContent: 'center',
    paddingHorizontal: 5,
    zIndex: 20
  },
  categoryText: {
    color: "#111"
  }
})