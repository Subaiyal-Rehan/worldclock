// Browse More Function
function clicked() {
    myLoading = () => {
        document.getElementById('loading').style.display = "none";
        console.log('Successful');
        document.getElementById('collapseContent').style.display = "block";
        document.getElementById('cardBody').style.padding = "0 25px";
    }
    setTimeout(myLoading, 1000);
}

// Rate Us Function
function RateStar1() {
    if (document.getElementById('star1').classList.contains("bi-star")) {
        document.getElementById('star1').classList.remove("bi-star");
        document.getElementById('star1').classList.add("bi-star-fill");
    }

    else {
        document.getElementById('star1').classList.add("bi-star");
        document.getElementById('star1').classList.remove("bi-star-fill");
    }
}

function RateStar2() {
    if (document.getElementById('star2').classList.contains("bi-star")) {
        document.getElementById('star2').classList.remove("bi-star");
        document.getElementById('star2').classList.add("bi-star-fill");
    }

    else {
        document.getElementById('star2').classList.add("bi-star");
        document.getElementById('star2').classList.remove("bi-star-fill");
    }
}

function RateStar3() {
    if (document.getElementById('star3').classList.contains("bi-star")) {
        document.getElementById('star3').classList.remove("bi-star");
        document.getElementById('star3').classList.add("bi-star-fill");
    }

    else {
        document.getElementById('star3').classList.add("bi-star");
        document.getElementById('star3').classList.remove("bi-star-fill");
    }
}

function RateStar4() {
    if (document.getElementById('star4').classList.contains("bi-star")) {
        document.getElementById('star4').classList.remove("bi-star");
        document.getElementById('star4').classList.add("bi-star-fill");
    }

    else {
        document.getElementById('star4').classList.add("bi-star");
        document.getElementById('star4').classList.remove("bi-star-fill");
    }
}

function RateStar5() {
    if (document.getElementById('star5').classList.contains("bi-star")) {
        document.getElementById('star5').classList.remove("bi-star");
        document.getElementById('star5').classList.add("bi-star-fill");
    }

    else {
        document.getElementById('star5').classList.add("bi-star");
        document.getElementById('star5').classList.remove("bi-star-fill");
    }
}


// Local Time 
let a;
let date;
let time;
let ampm;
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
let localInterval;
let newYorkInterval;
let londonInterval;
let dubaiInterval;
let parisInterval;
let mumbaiInterval;
let karachiInterval;
let tokyoInterval;
let mexicoInterval;
let chicagoInterval;
let hongKongInterval;
let riyadhInterval;
let moscowInterval;

let activeInterval = null;

const updateTimes = () => {
    a = new Date();
    ampm = a.toLocaleTimeString();
    date = a.toLocaleDateString(undefined, options);
    document.getElementById('time').innerHTML = ampm + "<br> on " + date + "<br> in your Device";
}
localInterval = setInterval(updateTimes, 100);
// clearInterval(localInterval);

function clearIntervals() {
    clearInterval(localInterval);
    clearInterval(newYorkInterval);
    clearInterval(londonInterval);
    clearInterval(dubaiInterval);
    clearInterval(parisInterval);
    clearInterval(mumbaiInterval);
    clearInterval(karachiInterval);
    clearInterval(tokyoInterval);
    clearInterval(mexicoInterval);
    clearInterval(chicagoInterval);
    clearInterval(hongKongInterval);
    clearInterval(riyadhInterval);
    clearInterval(moscowInterval);
}

function setActiveButton(buttonId) {
    const cities = ['LocalTime', 'NewYork', 'London', 'Dubai', 'Paris', 'Mumbai', 'Tokyo', 'Karachi', 'Mexico', 'Chicago', 'HongKong', 'Riyadh'];
    cities.forEach(city => {
        const btn = document.getElementById(city + 'Btn');
        btn.classList.remove("active");
    });
    const activeBtn = document.getElementById(buttonId);
    activeBtn.classList.add("active");
}


