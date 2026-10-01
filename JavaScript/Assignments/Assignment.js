// Date --> is keyword that is used to display and manipulate time and date 


// HOW TO GET/USE DATE 

// step 1 is store the date object into variable 

let date = new Date()

console.log(date)  //2026-09-29T15:39:20.726Z

// in our progarms or in automation we use human format date and time 
// dd/mm/yyyy
// mm/dd/yyyy
//HH:MM:SS
//HH:MM

// TO GET THIS HUSMAN FORMAT  DATE THEN WE HAVE USED METHODS ON THIS DATE OBJECT

//getFullYear() --> this method will retrun the current year in 4 digit 

console.log(date.getFullYear()) //2026

//getMonth() ->it will return the current month 
// but here the month form jan to dec is stored in 0 - 11
// because the month is stored in index 

// for human format always add plus 1 to the get month method 

console.log(date.getMonth() + 1) //9


//but month is not always written in numbers 

// Sept
let shortmonth = date.toLocaleString("en-gb", { month: "short" })
// September
let longmonth = date.toLocaleString("en-gb", { month: "long" })

console.log(shortmonth)
console.log(longmonth)


//getDate() --> this will show the current date 
console.log(date.getDate())


// how to display a human format date 

let cur_year = date.getFullYear()
let cur_month = date.getMonth() + 1
let cur_date = date.getDate()
let day = date.toLocaleString("en-gb", { weekday: "long" })


// human format  DD/MM/YYYY
console.log(`${cur_date}/${cur_month}/${cur_year} - ${day}`) //29/9/2026

console.log(`${cur_date}/${shortmonth}/${cur_year}`) //29/Sept/2026

console.log(`${cur_date}/${longmonth}/${cur_year}`) //29/September/2026


// TIME 
//getHours --> shows the current hours 
let cur_hour = date.getHours()

//getMinutes --> shows the minutes 
let cur_min = date.getMinutes()

// getSeconds() --> shows the seconds

let cur_sec = date.getSeconds()

console.log(`${cur_hour}:${cur_min}:${cur_sec}`) //21:26:43 24 hour format 




//  to display date in the proper human 

let format_month = cur_month < 10 ? `0${cur_month}` : cur_month
let format_date = cur_date < 10 ? `0${cur_date}` : cur_date


console.log(`${format_date}/${format_month}/${cur_year}`) //29/09/2026


// now time to diaplay in 12 hours format 

let hour = date.getHours()
let minutes = date.getMinutes()
let sec =  date.getSeconds()

let ampm = (cur_hour<12)?"AM":"PM" 

console.log(`${hour}:${minutes}:${sec} ${ampm}`)

let hours_12 = hour%12
let pad_hour =hours_12<10?`0${hours_12}`:hours_12
let min = minutes<10?`0${minutes}`:minutes  
let seconds = sec<10?`0${sec}`:sec


console.log(`${hours_12}:${minutes}:${sec} ${ampm}`) //9:38:30 PM
console.log(`${pad_hour}:${min}:${seconds} ${ampm}`) //09:38:30 PM

//HOW TO DO THIS IN A SINGLE LINE 

let current_date_time = date.toLocaleString("en-gb",{timeZone:"Asia/Kolkata",day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:true})

console.log(current_date_time) //29/09/2026, 09:44 pm


// TOMMORROW --> how manipulates 


// 29 +5 ==> 34

// ============================================================
// SECTION 7 -> SET METHODS ( manipulate / change the date )
// ============================================================

// get methods -> READ the parts of the date   |   set methods -> CHANGE the parts

// NOTE -> the set methods MUTATE the original object ( they change it directly )
// -> they also RETURN a number -> a timestamp ( milliseconds since 1 jan 1970 ) , NOT the date object
// -> so never store a set method inside a date variable ( the classic mistake )

// setDate() -> change the day of the month
// -> JS handles the OVERFLOW automatically -> 30 + 5 = 35 -> rolls into the next month !

let change_date = new Date()

let todays_date = change_date.getDate() // e.g. 30 ( sample run )

let ts = change_date.setDate(todays_date + 5) // 30 + 5 = 35 -> day 5 of the next month

