import React, { useEffect, useState } from 'react'
import './fetch_api.css';

const Covid_details = () => {

    const [data, updateData] = useState([]);
    const [country, setCountry] = useState();
    const [covid,setCovid]=useState({
        id:'',
        country:''
    })


    const getFachData = async () => {
        let fetchData = await fetch('https://api.covid19api.com/summary')
        let respond = await fetchData.json();
        // console.log(respond,'respond2');
        updateData(respond.Countries);
    }

    useEffect(() => {
        getFachData();
    }, [])

    const [covidDetailes, updateCovidDetailes] = useState([]);

    function handleSelectChange(event) {
        console.log(event.target.value, 'te4st');
        setCountry(event.target.value)
        data.filter(a=>{
            if(a.ID ===event.target.value){
                setCovid({
                    id:a.id,
                    country:a.Country
                })
            }
        })
            // updateCovidDetailes(event.target.value)
    }
    console.log(covid,'testcountry');
    return (
        <section>
            <div className="container">
                <h2 className="my-5">Check for covid status Globally </h2>
                <div className="wrapper my-5">
                    <select onChange={handleSelectChange} value={country} name='' className="form-control w-25">
                        <option>Select Country</option>
                        {
                            data && data.map((countryList) => {
                                // console.log(countryList,'countryList')
                                return <option key={countryList.Country + 'abhay'} value={countryList.ID}> {countryList.Country}</option>
                            })
                        }                        
                    </select>
                </div>
                <div className="row my-4">
                    <div className="col">
                        <label>country</label>
                        <input value={covid && covid.Country} className="form-control" id="countryName" placeholder="country" aria-label="country" />
                    </div>
                    <div className="col">
                        <label>Country Code</label>
                        <input value={covid && covid.CountryCode} className="form-control" id="CountryCode" placeholder="country code" aria-label="country code" />
                    </div>
                    <div className="col">
                        <label>Date</label>
                        <input value={covid && covid.Date} className="form-control" id="Date" placeholder="Date" aria-label="Date" />
                    </div>
                </div>
                <div className="row my-4">
                    <div className="col">
                        <label>New Confirmed Cases</label>
                        <input value={covid && covid.NewConfirmed} className="form-control" id="NewConfirmed" placeholder="New Confirmed Cases" aria-label="New Confirmed Cases" />
                    </div>
                    <div className="col">
                        <label>New Deaths</label>
                        <input value={covid && covid.NewDeaths} className="form-control" id="NewDeaths" placeholder="New Deaths" aria-label="New Deaths" />
                    </div>
                    <div className="col">
                        <label>New Recovered</label>
                        <input value={covid && covid.NewRecovered} className="form-control" id="NewRecovered" placeholder="New Recovered" aria-label="New Recovered" />
                    </div>
                </div>
                <div className="row my-4">
                    <div className="col">
                        <label>Total Confirmed</label>
                        <input value={covid && covid.TotalConfirmed} className="form-control" id="TotalConfirmed" placeholder="Total Confirmed" aria-label="Total Confirmed" />
                    </div>
                    <div className="col">
                        <label>Total Deaths</label>
                        <input value={covid && covid.TotalDeaths} className="form-control" id="TotalDeaths" placeholder="Total Deaths" aria-label="Total Deaths" />
                    </div>
                    <div className="col">
                        <label>Total Recovered</label>
                        <input value={covid && covid.TotalRecovered} className="form-control" id="TotalRecovered" placeholder="Total Recovered" aria-label="Total Recovered" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Covid_details
