const date = new Date().getDate();
const month = new Date().getMonth() + 1;
const year = new Date().getFullYear();
const hours = new Date().getHours();
const mints = new Date().getMinutes();
const second = new Date().getSeconds(); 
const day  = new Date().getDay();
const time = new Date().toLocaleTimeString();

const strdays = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
const strmonth = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","sep","Oct","Nov","Dec"];


console.log(`${month}/${date}/${year} ${hours}:${mints}:${second}
`);

console.log(`${strdays[day]} ${date}/${month}/${year} ${hours}.${mints}`);

 console.log(`${year}-${month}-${date} ${hours}:${mints} ${strdays[day]}`)
 
 console.log(`${strmonth[month]} ${date}, ${year} ${time}`);

 
 

 
const specificDate = new Date();


function formatDate(date) {
    const options = { 
        month: 'long', 
        day: 'numeric', 
        year: 'numeric', 
        hour: 'numeric', 
        minute: 'numeric', 
        hour12: true
    };
    return date.toLocaleString('en-us', options);
}

console.log(formatDate(specificDate));