// Local Time 
function LocalTimeClick() {
    clearIntervals();
    setActiveButton('LocalTimeBtn');
    localInterval = setInterval(updateTimes, 100); // Restart the local interval
    activeInterval = localInterval;
}


// New York Time
function NewYorkClick() {
    const cities = ['LocalTime', 'Karachi', 'London', 'Dubai', 'Paris', 'Mumbai', 'Tokyo', 'Mexico', 'Chicago', 'HongKong', 'Riyadh', 'Moscow'];
    if (activeInterval !== newYorkInterval) {
        clearIntervals();
        const newYork = () => {
            const now = new Date();
            const newYorkTime = now.toLocaleString('en-US', { timeZone: 'America/New_York', hour12: true, hour: 'numeric', minute: 'numeric', second: 'numeric' });
            const currentDayOfWeek = now.toLocaleString('en-US', { weekday: 'long' });
            const currentDate = now.toLocaleString('en-US', { day: 'numeric', month: 'long', year: 'numeric' });
            document.getElementById('time').innerHTML = `${newYorkTime} <br/> on ${currentDayOfWeek}, ${currentDate} <br/> in New York`;
        }
        newYorkInterval = setInterval(newYork, 100);
        setActiveButton('NewYorkBtn');
        activeInterval = newYorkInterval;
    }

    cities.forEach(city => {
        if (city !== 'NewYork') {
            const btn = document.getElementById(city + 'Btn');
            btn.classList.remove("active");
        }
    });
}


// London Time
function LondonClick() {
    const cities = ['LocalTime', 'Karachi', 'NewYork', 'Dubai', 'Paris', 'Mumbai', 'Tokyo', 'Mexico', 'Chicago', 'HongKong', 'Riyadh', 'Moscow'];
    if (activeInterval !== londonInterval) {
        clearIntervals();
        const london = () => {
            const now = new Date();
            const londonTime = now.toLocaleString('en-US', { timeZone: 'Europe/London', hour12: true, hour: 'numeric', minute: 'numeric', second: 'numeric' });
            const currentDayOfWeek = now.toLocaleString('en-US', { weekday: 'long' });
            const currentDate = now.toLocaleString('en-US', { day: 'numeric', month: 'long', year: 'numeric' });

            document.getElementById('time').innerHTML = `${londonTime} <br/> on ${currentDayOfWeek}, ${currentDate} <br/> in London`;
        }
        londonInterval = setInterval(london, 100);
        setActiveButton('LondonBtn');
        activeInterval = londonInterval;
    }

    cities.forEach(city => {
        if (city !== 'London') {
            const btn = document.getElementById(city + 'Btn');
            btn.classList.remove("active");
        }
    });
}


// Dubai Time
function DubaiClick() {
    const cities = ['LocalTime', 'Karachi', 'NewYork', 'London', 'Paris', 'Mumbai', 'Tokyo', 'Mexico', 'Chicago', 'HongKong', 'Riyadh', 'Moscow'];
    if (activeInterval !== dubaiInterval) {
        clearIntervals();
        const dubai = () => {
            const now = new Date();
            const dubaiTime = now.toLocaleString('en-US', { timeZone: 'Asia/Dubai', hour12: true, hour: 'numeric', minute: 'numeric', second: 'numeric' });
            const currentDayOfWeek = now.toLocaleString('en-US', { weekday: 'long' });
            const currentDate = now.toLocaleString('en-US', { day: 'numeric', month: 'long', year: 'numeric' });

            document.getElementById('time').innerHTML = `${dubaiTime} <br/> on ${currentDayOfWeek}, ${currentDate} <br/> in Dubai`;
        }
        dubaiInterval = setInterval(dubai, 100);
        setActiveButton('DubaiBtn');
        activeInterval = dubaiInterval;
    }

    cities.forEach(city => {
        if (city !== 'Dubai') {
            const btn = document.getElementById(city + 'Btn');
            btn.classList.remove("active");
        }
    });
}


