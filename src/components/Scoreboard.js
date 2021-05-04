
const Scoreboard = props => {
    return(
        <div className="simple">
            <h1 className="card-header trivia text-dark bg-warning">Score</h1>
            <h2 className="card-body trivia text-dark bg-warning">{props.score}/{props.total}</h2>
            <button type="button" className="btn btn-danger btn-lg quiz-button" onClick={() => {
                props.setScorePresent(false)
                props.configure(false)
            }
            }>Play again ?
            </button>
        </div>
    )
}

export default Scoreboard;