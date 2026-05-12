import { useState, useEffect } from "react";

// Renders a digital time that updates every second
function Clock() {

const [date, setDate] = useState(new Date());
const [tickCount, setTickCount] = useState(0)

useEffect(() => { 
let clockInterval = setInterval(() => tick(), 1000);
console.log('Clock component mounted');

return () => {
    console.log('Clock component unmounted')
    clearInterval(clockInterval)
}
}, []); 

const tick = () => {
setDate(new Date());
setTickCount((prevCount) => prevCount + 1 )
console.log('tick'); 
};

return (
<div className="Clock">
<h3>Digital Clock</h3>
{date.toLocaleTimeString()}
<p>Ticks since mount: {tickCount}</p>
</div>
);
}

function ClockDisplay() {

const [showClock, setShowClock] = useState(false);

const toggleClock = () => {
setShowClock(!showClock);
}

return (
<div className="ClockDisplay componentBox">
{showClock && <Clock />}
<button onClick={toggleClock}>Toggle Clock</button>

</div>
)
}
export default ClockDisplay;

// export default Clock