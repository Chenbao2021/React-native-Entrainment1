// @flow

import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome5';

//------------Edit-----------//
type propsEdit = {
    header_text: string,
}

const Edit = (props: propsEdit) => {
    return (
        <Text style={styles.header_text}>EDIT</Text>
    )
}
//----------LivingRoom-------//
const LivingRoom = (props) => {
    return (
        <>
            <Text style={ styles.titre_text }>Living Room</Text>
            <View style={styles.titre_weather}>
                <View style={styles.titre_weather_view}>
                    <Icon name='rocket' size={7} />
                    <Text style={styles.titre_weather_text}>72%</Text>
                </View>
                <View style={{ width: 1, height: 8, backgroundColor: '#a9a9a9', marginLeft: 5 }} />
                <View style={styles.titre_weather_view}>
                    <Icon name='rocket' size={7} style={styles.titre_weather_Icon} />
                    <Text style={styles.titre_weather_text}>32%</Text>
                </View>
            </View>
        </>
    )
}

type Props = {
    type: number,
    name: string,
    textHaut: string,
    textBas: string,
    info: boolean
}

//----------Accessoires------//
const Accessoires_component = (props: Props) => {
    const SizeIconGauche = 10;
    const SizeIconDroite = 4;
    return (
        <View style={[styles.Accessoires_component_container, { flex: props.type == 1 ? 3 : 6 }]}>
            <View style={styles.Accessoires_component_container_haut}  >
                
                <View style={styles.Accessoires_component_container_Icon_left}>
                    <Icon name={props.name} size={SizeIconGauche} color={'white'} style={styles.Accessoires_component_container_Icon}></Icon>
                </View>
                {
                props.info?
                <View style={styles.Accessoires_component_container_Icon_right}>
                    <Icon name={'info'} size={SizeIconDroite} color={'black'} style={styles.Accessoires_component_container_Icon}></Icon>
                </View>
                :<></>
                }

            </View>
            <View style={styles.Accessoires_component_container_Text_container}>
                <Text style={styles.Accessoires_component_container_Text_haut}>{props.textHaut}</Text>
                <Text style={styles.Accessoires_component_container_Text_bas}>{props.textBas}</Text>
            </View>
        </View>
    )
}
const Accessoires = (props) => {
    return (
        <>
            <View style={styles.Accessoires_titre_container}>
                <Text style={styles.accessoires_titre}>Accessoires</Text>
                <Icon name='users' size={8}></Icon>
            </View>
            <View style={styles.Accessoires_components}>
                <View style={styles.Accessoires_component_row}>
                    <Accessoires_component name='wifi' textHaut='Nest Wi-Fi' textBas='Connected' type={1} info={true}/>
                    <Accessoires_component name='rocket' textHaut='Sony TV' textBas='On-Standby' type={1} />
                    <Accessoires_component name='home' textHaut='Thermostat' textBas='Cooling to 26.5' type={1} />
                </View>
                <View style={styles.Accessoires_component_row}>
                    <Accessoires_component name='heart' textHaut='Air Purifier' textBas='off' type={1} info={true}/>
                    <Accessoires_component name='user' textHaut='test' textBas='test' type={2} />
                </View>
            </View>
        </>
    )
}

//-------------------------------//
//-------------------------------//

export default function Lroom() {
    const { name, age, color } = useSelector(state => state.userReducer);
    const dispatch = useDispatch();

    const getBackgroundcolor = () => {
        if (color == 'music') return 'red';
        else if (color == 'rocket') return 'green';
        else if (color == 'home') return 'yellow';
        else if (color == 'info') return 'white';
        else return '#d9d9d9d9'
    }
    return (
        <View style={[styles.Lroom_container, { backgroundColor: getBackgroundcolor() }]}>
            <View style={styles.header}>
                <Edit />
            </View>
            <View style={styles.titre}>
                <LivingRoom />
            </View>
            <View style={styles.accessoires_containers}>
                <Accessoires />
            </View>
            <View style={styles.security_cameras}>
                <Text style={styles.accessoires_titre}>Securite Camera</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        //------------------Accessoires_component-------//
        Accessoires_component_container_Icon: {
            // backgroundColor: 'grey'
        },
        Accessoires_component_container_haut:{
            flex:2,
            flexDirection:'row',
            justifyContent:'space-between',
        },
        Accessoires_component_container_Icon_right: {
            borderWidth:1,borderColor:'black', maxWidth: 10, maxHeight: 10, borderRadius: 12, flex: 1, 
            justifyContent:'center',alignItems:'center',
        },
        Accessoires_component_container_Icon_left: {
            backgroundColor: 'blue', maxWidth: 24, maxHeight: 24, borderRadius: 12, flex: 2, alignItems: 'center', justifyContent: 'center',
        },
        Accessoires_component_container_Text_bas: {
            flex: 1,
            fontSize: 6,
        },
        Accessoires_component_container_Text_haut: {
            flex: 1,
            fontSize: 8,
            color: 'black',
        },
        Accessoires_component_container_Text_container: {
            flex: 1,
        },
        Accessoires_component_container: {
            backgroundColor: 'white',
            margin: 3,
            padding: 4,
            borderRadius: 5,
            flex: 1,
        },
        //------------------Accessoires-----------------//
        Accessoires_component_row: {
            flex: 3,
            flexDirection: 'row',
        },
        Accessoires_components: {
            flex: 7,
        },
        accessoires_titre: {
            flex: 1,
            fontSize: 8,
            color: 'black',
        },
        Accessoires_titre_container: {
            flexDirection: 'row',
        },
        //------------------Titre-----------------------//
        titre_weather_Icon: {
            color: 'red',
        },
        titre_weather_view: {
            flexDirection: 'row',
            alignItems: 'center',
            paddingLeft: 7,
        },
        titre_weather_text: {
            fontSize: 8,
            paddingLeft: 3
        },
        titre_weather: {
            flexDirection: 'row',
            alignItems: 'center',
        },
        security_cameras: {
            flex: 5
        },
        accessoires_containers: {
            flex: 5
        },
        titre_text: {
            color: 'black',
            fontSize: 19,
        },
        titre: {
            flexDirection: 'row',
            flex: 1,
            justifyContent: 'space-between',

        },
        //------------------------HEADER----------------//
        header_text: {
            color: 'blue',
            fontSize: 10,
        },
        header: {
            flex: 1,
            justifyContent: 'center',
            marginBottom: 5,
        },
        Lroom_container: {

            flex: 1,
            justifyContent: 'center',
            padding: 5,
            backgroundColor: 'grey',
        },

    })