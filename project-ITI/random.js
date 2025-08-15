const meals=[
   {
      title: "Avocado Toast",
      ingredients: [
         "2 slices Whole-grain or sourdough bread",
         "1 ripe Avocado",
         "1 tbsp Lemon or lime juice",
         "Salt to taste",
         "Black pepper to taste",
         "Optional: Cherry tomatoes, poached egg, feta cheese, chili flakes, olive oil, fresh herbs"
      ],
      steps: [
         "Toast the bread slices until golden and crispy.",
         "Cut the avocado in half, remove the pit, and scoop the flesh into a bowl.",
         "Add lemon or lime juice, then mash the avocado with a fork until creamy but slightly chunky.",
         "Season the avocado with salt and black pepper.",
         "Spread the mashed avocado evenly over the toasted bread.",
         "Add your favorite toppings such as cherry tomatoes, poached egg, feta cheese, or chili flakes.",
         "Serve immediately and enjoy!"
      ]
   },
   {
      title: "Oats with Honey & Banana",
      ingredients: [
         "1 cup Rolled oats",
         "2 cups Milk or water",
         "1 ripe Banana, sliced",
         "1 tbsp Honey",
         "Optional: Cinnamon powder, chopped nuts, or berries"
      ],
      steps: [
         "In a saucepan, bring milk or water to a boil.",
         "Add oats, reduce the heat, and simmer for 5–7 minutes, stirring occasionally.",
         "Once the oats are soft and creamy, remove from heat.",
         "Pour the cooked oats into a serving bowl.",
         "Top with sliced banana.",
         "Drizzle honey over the top.",
         "Add optional toppings like cinnamon, nuts, or berries for extra flavor.",
         "Serve warm and enjoy!"
      ]
   },
   {
      title: "Vegetable Omelette",
      ingredients: [
         "2 large Eggs",
         "2 tbsp Milk",
         "0.25 cup Bell peppers, diced",
         "0.25 cup Onions, diced",
         "0.25 cup Tomatoes, diced",
         "0.25 cup Spinach, chopped",
         "1 tbsp Olive oil or butter",
         "Salt to taste",
         "Black pepper to taste",
         "Optional: Grated cheese, fresh herbs"
      ],
      steps: [
         "Crack the eggs into a bowl, add milk, salt, and pepper, and whisk until well combined.",
         "Heat olive oil or butter in a non-stick pan over medium heat.",
         "Add onions and bell peppers, sauté for 2–3 minutes until softened.",
         "Add tomatoes and spinach, cook for another 1–2 minutes.",
         "Pour the egg mixture over the vegetables and spread evenly.",
         "Cook for 3–4 minutes until the edges are set, then gently flip or fold the omelette.",
         "Add cheese or herbs if desired, then cook for another 1–2 minutes.",
         "Serve hot and enjoy!"
      ]
   },
   {
      title: "Lentil Soup",
      ingredients: [
         "1 cup Red or green lentils, rinsed",
         "1 tbsp Olive oil",
         "1 Onion, chopped",
         "2 Carrots, diced",
         "2 Celery stalks, diced",
         "2 cloves Garlic, minced",
         "1 tsp Ground cumin",
         "6 cups Vegetable broth or water",
         "1 Bay leaf",
         "Salt to taste",
         "Black pepper to taste",
         "Optional: Lemon wedges, fresh parsley"
      ],
      steps: [
         "Heat olive oil in a large pot over medium heat.",
         "Add onion, carrots, and celery; sauté for 5 minutes until softened.",
         "Add garlic and cumin, stirring for 1 minute until fragrant.",
         "Add lentils, vegetable broth, and bay leaf; stir well.",
         "Bring to a boil, then reduce heat and simmer for 25–30 minutes until lentils are tender.",
         "Remove bay leaf and season with salt and pepper.",
         "For a creamier texture, blend part of the soup with an immersion blender.",
         "Serve hot, garnished with lemon wedges and parsley if desired."
      ]
   }
];
let button = document.querySelector("button");
button.addEventListener("click", ()=> {
   const randomIndex = Math.floor(Math.random() * meals.length);
   let ingr=document.querySelectorAll(".ingr");
   let steps=document.querySelectorAll(".step");
   let tit=document.querySelector("#title");
   function bibo(){
      document.getElementById("Random").style.visibility = "visible";
      tit.innerHTML=meals[randomIndex].title;
      ingr.forEach((element,index) => {
         ingr[index].innerHTML=meals[randomIndex].ingredients[index] || "";
         if (meals[randomIndex].ingredients[index]) {
            ingr[index].style.visibility = "visible";
         } else {
            ingr[index].style.visibility = "hidden";
         }
      });
      steps.forEach((element,index) => {
         steps[index].innerHTML=meals[randomIndex].steps[index] || "";
         if (meals[randomIndex].steps[index]) {
            steps[index].style.visibility = "visible";
         } else {
            steps[index].style.visibility = "hidden";
         }
      });
   }
   bibo();
});