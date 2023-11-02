import {auth, provider} from "../../firebase/config"
import {signInWithPopup} from "firebase/auth"
import {useNavigate } from "react-router-dom";

// Icons
import googleIcon from "../../assets/googleIcon.png"

const Login = () => {

  const navigate = useNavigate()

  const signInWithGoogle = async () =>{
    const result = await signInWithPopup(auth, provider)
    console.log(result)
    navigate("/")
  }

  return (
    <div className="login">
      <div className="googleBtn" onClick={signInWithGoogle}><img src={googleIcon} alt="login" /> Sign In With Google</div>
    </div>
  );
};

export default Login;
