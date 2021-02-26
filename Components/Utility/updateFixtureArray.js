

// export const sortByTime = (arr) => {
//     // arr.sort(
//     //     (a, b) => {
//     //         var a1 = new Date(a.fixture.date)
//     //         var b1 = new Date(b.fixture.date)

//     //         return a.fixture.timestamp - b.fixture.timestamp
//     //     }
//     // )

//     // console.log("Array : ",arr[1])


// }

export const bubbleSortByTime = (arr) => {
    const arr2 = [
        {
            name: 'a',
            time: 1614330511
        },
        {
            name: 'd',
            time: 1614312511
        },
        {
            name: 'g',
            time: 1614161311
        },
        {
            name: 'e',
            time: 1614290911
        },
        {
            name: 'c',
            time: 1614323311
        },

        {
            name: 'b',
            time: 1614326911
        },
        {
            name: 'f',
            time: 1614247711
        }
    ]

    // console.log("Before Arr: ------------------------>", arr)
    // for (let index = 0; index < 3; index++) {
    //     const element = arr[index];
    //     console.log(`${element.teams.home.name} Vs ${element.teams.away.name}`)
    // }

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            
            if ( new Date(arr[j + 1].fixture.date).getTime() < new Date(arr[j].fixture.date).getTime() ) {
                // ES6 way of swapping array elements
                [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
            }
        }
    }
    return arr;

}
