

export const sortByTime = (arr) =>
{
    arr.sort(
        (a, b) => {
            var a1 = new Date(a.fixture.date)
            var b1 = new Date(b.fixture.date)

            return a.fixture.timestamp - b.fixture.timestamp
        }
    )

    console.log("Array : ",arr[1])
}