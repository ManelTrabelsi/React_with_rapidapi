import React from 'react'
import Result from './Result'
class Elements extends React.Component
{

    state=
    {
        area : [] ,
        asn : [],
        city : [],
        continent : [],
        country :[] 
    }

    test()
  {
    const axios = require("axios");
    axios({
        "method":"GET",
        "url":"https://ip-geo-location.p.rapidapi.com/ip/37.140.128.11",
        "headers":{
        "content-type":"application/octet-stream",
        "x-rapidapi-host":"ip-geo-location.p.rapidapi.com",
        "x-rapidapi-key":"ef7bbbe627msh6d333ba4bd224b7p166e61jsn214dd5aa6554"
        },"params":{
        "format":"json"
        }
        })
        .then((response)=>{
          console.log(response.data.area)
          this.setState
          (
              {
                  area: response.data.area ,
                  asn : response.data.asn,
                  city : response.data.city,
                  continent : response.data.continent,
                  country : response.data.country
              }
          )
        })
        .catch((error)=>{
          console.log(error)
        })
      }

    componentDidMount()
    {
        this.test();
    }

    render()
    {
        return (
            <Result area={this.state.area } asn={this.state.asn} city={this.state.city} continent={this.state.continent}
            country={this.state.country} />
                             
        )
    }
}

export default Elements;