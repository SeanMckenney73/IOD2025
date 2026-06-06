import { useContext, useState } from "react";
import { useUserContext } from "../context/UserContext";
import { useEmojiContext } from "../context/EmojiContext";
import { MyThemeContext, themes} from "../context/MyThemeContext"

function LoginForm() {

const {theme, darkMode, setTheme} = useContext(MyThemeContext)

const [userEmail, setUserEmail] = useState('');
const [userPassword, setUserPassword] = useState('');

const [submitResult, setSubmitResult] = useState('');

const {currentUser, handleUpdateUser} = useUserContext()
const {currentEmoji, handleUpdateEmoji} = useEmojiContext()



const handleSubmit = (e) => {
e.preventDefault();
if (userPassword.length < 5) {
setSubmitResult('Password must be at least 5 chars long');
} else if (userPassword === userEmail) {
setSubmitResult('Password must not match email address');
} else {
setSubmitResult('Successful login.');
handleUpdateUser({ email: userEmail }); // context function
}
}

const toggleTheme = () => {
    setTheme(darkMode ? themes.light : themes.dark)
}

if (currentUser.email) return (
<><p>Welcome {currentUser.email}!</p>
<button onClick={() => handleUpdateUser({})}>Log Out</button>
</>
);

return (
    <div className="LoginForm componentBox" style={{background: theme.background, color: theme.foreground}}>
        <form onSubmit={handleSubmit}>
        <div className="formRow">
        <label>Email Address:
            <input type="email" value={userEmail} name="userEmail" onChange={(e) => setUserEmail(e.target.value)} />
        </label>
        </div>
        <div className="formRow">
        <label>Password:
            <input type="password" value={userPassword} name="password" onChange={(e) => setUserPassword(e.target.value)} />
        </label>
        </div>
    <button>Log In</button>
    <button onClick={toggleTheme}>
        Swith to {darkMode ? "Light" : "Dark"} Mode
    </button>
    <p>{submitResult}</p>
    <p>{currentEmoji.mood}</p>
    </form>
    </div>
)
}

// return (
//     <div className="LoginForm componentBox">
//     <form onSubmit={handleSubmit}>
//     <button>Log In</button>
//     <p>{submitResult}</p>
//     </form>
//     </div>
//     )
// }

export default LoginForm