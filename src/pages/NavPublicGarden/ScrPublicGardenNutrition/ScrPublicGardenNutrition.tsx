import React from 'react'
import { Text, View, VirtualizedList } from 'react-native'

export const ScrPublicGardenNutrition = () => {


  type ItemData = {
    id: string;
    title: string;
  };

  const getItem = (_data: unknown, index: number): ItemData => ({
    id: Math.random().toString(12).substring(0),
    title: `Item ${index + 1}`,
  });

  const getItemCount = (_data: unknown) => 50;

  type ItemProps = {
    title: string;
  };

  const Item = ({ title }: ItemProps) => (
    <View style={{ height: 50, backgroundColor: '#ccc'}}>
      <Text style={{ color: '#000'}}>{title}</Text>
    </View>
  );

  return (
    <View>
      <VirtualizedList
        initialNumToRender={10}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={item => item.id}
        getItemCount={getItemCount}
        getItem={getItem}
      />
      <Text>
        Nutrition
      </Text>
    </View>
  )
}