// Paris Time
function ParisClick() {
    const cities = ['LocalTime', 'Karachi', 'NewYork', 'London', 'Dubai', 'Mumbai', 'Tokyo', 'Mexico', 'Chicago', 'HongKong', 'Riyadh', 'Moscow'];
    if (activeInterval !== parisInterval) {
        clearIntervals();
        const paris = () => {
            const now = new Date();
            const parisTime = now.toLocaleString('en-US', { timeZone: 'Europe/Paris', hour12: true, hour: 'numeric', minute: 'numeric', second: 'numeric' });
            const currentDayOfWeek = now.toLocaleString('en-US', { weekday: 'long' });
            const currentDate = now.toLocaleString('en-US', { day: 'numeric', month: 'long', year: 'numeric' });

            document.getElementById('time').innerHTML = `${parisTime} <br/> on ${currentDayOfWeek}, ${currentDate} <br/> in Paris`;
        }
        parisInterval = setInterval(paris, 100);
        setActiveButton('ParisBtn');
        activeInterval = parisInterval;
    }

    cities.forEach(city => {
        if (city !== 'Paris') {
            const btn = document.getElementById(city + 'Btn');
            btn.classList.remove("active");
        }
    });
}


// Mumbai Time
function MumbaiClick() {
    const cities = ['LocalTime', 'Karachi', 'NewYork', 'London', 'Dubai', 'Paris', 'Tokyo', 'Mexico', 'Chicago', 'HongKong', 'Riyadh', 'Moscow'];
    if (activeInterval !== mumbaiInterval) {
        clearIntervals();
        const mumbai = () => {
            const now = new Date();
            const mumbaiTime = now.toLocaleString('en-US', { timeZone: 'Asia/Kolkata', hour12: true, hour: 'numeric', minute: 'numeric', second: 'numeric' });
            const currentDayOfWeek = now.toLocaleString('en-US', { weekday: 'long' });
            const currentDate = now.toLocaleString('en-US', { day: 'numeric', month: 'long', year: 'numeric' });

            document.getElementById('time').innerHTML = `${mumbaiTime} <br/> on ${currentDayOfWeek}, ${currentDate} <br/> in Mumbai`;
        }
        mumbaiInterval = setInterval(mumbai, 100);
        setActiveButton('MumbaiBtn');
        activeInterval = mumbaiInterval;
    }

    cities.forEach(city => {
        if (city !== 'Mumbai') {
            const btn = document.getElementById(city + 'Btn');
            btn.classList.remove("active");
        }
    });
}


// Karachi Time
function KarachiClick() {
    const cities = ['LocalTime', 'Mumbai', 'NewYork', 'London', 'Dubai', 'Paris', 'Tokyo', 'Mexico', 'Chicago', 'HongKong', 'Riyadh', 'Moscow'];
    const karachiBtn = document.getElementById('KarachiBtn');
    if (activeInterval !== karachiInterval) {
        clearIntervals();
        const karachi = () => {
            const now = new Date();
            const karachiTime = now.toLocaleString('en-US', { timeZone: 'Asia/Karachi', hour12: true, hour: 'numeric', minute: 'numeric', second: 'numeric' });
            const currentDayOfWeek = now.toLocaleString('en-US', { weekday: 'long' });
            const currentDate = now.toLocaleString('en-US', { day: 'numeric', month: 'long', year: 'numeric' });
            document.getElementById('time').innerHTML = `${karachiTime} <br/> on ${currentDayOfWeek}, ${currentDate} <br/> in Karachi`;
        }
        karachiInterval = setInterval(karachi, 100);
        karachiBtn.classList.toggle("active", true);
        activeInterval = karachiInterval;
    }

    cities.forEach(city => {
        if (city !== 'Karachi') {
            const btn = document.getElementById(city + 'Btn');
            btn.classList.remove("active");
        }
    });
}


