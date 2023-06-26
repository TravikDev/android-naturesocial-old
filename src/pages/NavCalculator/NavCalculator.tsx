import { useEffect, useState } from "react"
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
// import { MacroElementsScreen } from "./ScrMacro";
// import { MicroElementsScreen } from "./ScrMicro";
// import { ConcentratesScreen } from "./ScrConcentrates";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TextInput, Text, View, StyleSheet, Modal, Alert, TouchableWithoutFeedback, FlatList, Switch } from "react-native"
import { Button, Divider, Icon, Pressable } from "@react-native-material/core";
import { NavCalculatorTabs } from "./NavCalculatorTabs";
import { ButtonIconCircle } from "../../atoms/Buttons/ButtonIconCircle";
import { useNavigation } from "@react-navigation/native";

const BottomTab = createBottomTabNavigator()


export const NavCalculator = () => {



  const [modalVisible, setModalVisible] = useState(false);

  const [switchOption, setSwitchOption] = useState(false)

  const [forDelete, setForDelete] = useState(false)

  const [option1, setOption1] = useState(false)
  const [option2, setOption2] = useState(false)
  const [option3, setOption3] = useState(false)
  const [option4, setOption4] = useState(false)

  const [selectedStage, setSelectedStage] = useState('')

  const [stagesArr, setStagesArr] = useState(['Старт', 'Вега', 'Цвет', 'Плод', 'Конец'])

  const [newStage, setNewStage] = useState('')
  const [volume, setVolume] = useState('1')

  // const newStageRef = useRef(null)

  const [inputText, setInputText] = useState('')

  return (
    <BottomTab.Navigator screenOptions={{ headerShown: false }}>
      <BottomTab.Screen name="TopTabs" component={NavCalculatorTabs} initialParams={{ volume }}
        options={{
          tabBarLabel: () => (
            <View style={styles.bottomTabContainer}>

              <Modal
                animationType="fade"
                transparent={true}
                // hitSlop={{ left: 100, }}
                needsOffscreenAlphaCompositing


                visible={modalVisible}

                // presentationStyle='overFullScreen'
                onRequestClose={() => {
                  Alert.alert('Модальное окно было закрыто.');
                  setModalVisible(!modalVisible);
                }}>
                <TouchableWithoutFeedback onPress={() => { setModalVisible(false) }}>
                  <View style={styles.overlay} />
                </TouchableWithoutFeedback>
                <View style={styles.centeredView}>
                  <View style={styles.modalView}>
                    <View style={{ width: '100%' }}>

                      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', left: 5, paddingBottom: 5 }}>
                        <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', width: '100%' }}>
                          <Text style={{ fontSize: 20, fontWeight: '400', color: '#111' }}>Выбор фазы</Text>
                          <ButtonIconCircle func={() => setModalVisible(false)} iconTitle='close' color='#111' size={42} />
                        </View>
                        {/* <Icon name="close" size={28} /> */}
                      </View>
                      <Divider style={{ marginBottom: 10 }} />

                      <View style={{ gap: 10, maxHeight: 500 }}>

                        <FlatList
                          data={stagesArr}
                          ItemSeparatorComponent={() => <View style={{ height: 10 }}></View>}
                          // ListFooterComponent={() => <View></View>}
                          renderItem={(stage) => (
                            <View style={{ borderRadius: 10, overflow: 'hidden' }}>
                              <Pressable style={{ padding: 10, backgroundColor: '#eee', borderRadius: 10, flexDirection: 'row', justifyContent: 'space-between' }} onPress={(e) => { setSelectedStage(stage.item); setModalVisible(false) }}>
                                <Text style={styles.modalText}>{stage.item}</Text>
                                {forDelete && <Switch value={option1} onValueChange={() => setOption1(state => !state)} />}
                              </Pressable>
                            </View>
                          )}
                        // keyExtractor={item => item.}
                        />
                        {/* {stagesArr.map((val, i) => (
                    <View key={i} style={{ borderRadius: 10, overflow: 'hidden' }}>
                      <Pressable style={{ padding: 10, backgroundColor: '#eee', borderRadius: 10, flexDirection: 'row', justifyContent: 'space-between' }} onPress={(e) => { setSelectedStage(val); setModalVisible(false) }}>
                        <Text style={styles.modalText}>{val}</Text>
                        {forDelete && <Switch value={option1} onValueChange={() => setOption1(state => !state)} />}
                      </Pressable>
                    </View>
                  ))} */}

                        <View style={{ borderRadius: 10, overflow: 'hidden' }}>
                          <View style={{ padding: 8, backgroundColor: '#eee', borderRadius: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                            <TextInput
                              placeholder='Введите название фазы...'
                              placeholderTextColor='#111'
                              style={{ fontSize: 18, paddingVertical: 0, fontWeight: '300', color: '#111', width: '88%' }}
                              value={newStage}
                              onChangeText={setNewStage}
                            />
                            <ButtonIconCircle iconTitle='add' color='#111' size={32} func={() => { setStagesArr(state => state.concat(newStage)); setNewStage('') }} />
                          </View>
                        </View>

                      </View>

                    </View>

                    <Divider />

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', gap: 10 }}>

                      <Button
                        title={forDelete ? 'Готово' : 'Удаление'}
                        tintColor='116611' color='#116611' variant='outlined' style={{ flex: 1 }} onPress={() => setForDelete(state => !state)} />

                      <Button disabled={forDelete ? true : false} title='Сохранить' color='#116611' style={{ flex: 1 }} />
                      {/* <Pressable
                  style={[styles.button, styles.buttonClose, { flex: 1 }]}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={styles.textStyle}>Hide Modal</Text>
                </Pressable> */}
                    </View>
                  </View>
                </View>
              </Modal>
              <View style={styles.bottomLeftTabContainer}>
                <Text style={{ color: '#111', fontWeight: '300', fontSize: 18 }}>Объём:</Text>
                <View style={{ overflow: 'hidden', maxWidth: 120, justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                  <TextInput
                    style={{ fontSize: 18, fontWeight: '300', color: '#111', textAlign: 'auto', paddingVertical: 0 }}
                    placeholderTextColor='#111'
                    placeholder="10 (л)"
                    value={volume}
                    onChangeText={setVolume}
                    keyboardType="numeric"
                    defaultValue="10"
                    maxLength={11}
                  /></View>
              </View>

              <View style={{ flexDirection: 'row', gap: 10 }}>
                <Button
                  style={{ maxWidth: 110, paddingHorizontal: 0 }}
                  title={selectedStage || 'Фаза'}
                  tintColor='#fff'
                  color='#3FB049'
                  variant="outlined"
                  onPress={() => { setModalVisible(true) }} />


                <View style={styles.bottomRightTabContainer}>
                  <Pressable style={{ padding: 4 }} onPress={() => {}}>
                    <Icon name="save" color="#fff" size={26} />
                  </Pressable>
                </View>

              </View>


            </View>
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 22,
    zIndex: 6,
    // backgroundColor: '#cccccccc'
  },
  modalView: {
    // margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    // alignItems: 'center',
    width: '80%',
    gap: 10,
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 1,
    //   height: 2,
    // },
    // shadowOpacity: 0.9,
    // shadowRadius: 5,
    elevation: 4,
  },
  button: {
    borderRadius: 5,
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc'
    // elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#efefef',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    fontSize: 18,
    color: '#111',
    fontWeight: '400',
    textAlign: 'center',
  },
  modalText: {
    // marginBottom: 15,
    // textAlign: 'center',
    paddingVertical: 2,
    color: '#111',
    fontSize: 18,
    fontWeight: '300'

  },
  overlay: {
    position: 'absolute',
    zIndex: 5,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  bottomTabContainer: {
    width: "100%",
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopColor: '#ccc',
    borderTopWidth: 1,
    gap: 5
  },
  bottomLeftTabContainer: {
    // width: "33.33%",
    flexGrow: 1,
    // paddingHorizontal: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    // paddingHorizontal: 10,
    alignItems: 'center',
    // backgroundColor: '#e7e7e7',
    overflow: 'hidden',
  },
  bottomCenterTabContainer: {
    // width: "33.33%",
    height: 36,
    // paddingHorizontal: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10
  },
  bottomRightTabContainer: {
    // width: "33.33%",
    // paddingHorizontal: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#3FA949',
    borderRadius: 5,
    overflow: 'hidden'
  },
})