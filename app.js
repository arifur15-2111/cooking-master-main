document.getElementById("searchButton").addEventListener('click',function(){
   const grabName= document.getElementById("searchingInput");
   const foodName =grabName.value;
   const url =`https://www.themealdb.com/api/json/v1/1/search.php?f=${foodName}`
   fetch(url)
   .then(result => result.json())
   .then(data =>{
    displayFood(data);
   })
})
const displayFood = data => {
    const DivOfFoods = document.getElementById('foods');

    data.meals.forEach(food=> {
        const foodDiv = document.createElement('div');
        foodDiv.className ='food';

        const foodInfo = `
         <button id="div" onclick="foodInfo('${food.strMeal}')"
        <div id="div1">
        
            <img  id="imgs" src="${food.strMealThumb}"</p>
    
            <h3 id="food-name">${food.strMeal}</h3>
            </div>
            </button>
        `;
        foodDiv.innerHTML=foodInfo;
        DivOfFoods.appendChild(foodDiv);
      });
}
const foodInfo = detail =>{
    const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${detail}`
    fetch(url)
    .then(res =>res.json())
    .then(data =>{
       displayInfo(data.meals[0]);
    })
    
}
const displayInfo = detail => {
    const foodDiv = document.getElementById('foodInformation')
    foodDiv.innerHTML = `
    <div id = "ingredient"> 
   <img  id="imgs" src="${detail.strMealThumb}" </p>
   <h3>${detail.strMeal}</h3>
   <h5>Ingredient</h5>
   <li>${detail.strIngredient1}</li>
   <li>${detail.strIngredient2}</li>
   <li>${detail.strIngredient3}</li>
   <li>${detail.strIngredient4}</li>
   <li>${detail.strIngredient5}</li>
   <li>${detail.strIngredient6}</li>
   </div>
    `
}