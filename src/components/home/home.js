
import React, { useEffect, useState } from 'react';


const Home = () => {

    // Note: Handeling states here...!
    const [electronicItem, setElectronicItem] = useState("");
    const [itemList, setItemList] = useState([]);
    const [authUser, setAuthUser] = useState(null);

    // Note: Add item handler...!
    const addItemHandler = () => {
        // console.log(electronicItem);

        let itemData = {
            itemName: electronicItem,
            userId: authUser.email,
            timeStamp: new Date().toLocaleTimeString()
        };

        let itemListClone = itemList.slice(0);
        itemListClone.push(itemData);
        setItemList(itemListClone);

        setElectronicItem("");

        // Note: Saving data in DB...!
        let dataInStr = JSON.stringify(itemListClone);
        localStorage.setItem("ElectronicItemsList", dataInStr);
    };

    // Note: Mounted hook...!
    useEffect(() => {
        if (localStorage.getItem("ElectronicItemsList") != null) {
            let fetchItemList = localStorage.getItem("ElectronicItemsList");
            let dataInJSON = JSON.parse(fetchItemList);
            console.log(dataInJSON);
            if (dataInJSON) setItemList(dataInJSON);
        }

        else {
            let emptyList = [];
            let dataInStr = JSON.stringify(emptyList);
            localStorage.setItem("ElectronicItemsList", dataInStr);
        }
    }, []);

    // Note: Mounted hook...!
    useEffect(() => {
        let fetchUser = localStorage.getItem("AuthenticatedUser");
        let actualUser = JSON.parse(fetchUser);
        // console.log(actualUser);
        if (actualUser) setAuthUser(actualUser);
    }, []);

    return (
        <>

        <div className='container '>
         <br/>
         <br/>
        <h1 class=" mb-5  text-white bg-primary  text-center t-5   "> Welcome to CRUD App! </h1>

     <div className="mb-5">
<label for="exampleInputPassword1" className="form-label text-success  text-uppercase  " >Item Name</label>

<input type={'text'}  className="form-control p-20"     
        placeholder='Enter Product Name'
        autoFocus
        value={electronicItem}
        onChange={(e) => setElectronicItem(e.target.value)}/>
    
</div>


<button onClick={addItemHandler}
    disabled={electronicItem.trim().length < 1 ? true : false} 
    className="btn btn-outline-success"> Add Items</button>

    <hr/>
    <hr/>


    
    
       
        </div>
           
        </>
    );
};

export default Home;