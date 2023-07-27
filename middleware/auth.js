import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('registerForm');

    registerForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');

        try {
            await createUserWithEmailAndPassword(auth, email, password);
        } catch {
            console.log(err);

        }
    })
})



// export const Auth = () => {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");

//     const signIn = async () => {

//         setEmail(document.getElementById('user'));
//         setPassword(document.getElementById('password'));

//         try {
//             await createUserWithEmailAndPassword(auth, email, password);
//         } catch (err) {
//             console.log(err);
//         }
//     };
// }