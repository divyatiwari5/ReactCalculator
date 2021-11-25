import { useDispatch, useSelector } from "react-redux"
import { Input, Square } from "../commons"

function Board() {

    const dispatch = useDispatch();
    const displayValue = useSelector((state) => state.displayValue);
    // input value 
    // on click of add icon show + 

    const numberClick = (clickedNumber) => {
        const updatedVal = displayValue + '' + clickedNumber;
        dispatch({type: "UPDATE_DISPLAY_VALUE", payload: updatedVal})
    }

    const clear = () => {
        dispatch({ type: 'CLEAR'})
    }

    return(
        <div className="board">
            <div className="row">
                <Square value={1} click={numberClick}/>
                <Square value={2} click={numberClick}/>
                <Square value={3} click={numberClick}/>
                <Square value={'='} click={numberClick}/>
            </div>
           <hr/>
            <div className="row">
                <Square value={4} click={numberClick}/>
                <Square value={5} click={numberClick}/>
                <Square value={6} click={numberClick}/>
                <Square value={'+'} click={numberClick}/>
            </div>
           <hr/>
            <div className="row">
                <Square value={7} click={numberClick}/>
                <Square value={8} click={numberClick}/>
                <Square value={9} click={numberClick}/>
                <Square value={'-'} click={numberClick}/>
            </div>
            <hr/>
            <div className="row">
                <Square value={'CLEAR'} click={clear}/>
                <Square value={0} click={numberClick}/>
            </div>
            <Input/>
        </div>
    )
}

export default Board