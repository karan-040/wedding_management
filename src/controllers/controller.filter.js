import asyncHandler from "../utils/asynchandler.js";
import particular_city from "../db/cityQuery.js"
import db from "../db/db.connect.js";
import filterQuery from "../db/customQuery.js";
import particular_id from "../db/hallQuery.js";

const filterByCity = asyncHandler(async(req,res)=>{
    const city = req.body.city;

    const {rows} = await db.query(particular_city,[city]);
    res.render("homepage.ejs",{data:rows , page:1,logged:req.isLoggedIn});
})

const customFilter = asyncHandler(async(req,res)=>{
    
    const arr = req.body.arr.split(',');
    const intArr = arr.map(Number);//convert to int
    let mini=0;
    if(intArr[0])mini=0;
    else if(intArr[1])mini=2.5;
    else if(intArr[2])mini = 4;
    else if(intArr[3])mini = 6;

    let maxi = 15;
    if(intArr[3])maxi=15;
    else if(intArr[2])maxi=6;
    else if(intArr[1])maxi = 4;
    else if(intArr[0])maxi = 2.5;

    let star=0;
    if(intArr[5])star=3;
    if(intArr[6])star=4;
    if(intArr[7])star=4.5;
    if(intArr[8])star=4.8;

    let num=0;
    if(intArr[9])num=2;
    if(intArr[10])num=5;
    if(intArr[11])num=15;
    if(intArr[12])num=30;

    console.log(mini);
    console.log(maxi);
    console.log(star);
    console.log(num);

    const {rows} =  await db.query(filterQuery,[mini,maxi,star,num]);
    console.log(rows);
    res.render("homepage.ejs",{data:rows , page:1,logged:req.isLoggedIn});
})

const hall = asyncHandler(async(req,res)=>{
    const id = req.body.id; //hall id
    const {rows:bookings} = await db.query("select booking_date from bookings where hall_id = $1",[id])
    const temp = bookings.map(item=>item.booking_date.getDate())
    const day = []
    for(let i=0;i<=getLastDateOfCurrentMonth();i++){
        day.push("#65B741")
    }
    for(let i=0;i<temp.length;i++){
        day[temp[i]] = "#FF6868"
    }

    const {rows} = await db.query(particular_id,[id]);
    const user = req.user.user_id
    const data = await db.query("select email from users where username = $1",[user])
    const email = data.rows[0].email
    res.render("hall_details.ejs",{
        data:rows,
        mail_id:email,
        color:await set_col(id,email),
        first_day:getFirstDayOfCurrentMonth(),
        last_day:getLastDateOfCurrentMonth(),
        month:currmonth(),
        booking_list:day,
        rem_day:getFirstDayOfCurrentMonth()
    });
})
async function set_col(id,email){
    let vali = await db.query("select * from favorites where email = $1 and hall_id = $2",[email,id]);
    if(vali.rows.length)return "red";
    else return "grey";
};

//set homepage routes
const getFirstDayOfCurrentMonth = () => {
    const today = new Date(); // Gets today's date
    const firstDay = new Date(today.getFullYear(), today.getMonth(), 1); // Sets to the first day of the current month
    return firstDay.getDay(); // Gets the day of the week for the first day
};
const getLastDateOfCurrentMonth = () => {
    const today = new Date();
    // Move to the first day of the next month
    const firstDayOfNextMonth = new Date(today.getFullYear(), today.getMonth() + 1, 1);
    // Subtract one day to get back to the last day of the current month
    const lastDayOfCurrentMonth = new Date(firstDayOfNextMonth - 1);
    return lastDayOfCurrentMonth.getDate();
};
const getLastDayOfCurrentMonth = () => {
    const today = new Date();
    // Move to the first day of the next month
    const firstDayOfNextMonth = new Date(today.getFullYear(), today.getMonth() + 1, 1);
    // Subtract one day to get back to the last day of the current month
    const lastDayOfCurrentMonth = new Date(firstDayOfNextMonth - 1);
    return lastDayOfCurrentMonth.getDay();
};
const currmonth = ()=>{
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const now = new Date();
    return monthNames[now.getMonth()]; // Use getMonth() as index to get the month name
}







export { filterByCity , customFilter ,hall }