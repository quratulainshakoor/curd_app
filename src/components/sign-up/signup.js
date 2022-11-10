import React, { useState, useEffect } from "react";

let dummyData = [
  {
    id: 1,
    name: "ahmed",
    email: "ahmed@gmail.com",
    password: "ahmed123",
  },

  {
    id: 2,
    name: "ali",
    email: "ali@gmail.com",
    password: "ali123",
  },

  {
    id: 3,
    name: "bilal",
    email: "bilal@gmail.com",
    password: "bilal123",
  },
];

const SignUpScreen = () => {
  // Note: Handeling states here...!
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [usersList, setUsersList] = useState([]);

  const clearStates = () => {
    setName("");
    setEmail("");
    setPassword("");
  };

  // Note: Component mounted hook...!
  useEffect(() => {
    // Note: Fetching local storage DB data...!
    let dbData = localStorage.getItem("Users");
    // console.log(dbData);

    if (dbData == null) {
      let emptyArr = JSON.stringify([]);
      localStorage.setItem("Users", emptyArr);
    } else {
      let fetchData = localStorage.getItem("Users");
      let actualData = JSON.parse(fetchData);
      setUsersList(actualData);
      // console.log("Your Data: ", actualData);
    }
  }, []);

  // Note: Function to registered user...!
  const registeredUser = () => {
    let formData = {
      name,
      email,
      password,
    };
    let duplicateFound = false;

    for (let i = 0; i < usersList.length; i++) {
      // console.log(usersList[i]);

      if (usersList[i].email == formData.email) {
        duplicateFound = true;
        break;
      }
    }

    if (!duplicateFound) {
      let userListClone = usersList.slice(0);
      userListClone.push(formData);
      setUsersList(userListClone);
      clearStates();

      let dataInStr = JSON.stringify(userListClone);
      localStorage.setItem("Users", dataInStr);
    } else console.log("Duplicate found!");
  };

  // 3 < 2 < 1 === false

  // Note: This hook will work on every update od usersList state...!
  useEffect(() => {
    // console.log(usersList);
  }, [usersList]);

  return (
    <>
      <div className="container ">
        <div>

 <h1 class="text-white bg-success   text-center"> Registered User Form</h1>

        <form>

        <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              User Name
            </label>
            <input
               id='name'
               type={'text'}
               placeholder="Please Enter Your Name"
               value={name}
               onChange={(e) => setName(e.target.value)}
              className="form-control"
            />
            <div id="nameHelp" className="form-text">
              We'll never share your name with anyone else.
            </div>
          </div>

          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              id="email"
              type={"email"}
              placeholder="Please Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>


          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type={"password"}
              className="form-control"
              placeholder="******"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" for="exampleCheck1">
              Check me out
            </label>
          </div>
          <button onClick={registeredUser} className="btn btn-outline-success">
            
          Registered User
          </button>
        </form>
        </div>
       
      </div>
     
    </>
  );
};

export default SignUpScreen;
