// @flow

import { View, Text, StyleSheet, Pressable } from 'react-native'
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setName } from '../redux/actions';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function Thermostat() {
    const { name, age, color } = useSelector(state => state.userReducer);
    const dispatch = useDispatch();

    const [pressed, setPressed] = useState(true);
    const getBackgroundcolor = () => {
        if (color == 'music') return 'yellow';
        else if (color == 'rocket') return 'red';
        else if (color == 'home') return 'green';
        else if (color == 'info') return 'white';
        else return 'white'
    }
    return (
        <View style={[styles.Thermostat_container, { flex: 1, backgroundColor: getBackgroundcolor() }]}>
            <View style={styles.header_container}>
                <Header></Header>
            </View>
            <View style={{ flex: 10 }}>
                <Mode />
            </View>
        </View>
    )
}
const Header = (props) => {
    const [pressed, setPressed] = useState(true);
    return (
        <View style={styles.header_container}>
            <View style={styles.header_left}>
                <View style={styles.header_icon_container}>
                    <Icon size={10} name='temperature-low' ></Icon>
                </View>
                <View style={styles.header_left_text}>
                    <Text style={styles.header_left_text_haut}>Thermostat</Text>
                    <Text style={styles.header_left_text_bas}>Auto Cooling</Text>
                </View>
            </View>
            <View style={styles.header_right}>
                <View style={styles.header_right_container}>
                    <View style={styles.header_right_text_container}>
                        <Text style={[styles.header_right_text, { color: pressed ? 'black' : 'darkgrey' }]}>On</Text>
                        <Text style={[styles.header_right_text, { color: pressed ? 'darkgrey' : 'black' }]}>Off</Text>
                    </View>
                    <Pressable
                        onPress={() => setPressed(!pressed)}
                    >
                        <View style={styles.header_icon_container} >
                            <Icon size={10} name='lock' ></Icon>
                        </View>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}
const Mode = (props) => {
    return (
        <View style={styles.mode_container}>
            <View style={styles.mode_figure_container}>

            </View>
            <View style={styles.mode_options_container}>
                <Mode_option text_haut='Fan Speed' text_bas='3 level off' />
                <Mode_option text_haut='Fan Speed' text_bas='3 level off' />
                <Mode_option text_haut='Fan Speed' text_bas='3 level off' />
            </View>
        </View>
    )
}
const Mode_option = (props) => {
    return (
        <View style={styles.mode_option}>
            <View style={styles.mode_option_icon_container}>
                <Icon name='info'></Icon>
            </View>
            <View style={styles.mode_option_text_container}>
                <Text style={styles.header_left_text_haut}>{props.text_haut}</Text>
                <Text style={styles.header_left_text_bas}>{props.text_bas}</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({

    //--------Nest Learning Thermostat-----//

    //-------------Mode--------------//

    mode_option_text_container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    mode_option_text_container: {
        flex: 1,
    },

    mode_option_icon_container: {
        backgroundColor: 'grey',
        borderRadius: 10,
        flex: 2,
        



        alignItems: 'center',
        justifyContent: 'center',
    },


    mode_options_container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',

    },

    mode_figure: {

        flex: 1,
    },

    mode_figure_container: {
        flex: 5,
        backgroundColor: 'black',
        borderRadius: 200,
        marginHorizontal: 30,
        marginVertical: 5,
    },

    mode_container: {
        flex: 1,

    },
    //-------------Head--------------------//
    
    header_right_text: {
        marginHorizontal: 5,
        fontSize: 8,
    },
    header_right_text_container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    header_right_container: {
        flex: 0.5,
        flexDirection: 'row',
        backgroundColor: 'grey',

        borderRadius: 5,
        height: 18,
        width: 30,
    },
    header_right: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        
    },
    header_icon_container: {
        backgroundColor: 'cyan',
        borderRadius: 15,
        height: 18,
        width: 18,

        alignItems: 'center',
        justifyContent: 'center',
    },
    header_left_text_bas: {
        fontSize: 5,
    },
    header_left_text_haut: {
        color: 'black',
        fontSize: 7,
    },
    header_left_text: {
    },
    header_left: {
        flex: 1,
        flexDirection: 'row',
    },
    header_container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',

        marginHorizontal: 5,
    },
    //--------Container--------------------//
    Thermostat_container: {
        flex: 1,
        paddingVertical: 10,
    },



})