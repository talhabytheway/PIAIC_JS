let namee = prompt('Enter your Name');
let date = parseInt(prompt('Enter your DOB date'));
let month = parseInt(prompt('Enter your DOB month'));
--month;
let year = parseInt(prompt('Enter your DOB year'));
let dob = new Date(year, month, date)
let hrs = new Date().getHours()

if (hrs >=5 && hrs<12) {
    alert(`Good Morning ${namee}`)
} else if (hrs >=12 && hrs<17){
    alert(`Good Afteroon ${namee}`)
} else if (hrs >=17 && hrs<20){
    alert(`Good Evening ${namee}`)
} else{
    alert(`Good Night ${namee}`)
}

alert(`Your DOB is ${dob}`);


let hrss = 0
let sec = 0
let today_date = new Date();
let today_year = today_date.getFullYear();
let today_month = today_date.getMonth();
let today_day = today_date.getDate();
let today_hours = today_date.getHours()
let today_minuites = today_date.getMinutes()
let today_sec = today_date.getSeconds();
let tyr = today_year - year;
let tmn = today_month - month;
let tdte = today_day - date;
let thrs = today_hours - hrss;
let tsec = today_sec - sec;

if (tmn<0) {
    tyr--
    tmn+=12
}
if (tdte<0) {
    tmn--
    tdte+=30
} 


alert(`You are ${tyr} Years ${tmn} Months ${tdte} Days ${thrs} Hours ${tmn} Mintes ${tsec} Second Old`)