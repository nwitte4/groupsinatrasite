var form = document.getElementById('drink-form');
var drinkList = document.getElementById('drinkBox');

form.addEventListener('submit', function(event){
  event.preventDefault();

  // get value from input
  let drink = event.target.drink;
  let description = event.target.description;
  // build li tag with value
  let newDrink = '<pre class=" language-javascript"><code class=" language-javascript"><div class="drink-title"><strong>' + drink.value + "</strong></div><div class='drink-desc'>" + description.value + "</div></code></pre>";
  // add li to ul
  drinkList.innerHTML += newDrink;

  drink.value = '';
  description.value = '';
});
