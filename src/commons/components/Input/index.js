import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";

function Input() {

    const [value, setValue] = useState(0);
    const dispatch = useDispatch();

    const display = useSelector((state) => state.displayValue);

    useEffect(() => {
        setValue(display);
        console.log({display});
    }, [display])

    const updateValue = (e) => {
        const { value } = e.target;
        dispatch({type: 'UPDATE_DISPLAY_VALUE', payload: value});
    }

    return(
        <input className="input" value={value} onChange={(e) => updateValue(e)}/>
    )
}

export { Input }