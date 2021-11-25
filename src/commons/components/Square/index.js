function Square(props) {
    return(
        <div className="square" onClick={() => props.click(props.value)}>
            {props.value}
        </div>
    )
}

export { Square }