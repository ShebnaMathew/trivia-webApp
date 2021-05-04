import {useState} from 'react';
import Setup from "../components/Setup";
import 'bootstrap/dist/css/bootstrap.min.css';

const requestActivity = async (url) => {
    let response = await fetch(url);
    let activityData = await response.json();
    return activityData
}

const App = () => {
    
    const [started, setStarted] = useState(false);
    const [configured, setConfigured] = useState(false);
    const [data, setData] = useState([]);
    const [scorePresent, setScorePresent] = useState(false);
    const [score, setScore] = useState(0)
    const [total, setTotal] = useState(0)
    
    const baseURL = "https://opentdb.com/api.php?amount="

    const startQuiz = (numOfQuestions, category, difficulty, type) => {
        let url = baseURL+numOfQuestions;

        if (category !== "Any Category") {
            url = url + "&category=" + category
        }
        
        if (difficulty !== "Any Difficulty") {
            url = url + "&difficulty=" + difficulty.trim()
        }
        
        if (type !== "Any Type") {
            url = url + "&type=" + type.trim()
        }
        
        requestActivity(url).then(current => {
            console.log(current)
            setData(current)
        })
        setConfigured(true)
    }

    return (
        <div id="home" className="main">
            <nav className="navbar navbar-light">
                <div className="container-fluid">
                    <a className="navbar-brand mx-auto font" href="#home" onClick={()=>{
                        setConfigured(false)
                        setStarted(false)
                        setScorePresent(false)
                        }}>
                        Trivia Land
                    </a>
                </div>
            </nav>
            <div className="container-fluid">
                <div>
                    <Setup started={started} start={setStarted} configured={configured} configure={setConfigured} 
                    fetch={startQuiz} results={data["results"]} clearResults={setData} response={data["response_code"]}
                    score={score} setScore={setScore} total={total} setTotal={setTotal} 
                    scorePresent={scorePresent} setScorePresent={setScorePresent}/>
                </div>
            </div>
        </div>
      )
}

    

export default App;