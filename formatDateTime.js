/**
 * Creates a Date/Time string in a readable format
 * @param       dateObject
 * @returns     {string}    Date/Time in following format "Thursday, March 2nd, 2017 at 12:09:54 PM"
 */
function createDateFrom(dateObject) {

    /**
     * Adds the correct ordinal suffix to the provided day
     * @param   day             The return of a dateObject.getDate()
     * @returns {string}        Returns day in the following format: "2nd"
     */
    function appendSuffixTo(day) {
        if (day > 3 && day < 21)
            return day+"th";
        switch (day % 10) {
            case 1:  return day+"st";
            case 2:  return day+"nd";
            case 3:  return day+"rd";
            default: return day+"th";
        }
    }

    /**
     * Creates a Date string in a readable format
     * @param   dateObject      From a new Date() object
     * @returns {string}        Returns date in the following format: "Thursday, March 2nd, 2017"
     */
    function formatDate(dateObject) {
        const daysArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const monthsArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        const day = daysArray[dateObject.getDay()];
        const month = monthsArray[dateObject.getMonth()];
        const date = appendSuffixTo(dateObject.getDate());
        const year = dateObject.getFullYear();
        return `${day}, ${month} ${date}, ${year}`;
    }

    /**
     * Creates a Time string in a readable format
     * @param   dateObject      From a new Date() object
     * @returns {string}        Returns time in the following format: "12:09:54 PM"
     */
    function formatTime(dateObject){
        let hour = dateObject.getHours();
        let minutes = dateObject.getMinutes();
        let seconds = dateObject.getSeconds();
        const meridiem = hour >= 12 ? 'pm' : 'am';    // determines post or ante meridiem
        hour = hour % 12;                           // converts hour to non-military time
        hour = hour === 0 ? 12 : hour;              // converts hour 0 to hour 12
        minutes = ('0'+minutes).slice(-2);          // adds leading zero if needed
        seconds = ('0'+seconds).slice(-2);          // adds leading zero if needed
        return `${hour}:${minutes}:${seconds} ${meridiem}`;
    }

    return formatDate(dateObject) + " at " + formatTime(dateObject);
}
const now = createDateFrom( new Date() );
console.log(now);