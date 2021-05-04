
const Home = props => {
    return(
        <div className="simple">
            <h1 className="trivia">Trivia All Day, All Night</h1>
            <button type="button" class="btn btn-danger btn-lg quiz-button" 
            onClick={() => props.start(true)}>Start
            </button>
        </div>
    )
}

export default Home;