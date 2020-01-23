import React from 'react';

function Result(props)
{
    return (
        <div class="card">
                    <div class="card-body">
                        <h1 class="card-title">Result</h1>
                        <h2>Area</h2>
                            <p><strong>Code : </strong>{props.area.code}</p>
                            <p><strong>Name : </strong>{props.area.name}</p>
                        <h2>ASN</h2>
                            <p><strong>Number : </strong>{props.asn.number}</p>
                            <p><strong>Organisation</strong>{props.asn.organisation}</p>
                        <h2>City</h2>
                            <p><strong>Geonameid : </strong>{props.city.geonameid}</p>
                            <p><strong>Name : </strong>{props.city.name}</p>
                            <p><strong>Population : </strong>{props.city.population}</p>
                        <h2>Continent</h2>
                            <p><strong>Code : </strong>{props.continent.code}</p>
                            <p><strong>Geonameid : </strong>{props.continent.geonameid}</p>
                            <p><strong>Name : </strong>{props.continent.name}</p>
                    </div>  
                </div>
    )
}

export default Result;