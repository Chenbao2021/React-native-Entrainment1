// @flow

import React, { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable,
} from 'react-native';

import { useDispatch, Provider } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome5'
import Lroom from './components/Lroom'
import Thermostat from './components/Thermostat'
import { Store } from './redux/store'
import { changeColor } from './redux/actions';


function Scenes(props): any {
  const dispatch = useDispatch();
  // dispatch(changeColor(props.logo));
  return (
    <Pressable
      onPress={() => { props.setPressed(props.logo); dispatch(changeColor(props.logo)) }}
    >
      <View style={styles.scenes_component}>
        <View style={props.pressed === props.logo ? styles.scene_icon_clicked : styles.scene_icon}>
          <Icon name={props.logo} size={12} />
        </View>
        <Text style={{ fontSize: 7, flex: 1 }}>{props.text}</Text>
      </View>
    </Pressable>
  )
}

function AppWrapper(): any {
  return (
    <Provider store={Store}>
      <App />
    </Provider>
  )
}

function App(): any {
  const [pressed, setPressed] = useState(false);
  // Quelle variables vont etre change

  return (
    <View style={styles.main}>
      <View style={styles.barre}>
        <View style={styles.barre_iconTop}>
          <Icon name="book" size={15} color="blue" />
          <View style={{ flexDirection: 'row' }}>
            <Icon name="home" size={15} color="blue" />
            <Icon name="plus" size={15} color="blue" style={{ marginHorizontal: 10, }} />
          </View>
        </View>
        <View>
          <Text style={{ color: 'black', marginBottom: 10, fontSize: 17, marginHorizontal: 6 }}>Yuhang &apos; s Home</Text>
        </View>
        <View style={styles.input}>
          <Icon name="search" size={15} style={{ flex: 1 }} />
          <TextInput
            placeholder="Search..."
            style={{ flex: 8, fontSize: 10, padding: 0 }}
          />
          <Icon name="microphone" size={15} style={{ flex: 1 }} />
        </View>
        <View style={styles.scenes_container}>
          <View>
            <Text style={styles.text}>SCENES</Text>
          </View>
          <View style={styles.scenes}>
            <Scenes logo="music" text="Listen to Music" setPressed={setPressed} pressed={pressed} />
            <Scenes logo="rocket" text="Relaxing" setPressed={setPressed} pressed={pressed} />
            <Scenes logo="home" text="Arrive Home" setPressed={setPressed} pressed={pressed} />
            <Scenes logo="info" text="Good Night" setPressed={setPressed} pressed={pressed} />
          </View>
        </View>
        <ScrollView>
          <View>
            <View style={styles.rooms_container}>
              <View>
                <Text style={styles.text}>ROOMS</Text>
              </View>
              <View style={styles.rooms}>
                <View style={styles.room}>
                  <Icon name="laptop" size={10} />
                  <Text style={styles.room_text}>Entrance</Text>
                </View>
                <View style={styles.room}>
                  <Icon name="laptop" size={10} />
                  <Text style={styles.room_text}>Backyard</Text>
                </View>
                <Pressable
                  style={styles.press}
                >
                  <View style={[styles.room, { backgroundColor: pressed ? '#1e90ff' : 'white' }]}>
                    <Icon name="laptop" size={10} />
                    <Pressable
                      onPress={() => setPressed(!pressed)}
                    >
                      <Text style={styles.room_text}>Living Room</Text>
                    </Pressable>
                  </View>
                </Pressable>

                <View style={styles.room}>
                  <Icon name="laptop" size={10} />
                  <Text style={styles.room_text}>Hallway</Text>
                </View>
                <View style={styles.room}>
                  <Icon name="laptop" size={10} />
                  <Text style={styles.room_text}>Bedroom</Text>
                </View>
                <View style={styles.room}>
                  <Icon name="laptop" size={10} />
                  <Text style={styles.room_text}>Front Door</Text>
                </View>
              </View>
            </View>
            <View style={styles.automations_container}>
              <Text style={styles.text}>AUTOMATIONS</Text>
              <View style={styles.automations}>
                <Icon name="rocket" size={10} />
                <View style={styles.automation}>
                  <Text style={styles.text_haut}>10:25 am Daiy</Text>
                  <Text style={styles.text_bas}>6 accessoires,2 Scenes</Text>
                </View>
              </View>
              <View style={styles.automations}>
                <Icon name="rocket" size={10} />
                <View style={styles.automation}>
                  <Text style={styles.text_haut}>10:25 am Daiy</Text>
                  <Text style={styles.text_bas}>6 accessoires,2 Scenes</Text>
                </View>
              </View>
              <View style={styles.automations}>
                <Icon name="rocket" size={10} />
                <View style={styles.automation}>
                  <Text style={styles.text_haut}>10:25 am Daiy</Text>
                  <Text style={styles.text_bas}>6 accessoires,2 Scenes</Text>
                </View>
              </View>
              <View style={styles.automations}>
                <Icon name="rocket" size={10} />
                <View style={styles.automation}>
                  <Text style={styles.text_haut}>10:25 am Daiy</Text>
                  <Text style={styles.text_bas}>6 accessoires,2 Scenes</Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
        <View style={{ flexDirection: 'row', borderTopWidth: 1, borderColor: 'black', justifyContent: 'space-between' }}>
          <View style={styles.barre_bas}>
            <Icon name="paypal" size={20} />
            <View style={{ justifyContent: 'center', marginLeft: 5 }}>
              <Text style={{ fontSize: 12, color: 'black' }}>7ahang</Text>
              <Text style={styles.text_bas}>Members Part Access</Text>
            </View>
          </View>
          <Icon name="rocket" size={25} />
        </View>
      </View>
      <View style={styles.Lroom}>
        {pressed ? <Lroom /> : <View />}
      </View>
      <View style={styles.thermostat}>
        <Thermostat />
        <View style={{ flex: 0.5, margin: 2 }} />
      </View>
    </View>
  )
}

