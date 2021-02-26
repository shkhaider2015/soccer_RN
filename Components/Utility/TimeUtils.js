
export const getDateFromMillis = (milis, status) => {
    var date = new Date(milis * 1000)

    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;


    var dd = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} - `;
    var time = `${strTime}`
    if(status === "TBD")
    {
        time = `TBD`
    }
    if(status === "FT")
    {
        time = `FT`
    }

    return dd+time;
}

export const hoursDifference = (prevTimestamp, nextTimestamp) =>
{
    var prevDate = new Date(prevTimestamp * 1000);
    var nextDate = new Date(nextTimestamp * 1000);
    var currentDate = new Date();

    var prevDifference = prevDate.getTime() - currentDate.getTime()
    var nextDifference = nextDate.getTime() - currentDate.getTime()

    var prevHoursDifference = Math.floor(prevDifference/1000/60/60);
    var nextHoursDifference = Math.floor(nextDifference/1000/60/60);

    console.log()

} 

export const todaysDate = (givendate, currentDate) => 
{
    var result = false;
    var gd = new Date(givendate);
    var cd = new Date(currentDate);

    if(gd.getMonth() === cd.getMonth() && gd.getDay() === cd.getDay())
    {
        console.log("Matched ...")
        result = true
    }
    else
    {
        result = false;
    }

    return result

}