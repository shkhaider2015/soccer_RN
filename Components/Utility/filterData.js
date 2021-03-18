import React from 'react'



export const FilterData = (data) =>
{
    var keys = arr.map(
        (item, index) => item.league.round
    )

    var uniqueKeys = [...new Set(keys)]

    var filterData = []

    uniqueKeys.map(
        (item1, index1) => {
            var ff = {
                title: item1,
                data: arr.filter((item2, index) => {
                    if (item2.league.round === item1) {
                        return item2
                    }
                })
            }
            filterData.push(ff)
            // filterData['title'] = item1
            // filterData['data'] = arr.filter(
            //     (item2, index2) => {
            //         if (item2.league.round === item1) {
            //             return item2
            //         }
            //     }
            // )
            // kjkkjkjkj
        }
    )

}