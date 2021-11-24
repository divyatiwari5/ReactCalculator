import { Input, Square } from "../commons"

function Board() {
    return(
        <div className="board">
            <div className="row">
                <Square value={1}/>
                <Square value={2}/>
                <Square value={3}/>
                <Square value={'='}/>
            </div>
           <hr/>
            <div className="row">
                <Square value={4}/>
                <Square value={5}/>
                <Square value={6}/>
                <Square value={'+'}/>
            </div>
           <hr/>
            <div className="row">
                <Square value={7}/>
                <Square value={8}/>
                <Square value={9}/>
                <Square value={'-'}/>
            </div>
            <hr/>
            <div className="row">
                <Square value={'CLEAR'}/>
                <Square value={0}/>
            </div>
            <hr/>
            <Input/>
        </div>
    )
}

export default Board