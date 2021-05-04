import Configure from "./Configure"
import QuestionStack from "./QuestionStack"
import Scoreboard from "./Scoreboard"
import Home from "./Home"
import BadInput from "./BadInput"
import Loading from "./Loading"

const Setup = (props) => {

    if (!props.started) {
        return (<Home start={props.start}/>)

    } else if (props.scorePresent) {
        return (<Scoreboard score={props.score} total={props.total} configure={props.configure} setScorePresent={props.setScorePresent}/>)

    } else if (!props.configured){
        return (<Configure fetch={props.fetch} configured={props.configured}/>)

    } else {
        return (
            (props.response === 0)?
            <QuestionStack results={props.results} clearResults={props.clearResults} setScore={props.setScore} 
            setTotal={props.setTotal} setScorePresent={props.setScorePresent}/>
            :(props.response === 1 || props.response === 2)? <BadInput configure={props.configure} 
            setScorePresent={props.setScorePresent}/>:<Loading />
        )
    }
}

export default Setup;