import { useReducer } from "react";
function ReducerCounter() {

const reducer = (state, action) => {
switch (action.type) { // switch statements are common in reducers
case "increment":
return state + 1;
case "decrement":
return state - 1;
case "increment by 5":
return state + 5;
case "decrement by 5":
return state - 5;
default:
return state;
}
};

// useReducer takes a reducer function and the initial state value
// returns array with the state variable and a dispatch function
const [counter, dispatch] = useReducer(reducer, 0);
const handleIncrement = () => {
// we call the dispatch function to make all state updates
dispatch({ type: "increment" });
};
const handleIncrement5 = () =>{
    dispatch({ type: "increment by 5"})
}
const handleDecrement = () => {
// dispatch takes a single argument - object passed to reducer
dispatch({ type: "decrement" });
};
const handleDecrement5 = () =>{
    dispatch({ type: "decrement by 5"})
}


return (
<div className="ReducerCounter componentBox">
<h2>Count: {counter}</h2>
<button onClick={handleIncrement}>Reducer
Increment</button>
<button onClick={handleIncrement5}>Reducer Increment by 5</button>
<button onClick={handleDecrement}>Reducer
Decrement</button>
<button onClick={handleDecrement5}>Reducer Decrement by 5</button>
</div>
);
};

export default ReducerCounter;