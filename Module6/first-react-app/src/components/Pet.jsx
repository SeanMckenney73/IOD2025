function pet(props) {
    let type = 'unknown'
    if (props.type) type = props.type

    return (
        <div className="Pet componentBox">
            <h2>My Pet</h2> <p>Type: {type}</p>
        
        {props.name ? <p>Name: {props.name}</p> : null}

        {props.color} && <p>Color: {props.color}</p>
        </div>

    )
}

export default pet