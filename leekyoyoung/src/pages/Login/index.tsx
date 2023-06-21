import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { ReactElement, useState } from "react";

const LoginTab = () => {
    const auth = getAuth();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleClickRegister = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user)
            alert('회원가입 성공');
        }).catch ((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
        })
    }

    const handelClickLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            alert('로그인 성공');
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
        })
    }

    onAuthStateChanged(auth, (user) => {
        if(user) {
            const uid = user.uid;
        } else {

        }
    })

    const handleOnchangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }

    const handleOnchangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }

    return(
        <>
            <form>
                <input type="email" name="email" onChange={handleOnchangeEmail} value={email} />
                <input type="password" name="password"onChange={handleOnchangePassword} value={password} />
                <button onClick={handleClickRegister}>회원가입</button>
                <button onClick={handelClickLogin}>로그인</button>
            </form>
        </>
    )
}

export default LoginTab;