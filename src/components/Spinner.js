import React from "react";

const Spinner = () => {
    return (
        <div className="spinner-border" style={{ width: "3rem", height: "3rem" }} role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    );
};

export default Spinner;