console.log(ts, typeof ts) // e.g. 179121... "number" -> NOT a date object

console.log(change_date.getDate()) // e.g. 5  ( the object itself was changed )

console.log(`${change_date.getDate()}/${change_date.getMonth() + 1}/${change_date.getFullYear()}`) // e.g. 5/10/2026

// setMonth() -> change the month ( index based -> 0 = january -> same overflow rule )

let this_month = change_date.getMonth() // e.g. 9 ( october -> the +5 days moved us there )

change_date.setMonth(this_month + 4) // 9 + 4 = 13 -> rolls into february of the next year

console.log(change_date.getMonth() + 1) // e.g. 2  ( february )
console.log(change_date.getFullYear())  // e.g. 2027

// setFullYear() -> change the year
// NOTE -> there is no setYear() in modern JS -> the correct method is setFullYear()

let year_obj = new Date()
let this_year = year_obj.getFullYear()

console.log(this_year) // e.g. 2026

year_obj.setFullYear(this_year - 28) // 28 years back

console.log(year_obj.getFullYear()) // e.g. 1998

console.log(`${year_obj.getDate()}/${year_obj.getMonth() + 1}/${year_obj.getFullYear()}`) // e.g. 30/9/1998

// setHours() / setMinutes() / setSeconds() -> change the time parts

let changed_time = new Date()

let current_hour = changed_time.getHours()     // e.g. 21
let current_minute = changed_time.getMinutes() // e.g. 48

changed_time.setHours(current_hour + 5)      // 5 hours later
changed_time.setMinutes(current_minute + 30) // 30 minutes later -> overflow rolls into the hour

console.log(`${changed_time.getHours()}:${changed_time.getMinutes()}`) // e.g. 3:20  ( next day ! )

console.log(`${changed_time.getDate()}/${changed_time.getMonth() + 1}/${changed_time.getFullYear()}`) // e.g. 1/10/2026

// ============================================================
// SECTION 8 -> PRACTICAL EXAMPLE ( date arithmetic )
// ============================================================

// example -> 2 days from today is a holiday -> print the holiday date

let cutoff = new Date()

let current_date_ = cutoff.getDate()

console.log(current_date_) // e.g. 30

cutoff.setDate(current_date_ + 2) // 30 + 2 = 32 -> overflow -> day 2 of the next month

console.log(cutoff.getDate()) // e.g. 2

// the same idea for the year

let year_cur = cutoff.getFullYear()

console.log(year_cur) // e.g. 2026

cutoff.setFullYear(year_cur + 1)

console.log(cutoff.getFullYear()) // e.g. 2027

// ============================================================
// COMMON MISTAKES TO AVOID
// ============================================================

/**
 * 1 getMonth()      -> 0 - 11 ( january = 0 ) -> ALWAYS add + 1 for humans
 * 2 overflow        -> setDate( 30 + 5 ) / setMonth( 9 + 4 ) -> JS rolls into the next month / year on its own
 * 3 hour % 12       -> gives 0 at 12 o'clock -> fix -> hour % 12 === 0 ? 12 : hour % 12
 * 4 "seconds" key   -> in toLocaleString options the key is "second" ( singular ) -> "seconds" is IGNORED
 * 5 set methods     -> MUTATE the original object + RETURN a timestamp number -> do not store them
 * 6 setYear()       -> legacy / old -> use setFullYear()
 * 7 padding         -> 9/9/2026 -> pad with -> value < 10 ? `0${value}` : value
 *
 */

// ============================================================
// QUICK SUMMARY
// ============================================================

/**
 * new Date()      -> creates the date object ( current date + time )
 * getFullYear()   -> 4 digit year
 * getMonth()      -> month index ( 0 - 11 ) -> add + 1 for humans
 * getDate()       -> day of the month ( 1 - 31 )
 * getDay()        -> weekday index ( 0 = sunday ... 6 = saturday )
 * getHours() / getMinutes() / getSeconds()  -> time parts ( 24 hour )
 * toLocaleString( locale , options )        -> month / weekday words + full custom format in one line
 * setDate() / setMonth() / setFullYear()    -> change the date parts ( mutates + overflow handled )
 * setHours() / setMinutes() / setSeconds()  -> change the time parts
 *
 */