export default AppWrapper

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'row'
  },
  press: {
  },
  thermostat: {
    flex: 5,
    backgroundColor: 'green',
  },
  Lroom: {
    flex: 5,
  },
  scene_icon: {
    flex: 1,
    backgroundColor: 'grey',
    borderRadius: 20,
    minWidth: 30,
    maxWidth: 30,
    minHeight: 30,
    maxHeight: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'white',
  },
  scene_icon_clicked: {
    flex: 1,
    backgroundColor: 'purple',
    borderRadius: 20,
    minWidth: 30,
    maxWidth: 30,
    minHeight: 30,
    maxHeight: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'grey',
  },
  barre_bas: {
    flexDirection: 'row',

  },
  text_bas: {
    fontSize: 5,
    color: 'grey',
    marginLeft: 3,
  },
  text_haut: {
    fontSize: 7,
    color: 'black',
    marginLeft: 3,
  },
  automation: {
    paddingHorizontal: 2,
  },
  automations: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 5,
    paddingVertical: 2,
  },
  automations_container: {
    borderTopWidth: 1,
    borderColor: 'black',
  },
  room_text: {
    color: 'black',
    fontSize: 8,
    marginHorizontal: 2,
    paddingHorizontal: 5,
  },
  rooms: {
    justifyContent: 'center',

  },
  room: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    borderRadius: 5,
  },
  rooms_container: {
    flexDirection: 'column',
    borderTopWidth: 1,
    borderColor: 'black',
  },
  scenes_component: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'

  },
  scenes_container: {
    marginVertical: 10,
  },
  scenes: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    height: 50,
  },
  barre: {
    flex: 4,
    flexDirection: 'column',
    margin: 5,
    paddingVertical: 5,
  },
  barre_iconTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  text: {
    fontSize: 8,
  },
  input: {
    paddingHorizontal: 3,
    backgroundColor: 'grey',
    borderRadius: 5,
    height: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
})
