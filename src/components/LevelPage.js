import React, {useEffect, useState} from 'react'
import {Grid, Image} from 'semantic-ui-react'
import QuestionCard from './QuestionCard'
import { useHistory } from "react-router-dom";

function LevelPage() {

    let history = useHistory();
    const [user, setUser] = useState()
    const [level, setLevel] = useState()
    const [levelNum, setLevelNum] = useState(1)
    const [trophy, setTrophy] = useState()


    useEffect(() => {
        fetch("https://code-quiz-app-back.herokuapp.com/user/current")
        .then((resp)=>resp.json())
        .then((data)=>{
            setUser(data)
            // setIsLoaded(true)
        })
    }, [])

    useEffect(() => {
       fetch(`https://code-quiz-app-back.herokuapp.com/levels/questions/${levelNum}`)
       .then((resp)=>resp.json())
       .then((levelData)=>{
           setLevel(levelData)
           // setIsLoaded(true)
        })
        fetch(`https://code-quiz-app-back.herokuapp.com/levels/trophy/${levelNum}`)
       .then((resp)=>resp.json())
       .then((trophyData)=>{
           setTrophy(trophyData)
           console.log(trophyData)
           // setIsLoaded(true)
        })

    }, [levelNum])


    const updateLevel = () => {
        fetch("https://code-quiz-app-back.herokuapp.com/users/last", {
            method: "PATCH",
                headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                level_id: (levelNum)
            }),
        })
        if(levelNum === 5){
            alert("big W!")
            // setLevelNum(1)
            history.push("/score")
        }
        else{
            setLevelNum(levelNum + 1)
            alert("next level!")
        }
    }

    function handleQuitGame(){
        history.push("/score")
    }


    return user && level && trophy?
        (
        <div className="gamecontainer">
            <h2>{level["name"]}</h2>
            <QuestionCard level={level} trophy={trophy} user={user} updateLevel={updateLevel}/>
            <div >
            <button className="quitbutton"  onClick={handleQuitGame}>Get Me Outta Here!</button>
            </div>
        </div>
        ) : "Loading"
}


export default LevelPage;