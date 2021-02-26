

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

const bubbleSortByTime = () => {
    const arr = [
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

    console.log("Before Arr: ", arr)

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j + 1].time > arr[j].time) {
                // ES6 way of swapping array elements
                [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
            }
        }
    }

    console.log("After Arr: ", arr)

}

bubbleSortByTime()