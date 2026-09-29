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

let current_date_time = date.toLocaleString("en-gb",{timeZone:"Asia/Kolkata",day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",seconds:"2-digit",hour12:true})

console.log(current_date_time) //29/09/2026, 09:44 pm


// TOMMORROW --> how manipulates 


// 29 +5 ==> 34
