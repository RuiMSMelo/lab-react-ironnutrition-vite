import React, {useState} from 'react'
import { Card, Row, Col, Divider, Input, Button } from 'antd'
import { useForm } from 'antd/es/form/Form'

function AddFoodForm({setFoodData}) {

    const [addedFoodName, setAddedFoodName] = useState()
    const [addedFoodImg, setAddedFoodImg] = useState()
    const [addedFoodCalories, setAddedFoodCalories] = useState()
    const [addedFoodServings, setAddedFoodServings] = useState() 

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('addedFood',{addedFoodName, addedFoodImg, addedFoodCalories, addedFoodServings})
        setFoodData(prevFoodData => [...prevFoodData, { name: addedFoodName, image: addedFoodImg, calories: addedFoodCalories, servings: addedFoodServings }])
    }


  return (
    <form onSubmit={handleSubmit}>
       <div>
            <label>Name: </label>
            <Input value={addedFoodName} name='addedFoodName' onChange={(event)=>{setAddedFoodName(event.target.value)}}></Input>
        </div>
        <div>
            <label>Image: </label>
            <Input value={addedFoodImg} name='addedFoodImg' onChange={(event)=>{setAddedFoodImg(event.target.value)}}></Input>
        </div>
        <div>
            <label>Calories: </label>
            <Input value={addedFoodCalories} name='addedFoodCalories' onChange={(event)=>{setAddedFoodCalories(event.target.value)}}></Input>
        </div>
        <div>
            <label>Servings: </label>
            <Input value={addedFoodServings} name='addedFoodServings' onChange={(event)=>{setAddedFoodServings(event.target.value)}}></Input>
        </div>
        <button type='submit'>Submit</button>
    </form>
    
  )
}

export default AddFoodForm