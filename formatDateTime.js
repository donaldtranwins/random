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
        var daysArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        var monthsArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        var day = daysArray[dateObject.getDay()];
        var month = monthsArray[dateObject.getMonth()];
        var date = appendSuffixTo(dateObject.getDate());
        var year = dateObject.getFullYear();
        var formattedDate = day+", "+month+" "+date+", "+year;
        return formattedDate;
    }

    /**
     * Creates a Time string in a readable format
     * @param   dateObject      From a new Date() object
     * @returns {string}        Returns time in the following format: "12:09:54 PM"
     */
    function formatTime(dateObject){
        var hour = dateObject.getHours();
        var minutes = dateObject.getMinutes();
        var seconds = dateObject.getSeconds();
        var meridiem = hour >= 12 ? 'pm' : 'am';    // determines post or ante meridiem
        hour = hour % 12;                           // converts hour to non-military time
        hour = hour === 0 ? 12 : hour;              // converts hour 0 to hour 12
        minutes = ('0'+minutes).slice(-2);          // adds leading zero if needed
        seconds = ('0'+seconds).slice(-2);          // adds leading zero if needed
        var formattedTime = hour + ':' + minutes + ':' + seconds + " " + meridiem;
        return formattedTime;
    }

    return formatDate(dateObject) + " at " + formatTime(dateObject);
}
console.log( createDateFrom( new Date()) );