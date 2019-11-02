import React, { useState, useEffect } from 'react';

const Output = (props) => {

    const value = props.value;

    return (
        <div className="output">
            <p>
                {value}
            </p>
        </div>
    )
};

export default Output;