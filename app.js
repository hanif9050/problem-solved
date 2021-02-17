const searchFood = () => {
  const searchText = document.getElementById("search").value;
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayFoodItems(data.meals))
    .catch((error) =>
      displayError("No items matched!! Please put a specific name or a letter!")
    );
};
const displayFoodItems = (meals) => {
  const searchField = document.getElementById("search").value;
  if (searchField === "") {
    alert("Input text in search field");
  } else {
    const mealContainer = document.getElementById("meals");
    (mealContainer.innerHTML = ""),
      meals.forEach((meal) => {
        const mealDiv = document.createElement("div");
        const newId = meal.idMeal;
        console.log(newId)
        mealDiv.innerHTML = `
        <h1 id="ingredient">${meal.strMeal}</h1>
        <p id="id">${newId}</p>
        <img id="forImg" src="${meal.strMealThumb}" alt=""><br>
        <div>
            <button onClick="getIngredients(${newId})">For more Click Here</button>
        </div>`;
        mealContainer.appendChild(mealDiv);
      });
    searchField.value = "";
  }
};

const getIngredients = (ingredients) => {


  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${ingredients}`;
  console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayIngredients(data.meals));
};
// const displayIngredients = (meals) => {
//   document.getElementById("meals").style.display = "none";
//   console.log(meals);
//   const div = document.getElementById("nameIngredients");
//   div.style.display = "none";
//   const hh = meals;
//   for (let i = 0; i < 10; i++) {
//      item = hh[i];
//     // console.log(item.strIngredient1)
//     const itemDiv = document.createElement("li");
//     itemDiv.innerHTML = `
//               <li>${newLocal}</li>
//               <li>${item.strIngredient2}</li>
//               <li>${item.strIngredient3}</li>
//               <li>${item.strIngredient4}</li>
//               <li>${item.strIngredient5}</li>
              

//                 `;
//     div.appendChild(itemDiv);
//     console.log(itemDiv);
//     div.style.display = "block";
//   }
// };

const displayIngredients = (meals) => {
    document.getElementById("meals").style.display = "none";
    console.log(meals);
    const div = document.getElementById("nameIngredients");
    div.style.display = "none";
    const hh = meals;
    hh.forEach(item=>{
      // item = hh[i];
      console.log(item.strIngredient1)
      const itemDiv = document.createElement("li");
      itemDiv.innerHTML = `
                <li>${item.strIngredient1}</li>
                <li>${item.strIngredient2}</li>
                <li>${item.strIngredient3}</li>
                <li>${item.strIngredient4}</li>
                <li>${item.strIngredient5}</li>
                
  
                  `;
      div.appendChild(itemDiv);
      console.log(itemDiv);
      div.style.display = "block";
    }) 
      
    
  };

const displayError = (error) => {
  const errorTag = document.getElementById("error-message");
  errorTag.innerText = error;
};

