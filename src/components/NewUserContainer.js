import React, {useState} from "react";
import AvatarCard from './AvatarCard'
import { Button, Form, Card, Icon, Image } from "semantic-ui-react";
import { useHistory } from "react-router-dom";


function NewUserContainer({allAvatars}){

    let history = useHistory();
    // console.log(allAvatars)
    const [userInfo, setUserInfo] = useState({})
    const [formData, setFormData] = useState({
        name: "",
        // avatar_id: "",
        // level_id: 1
    })
    const [avatarId, setAvatarId] = useState(0)

    const submitUser = (e) => {
        if(avatarId===0 || !formData.name){
            alert("please type a name and choose an avatar below!")
            return;
        }
        e.preventDefault()
        const newUser = {
            name: formData.name,
            avatar_id: avatarId,
            level_id: 0
        };
        console.log(newUser)
        fetch("https://code-quiz-app-back.herokuapp.com/users", {
            method:'POST',
            headers: {
                'Content-Type':'application/json',
              },
              body: JSON.stringify(newUser)
            })
            .then(res => res.json())
            .then(data => {
              console.log(data);
            })
            history.push("/level")
    }

  

    const handleFormChange = (e) => {
        setFormData(currentFormData => Object.assign({...currentFormData}, {[e.target.name]:e.target.value}))
    }

    const handleImageClick = (id) => {
        setAvatarId(id)
    }

    return(
        <div className="usercontainer">
            
            {/* <h1>User Container</h1> */}
            <h3>Select Your User:</h3>
            <Form>
                <Form.Field><input type = "text" placeholder="username" name="name" value={formData.name} onChange={handleFormChange}/>
                </Form.Field>
               
            
            <h3>Select Your Avatar:</h3>
            <Card.Group itemsPerRow={5}>
                {allAvatars.map(avatar => <AvatarCard avatar={avatar} key={avatar.id} handleImageClick={handleImageClick}/>)}
            </Card.Group>
            <br /><center>
            <Button size="huge" onClick= {submitUser}>Submit</Button></center>
            </Form>
        </div>
    )
}

export default NewUserContainer