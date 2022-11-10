// Note: LogInScreen component...!

import React, { useState, useEffect } from 'react';

const LogInScreen = () => {

    // Note: Handeling states here...!
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [usersList, setUsersList] = useState([]);
    const [showMessage, setShowMessage] = useState(undefined);

    // Note: Component mounted hook...!
    useEffect(() => {
        let userListClone = usersList.slice(0);
        let fetchUsers = localStorage.getItem("Users");
        let dataInJSON = JSON.parse(fetchUsers);
        if (dataInJSON) {
            userListClone = dataInJSON;
            setUsersList(userListClone);
        }
    }, []);

    useEffect(() => {
        console.log(showMessage);

        if (showMessage == "You have logged in successfully!") {
            let authenticatedUser = { email, password };
            let dataInStr = JSON.stringify(authenticatedUser);
            localStorage.setItem("AuthenticatedUser", dataInStr);
            window.location.reload();
        }
    }, [showMessage]);

    // Note: Function to login user..!
    const logInUser = () => {
        let user = {
            email,
            password
        };
        // console.log(user);

        for (let i = 0; i < usersList.length; i++) {
            // console.log(usersList[i]);

            if (
                usersList[i].email == user.email &&
                usersList[i].password == user.password
            ) {
                setShowMessage("You have logged in successfully!");
                break;
            }

            else if (
                usersList[i].email == user.email &&
                usersList[i].password != user.password
            ) {
                setShowMessage("Password does not matched!");
                break;
            }

            else setShowMessage("User does not exist!");
        };
    };

    return (
        <>
        
        <div className='container p-5'>

        <h1 class="text-white bg-success  text-center" > LOG IN  Form</h1>
     
     <form>
       <div className="mb-3">
         <label for="exampleInputEmail1" className="form-label">Email address</label>
         <input    id='email'
                         type={'email'}
                         placeholder="Please Enter Your Email"
                         value={email}
                         onChange={(e) => setEmail(e.target.value)} className="form-control"/ >
         <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
       </div>
       <div className="mb-3">
         <label for="exampleInputPassword1" className="form-label">Password</label>
         <input type={'password'}  className="form-control"      placeholder="******"
                         value={password}
                         onChange={(e) => setPassword(e.target.value)} id="password"/>
       </div>
       <div className="mb-3 form-check">
         <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
         <label className="form-check-label" for="exampleCheck1">Check me out</label>
       </div>
       <button  onClick={logInUser} className="btn btn-outline-success">     Log In</button>
     </form>
        </div>

           
        </>
    );
};

export default LogInScreen;