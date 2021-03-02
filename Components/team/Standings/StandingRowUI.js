import React, { useRef } from 'react'
import { Text, View, Image, FlatList } from 'react-native'
import ATLMAD from "../../../RawData/images/atletico_madrid.png";


const data = [24, 76, 6, 12, 4, 6, 7, 9]

const StandingRowUI = ({ scrollPosition }) => {

    const refFlatList = useRef(null)

    React.useEffect(
        () => {
            setTimeout(() => {
                console.log("hjhjh : ", scrollPosition)
                if (refFlatList.current) {
                    refFlatList.current.scrollToOffset({
                        offset: scrollPosition,
                        animated: true,
                    })
                }
            }, 100);
        },
        [scrollPosition]
    )

    return <View style={{
        display: 'flex',
        flexDirection: 'row',
        marginStart: 15,
        marginEnd: 15,
        paddingStart: 5,
        paddingEnd: 5,
        paddingTop: 5,
        paddingBottom: 5,
    }} >
        <View
            style={{
                display: 'flex',
                flexDirection: 'row',
                flex: 1
            }}
        >
            <Text style={{ flex: 1 }}>1</Text>
            <Image
                style={{
                    width: 20,
                    height: 20,
                    resizeMode: 'center',
                    flex: 1

                }}
                source={ATLMAD}
            />
            <Text style={{ flex: 8, textAlign: 'center' }} >Atletico Madrid</Text>
        </View>


        <FlatList
            ref={refFlatList}
            style={{ flex: 1 }}
            data={data}
            renderItem={({ item }) => <Text style={{ width: 30, textAlign: 'center' }} > {item} </Text>}
            keyExtractor={(item, index) => index.toString()}
            horizontal={true}

        />

    </View>

}

export { StandingRowUI }