// Tokyo Time
function TokyoClick() {
    const cities = ['LocalTime', 'Mumbai', 'NewYork', 'London', 'Dubai', 'Paris', 'Karachi', 'Mexico', 'Chicago', 'HongKong', 'Riyadh', 'Moscow'];
    if (activeInterval !== tokyoInterval) {
        clearIntervals();
        const tokyo = () => {
            const now = new Date();
            const tokyoTime = now.toLocaleString('en-US', { timeZone: 'Asia/Tokyo', hour12: true, hour: 'numeric', minute: 'numeric', second: 'numeric' });
            const currentDayOfWeek = now.toLocaleString('en-US', { weekday: 'long' });
            const currentDate = now.toLocaleString('en-US', { day: 'numeric', month: 'long', year: 'numeric' });

            document.getElementById('time').innerHTML = `${tokyoTime} <br/> on ${currentDayOfWeek}, ${currentDate} <br/> in Tokyo`;
        }
        tokyoInterval = setInterval(tokyo, 100);
        setActiveButton('TokyoBtn');
        activeInterval = tokyoInterval;
    }

    cities.forEach(city => {
        if (city !== 'Tokyo') {
            const btn = document.getElementById(city + 'Btn');
            btn.classList.remove("active");
        }
    });
}


// Mexico Time
function MexicoClick() {
    const cities = ['LocalTime', 'Mumbai', 'NewYork', 'London', 'Dubai', 'Karachi', 'Tokyo', 'Paris', 'Chicago', 'HongKong', 'Riyadh', 'Moscow'];
    if (activeInterval !== mexicoInterval) {
        clearIntervals();
        const mexico = () => {
            const now = new Date();
            const mexicoTime = now.toLocaleString('en-US', { timeZone: 'America/Mexico_City', hour12: true, hour: 'numeric', minute: 'numeric', second: 'numeric' });
            const currentDayOfWeek = now.toLocaleString('en-US', { weekday: 'long' });
            const currentDate = now.toLocaleString('en-US', { day: 'numeric', month: 'long', year: 'numeric' });

            document.getElementById('time').innerHTML = `${mexicoTime} <br/> on ${currentDayOfWeek}, ${currentDate} <br/> in Mexico`;
        }
        mexicoInterval = setInterval(mexico, 100);
        setActiveButton('MexicoBtn');
        activeInterval = mexicoInterval;
    }

    cities.forEach(city => {
        if (city !== 'Mexico') {
            const btn = document.getElementById(city + 'Btn');
            btn.classList.remove("active");
        }
    });
}


// Chicago Time
function ChicagoClick() {
    const cities = ['LocalTime', 'Mumbai', 'NewYork', 'London', 'Dubai', 'Karachi', 'Paris', 'Tokyo', 'Mexico', 'HongKong', 'Riyadh', 'Moscow'];
    const chicagoBtn = document.getElementById('ChicagoBtn');
    if (activeInterval !== chicagoInterval) {
        clearIntervals();
        const chicago = () => {
            const now = new Date();
            const chicagoTime = now.toLocaleString('en-US', { timeZone: 'America/Chicago', hour12: true, hour: 'numeric', minute: 'numeric', second: 'numeric' });
            const currentDayOfWeek = now.toLocaleString('en-US', { weekday: 'long' });
            const currentDate = now.toLocaleString('en-US', { day: 'numeric', month: 'long', year: 'numeric' });
            document.getElementById('time').innerHTML = `${chicagoTime} <br/> on ${currentDayOfWeek}, ${currentDate} <br/> in Chicago`;
        }
        chicagoInterval = setInterval(chicago, 100);
        chicagoBtn.classList.toggle("active", true);
        activeInterval = chicagoInterval;
    }

    cities.forEach(city => {
        if (city !== 'Chicago') {
            const btn = document.getElementById(city + 'Btn');
            btn.classList.remove("active");
        }
    });
}


