import axios from "axios";
import React from "react";

export default async function getData(name){
    let result = '';
    await axios.get(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`)
    .then(res => {
        console.log(res);
        return result = res;
    })
    .catch(err => {
        return err;
    })
    .finally(() => {
        console.log('Requisition is completed');
    })

    return result;
};