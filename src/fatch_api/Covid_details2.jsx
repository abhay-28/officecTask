import React, { useEffect, useState } from 'react'

const Covid_details2 = () => {

    const [data, updateData] = useState([]);


    const getFachData = async () => {
        let fetchData = await fetch('https://api.covid19api.com/summary')
        let respond = await fetchData.json();
        // console.log(respond,'respond2');
        updateData(respond.Countries);
    }

    useEffect(() => {
        getFachData();
    }, [])

    function handleSelectChange(event) {
        console.log(event.target.value, 'te4st');//fail
        // console.log(`event.target.selectedIndex`, event.target.selectedIndex)
        let idx = event.target.selectedIndex;
        let dataset = data[idx - 1];

        console.log(dataset,'dataset');
        console.log('Country: ', dataset.Country);
        console.log('CountryCode: ', dataset.CountryCode);


            document.getElementById('countryName').value = dataset.Country;
            document.getElementById('CountryCode').value = dataset.CountryCode;
            document.getElementById('Date').value = new Date(dataset.Date).toLocaleDateString();
            document.getElementById('NewConfirmed').value = dataset.NewConfirmed;
            document.getElementById('NewDeaths').value = dataset.NewDeaths;
            document.getElementById('NewRecovered').value = dataset.NewRecovered;
            document.getElementById('TotalConfirmed').value = dataset.TotalConfirmed;
            document.getElementById('TotalDeaths').value = dataset.TotalDeaths;
            document.getElementById('TotalRecovered').value = dataset.TotalRecovered;
    }


    return (
        <section>
            <div className="container">
                <h2 className="my-5">Check for covid status Globally </h2>
                <div className="wrapper my-5">
                    <select onChange={handleSelectChange} name='' id="select_country" className="form-control w-25">
                        <option>Select Country</option>
                        {
                            data && data.map((countryList) => {
                                // console.log(countryList,'countryList')

                                return <option key={countryList.Country + 'abhay'}> {countryList.Country}</option>

                            })

                        }
                        
                    </select>
                </div>
                <div className="row my-4">
                    <div className="col">
                        <label>country</label>
                        <input type="text" className="form-control" id="countryName" placeholder="country" aria-label="country" />
                    </div>
                    <div className="col">
                        <label>Country Code</label>
                        <input type="text" className="form-control" id="CountryCode" placeholder="country code" aria-label="country code" />
                    </div>
                    <div className="col">
                        <label>Date</label>
                        <input type="text" className="form-control" id="Date" placeholder="Date" aria-label="Date" />
                    </div>
                </div>
                <div className="row my-4">
                    <div className="col">
                        <label>New Confirmed Cases</label>
                        <input type="text" className="form-control" id="NewConfirmed" placeholder="New Confirmed Cases" aria-label="New Confirmed Cases" />
                    </div>
                    <div className="col">
                        <label>New Deaths</label>
                        <input type="text" className="form-control" id="NewDeaths" placeholder="New Deaths" aria-label="New Deaths" />
                    </div>
                    <div className="col">
                        <label>New Recovered</label>
                        <input type="text" className="form-control" id="NewRecovered" placeholder="New Recovered" aria-label="New Recovered" />
                    </div>
                </div>
                <div className="row my-4">
                    <div className="col">
                        <label>Total Confirmed</label>
                        <input type="text" className="form-control" id="TotalConfirmed" placeholder="Total Confirmed" aria-label="Total Confirmed" />
                    </div>
                    <div className="col">
                        <label>Total Deaths</label>
                        <input type="text" className="form-control" id="TotalDeaths" placeholder="Total Deaths" aria-label="Total Deaths" />
                    </div>
                    <div className="col">
                        <label>Total Recovered</label>
                        <input type="text" className="form-control" id="TotalRecovered" placeholder="Total Recovered" aria-label="Total Recovered" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Covid_details2
