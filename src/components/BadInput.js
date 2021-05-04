
const BadInput = props => {

    return(
        <div className="simple">
            <h1 className="trivia">Eeeks, I don't have that many questions!</h1>
            <button type="button" className="btn btn-danger btn-lg bad-button" onClick={() => {
                props.setScorePresent(false)
                props.configure(false)
            }
            }>Go back
            </button>
        </div>
    )
}

export default BadInput;