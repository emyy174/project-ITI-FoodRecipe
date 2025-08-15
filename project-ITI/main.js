const recipes = [
   {
      title: "Egg & Tomato Sandwich",
      description: "Simple sandwich with boiled eggs and fresh tomatoes.",
      time: "10 mins",
      type: "Easy",
      image: "images/budget/breakfast/tomatto.jpeg",
      Section: "Breakfast"
   },
   {
      title: "Oats with Honey & Banana",
      description: "Warm oats served with natural honey and sliced bananas.",
      time: "7 mins",
      type: "Easy",
      image: "images/budget/breakfast/banan.jpeg",
      Section: "Breakfast"
   },
   {
      title: "Vegetable Omelette",
      description: "Fluffy omelette loaded with fresh vegetables.",
      time: "12 mins",
      type: "Easy",
      image: "images/budget/breakfast/Egg.jpeg",
      Section: "Breakfast"
   },
   {
      title: "Foul Medames with Bread",
      description: "Traditional fava beans dish served with local bread.",
      time: "15 mins",
      type: "Easy",
      image: "images/budget/breakfast/foul.jpeg",
      Section: "Breakfast"
   },
   {
      title: "Lentil Soup with Bread",
      description: "Rich and hearty lentil soup served with fresh bread.",
      time: "25 mins",
      type: "Easy",
      image: "images/budget/lunch/Lentil Soup.jpeg",
      Section: "lunch"
   },
   {
      title: "Vegetable Pasta",
      description: "Pasta mixed with fresh sautéed vegetables.",
      time: "20 mins",
      type: "Easy",
      image: "images/budget/lunch/pasta.jpeg",
      Section: "lunch"
   },
   {
      title: "Rice with Vegetables",
      description: "Steamed rice served with colorful veggies.",
      time: "18 mins",
      type: "Easy",
      image: "images/budget/lunch/ric.jpeg",
      Section: "lunch"
   },
   {
      title: "Grilled Chicken Pieces with Salad",
      description: "Tender grilled chicken pieces served with fresh salad.",
      time: "30 mins",
      type: "Medium",
      image: "images/budget/lunch/Fuel Your Day with Grilled Chicken Power Salad___.jpeg",
      Section: "lunch"
   },
   {
      title: "Lentil Soup",
      description: "Warm and comforting lentil soup.",
      time: "20 mins",
      type: "Easy",
      image: "images/budget/Dinner/lentil.jpeg",
      Section: "Dinner"
   },
   {
      title: "Cheese and Tomato Toast",
      description: "Grilled toast with melted cheese and fresh tomato slices.",
      time: "8 mins",
      type: "Easy",
      image: "images/budget/Dinner/ricotta.jpeg",
      Section: "Dinner"
   },
   {
      title: "Chicken Quesadillas",
      description: "Lightly grill in a pan until the cheese melts and the bread is crispy.",
      time: "15 mins",
      type: "Easy",
      image: "images/budget/Dinner/french.jpeg",
      Section: "Dinner"
   },
   {
      title: "Chickpea Salad",
      description: "Fresh chickpea salad with herbs and lemon dressing.",
      time: "10 mins",
      type: "Easy",
      image: "images/budget/Dinner/chicapack.jpeg",
      Section: "Dinner"
   }
];
let input = document.querySelector('#search');
input.addEventListener('keyup', function(event) {
   let breakfastHtml = '';
   let lunchHtml = '';
   let dinnerHtml = '';
   if (input.value) {
      for (let recipe of recipes) {
         if (recipe.title.toLowerCase().startsWith(input.value.toLowerCase())) {
            let html = `
               <div class="recipe-card"> 
                  <img class="recipe-image" src="${recipe.image}" alt="${recipe.title}">
                  <h3>${recipe.title}</h3>
                  <p>${recipe.description}</p>
                  <div class="recipe-details">
                     <p><span>Time to make:</span> ${recipe.time}.</p> 
                     <p><span>Type of recipe:</span> ${recipe.type}</p>
                  </div>
               </div>
            `;
            if (recipe.Section == "Breakfast") {
               breakfastHtml += html;
            } else if (recipe.Section == "lunch") {
               lunchHtml += html;
            } else {
               dinnerHtml += html;
            }
         }
      }
   }
   document.querySelector('#Breakfast').innerHTML = breakfastHtml;
   document.querySelector('#Lunch').innerHTML = lunchHtml;
   document.querySelector('#Dinner').innerHTML = dinnerHtml;
});