import React from 'react'
import { FlatList, SectionList, View, Text } from 'react-native'
import { MemodFixtureUI } from './fixtureUI';
import sectionListGetItemLayout from "react-native-section-list-get-item-layout"

const renderItem = ({ item }) => <MemodFixtureUI item={item} />

const FixtureListUI = ({ scrollIndex, data }) => {
    const refFlatList = React.useRef(null)
    const refSectionList = React.useRef(null)

    const itemLayout = sectionListGetItemLayout({
        // The height of the row with rowData at the given sectionIndex and rowIndex
        getItemHeight: (rowData, sectionIndex, rowIndex) => sectionIndex === 0 ? 100 : 50,
  
        // These three properties are optional
        // getSeparatorHeight: () => 40, // 1 / PixelRatio.get(), // The height of your separators
        getSectionHeaderHeight: () => 20, // The height of your section headers
        // getSectionFooterHeight: () => 10, // The height of your section footers
        //jkkjkjkjkjkjk
        //kjkjjkkjkj
        //jjjh
      })

   

    React.useEffect(
        () => {
            setTimeout(() => {
                // if (refFlatList.current) {
                //     refFlatList.current.scrollToIndex({
                //         animated: true,
                //         index: scrollIndex
                //     })
                // }

                // if (refSectionList.current) {
                //     refSectionList.current.scrollToLocation({
                //         animated: true,
                //         sectionIndex: scrollIndex.titleIndex,
                //         itemIndex: scrollIndex.dataIndex,
                //         // viewOffset: 20 // height of section header
                //     })
                // }


            }, 500);
        },
        [scrollIndex]
    )



    return <View style={{ paddingBottom: 0 }} >

        {/* <FlatList
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
        /> */}

        <SectionList
            ref={refSectionList}
            sections={data}
            keyExtractor={(item, index) => item + index}
            renderItem={renderItem}
            renderSectionHeader={({ section: { title } }) => <Text style={{ 
                height: 20,
                fontSize: 16,
                fontWeight: 'bold', 
                textAlign: 'center',
                paddingTop: 2
            }} >Match Day { title.slice(-2) } </Text>}
            // getItemLayout={(data, index) => {
            //     const jj = {
            //         length: 160, offset: 160 * index , index
            //     }
            //     return jj
            // }}
            getItemLayout={itemLayout}
        />




    </View>

}

export { FixtureListUI }