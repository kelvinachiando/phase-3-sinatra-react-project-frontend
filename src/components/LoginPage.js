import NewUserContainer from "./NewUserContainer";
import {useState, useEffect} from "react"

function LoginPage() {
    const [allAvatars, setAllAvatars] = useState([])
    // const [allMonsters, setAllMonsters] = useState([])
  
    useEffect(() => {
      fetch('http://localhost:9292/avatars')
      .then(res => res.json())
      .then(data => setAllAvatars(data))
    }, []);
  
    // useEffect(() => {
    //   fetch('http://localhost:9292/monsters')
    //   .then(res => res.json())
    //   .then(data => setAllMonsters(data))
    // }, []);
  
    
  
    return (
        <div>
            <NewUserContainer allAvatars={allAvatars}/>
            {/* returning user STRETCH GOALS */}

        </div>
    )
}
export default LoginPage;