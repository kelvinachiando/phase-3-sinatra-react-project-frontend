import NewUserContainer from "./NewUserContainer";
import {useState, useEffect} from "react"

function LoginPage() {
    const [allAvatars, setAllAvatars] = useState([])
    
  
    useEffect(() => {
      fetch('https://code-quiz-app-back.herokuapp.com/avatars')
      .then(res => res.json())
      .then(data => setAllAvatars(data))
    }, []);
  
    
    return (
        <div>
            <NewUserContainer allAvatars={allAvatars}/>
            {/* returning user STRETCH GOALS */}

        </div>
    )
}
export default LoginPage;