// Hong Kong Time
function HongKongClick() {
    const cities = ['LocalTime', 'Mumbai', 'NewYork', 'London', 'Dubai', 'Karachi', 'Paris', 'Tokyo', 'Mexico', 'Chicago', 'HongKong', 'Riyadh', 'Moscow'];
    const hongKongBtn = document.getElementById('HongKongBtn');
    if (activeInterval !== hongKongInterval) {
        clearIntervals();
        const hongKong = () => {
            const now = new Date();
            const hongKongTime = now.toLocaleString('en-US', { timeZone: 'Asia/Hong_Kong', hour12: true, hour: 'numeric', minute: 'numeric', second: 'numeric' });
            const currentDayOfWeek = now.toLocaleString('en-US', { weekday: 'long' });
            const currentDate = now.toLocaleString('en-US', { day: 'numeric', month: 'long', year: 'numeric' });
            document.getElementById('time').innerHTML = `${hongKongTime} <br/> on ${currentDayOfWeek}, ${currentDate} <br/> in Hong Kong`;
        }
        hongKongInterval = setInterval(hongKong, 100);
        hongKongBtn.classList.toggle("active", true);
        activeInterval = hongKongInterval;
    }

    cities.forEach(city => {
        if (city !== 'HongKong') {
            const btn = document.getElementById(city + 'Btn');
            btn.classList.remove("active");
        }
    });
}


// Riyadh Time
function RiyadhClick() {
    const cities = ['LocalTime', 'Mumbai', 'NewYork', 'London', 'Dubai', 'Karachi', 'Paris', 'Tokyo', 'Mexico', 'Chicago', 'HongKong', 'Moscow'];
    const riyadhBtn = document.getElementById('RiyadhBtn');
    if (activeInterval !== riyadhInterval) {
        clearIntervals();
        const riyadh = () => {
            const now = new Date();
            const riyadhTime = now.toLocaleString('en-US', { timeZone: 'Asia/Riyadh', hour12: true, hour: 'numeric', minute: 'numeric', second: 'numeric' });
            const currentDayOfWeek = now.toLocaleString('en-US', { weekday: 'long' });
            const currentDate = now.toLocaleString('en-US', { day: 'numeric', month: 'long', year: 'numeric' });
            document.getElementById('time').innerHTML = `${riyadhTime} <br/> on ${currentDayOfWeek}, ${currentDate} <br/> in Riyadh`;
        }
        riyadhInterval = setInterval(riyadh, 100);
        riyadhBtn.classList.toggle("active", true);
        activeInterval = riyadhInterval;
    }

    cities.forEach(city => {
        if (city !== 'Riyadh') {
            const btn = document.getElementById(city + 'Btn');
            btn.classList.remove("active");
        }
    });
}


// Moscow Time
function MoscowClick() {
    const cities = ['LocalTime', 'Mumbai', 'NewYork', 'London', 'Dubai', 'Karachi', 'Paris', 'Tokyo', 'Mexico', 'Chicago', 'HongKong', 'Riyadh'];
    const moscowBtn = document.getElementById('MoscowBtn');
    if (activeInterval !== moscowInterval) {
        clearIntervals();
        const moscow = () => {
            const now = new Date();
            const moscowTime = now.toLocaleString('en-US', { timeZone: 'Europe/Moscow', hour12: true, hour: 'numeric', minute: 'numeric', second: 'numeric' });
            const currentDayOfWeek = now.toLocaleString('en-US', { weekday: 'long' });
            const currentDate = now.toLocaleString('en-US', { day: 'numeric', month: 'long', year: 'numeric' });
            document.getElementById('time').innerHTML = `${moscowTime} <br/> on ${currentDayOfWeek}, ${currentDate} <br/> in Moscow`;
        }
        moscowInterval = setInterval(moscow, 100);
        moscowBtn.classList.toggle("active", true);
        activeInterval = moscowInterval;
    }

    cities.forEach(city => {
        if (city !== 'Moscow') {
            const btn = document.getElementById(city + 'Btn');
            btn.classList.remove("active");
        }
    });
}
