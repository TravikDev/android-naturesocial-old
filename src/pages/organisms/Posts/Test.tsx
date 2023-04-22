import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

const data = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' },
  { id: 4, name: 'Item 4' },
  { id: 5, name: 'Item 5' },
  { id: 6, name: 'Item 6' },
  { id: 7, name: 'Item 7' },
  { id: 8, name: 'Item 8' },
  { id: 9, name: 'Item 9' },
  { id: 10, name: 'Item 10' },
  { id: 11, name: 'Item 11' },
  { id: 12, name: 'Item 12' },
  { id: 13, name: 'Item 13' },
  { id: 14, name: 'Item 14' },
  { id: 15, name: 'Item 15' },
  { id: 16, name: 'Item 16' },
  { id: 17, name: 'Item 17' },
  { id: 18, name: 'Item 18' },
  { id: 19, name: 'Item 19' },
  { id: 20, name: 'Item 20' },
];

export const Test = () => {
  const [items, setItems] = useState(data);

  /* @ts-ignore */
  const handleRemove = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <View style={styles.container}>
      <ScrollView nestedScrollEnabled>
        {items.map((item) => (
          <View key={item.id} style={styles.item}>
            <Text style={styles.text}>{item.name}</Text>
            <Text style={styles.remove} onPress={() => handleRemove(item.id)}>
              Remove
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 300,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    borderRadius: 5,
  },
  text: {
    fontWeight: 'bold',
  },
  remove: {
    color: 'red',
    fontWeight: 'bold',
  },
});
