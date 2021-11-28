import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";

function Input() {

    const [value, setValue] = useState('');
    const [total, setCalculatedValue] = useState(0);
    const dispatch = useDispatch();

    const display = useSelector((state) => state.displayValue);
    const calculatedValue = useSelector((state) => state.calculatedValue);

    useEffect(() => {
        setValue(display);
        console.log({display});
    }, [display])

    useEffect(() => {
        setCalculatedValue(calculatedValue);
    }, [calculatedValue])

    const updateValue = (e) => {
        const { value } = e.target;
        dispatch({type: 'UPDATE_DISPLAY_VALUE', payload: value});
    }

    return(
        <div>
            <input className="input" value={value} onChange={(e) => updateValue(e)}/>
            <input className="input" value={'= ' + total}/>
        </div>
    )
}

export { Input }