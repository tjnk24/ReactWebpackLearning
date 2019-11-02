import React, {useState} from 'react';

function Range(props) {

    const [value, setValue] = useState(props.value);

   /* Range.defaultProps = {
        min: 0,
        max: 245,
        step: 1
    };*/
    const {min = 0, max = 245, step = 1} = props;

    let onChange = (event) => {
        props.onChange(value); //имеются ввиду пропсы в <Range onChange={heightChange.bind(this)}/>
        setValue(event.target.value);
    };

    return (
        <div className="range">
            <input
                type="range"
                value={value}
                min={min}
                max={max}
                step={step}
                onChange={onChange.bind(this)}
            />
        </div>
    );
}

export default Range;