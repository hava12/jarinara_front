import React, { useState } from "react";

const Counter = (props) => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };
    const clickString = props.click || "Click";
    return (
        <div>
            <button onClick={increment}>
                {clickString} {count}
            </button>
        </div>
    );
};

export default Counter;
