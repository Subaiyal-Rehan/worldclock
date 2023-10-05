let a;
let date;
let time;
let ampm;
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
setInterval(() => {
    a = new Date();
    ampm = a.toLocaleTimeString();
    date = a.toLocaleDateString(undefined, options);
    // time = a.getHours()% 12 + ':' + a.getMinutes() + ':' + a.getSeconds() ;
    document.getElementById('time').innerHTML = ampm + "<br> on " + date;
}, 100);

function clicked() {
    myLoading = () => {
        document.getElementById('loading').style.display = "none";
        console.log('Successful');
        document.getElementById('collapseContent').style.display = "block";
        document.getElementById('cardBody').style.padding = "0 25px";
    }
    setTimeout(myLoading, 1000);
}