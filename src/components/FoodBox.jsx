import React from 'react'
import { Card, Row, Col, Divider, Input, Button } from 'antd'


function FoodBox({food, foodData, setFoodData}) {
  const deleteFood = (name) => {
    console.log(name)
    const updatedData = foodData.filter((eachFood) => {
      return (eachFood.name !== name)
    })
    setFoodData(updatedData)
  }
  return (
    <div>
        <h3>{food.name}</h3>
        <img src={food.image} width="100px"/>
        <p>Calories: {food.calories}</p>
        <p>Servings: {food.servings}</p>
        <p>Total Calories: {food.calories * food.servings}</p>
        <Button type='button' onClick={()=>{deleteFood(food.name)}}>Delete</Button>
    </div>
  )
}

export default FoodBox