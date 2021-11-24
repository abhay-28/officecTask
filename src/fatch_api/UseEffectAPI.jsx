import React, { useEffect, useState } from 'react'

const UseEffectAPI = (prop) => {

    const [setData, updateData] = useState([]);
    const getApi = async () => {
        const respond = await fetch('https://jsonplaceholder.typicode.com/photos')
        // console.log(respond, 'abhay')
        const jsonData = await respond.json()
        // console.log(jsonData[0], 'jsonData');
        updateData(jsonData);
    }
    useEffect(() => {
        getApi();
    }, [])

    return (
        <div className="container">
            <div className="row">

                {
                    setData.map((item) => {
                        return (
                            // console.log(item,'abhay test')
                            <div className="col-md-4 col-10 mx-auto mt-5" key={item.id}> 
                                <div className="card h-100">
                                    <img src={setData[0].url} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{item.id}] {item.title}</h5>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

                {/* <div className="col-md-4 col-10 mx-auto mt-5">
                    <div className="card">
                        <img src={setData[0].url} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{setData[0].title}</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-10 mx-auto mt-5">
                    <div className="card">
                        <img src={setData[0].url} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{setData[0].title}</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-10 mx-auto mt-5"> 
                    <div className="card">
                        <img src={setData[0].url} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{setData[0].title}</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default UseEffectAPI
