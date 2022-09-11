import React, {useState} from 'react'
// import { Button, Form, Card, Icon, Image } from "semantic-ui-react";

 function ScoreCard({user, trophyList}) {
     
    // const [dispayUser, setDisplayUser] = useState(false)

    const [userTrophies, setUserTrophies] = useState(trophyList.filter((trophy) => {
        return (
            trophy.id <= user.level_id 
        )
    }))

    console.log(user, userTrophies)

       const trophyImage =  userTrophies.map((trophy)=><img src={trophy.image_url} height="60" width="60"/>)

   
    return  user.level_id > 0 ? (
        <div>
            <h3>{user.name}</h3>{trophyImage} 
        </div>
    )
    : null
}

export default ScoreCard