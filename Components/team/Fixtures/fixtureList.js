import React from 'react'
import { FlatList, SectionList, View } from 'react-native'
import { MemodFixtureUI } from './fixtureUI';

const renderItem = ({ item }) => <MemodFixtureUI item={item} />

const FixtureListUI = ({ scrollIndex, data }) => {
    const refFlatList = React.useRef(null)

    React.useEffect(
        () => {
            setTimeout(() => {
                if (refFlatList.current) {
                    refFlatList.current.scrollToIndex({
                        animated: true,
                        index: scrollIndex
                    })
                }
            }, 500);
        },
        [scrollIndex]
    )



    return <View style={{ paddingBottom: 0 }} >

        <FlatList
            ref={refFlatList}
            data={data}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            getItemLayout={(data, index) => {
                const jj = {
                    length: 160, offset: 160 * index, index
                }
                return jj
            }}
            onScrollToIndexFailed={info => {
                const wait = new Promise(resolve => setTimeout(resolve, 1000));
                wait.then(() => {
                    console.log("ScrollToIndex Failed : ", info.index)
                    refFlatList?.current?.scrollToIndex({ index: info.index, animated: false });
                })
            }}
        />




    </View>

}

export { FixtureListUI }