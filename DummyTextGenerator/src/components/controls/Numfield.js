import React, { useState, useEffect } from 'react';

const Numfield = (props) => {
    const [val, setVal] = useState(props.value);

    useEffect(() => {
        if(val >= 1) {
            props.onChanging(val);
        }
    }, [val]);

    const onChanging = (e) => {
        setVal(e.target.value);
    };

    return (
        <div>
            <input type="number" value={val} onChange={onChanging.bind(this)}/>
        </div>
    )
};

export default Numfield;