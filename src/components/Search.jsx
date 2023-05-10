import React, {useState} from 'react'
import { Card, Row, Col, Divider, Input, Button } from 'antd'

function Search({setSearchedFood}) {

    const handleChange = (event) =>{
        setSearchedFood(event.target.value)
     }

    return (
        <form onChange={handleChange}>
            <label>Search for a food</label>
            <Input name='searchedFood' onChange={handleChange}></Input>
        </form>
    )
}

export default Search