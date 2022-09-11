import React, {useEffect, useState} from 'react'
import ScoreCard from './ScoreCard';
import { useHistory } from "react-router-dom";

function ScorePage() {

    let history = useHistory();
    const [userList, setUserList] = useState()
    const [trophyList, setTrophyList] = useState()

    useEffect(() => {
        
        fetch("http://localhost:9292/users/ordered")
            .then((resp)=>resp.json())
            .then((allUsers)=> setUserList(allUsers))

            fetch("http://localhost:9292/trophies")
            .then((resp)=>resp.json())
            .then((allTrophies)=> setTrophyList(allTrophies))

    }, [])

    console.log(trophyList)

    function handleLoginPage(){
        history.push("/login")
    }


    return userList && trophyList ?
     (
        <div className="scorecontainer">
            <h1>HIGH SCORES</h1>
            {userList.map((user)=><ScoreCard trophyList={trophyList} user={user}/>)}
            <button className="loginbutton" onClick={handleLoginPage}>Take Me To The Login Page!</button>
        </div>
    )
    : "Loading"
}

export default ScorePage;