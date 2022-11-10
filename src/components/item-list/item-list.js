import React, { useEffect, useState } from 'react';

const ItemList = () => {

    // Note: Handeling states here...!
    const [dataList, setDataList] = useState([]);

    // Note: Mounted Hook...!
    useEffect(() => {
        let fetchItemsData = localStorage.getItem("ElectronicItemsList")
        let dataInJSON = JSON.parse(fetchItemsData);
        if (dataInJSON) setDataList(dataInJSON);
    }, []);

    return (
        <>
  <br/>

            <h1 class="text-white bg-primary text-center"> Items List Screen! </h1>

          <div className="list-group">

           

            {
                (dataList && dataList.length > 0)
                    ?
                    (
                        dataList.map((item, index) => {
                            return (
                                <div key={index}>
                                    <h3 class="list-group-item  px-2 mx-5 my-2 bg-secondary text-white  text-center"> {`${index + 1} ${item.itemName}`} </h3>
                                </div>
                            );
                        })
                    )
                    :
                    (<h2> Data Not Found! </h2>)
            }
  ...
           
           
          </div>

        

            
        </>
    );
};

export default ItemList;