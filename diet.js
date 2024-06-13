function roundToNearestHalf(number) {
  // Round the number to the nearest 0.5 increment
  var rounded = Math.round(number * 2) / 2;
  
  // Return the rounded number
  return rounded;
}
function capitalizeFirstLetters(str) {
  // Split the string into an array of words
  const words = str.split(' ');
  
  // Map over each word and capitalize the first letter if it's not a number
  const capitalizedWords = words.map(word => {
    // Check if the first character of the word is not a number
    if (!isNaN(word.charAt(0))) {
      return word;
    }
  
    // Capitalize the first letter of each word and combine with the rest of the word
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  
  // Join the capitalized words back into a string
  const capitalizedString = capitalizedWords.join(' ');
  
  return capitalizedString;
  }
function calculateAge(date1, date2) {
  // Parse the input strings into Date objects
  const parts1 = date1.split('-');
  const dateObject1 = new Date(parts1[0], parts1[1] - 1, parts1[2]);

  // Parse date2 with MM/DD/YYYY format
  
  const parts2 = date2.split('/');
  console.log(parts2)
  let day2 = Number(parts2[1])
  let month2 = Number(parts2[0]-1);
  let year2 = Number(parts2[2]);
  console.log(day2,month2,year2)
  const dateObject2 = new Date(year2,month2,day2);

  // Calculate the age difference in milliseconds
  const ageDifferenceMs = Math.abs(dateObject1 - dateObject2);
  console.log(dateObject1)
  console.log(dateObject2)
  // Convert the age difference to years
  const ageDifferenceYears = ageDifferenceMs / (1000 * 60 * 60 * 24 * 365.25);

  // Round down to the nearest whole number to get the age
  const age = Math.floor(ageDifferenceYears);
  return age;
}
// Gluten Free
let Gluten_Free = [
  [
    [
      "Granola-Almond Pear Crunch ",
      "Easy Butterfinger Candy ",
      "Roasted Garlic-Herb Mushrooms and Butternut Mash ",
      [1, 466],
      [12, 500],
      [4, 499],
    ],
    [
      "Blackberry Chia Jam-The Healthy Maven ",
      "Gluten-Free Chocolate Cake",
      "Pan Roasted Little Potatoes",
      [1, 466],
      [12, 500],
      [4, 500],
    ],
    [
      "Blueberry Banana Oatmeal Smoothie 1 Serving 466 kcal",
      "Garlic Smashed Potatoes 6 Serving 500 kcal",
      "Taco Stuffed Peppers",
      [1, 466],
      [6, 500],
      [4, 499],
    ],
    [
      "Citrus Oatmeal-Refreshing and Vegan",
      "Sweet Potatoes With Charred Lemons and Crunchies",
      "Mexican White Bean and Cabbage Soup",
      [1, 466],
      [4, 500],
      [8, 499],
    ],
    [
      "Cranberry Strawberry Jam",
      "Diabetic Sugar And Spice Pecans (Crock Pot)",
      "Chef John's Black Lentil Soup",
      [6, 466],
      [8, 500],
      [4, 499],
    ],
    [
      "Avocado Citrus Breakfast Shake",
      "Steam-Roasted Carrots",
      "Jacket potatoes with pork and mushroom ragu",
      [2, 466],
      [1, 500],
      [6, 500],
    ],
    [
      "Pumpkin Paleo Pancakes",
      "Baked Acorn Squash With Wild Rice, Pecan, and Cranberry Stuffing",
      "Potato Green Bean Salad with Lemon Dill Aioli",
      [2, 467],
      [4, 500],
      [4, 500],
    ],
    [
      "Homemade trail mix & choc rice crackers",
      "Easy Butterfinger Candy",
      "Mexican White Bean and Cabbage Soup",
      [4, 479],
      [12, 500],
      [8, 499],
    ],
    [
      "Homemade Chocolate Coconut Bars",
      "Gluten-Free Chocolate Cake",
      "Chef John's Black Lentil Soup",
      [4, 485],
      [12, 400],
      [4, 499],
    ],
    [
      "Chocolate Coconut Protein Bars",
      "Garlic Smashed Potatoes",
      "Warming Autumn Soup w. Fresh and Crunchy Toppings",
      [4, 475],
      [6, 500],
      [3, 499],
    ],
    [
      "Protein Powerhouse Baked Oatmeal",
      "Sweet Potatoes With Charred Lemons and Crunchies",
      "Yogurt-Cucumber Soup with Chickpea Dip",
      [12, 473],
      [4, 500],
      [6, 499],
    ],
    [
      "Apricot Breakfast Bars",
      "Diabetic 'Sugar' And Spice Pecans",
      "Instant Pot Minestrone soup",
      [6, 466],
      [8, 500],
      [6, 499],
    ],
    [
      "Elderberry Jelly",
      "Steam-Roasted Carrots",
      "Tuscan Bread Soup - Ribollita",
      [10, 466],
      [1, 500],
      [4, 500],
    ],
    [
      "Maple Cinnamon Pecans",
      "Steam-Roasted Carrots",
      "Butter Bean Soup ",
      [4, 465],
      [1, 500],
      [4, 500],
    ],
    [
      "California Breakfast Casserole",
      "Nutty Tropical Kale and Rice Salad",
      "Meal Prep : Rice",
      [10, 469],
      [4, 500],
      [1, 500],
    ],
    [
      "Southwest Chorizo Breakfast Casserole",
      "Chickpea Salad",
      "Cinnamon Lavender Kasha with Honey & Berries",
      [8, 465],
      [4, 500],
      [2, 500],
    ],
    [
      "Sesame Avocado Toasts with Jammy Eggs and Wakame",
      "Lentils, Radicchio and Walnuts with Honey ",
      "Baked Figs with Grappa",
      [2, 465],
      [4, 500],
      [6, 498],
    ],
    [
      "Huevos Rancheros with Spicy Tomato Jam",
      "Blackberry and Mango Almond Nut Pâté Salad",
      "Baked Apples And Cranberries",
      [6, 471],
      [4, 500],
      [6, 501],
    ],
    [
      "Quick Chilaquiles",
      "French Potato Salad",
      "Kiwi Blueberry Overnight Oats",
      [3, 465],
      [5, 500],
      [1, 498],
    ],
    [
      "Breakfast Fried Rice Skillet",
      "Warm Balmain Bug Salad with Saffron Dressing",
      "Kiwi Blueberry Overnight Oats",
      [2, 471],
      [4, 500],
      [1, 498],
    ],
    [
      "Tomato, cheese and avocado omelette",
      "Goat Cheese and Beet Salad",
      "Kiwi Blueberry Overnight Oats",
      [1, 471],
      [4, 500],
      [1, 498],
    ],
  ],
  [
    [
      "Beef Kielbasa",
      "Classic Tuna Salad",
      "Apple Jelly Chicken Thighs recipes",
      [26, 343],
      [4, 602],
      [3, 428],
    ],
    [
      "Blue swimmer crab omelette with sorrel",
      "Delicious Pan Roasted Chicken with Salad",
      "Instant Pot Chicken",
      [4, 360],
      [2, 602],
      [2, 413],
    ],
    [
      "Skinny Peppermint Patty Shake recipes",
      "Salmon With Cucumbers",
      "Pressure Cooker Turkey",
      [1, 311],
      [2, 595],
      [16, 337],
    ],
    [
      "Baked Egg Cups",
      "Thai Chicken Asparagus ",
      "Easy Instant Pot Turkey",
      [6, 306],
      [4, 604],
      [16, 336],
    ],
    [
      "Maryland Pit Beef on the Char-Broil Big Ea",
      "Bacalhau Chickpea Salad",
      "Instant Pot Shredded Chicken",
      [8, 290],
      [4, 592],
      [6, 228],
    ],
    [
      "Vegan Scrambled Eggs",
      "Chicken Cutlets with Lemony Arugula Salad",
      "Filipino Chicken Chayote",
      [2, 290],
      [4, 592],
      [6, 228],
    ],
    [
      "Make your own Biltong",
      "Grilled Pork Medallions with Honey ",
      "Recipe of bigos with meat and prunes",
      [6, 249],
      [2, 615],
      [10, 251],
    ],
    [
      "Vietnamese pancakes with prawns",
      "Grilled Ham Steak With Southwestern Rub",
      "Parmesan spring chicken",
      [4, 578],
      [8, 503],
      [4, 500],
    ],
    [
      "Blueberry Protein Muffins ",
      "Buffalo Chicken Sliders",
      "Slow Cooker Mexican Shredded Beef ",
      [8, 535],
      [4, 504],
      [4, 500],
    ],
    [
      "Rabbit Breakfast Sausage",
      "Venison Barbacoa",
      "Stir 'Fry'",
      [8, 505],
      [4, 518],
      [1, 500],
    ],
    [
      "Coronation Chicken",
      "Grilled Tuna Burgers",
      "Chessy Hasselback Chicken",
      [2, 505],
      [1, 527],
      [4, 500],
    ],
    [
      "Apple and Onion Chicken",
      "Muffi's Chicken stuffed with Figs and Goat Cheese",
      "Indian Spiced Chicken & Spinach",
      [2, 483],
      [4, 530],
      [4, 500],
    ],
    [
      "Smoothie Booster",
      "Sandwich Wrap",
      "Pepper-Glazed Ham with Prunes",
      [36, 393],
      [1, 493],
      [12, 499],
    ],
    [
      "Strawberry Yogurt Smoothie",
      "Pan Roasted Chicken",
      "Succulent Dry Brined Roast Turkey",
      [2, 348],
      [2, 602],
      [12, 549],
    ],
    [
      "Homemade Turkey Breakfast Sausage ",
      "Perfect Roast Turkey",
      "Steamed Chicken Breasts with Green Peas",
      [4, 392],
      [8, 599],
      [4, 550],
    ],
    [
      "The Day I Was Born With Cankles",
      "Chicken Piccata with Fried Capers ",
      "Spanish Moroccan Fish",
      [8, 262],
      [2, 600],
      [6, 549],
    ],
    [
      "Breakfast Sausage",
      "Chicken Cordon Bleu",
      "Crazy Chicken",
      [6, 235],
      [5, 600],
      [4, 550],
    ],
    [
      "Skinny Thighs in a Grapefruit Fennel Butte",
      "Basil Chicken & Sun Dried Tomato Bowl",
      "Orange-Honey-Mustard Baked Chicken",
      [8, 224],
      [4, 600],
      [4, 551],
    ],
    [
      "Clean Eating Turkey Breakfast Sausage",
      "Sashimi of Fluke with Sweet Shrimp",
      "Mexican Fun Chicken",
      [4, 217],
      [4, 600],
      [4, 553],
    ],
    [
      "Chicken and Waffles",
      "Roast Turkey with Herb Butter",
      "Poulet Boursin",
      [8, 200],
      [10, 600],
      [8, 546],
    ],
    [
      "Nutritarian Tofu Scrambled Eggs",
      "Vitello Tonnato ",
      "Creamy tarragon chicken with asparagus",
      [4, 191],
      [8, 604],
      [4, 553],
    ],
  ],
  [
    [
      "Coconut Quinoa",
      "Jelly Shooters",
      "Smothered Turkey Wings",
      [6, 302],
      [4, 600],
      [6, 518],
    ],
    [
      "Pork Cracklings",
      "Oatmeal - Crockpot",
      "Rosemary Oil",
      [10, 252],
      [1, 606],
      [16, 506],
    ],
    [
      "Quinoa Teething Crackers",
      "Jelly Shooters",
      "Maple-glazed hot wings",
      [6, 204],
      [4, 598],
      [4, 507],
    ],
    [
      "Plain Millet",
      "Roast loin of Wessex saddleback",
      "Facial Cleansing Oil",
      [4, 189],
      [6, 614],
      [12, 486],
    ],
    [
      "Basic Steamed Millet",
      "Grilled Lamb Chops with Lavender Salt",
      "Essential Oil DIY: Relaxing Massage Oil",
      [6, 189],
      [12, 614],
      [10, 483],
    ],
    ["Hot Dogs", "Roast Chicken", "Canned Trout", [4, 157], [4, 621], [8, 479]],
    [
      "Basic Boiled Quinoa",
      "Fully Salted Roast Chicken",
      "Coffee Crusted Filet Mignon",
      [4, 156],
      [4, 621],
      [2, 649],
    ],
    [
      "Nasi ulam",
      "Bife De Chorizo",
      "Salted Herring",
      [4, 526],
      [4, 537],
      [8, 500],
    ],
    [
      "Basic Steamed Millet",
      "Chicken katsu curry burger",
      "Turducken",
      [6, 189],
      [2, 687],
      [8, 499],
    ],
    [
      "Soramame Rice",
      "Chargrilled rare sirloin of beef",
      "Grilled Pompano",
      [4, 403],
      [12, 411],
      [4, 499],
    ],
    [
      "Wali - Kenyan Coconut Rice",
      "Slow Cooker French Dip Sandwich",
      "Broiled Filet Mignon",
      [6, 400],
      [30, 366],
      [2, 497],
    ],
    [
      "Kenyan Coconut Rice",
      "Hamburgers on the Otto Wilde OFB Grill",
      "Chicken Cordon Bleu",
      [6, 392],
      [4, 365],
      [4, 496],
    ],
    [
      "Basic White Rice",
      "Guilt Free Slow Cooked Shoulder Of Lamb",
      "Homemade Rice Milk ",
      [4, 351],
      [4, 360],
      [5, 504],
    ],
    [
      "Cracklin's",
      "Basturma",
      "Sous Vide Turkey",
      [8, 308],
      [10, 313],
      [6, 637],
    ],
    [
      "Basic White Rice Recipe",
      "Crispy Asian-Spiced Shrimp",
      "Fluffy Rice",
      [4, 351],
      [8, 591],
      [3, 550],
    ],
    [
      "Cracklin",
      "Dry Aged Chimney Porterhouse",
      "BBQ Basil Pesto Grilled Chicken",
      [8, 308],
      [2, 587],
      [4, 552],
    ],
    [
      "Wali - Kenyan Coconut Rice",
      "Simply Grilled Skirt Steak",
      "Gluten-Free Flour from Grains",
      [6, 400],
      [2, 547],
      [10, 546],
    ],
    [
      "Soramame Rice",
      "Five-Spice Baked Chicken Wings",
      "Coconut Rice",
      [4, 403],
      [3, 669],
      [4, 556],
    ],
    [
      "Basic Glutinous Rice",
      "Boiled or Steamed Lobsters",
      "Bife De Chorizo",
      [4, 280],
      [4, 523],
      [4, 537],
    ],
    [
      "Forbidden Black Rice",
      "Trucha Con Jamon Recipe",
      "Roast fillet of beef with shallot & mushroom sauce",
      [6, 249],
      [1, 711],
      [6, 537],
    ],
    [
      "Basic White Rice",
      "Simply Grilled Wild Sockeye Salmon",
      "Kahlua Pork Slow Cooker Style",
      [6, 234],
      [4, 486],
      [10, 590],
    ],
  ],
  [
    [
      "Apple, Cheese & Bacon Frittata ",
      "Chicken Thighs Herbs de Provence ",
      "Caramel Apple Pork Chops",
      [4, 467],
      [5, 500],
      [4, 500],
    ],
    [
      "Yummy Breakfast Skillet ",
      "Olive-Caper Tapenade with Fresh Mint",
      "Bihari Kabab",
      [4, 468],
      [1, 667],
      [6, 500],
    ],
    [
      "Paleo Scotch Eggs Recipe",
      "Magically Fast and Easy Homemade Mayo",
      "Taco Stuffed Peppers",
      [6, 468],
      [4, 500],
      [4, 499],
    ],
    [
      "Hammy Breakfast Hotdish",
      "Smoked Haddock Mousse",
      "Bacon Wrapped Hotdogs",
      [10, 467],
      [8, 500],
      [7, 500],
    ],
    [
      "Tomato, mushroom and basil frittata",
      "Simple Cole Slaw recipes",
      "Bacon Dip",
      [4, 468],
      [4, 500],
      [4, 500],
    ],
    [
      "Colorful Frittata",
      "Savory Stuffed Chicken",
      "Fiesta Chicken",
      [4, 468],
      [5, 500],
      [4, 500],
    ],
    [
      "Wild Mushroom Omelette",
      "Mayo Free Deviled Eggs",
      "Salted Herring",
      [2, 468],
      [12, 500],
      [8, 500],
    ],
    [
      "Paleo Granola",
      "Grilled Duck Salad",
      "Caramel Apple Pork Chops",
      [10, 478],
      [4, 500],
      [4, 500],
    ],
    [
      "Flax Granola",
      "Warm balmain bug salad with saffron dressing",
      "Bihari Kabab Recipe",
      [3, 473],
      [4, 500],
      [6, 500],
    ],
    [
      "Crunchy Apple Spice Granola",
      "Barbecued prawns with avocado pico de gallo",
      "Taco Stuffed Peppers",
      [6, 467],
      [6, 500],
      [4, 500],
    ],
    [
      "Paleo Granola",
      "Summer Waldorf with Yogurt-Tarragon Dressing",
      "Bacon Wrapped Hotdogs",
      [6, 501],
      [4, 500],
      [7, 500],
    ],
    [
      "Grain Free Granola",
      "Chicken Salad For Sandwiches",
      "Bacon Dip",
      [6, 501],
      [4, 500],
      [4, 500],
    ],
    [
      "Pineapple-Coconut Rice",
      "Butternut Squash Caprese Salad",
      "Fiesta Chicken",
      [2, 465],
      [4, 500],
      [4, 500],
    ],
    [
      "Homemade Grape Nuts Cereal",
      "Pan-Fried Scamorza with Arugula Salad",
      "Salted Herring",
      [4, 505],
      [6, 500],
      [8, 500],
    ],
    [
      "Maple Cinnamon Pecans",
      "Cajun Chicken Tacos recipes",
      "Caramel Apple Pork Chops",
      [4, 465],
      [2, 500],
      [4, 500],
    ],
    [
      "Masa Tot",
      "Mexican Shredded Beef",
      "Bihari Kabab Recipe",
      [36, 445],
      [4, 500],
      [6, 500],
    ],
    [
      "Honey Spiced Walnuts",
      "Spit Roasted Leg of Lamb",
      "Taco Stuffed Peppers",
      [24, 422],
      [6, 500],
      [4, 500],
    ],
    [
      "Healthy Cocoa Puffs Cereal",
      "Air Fryer Lemon Parmesan Garlic Chicken Wings",
      "Bacon Wrapped Hotdogs",
      [5, 418],
      [6, 500],
      [7, 500],
    ],
    [
      "Cast Iron Savoury Scones",
      "Salmon Grilled",
      "Bacon Dip",
      [12, 415],
      [4, 500],
      [4, 500],
    ],
    [
      "Blueberry & Lemon Zest Biscuits-Grain",
      "Pork Chops And Apples",
      "Fiesta Chicken ",
      [6, 392],
      [6, 500],
      [4, 500],
    ],
    [
      "The Paleo Rebe",
      "Stella Cheese",
      "Salted Herring",
      [6, 360],
      [4, 500],
      [8, 500],
    ],
  ],
  [
    [
      "Blueberry Coconut Protein Balls",
      "Peppermint Patties",
      "Warming Autumn Soup ",
      [4, 507],
      [4, 500],
      [3, 500],
    ],
    [
      "Teff And Coconut Biscuits",
      "Lentils and Rice with Caramilized Onions",
      "Meal prep : Rice",
      [4, 514],
      [6, 500],
      [1, 500],
    ],
    [
      "Homemade Chocolate Coconut Bars",
      "Jeera Pulao",
      "Rhubarb Balsamic Reduction",
      [4, 485],
      [4, 500],
      [1, 500],
    ],
    [
      "Fruity Berry Preserve",
      "Roasted Potato Wedges with Herbs",
      "Lemon Cherry Cheesecake",
      [8, 483],
      [1, 500],
      [8, 500],
    ],
    [
      "Elderberry Jelly",
      "Maryland Pumpkin Seeds",
      "Charred Orange Margarita",
      [10, 466],
      [6, 500],
      [4, 500],
    ],
    [
      "Pumpkin Banana Breakfast Cookies",
      "Zucchini Aglio et Olio",
      "Banana Slush",
      [4, 546],
      [2, 500],
      [12, 500],
    ],
    [
      "Homemade Cornflakes Cereal ",
      "Italian Beans and Rice",
      "The Caipirinha and the Rise of Craft Cocktails",
      [2, 465],
      [6, 500],
      [1, 500],
    ],
    [
      "Roasted Vegetable Forbidden Rice Bowls",
      "Autumn Soup with Sweet Potatoes and Apples",
      "Warming Autumn Soup",
      [4, 480],
      [4, 502],
      [3, 500],
    ],
    [
      "Roasted Chickpeas Snack recipes",
      "Curry and Parsnip Soup",
      "Meal Prep : Rice",
      [3, 484],
      [5, 500],
      [1, 500],
    ],
    [
      "Plumbrillo",
      "Spinach, Coconut & Courgette Soup",
      "Rhubarb Balsamic Reduction",
      [10, 480],
      [4, 502],
      [1, 500],
    ],
    [
      "Yellow Split Pea Breakfast Bowl",
      "Red Lentil Soup",
      "Lemon Cherry Cheesecake",
      [2, 490],
      [4, 500],
      [8, 500],
    ],
    [
      "Southwestern Breakfast Hash",
      "Vegetables and Rice Noodles in a Coconut Broth",
      "Charred Orange Margarita",
      [4, 474],
      [4, 500],
      [4, 500],
    ],
    [
      "Mango Coconut Breakfast Bowls",
      "Cheezy Broccoli + Kale Soup",
      "Banana Slush",
      [2, 464],
      [5, 500],
      [12, 500],
    ],
    [
      "Chia Rhubarb Jam",
      "Vegan Rice Mushroom",
      "Peppermint Patties",
      [1, 460],
      [4, 500],
      [4, 500],
    ],
  ],
  [
    [
      "Ultimate Breakfast Scramble",
      "Kale Soup",
      "Pan Roasted Little Potatoes",
      [1, 470],
      [4, 500],
      [4, 500],
    ],
    [
      "Caramelized Mushroom and Onion Frittata",
      "Strawberry Soup",
      "Classic Chocolate Mousse",
      [4, 468],
      [4, 500],
      [6, 500],
    ],
    [
      "Wild Mushroom Omelette",
      "Vegan Rice Mushroom Soup",
      "Potato Green Bean Salad with Lemon Dill Aioli",
      [2, 468],
      [4, 501],
      [4, 500],
    ],
    [
      "Fines Herbs Omelette",
      "Autumn Soup with Sweet Potatoes and Apples",
      "Warming Autumn Soup w. Fresh and Crunchy Toppings",
      [1, 466],
      [4, 500],
      [3, 500],
    ],
    [
      "Sesame Avocado Toasts with Jammy Eggs and Wakame",
      "Roasted Cauliflower Soup ",
      "Easy Butterfinger Candy",
      [2, 465],
      [2, 500],
      [12, 500],
    ],
    [
      "Favorite Veggie Pleasing Scramble",
      "Vegetables and Rice Noodles in a Coconut Broth",
      "Yogurt-Cucumber Soup with Chickpea Dip",
      [2, 465],
      [4, 500],
      [6, 500],
    ],
    [
      "Huevos Rancheros with Spicy Tomato Jam",
      "Chunky Black Bean and Sweet Potato Soup",
      "Rosemary Garlic Potato Salad with Crumbled Blue Cheese",
      [6, 470],
      [4, 500],
      [7, 500],
    ],
    [
      "Nigerian-Style Spicy Eggs & Yams",
      "Creamy Coconut Steamer",
      "Pan Roasted Little Potatoes",
      [4, 470],
      [1, 500],
      [4, 500],
    ],
    [
      "Avocado & Black Bean Eggs",
      "Sweet Potato Yams",
      "Classic Chocolate Mousse",
      [2, 468],
      [4, 500],
      [6, 500],
    ],
    [
      "Pumpkin Coconut Larabars",
      "Sweetened Yogurt with Fruit",
      "Potato Green Bean Salad with Lemon Dill Aioli",
      [3, 470],
      [2, 500],
      [4, 500],
    ],
    [
      "Muraba-E-Behi",
      "Baked Apples And Cranberries",
      "Warming Autumn Soup w. Fresh and Crunchy Toppings",
      [8, 470],
      [6, 500],
      [3, 500],
    ],
    [
      "Quinoa and Hazelnut Porridge",
      "Cinnamon Lavender Kasha with Honey & Berries",
      "Easy Butterfinger Candy",
      [1, 470],
      [2, 500],
      [12, 500],
    ],
    [
      "Sabudana Khichdi",
      "Meal prep : Rice",
      "Yogurt-Cucumber Soup with Chickpea Dip",
      [2, 470],
      [1, 500],
      [1, 500],
    ],
    [
      "Scrambled eggs",
      "Parsnip Risotto With Mascarpone And Sage",
      "Rosemary Garlic Potato Salad with Crumbled Blue Cheese",
      [1, 466],
      [5, 500],
      [7, 500],
    ],
  ],
  [
    [
      "Breakfast Eggs in Foil Bowls",
      "Organic Ground Turkey",
      "Bihari Kabab ",
      [3, 470],
      [2, 550],
      [6, 500],
    ],
    [
      "Scrambled Eggs and Bacon, Coffee, Orange Juice and Rolls",
      "Lobster with Butter",
      "Bacon Dip",
      [1, 470],
      [4, 550],
      [4, 500],
    ],
    [
      "Avocado Eggs Cups",
      "Pressure Cooker Kalua Pig",
      "Fiesta Chicken",
      [2, 480],
      [8, 530],
      [4, 500],
    ],
    [
      "Baked Eggs in Avocado Cups from Eat Drink Shine",
      "Eggplant With Anchovies",
      "Salted Herring",
      [2, 480],
      [5, 580],
      [8, 500],
    ],
    [
      "Scrambled Eggs",
      "Instant Pot Baby Back Ribs",
      "Halibut with hazelnuts, marjoram and vermouth",
      [1, 466],
      [6, 630],
      [2, 500],
    ],
    [
      "Leaves with Poached Egg and Mushrooms",
      "Toasted Coconut Chicken",
      "Mayo Free Deviled Eggs",
      [4, 470],
      [4, 640],
      [12, 500],
    ],
    [
      "Boxing Day Plate",
      "Instant Pot Whole Chicken",
      "Salmon en Papillote aka Salmon Pouches in an Oven",
      [4, 480],
      [8, 490],
      [2, 500],
    ],
    [
      "Paleo Scotch Eggs",
      "Sinful Sour Cream Chicken",
      "Bcon Dip",
      [6, 468],
      [4, 500],
      [4, 500],
    ],
    [
      "Low-Carb Italian Sausage and Sweet Mini-Peppers Breakfast Bake",
      "Magically Fast and Easy Homemade Mayo",
      "Fiesta Chicken",
      [8, 470],
      [4, 500],
      [4, 500],
    ],
    [
      "Sweet & Spicy Bacon",
      "Olive-Caper Tapenade with Fresh Mint",
      "Olive-Caper Tapenade with Fresh Mint",
      [4, 470],
      [1, 670],
      [4, 500],
    ],
    [
      "Colorful Frittata",
      "Mayo Free Deviled Eggs",
      "Moroccan Chicken Tagine with preserved lem",
      [4, 470],
      [12, 500],
      [45, 500],
    ],
    [
      "Wild Mushroom Omelette",
      "Sheet Pan Vinegar Chicken",
      "Creamy Italian Dressing",
      [2, 470],
      [6, 500],
      [4, 500],
    ],
    [
      "Breakfast with Scrambled Eggs and Bacon, Coffee, Orange Juice and Rolls",
      "Stuffed Chicken",
      "Maple-Apple Cider Vinaigrette",
      [1, 468],
      [3, 500],
      [1, 500],
    ],
    [
      "Colorful Frittata Recipe",
      "Salted Herring",
      "Strawberry Fruit Vinaigrette Dressing",
      [4, 466],
      [8, 500],
      [4, 500],
    ],
  ],
  [
    [
      "Paleo Scotch Eggs",
      "Sinful Sour Cream Chicken",
      "Bacon Dip",
      [6, 468],
      [4, 500],
      [4, 500],
    ],
    [
      "Italian Sausage and Sweet Mini-Peppers Breakfast Bake",
      "Magically Fast and Easy Homemade Mayo",
      "Fiesta Chicken ",
      [8, 470],
      [4, 500],
      [4, 500],
    ],
    [
      "Sweet & Spicy Bacon",
      "Olive-Caper Tapenade with Fresh Mint",
      "Garlic Confit Oil with Thyme and Black Pepper",
      [4, 470],
      [1, 670],
      [4, 500],
    ],
    [
      "Colorful Frittata",
      "Mayo Free Deviled Eggs",
      "Moroccan Chicken Tagine with preserved lem",
      [4, 468],
      [12, 500],
      [44, 500],
    ],
    [
      "Wild Mushroom Omelette",
      "Sheet Pan Vinegar Chicken",
      "Creamy Italian Dressing",
      [2, 470],
      [6, 500],
      [4, 500],
    ],
    [
      "Breakfast with Scrambled Eggs and Bacon, Coffee, Orange Juice and Roll",
      "Stuffed Chicken",
      "Maple-Apple Cider Vinaigrette",
      [1, 470],
      [3, 500],
      [1, 500],
    ],
    [
      "Colorful Frittata Recipe",
      "Salted Herring",
      "Strawberry Fruit Vinaigrette",
      [4, 470],
      [8, 500],
      [4, 500],
    ],
    [
      "Chicharrón with Lime and Chili Salt",
      "Sausage and Pepper Soup ",
      "Bihari Kabab",
      [16, 487],
      [6, 513],
      [6, 500],
    ],
    [
      "Pesto & Egg Power Bowl",
      "Split Pea Soup With Ham",
      "Salmon en Papillote aka Salmon Pouches in an Oven",
      [28, 456],
      [6, 520],
      [2, 500],
    ],
    [
      "Bacon and Egg with Cherry Tomatoes",
      "Kurdish Fried Chicken in Broth",
      "Simple Succulent Dry Brined Roast Turkey",
      [4, 350],
      [8, 600],
      [12, 560],
    ],
    [
      "Breakfast Bacon and Egg Salad",
      "Taiwanese Beef Noodle Soup",
      "Boiled Veal with Romaine Chanterelles",
      [4, 340],
      [44, 595],
      [4, 550],
    ],
    [
      "Eggs two ways",
      "Chicken Chili Soup",
      "Sunday Dinner",
      [2, 340],
      [8, 620],
      [3, 550],
    ],
    [
      "Keto Egg loaf",
      "Hawaiian Oxtail Soup",
      "French Pepper Steak",
      [6, 370],
      [4, 625],
      [4, 550],
    ],
    [
      "A Simple Breakfast Salad ",
      "Chinese Mustard Greens Soup",
      "Chicken Breasts Stuffed with Cheese, Tomato, and Basil",
      [4, 370],
      [4, 570],
      [4, 550],
    ],
  ],
  [
    [
      "Greek Cucumber and Chickpea Breakfast Salad",
      "Smoky Potato & Cheese Soup",
      "Pan Roasted Little Potatoes",
      [1, 542],
      [8, 500],
      [4, 500],
    ],
    [
      "winter citrus breakfast salad with quinoa and toasted walnuts",
      "Crab and Corn Chowder",
      "Jacket potatoes with pork and mushroom ragu",
      [3, 540],
      [6, 500],
      [6, 500],
    ],
    [
      "Summer Melon with Fig and Proscuitto Fruit Cup",
      "Rustic Thai Beef Soup",
      "Megadarra (Lentils and Rice with Caramilized Onions)",
      [4, 540],
      [8, 500],
      [6, 500],
    ],
    [
      "Winter Smoothie Bowl",
      "Bean and Vegetable Soup",
      "Potato & Cabbage Stir Fry",
      [2, 506],
      [4, 500],
      [4, 500],
    ],
    [
      "Chickpea and Sesame Cracker",
      "Easy Roasted Carrot Soup",
      "Asparagus Risotto with Pecorino Romano",
      [482, 4],
      [500, 6],
      [500, 6],
    ],
    [
      "Potato hash with greens",
      "Country Split Pea Soup w/ Bacon & Potatoes",
      "Baked mushrooms with spicy rice and corn",
      [2, 330],
      [9, 600],
      [4, 550],
    ],
    [
      "Quinoa with Pomegranates and Pistachios",
      "Lentil Rice Soup with Caramelized Onions",
      "Rice and Lentils with Citrusy Carrots",
      [6, 330],
      [4, 600],
      [4, 550],
    ],
    [
      "Bacon & pepper frittata",
      "Mango Rice Pudding",
      "Bánh Cuốn",
      [4, 500],
      [4, 500],
      [4, 510],
    ],
    [
      "Omelette and Rice",
      "honey and cinnamon cheesecake",
      "Tahini-Maple Sweet Potato Pancakes",
      [2, 490],
      [8, 500],
      [1, 520],
    ],
    [
      "Pan Frittata",
      "Fruit and nut yogurt",
      "Buckwheat Ricotta Pancakes",
      [2, 600],
      [1, 500],
      [2, 470],
    ],
    [
      "Chickpea and Sesame Cracker",
      "Rhubarb Rosewater Parfait",
      "Pan Roasted Little Potatoes",
      [482, 4],
      [4, 500],
      [4, 500],
    ],
    [
      "Sweet Jelly Omelet",
      "Yogurt Pops",
      "Buttermilk Buckwheat Pancakes",
      [1, 400],
      [1, 500],
      [2, 450],
    ],
    [
      "Sweet Jelly Omelet",
      "Vegetarian Shepherd's Pie with Mushrooms",
      "Kale and buckwheat waffles with eggs",
      [1, 405],
      [5, 500],
      [4, 450],
    ],
    [
      "Denver Omelette in a Mug",
      "Sip 'N Bite Rice Pudding",
      "Chestnut Flour Crepes (Necci) with Ricotta and Honey",
      [1, 480],
      [10, 500],
      [4, 530],
    ],
  ],
];
// Dairy Free
let Dairy_Free = [
  [
    [
      "Honey Spelt Bread",
      "Date Syrup",
      "Charred Squid with Beans and Meyer Lemon",
      [8, 350],
      [1, 600],
      [4, 550],
    ],
    [
      "Healthy Pomegranate Orange Smoothie",
      "Dairy-Free Almond Cheese",
      "Almond-Crusted Chicken With Arugula Salad",
      [1, 450],
      [3, 600],
      [4, 550],
    ],
    [
      "Orange-Spice Chia Smoothie",
      "Fried cauliflower, chickpea and silverbeet salad",
      "Hearty Split Pea Soup with Lemon & Olive Oil Croutons",
      [2, 350],
      [6, 600],
      [6, 550],
    ],
    [
      "Crunchy Nutty Granola",
      "Beef and Bean Stew",
      "Red lentil and chickpea soup",
      [32, 350],
      [4, 600],
      [6, 550],
    ],
    [
      "Simple Spring Green Smoothie",
      "Red Bell Pepper Hummus",
      "Creamy Carrot Ginger Bisque With Cashew Cream",
      [1, 350],
      [1, 600],
      [4, 550],
    ],
    [
      "Oatmeal Rye Bread",
      "Crispy Honey Lemon Chicken",
      "Duck Breast Tortillas with Fennel, Cabbage and Lettuce",
      [10, 350],
      [4, 600],
      [4, 550],
    ],
    [
      "Grain Bread",
      "Macaroni Salad",
      "Turkey Chili With Heat",
      [8, 350],
      [4, 600],
      [3, 550],
    ],
    [
      "Homemade Chocolate Coconut Bars",
      "Eggplant Lentil Moussaka",
      "Lemongrass Pork & Spaghetti Squash Noodle Bowl with Peanut Sauce",
      [4, 485],
      [6, 500],
      [4, 500],
    ],
    [
      "Healthy Apple Crisp with Coconut and Pecans",
      "Meal prep : Rice",
      "Coconut Quinoa, Sunshine and Squash Wraps",
      [6, 490],
      [1, 500],
      [2, 500],
    ],
    [
      "Homemade Whole Grain Crackers",
      "Potato Green Bean Salad with Lemon Dill Aioli",
      "Bean Bourguignon",
      [4, 485],
      [4, 500],
      [6, 500],
    ],
    [
      "Hearty Oatmeal Banana Breakfast Cookies",
      "Chickpea Noodle Soup",
      "Mexican White Bean and Cabbage Soup",
      [4, 500],
      [6, 500],
      [8, 500],
    ],
    [
      "Blackberry Oatmeal Breakfast Cookies",
      "Vegan Garlic Pasta with Roasted Cajun Cauliflower",
      "Black Lentil Soup",
      [4, 478],
      [3, 500],
      [4, 500],
    ],
    [
      "Peanut Butter Banana Protein Bars",
      "Pinto Bean and Ground Beef Stew with Cumin and Cilantro",
      "Warming Autumn Soup w. Fresh and Crunchy Toppings",
      [10, 472],
      [6, 500],
      [3, 500],
    ],
    [
      "Elderberry Jelly",
      "Chicken Coconut Curry",
      "Curried Chicken And Green Beans Couscous",
      [10, 470],
      [4, 500],
      [4, 500],
    ],
  ],
  [
    [
      "Pancakes With Prawns",
      "Fiesta Chicken",
      "Halibut with hazelnuts, marjoram and vermouth",
      [4, 580],
      [4, 400],
      [2, 500],
    ],
    [
      "Blueberry Protein Muffins",
      "Mayo Free Deviled Eggs",
      "Mexican Shredded Beef",
      [8, 540],
      [12, 500],
      [4, 500],
    ],
    [
      "Fair Turkey Drumsticks",
      "Honey-Balsamic Baked Chicken Breasts With Tomatoes, Mushrooms",
      "Stir 'Fry'",
      [6, 520],
      [4, 500],
      [1, 500],
    ],
    [
      "Blueberry Protein Muffins ",
      "Pepper-Glazed Ham with Prunes",
      "Spicy Sweet Bacon Chicken",
      [8, 500],
      [12, 500],
      [5, 500],
    ],
    [
      "Apple and Onion Chicken",
      "Barbara Kafka's",
      "Grilled Chipotle Lime Chicken",
      [2, 480],
      [14, 500],
      [4, 500],
    ],
    [
      "Smoothie Booster",
      "Chicken Cacciatore",
      "Fish with Sprouts and Cilantro",
      [36, 400],
      [6, 500],
      [4, 550],
    ],
    [
      "Clean Blueberry Protein Muffins",
      "Sashimi of Fluke with Sweet Shrimp",
      "Coconut Lime Chicken",
      [12, 360],
      [4, 600],
      [4, 560],
    ],
    [
      "Poached Cod in Spicy Sauce with Chinese Cabbage",
      "Sashimi of Fluke with Sweet Shrimp",
      "Tofu Soup Starter with Mussels",
      [4, 360],
      [4, 600],
      [4, 550],
    ],
    [
      "Baked Egg Cups",
      "Crock Pot Orange Chicken",
      "Chicken Noodle Soup",
      [6, 300],
      [6, 600],
      [4, 550],
    ],
    [
      "Belgian Beef Stew With Beer",
      "Smarter Fried Plaice Fillets",
      "Fish with Sprouts and Cilantro",
      [8, 300],
      [2, 600],
      [4, 550],
    ],
    [
      "Maryland Pit Beef",
      "Baked Whole Snapper",
      "French Onion Soup",
      [8, 290],
      [2, 600],
      [6, 550],
    ],
    [
      "Sausage Patty",
      "Spanish Halibut",
      "Thai Coconut Soup with Fish Ball ",
      [4, 290],
      [2, 600],
      [5, 560],
    ],
    [
      "Vegan Scrambled Eggs",
      "Moroccan-Spiced Turkey",
      "Turkey Vegetable Noodle Soup",
      [2, 260],
      [10, 600],
      [14, 540],
    ],
    [
      "Biltong",
      "Whole Fish With Salad",
      "Turmeric No-noodle Chicken Soup",
      [6, 250],
      [4, 600],
      [4, 540],
    ],
  ],
  [
    ["Nasi ulam", "Salted Herring", "Turducken", [4, 526], [8, 500], [8, 500]],
    [
      "Semolina Pasta Dough",
      "Tavern Style Pot Roast",
      "Grilled Pompano",
      [1, 450],
      [6, 510],
      [4, 500],
    ],
    [
      "Kesra - Algerian Bread",
      "Olive Oil-Infused Vodka",
      "Homemade Rice Milk",
      [4, 450],
      [2, 510],
      [5, 500],
    ],
    [
      "Berber Bread",
      "Cherry Pork Chops",
      "Rosemary Oil",
      [4, 430],
      [4, 510],
      [16, 510],
    ],
    [
      "Soramame Rice",
      "Maple-glazed hot wings",
      "Traeger Beer Can Chicken",
      [4, 400],
      [4, 510],
      [6, 490],
    ],
    [
      "Kenyan Coconut Rice",
      "Smothered Turkey Wings",
      "Confit De Canard",
      [6, 400],
      [6, 520],
      [40, 490],
    ],
    [
      "Kesra - Algerian Bread",
      "Beer-can brined chicken",
      "Grilled Sliced Brisket",
      [6, 390],
      [6, 520],
      [4, 490],
    ],
    [
      "Chinese Black Rice",
      "Oatmeal - Crockpot",
      "Grilled Skirt Steak",
      [3, 230],
      [1, 600],
      [2, 550],
    ],
    [
      "Plain Long-Grain White Rice",
      "Jello Shooters",
      "Traeger Beer Can Chicken",
      [4, 270],
      [4, 600],
      [6, 550],
    ],
    [
      "Easy Buckwheat Porridge for Breakfast",
      "Jello Shooters",
      "Fluffy Rice",
      [2, 280],
      [4, 600],
      [3, 550],
    ],
    [
      "Suman sa Ibos",
      "Maple-glazed hot wings",
      "Homemade Rice Milk",
      [14, 300],
      [4, 510],
      [5, 505],
    ],
    [
      "Suman sa Ibos",
      "Olive Oil-Infused Vodka",
      "Grilled Pompano",
      [10, 300],
      [2, 510],
      [4, 500],
    ],
    [
      "Thinai Idiyappam",
      "Tavern Style Pot Roast",
      "Turducken",
      [4, 360],
      [6, 510],
      [8, 500],
    ],
    [
      "Kenyan Coconut Rice",
      "Cheery Pork Chops",
      "Salted Herring",
      [6, 390],
      [4, 510],
      [8, 500],
    ],
  ],
  [
    [
      "Flax Granola",
      "Spicy Goose Stew",
      "Lemongrass Pork & Spaghetti Squash Noodle Bowl with Peanut Sauce",
      [3, 470],
      [8, 500],
      [4, 500],
    ],
    [
      "No-Sugar Added Granola Clusters",
      "Honey Garlic Sriracha Chicken",
      "Bacon Wrapped Hotdogs",
      [8, 470],
      [6, 500],
      [7, 500],
    ],
    [
      "Crunchy Apple Spice Granola",
      "Mayo Free Deviled Eggs",
      "Barbecue Salmon and Snap Pea Slaw",
      [6, 470],
      [12, 500],
      [4, 500],
    ],
    [
      "Paleo Granola",
      "Coconut Pork Curry",
      "Fiesta Chicken",
      [10, 480],
      [4, 500],
      [4, 500],
    ],
    [
      "Peanut Butter Coco-nutty Power bites",
      "Simple Chicken Coconut Curry",
      "Salted Herring",
      [75, 450],
      [4, 500],
      [8, 500],
    ],
    [
      "Pineapple-Coconut Rice",
      "Honey-Balsamic Baked Chicken Breasts With Tomatoes, Mushrooms",
      "Crispy Sardines With Lemon And Mint",
      [2, 465],
      [4, 500],
      [4, 500],
    ],
    [
      "Homemade Butter With Oat Cream recipes",
      "Shredded Beef",
      "Halibut with hazelnuts, marjoram and vermouth",
      [4, 465],
      [4, 500],
      [2, 500],
    ],
    [
      "Flax Granola",
      "Heirloom tomato gazpacho",
      "Peppermint Patties",
      [3, 474],
      [4, 520],
      [4, 500],
    ],
    [
      "Peanut Butter Coco-nutty Power bites",
      "Raw Tomato Soup ",
      "Maryland Pumpkin Seeds",
      [75, 450],
      [2, 520],
      [6, 500],
    ],
    [
      "Pineapple-Coconut Rice",
      "Pickled Eggplant and Summer Lettuce Soup",
      "Raw Avocado Kale Pesto with Zucchini Noodles",
      [2, 465],
      [4, 520],
      [4, 500],
    ],
    [
      "Homemade Butter With Oat Cream recipes",
      "Green Gazpacho",
      "Sichuan Chili Oil",
      [4, 465],
      [4, 525],
      [4, 500],
    ],
    [
      "Puffed Grain Cereal",
      "Cold Bell Pepper and Coconut Soup",
      "Fried Tofu with Broccoli and Mushrooms ",
      [40, 464],
      [2, 520],
      [4, 500],
    ],
    [
      "Make Ahead No-Oatsmeal",
      "Carrot Coconut Lime Soup",
      "Grilled Tofu",
      [12, 460],
      [8, 530],
      [2, 500],
    ],
    [
      "Banana Nut Porridge",
      "Spinach, Coconut & Courgette Soup ",
      "Seasoned French Fries and Tomato Ketchup",
      [4, 540],
      [4, 500],
      [32, 500],
    ],
  ],
  [
    [
      "Coconut Quinoa Power Bowls",
      "Vegan Rice Mushroom Soup",
      "Eggplant Lentil Moussaka",
      [4, 470],
      [4, 500],
      [6, 500],
    ],
    [
      "Apple Spice Granola",
      "Autumn Soup with Sweet Potatoes and Apples",
      "Peppermint Patties",
      [32, 470],
      [4, 500],
      [4, 500],
    ],
    [
      "Apricot Almond Butter Overnight Oats",
      "Kale Soup",
      "Vegan Garlic Pasta with Roasted Cajun Cauliflower ",
      [2, 470],
      [4, 500],
      [3, 501],
    ],
    [
      "Sweet and Crunchy Quinoa Granola",
      "Oven Roasted Vegetable & Noodle Soup",
      "Sesame Noodles",
      [8, 470],
      [8, 500],
      [6, 500],
    ],
    [
      "Pumpkin Spice Granola",
      "Vegetables and Rice Noodles in a Coconut Broth",
      "Vegetable Couscous",
      [7, 490],
      [4, 500],
      [2, 500],
    ],
    [
      "Coconut Rice Balls",
      "Sweet Potato Tahini Soup",
      "Lentils and Rice with Caramilized Onions",
      [4, 480],
      [2, 500],
      [6, 500],
    ],
    [
      "Chai Maple Granola",
      "Chunky Black Bean and Sweet Potato Soup",
      "Roasted ratatouille pasta",
      [6, 468],
      [4, 500],
      [2, 500],
    ],
    [
      "Karam Gavvalu",
      "Winter Citrus Marmalade",
      "Coconut Quinoa, Sunshine and Squash Wraps",
      [4, 480],
      [12, 500],
      [2, 500],
    ],
    [
      "Baguette",
      "Grilled Potato Salad",
      "Warming Autumn Soup w. Fresh and Crunchy Toppings",
      [4, 480],
      [12, 500],
      [3, 501],
    ],
    [
      "Bagels recipes",
      "Triple Rice Salad with Dried Fruits and Nuts",
      "Vegan Spring Soba Noodle Bowl",
      [4, 470],
      [6, 500],
      [2, 500],
    ],
    [
      "Samosa Pinwheels",
      "Roasted Sweet Potato Salad with Black Beans",
      "Meal prep : Rice",
      [4, 470],
      [4, 500],
      [1, 500],
    ],
    [
      "Bake Rustic Bread",
      "Cucumber & Red Pepper Salad",
      "eggplant Lentil Moussaka",
      [6, 480],
      [6, 500],
      [6, 500],
    ],
    [
      "Tear and Share Bread with Herbs and Seeds",
      "Bean Salad",
      "Rhubarb Balsamic Reduction",
      [4, 480],
      [6, 500],
      [1, 500],
    ],
    [
      "Onde-onde",
      "Pasta Salad with Tomatoes",
      "Lemon Cherry Cheesecake",
      [4, 480],
      [4, 500],
      [9, 500],
    ],
  ],
  [
    [
      "Bagels recipes",
      "Pasta Salad with Tomatoes",
      "Eggplant Lentil Moussaka",
      [4, 470],
      [4, 500],
      [6, 500],
    ],
    [
      "Focaccia Bread",
      "Bean Salad",
      "Peppermint Patties",
      [26, 470],
      [6, 500],
      [4, 500],
    ],
    [
      "Sweet Challah Bread",
      "Grilled Potato",
      "Vegan Garlic Pasta with Roasted Cajun Cauliflower",
      [12, 470],
      [12, 500],
      [3, 500],
    ],
    [
      "Samosa Pinwheels",
      "Warm balmain bug salad with saffron dressing",
      "Sesame Noodles",
      [4, 470],
      [4, 500],
      [6, 500],
    ],
    [
      "Lavender And Honey Bread",
      "Blackberry and Mango Almond Nut Pâté Salad",
      "Vegetable Couscous",
      [4, 460],
      [4, 500],
      [2, 500],
    ],
    [
      "Pretzels",
      "Winter Citrus Marmalade",
      "Lentils and Rice with Caramilized Onions",
      [4, 470],
      [12, 500],
      [6, 500],
    ],
    [
      "Karam Gavvalu",
      "Nutty Tropical Kale and Rice Salad",
      "Roasted ratatouille pasta",
      [4, 480],
      [4, 500],
      [2, 500],
    ],
    [
      "Bagels",
      "Pasta Salad with Tomatoes",
      "Eggplant Lentil Moussaka",
      [4, 470],
      [4, 500],
      [6, 500],
    ],
    [
      "Focaccia Bread",
      "Bean Salad",
      "Peppermint Patties",
      [26, 480],
      [6, 500],
      [4, 500],
    ],
    [
      "Sweet Challah Bread",
      "Grilled Potato Salad",
      "Vegan Garlic Pasta with Roasted Cajun Cauliflower",
      [12, 470],
      [12, 500],
      [3, 500],
    ],
    [
      "Samosa Pinwheels",
      "Warm balmain bug salad with saffron dressing",
      "Sesame Noodles",
      [4, 470],
      [4, 500],
      [6, 500],
    ],
    [
      "Lavender And Honey Bread",
      "Blackberry and Mango Almond Nut Pâté Salad",
      "Vegetable Couscous",
      [4, 470],
      [4, 500],
      [2, 500],
    ],
    [
      "Homemade Pretzels",
      "Winter Citrus Marmalade",
      "Lentils and Rice with Caramilized Onions",
      [4, 472],
      [12, 500],
      [6, 500],
    ],
    [
      "Karam Gavvalu",
      "Nutty Tropical Kale and Rice Salad",
      "Roasted ratatouille pasta",
      [4, 470],
      [4, 500],
      [2, 500],
    ],
  ],
  [
    [
      "Low-Carb Pancakes",
      "Fiesta Chicken",
      "Matzo Ball Soup",
      [2, 510],
      [4, 500],
      [8, 500],
    ],
    [
      "Low-Carb Almond Pancakes",
      "Beef and mixed sprout salad",
      "Spicy Indian Chicken Soup",
      [3, 450],
      [4, 500],
      [6, 500],
    ],
    [
      "Keto Pancakes",
      "Spit Roasted Leg of Lamb",
      "Sausage and Pepper Soup ",
      [4, 420],
      [6, 500],
      [6, 516],
    ],
    [
      "Egg and Cornmeal Pancake ",
      "Lemon And Garlic Broiled ",
      "Avgolemono Soup",
      [6, 356],
      [4, 500],
      [6, 486],
    ],
    [
      "Coconut Flour Waffles",
      "Garlic Confit Oil with Thyme and Black Pepper ",
      "Bacon Bean and Turkey Slow Cooker Soup",
      [5, 350],
      [4, 500],
      [8, 486],
    ],
    [
      "Crispy duck pancakes",
      "Maple-Apple Cider Vinaigrette",
      "Sichuan Chicken Soup with Bamboo Shoots and Mushrooms",
      [16, 347],
      [1, 500],
      [6, 484],
    ],
    [
      "Paleo Pancakes",
      "Strawberry Fruit Vinaigrette Dressing",
      "Salmon in Smoky Tomato Broth",
      [4, 328],
      [4, 500],
      [4, 480],
    ],
    [
      "Smoked Fish Pate",
      "Spit Roasted Leg of Lamb",
      "Stuffed Omelette Thai-ish",
      [4, 470],
      [6, 500],
      [2, 500],
    ],
    [
      "Focaccia Bread",
      "Beef and mixed sprout salad",
      "Beef and mixed sprout salad",
      [26, 470],
      [4, 500],
      [4, 496],
    ],
    [
      "Scotch Eggs",
      "Garlic Confit Oil with Thyme and Black Pepper",
      "Garden greens frittata",
      [28, 466],
      [4, 500],
      [2, 515],
    ],
    [
      "Sweet & Spicy Bacon",
      "Lemon And Garlic Broiled",
      "Terri's Tofu Scramble",
      [4, 470],
      [4, 500],
      [4, 520],
    ],
    [
      "Homemade Butter With Oat Cream",
      "Mayo Free Deviled Eggs",
      "Beef and mushroom omelette",
      [4, 470],
      [12, 500],
      [4, 460],
    ],
    [
      "Leaves with Poached Egg and Mushrooms",
      "Maple-Apple Cider Vinaigrette",
      "Kai Jeow",
      [4, 465],
      [1, 500],
      [1, 546],
    ],
    [
      "Scrambled Eggs",
      "Strawberry Fruit Vinaigrette Dressing",
      "Garlicky Kale & Broccoli Eggie Scramble",
      [1, 464],
      [4, 500],
      [1, 425],
    ],
  ],
  [
    [
      "Puckleberry Jam",
      "Limoncello",
      "Chickpea scramble",
      [12, 470],
      [8, 500],
      [1, 490],
    ],
    [
      "Passionfruit and tomato jam",
      "Instant Masala Dosa",
      "Mushroom Omelet",
      [10, 470],
      [4, 500],
      [2, 474],
    ],
    [
      "Lavender And Honey Bread ",
      "Quick and Easy Rhubarb Freezer Jam",
      "Omelet with Vegetables, eggs and cheese type ''Salad''",
      [4, 470],
      [16, 500],
      [1, 430],
    ],
    [
      "Ricotta Citrus Pancakes and Orange Rosemary Marmalade",
      "Pomegranate Mountain Dew Jelly",
      "Vegan Chickpea Scramble",
      [14, 470],
      [8, 500],
      [1, 355],
    ],
    [
      "Peanut Butter Granola",
      "The Caipirinha and the Rise of Craft Cocktails",
      "Tortilla de patata",
      [4, 462],
      [1, 500],
      [6, 354],
    ],
    [
      "Blackberry Chia Jam",
      "Sweet and Sour Chicken Stir-Fry Casserole",
      "Mexican Polenta Scramble",
      [1, 466],
      [6, 500],
      [6, 330],
    ],
    [
      "Mango Pineapple Jam",
      "Cinnamon Lavender Kasha with Honey & Berries",
      "Baked Sweet Apple Omelette",
      [10, 470],
      [2, 500],
      [2, 276],
    ],
    [
      "Rhubarb Chia Jam",
      "Rhubarb Balsamic Reduction",
      "Sweet and Sour Chicken Stir-Fry Casserole",
      [1, 510],
      [1, 500],
      [6, 500],
    ],
    [
      "Freeze-Ahead Breakfast Hash Browns",
      "Cinnamon Apple Sangria",
      "White Bean Chili",
      [4, 510],
      [6, 500],
      [4, 500],
    ],
    [
      "Slow Cooker Strawberry Basil Jam",
      "Quick and Easy Rhubarb Freezer Jam",
      "Cold Sesame Noodles With Kimchi",
      [2, 500],
      [16, 500],
      [2, 500],
    ],
    [
      "Basic Neapolitan Pizza Dough",
      "Asian Pickled Garlic Scapes ",
      "Sweet and Spicy Chipotle Chicken Stir-Fry",
      [4, 518],
      [3, 501],
      [5, 500],
    ],
    [
      "Plumbrillo",
      "Limoncello",
      "Sake-simmered chicken with mushrooms",
      [10, 480],
      [8, 500],
      [4, 500],
    ],
    [
      "Pinto Bean Stew",
      "Charred Orange Margarita",
      "Tomato & pineapple rice",
      [8, 520],
      [4, 500],
      [6, 500],
    ],
    [
      "Beetroot & Palak Paratha",
      "Cinnamon Lavender Kasha with Honey & Berries",
      "Carrot and Lentil Meatballs",
      [4, 472],
      [2, 500],
      [4, 500],
    ],
  ],
  [
    [
      "Quinoa Breakfast Bowl with Egg, Tomatoes and Avocado",
      "Sweet potato and tuna burgers",
      "Stuffed Peppers With Couscous or Harvest Grain Blend",
      [1, 483],
      [4, 500],
      [6, 504],
    ],
    [
      "Maple-Chia Overnight Oatmeal with Almond Butter",
      "Baked Spicy Chickpea Burgers",
      "Sesame Noodles",
      [2, 484],
      [2, 500],
      [6, 504],
    ],
    [
      "Roasted Chickpeas Snack",
      "Noodles",
      "Vegetable Couscous",
      [3, 483],
      [6, 500],
      [2, 500],
    ],
    [
      "Yellow Split Pea Breakfast Bowl",
      "Kimchi Potato Hash",
      "Lentils and Rice with Caramilized Onions",
      [2, 488],
      [1, 500],
      [6, 500],
    ],
    [
      "High-Protein Vegan Stir-Fry",
      "Pav Bhaji",
      "Baked Shrimp Wontons",
      [2, 482],
      [4, 500],
      [4, 500],
    ],
    [
      "Strawberry Coconut Oatmeal",
      "Potato and Spinach",
      "Thai Curry Fried Rice with Pineapple ",
      [1, 480],
      [4, 500],
      [4, 500],
    ],
    [
      "Thanksgiving Power Bowls",
      "Campfire Stuffed Peppers",
      "Roasted Squash and Eggplant With Crispy Cabbage and Soba Noodles",
      [4, 480],
      [4, 500],
      [4, 500],
    ],
    [
      "Jen's Peanut Butter Protein Balls",
      "Tofu Burger",
      "Rustic Thai Beef Soup",
      [4, 496],
      [6, 504],
      [8, 500],
    ],
    [
      "Raw Sunflower Seed Protein Balls",
      "Curry Cauliflower Burrito",
      "Bean and Vegetable Soup",
      [11, 454],
      [4, 504],
      [6, 504],
    ],
    [
      "Jam and Oats Bars",
      "Sweet potato and tuna burgers",
      "Salmon Soup",
      [4, 552],
      [4, 500],
      [4, 500],
    ],
    [
      "Breakfast Bacon Cookies",
      "Baked Spicy Chickpea Burgers",
      "Pea Soup",
      [4, 464],
      [2, 500],
      [5, 500],
    ],
    [
      "Healthy Chocolate Protein Bites",
      "Quinoa and Black Bean Veggie Burgers",
      "White bean & chorizo soup",
      [6, 444],
      [4, 500],
      [4, 500],
    ],
    [
      "Pumpkin Seed Breakfast Cookie",
      "Pav Bhaji",
      "Pea Soup",
      [4, 578],
      [4, 500],
      [4, 500],
    ],
    [
      "Blueberry Oatmeal Breakfast Cookies",
      "Black Bean Love Burger",
      "Leftover Ham & Staple",
      [4, 432],
      [3, 504],
      [4, 500],
    ],
  ],
];
//  Wheat Free
let Wheat_Free = [
  [
    [
      "Homemade trail mix & choc rice crackers",
      "Falafel Chickpea Vegetarian Stuffed Peppers",
      "White Bean and Barley Soup With Tomatoes and Greens",
      [4, 480],
      [4, 512],
      [4, 500],
    ],
    [
      "Protein Powerhouse Baked Oatmeal",
      "Baby Burrito Bowl",
      "Smoky Potato & Cheese Soup",
      [12, 470],
      [1, 515],
      [8, 500],
    ],
    [
      "Jam and Oats Bars",
      "Veggie Burrito Bake",
      "Crab and Corn Chowder",
      [4, 550],
      [4, 500],
      [6, 500],
    ],
    [
      "Apricot Coconut Breakfast Cookies",
      "Energy Bars",
      "Rustic Thai Beef Soup",
      [4, 560],
      [6, 492],
      [8, 500],
    ],
    [
      "Raw Sunflower Seed Protein Balls ",
      "California Tacos",
      "Bean and Vegetable Soup",
      [11, 454],
      [4, 515],
      [6, 500],
    ],
    [
      "Healthy Chocolate Protein Bites",
      "Healthy Chocolate Protein Bites",
      "Curried Lentil Soup",
      [6, 445],
      [4, 500],
      [4, 500],
    ],
    [
      "Baked Oatmeal",
      "Salmon and avocado poke bowl",
      "White Bean, Kale, and Pesto Soup",
      [8, 432],
      [4, 520],
      [4, 500],
    ],
    [
      "Springtime Oats",
      "Creamy Chipotle Sweet Potato & Quinoa Casserole",
      "Pan Roasted Little Potatoes",
      [4, 468],
      [8, 500],
      [4, 500],
    ],
    [
      "Raw Oatmeal",
      "Vegan chickpea tikka masala",
      "Jacket potatoes with pork and mushroom ragu",
      [6, 462],
      [4, 500],
      [6, 500],
    ],
    [
      "Smoothie",
      "Coconut Lentil Curry",
      "Lentils and Rice with Caramilized Onions",
      [1, 470],
      [6, 500],
      [6, 500],
    ],
    [
      "Jam and Oats Bars",
      "Butter bean & chorizo stew",
      "Potato & Cabbage Stir Fry",
      [4, 550],
      [4, 500],
      [4, 500],
    ],
    [
      "Turmeric Oatmeal",
      "Oven Roasted Parmesan Garlic Potatoes",
      "Lentils, Roasted Feta",
      [1, 468],
      [4, 500],
      [6, 500],
    ],
    [
      "Sweet and Crunchy Quinoa Granola",
      "Acorn Squash Stuffed with Chorizo Sausage",
      "Potato, zucchini and pesto bake",
      [8, 464],
      [4, 500],
      [6, 500],
    ],
    [
      "Banana Bread Overnight Oats",
      "Simple Sag Aloo ",
      "Vegan biryani",
      [1, 470],
      [4, 500],
      [4, 500],
    ],
  ],
  [
    [
      "Vietnamese Pancakes With Prawns",
      "Fiesta Chicken",
      "Parmesan Spring Chicken",
      [4, 578],
      [4, 500],
      [4, 500],
    ],
    [
      "Blueberry Protein Muffins",
      "Halibut with hazelnuts, marjoram and vermouth",
      "Mayo Free Deviled Eggs ",
      [8, 536],
      [2, 500],
      [12, 500],
    ],
    [
      "Rabbit Sausage",
      "Slow Cooker Mexican Shredded Beef",
      "Honey-Balsamic Baked Chicken Breasts With Tomatoes, Mushrooms",
      [8, 500],
      [4, 500],
      [4, 500],
    ],
    [
      "Coronation Chicken",
      "Stir'Fry'",
      "Cheesy Hasselback Chicken",
      [2, 500],
      [1, 500],
      [4, 500],
    ],
    [
      "Apple and Onion Chicken",
      "Barbecued prawns with avocado pico de gallo",
      "Indian Spiced Chicken & Spinach",
      [2, 484],
      [6, 504],
      [4, 500],
    ],
    [
      "Smoothie Booster",
      "Chicken Thighs Herbs de Provence",
      "Dr Pepper-Glazed Ham with Prunes",
      [36, 396],
      [5, 500],
      [12, 492],
    ],
    [
      "Strawberry Yogurt Smoothie",
      "Perfect Roast Turkey Breast",
      "Coconut Lime Chicken",
      [2, 348],
      [8, 600],
      [4, 548],
    ],
    [
      "Vietnamese pancakes with prawns",
      "Barbecued prawns with avocado pico de gallo",
      "Parmesan spring chicken",
      [4, 578],
      [6, 500],
      [4, 500],
    ],
    [
      "Blueberry Protein Muffins",
      "Chicken Spinach Ricotta and Hazelnut Balls",
      "Slow Cooker Mexican Shredded Beef",
      [8, 536],
      [2, 500],
      [4, 500],
    ],
    [
      "Rabbit Breakfast Sausage",
      "Grilled Chicken Mandarin Salad with Sweet-and-Sour Dressing",
      "Stir Fry'",
      [8, 500],
      [4, 500],
      [1, 500],
    ],
    [
      "Coronation Chicken",
      "Grilled Buffalo Chicken Salad",
      "Cheesy Hasselback Chicken",
      [2, 504],
      [4, 500],
      [4, 500],
    ],
    [
      "Apple and Onion Chicken",
      "Ragout of Seafood and Broccoli",
      "Indian Spiced Chicken & Spinach",
      [2, 484],
      [4, 508],
      [4, 500],
    ],
    [
      "Smoothie Booster",
      "Prawns With Fennel Salad",
      "Dr Pepper-Glazed Ham with Prunes",
      [36, 396],
      [2, 510],
      [12, 500],
    ],
    [
      "Strawberry Yogurt Smoothie",
      "Classic Tuna Salad",
      "Simple Succulent Dry Brined Roast Turkey",
      [2, 348],
      [4, 604],
      [12, 550],
    ],
  ],
  [
    ["Nasi ulam", "Salted Herring", "Turducken", [4, 524], [8, 500], [8, 500]],
    [
      "Quaker Oats",
      "Cherry Pork Chops",
      "Grilled Pompano",
      [4, 524],
      [4, 508],
      [4, 500],
    ],
    [
      "Soramame Rice",
      "Olive oil-infused Vodka",
      "Broiled Filet Mignon",
      [4, 404],
      [2, 512],
      [2, 498],
    ],
    [
      "Wali-Kenyan Coconut rice",
      "Slow Cooker Tavern Style Pot Roast",
      "Easy Chicken Cordon Bleu",
      [6, 400],
      [6, 512],
      [4, 496],
    ],
    [
      "Kenyan Coconut Rice",
      "Maple-glazed hot wings",
      "Homemade Rice Milk",
      [6, 500],
      [4, 500],
      [5, 500],
    ],
    [
      "Basic White Rice",
      "Grilled Sliced Brisket",
      "Rosemary Oil",
      [4, 352],
      [4, 488],
      [16, 506],
    ],
    [
      "Bajra Khichdi",
      "Jelly Shooters",
      "Fluffy rice",
      [12, 336],
      [4, 600],
      [3, 550],
    ],
    [
      "Bajra Khichdi",
      "Maple-glazed hot wings",
      "Grilled Pompano",
      [12, 336],
      [4, 500],
      [4, 500],
    ],
    [
      "Kenyan Coconut Rice",
      "Cherry Pork Chops",
      "Turducken",
      [6, 392],
      [4, 500],
      [8, 500],
    ],
    [
      "Easy Buckwheat Porridge for Breakfast",
      "Slow Cooker Tavern Style Pot Roast",
      "Easy Chicken Cordon Bleu",
      [2, 284],
      [6, 504],
      [4, 496],
    ],
    [
      "Suman sa Ibos",
      "Homemade Rice Milk",
      "Confit De Canard",
      [10, 299],
      [5, 504],
      [40, 490],
    ],
    [
      "Suman sa Ibos ",
      "Jelly (Jello) Shooters",
      "Fluffy Rice",
      [14, 295],
      [4, 598],
      [3, 550],
    ],
    [
      "Plain Long-Grain White Rice",
      "Jelly (Jello) Shooters",
      "BBQ Basil Pesto Grilled Chicken",
      [4, 270],
      [4, 598],
      [4, 552],
    ],
    [
      "Chinese Black Rice or Forbidden Rice",
      "Oatmeal - Crockpot",
      "Roast fillet of beef with shallot & mushroom sauce",
      [3, 229],
      [1, 606],
      [6, 537],
    ],
  ],
  [
    [
      "Paleo granola",
      "Grilled Salad",
      "Grilled Shrimp and Steamed Mussels",
      [10, 480],
      [4, 500],
      [4, 500],
    ],
    [
      "Flax Granola",
      "Summer Waldorf with Yogurt-Tarragon Dressing",
      "Zanzibari Fish Soup",
      [3, 472],
      [4, 500],
      [4, 500],
    ],
    [
      "Crunchy Apple Spice Granola",
      "Warm balmain bug salad with saffron dressing",
      "Chicken Enchilada Soup",
      [6, 468],
      [4, 500],
      [4, 500],
    ],
    [
      "Paleo Granola",
      "Chicken Salad For Sandwiches",
      "Thai Chicken Soup ",
      [6, 504],
      [4, 500],
      [6, 504],
    ],
    [
      "Grain Free Granola",
      "Cobb Salad",
      "Spicy Mexican Peanut Soup",
      [6, 504],
      [6, 504],
      [4, 500],
    ],
    [
      "Pineapple-Coconut Rice",
      "Butternut Squash Caprese Salad",
      "Creamy Potato Soup By Frau Danger",
      [2, 464],
      [4, 500],
      [6, 504],
    ],
    [
      "Homemade Grape Nuts Cereal ",
      "Pan-Fried Scamorza with Arugula Salad and Two Pestos",
      "Spicy Lime Avocado Soup",
      [4, 504],
      [6, 504],
      [4, 500],
    ],
    [
      "Apple, Cheese & Bacon Frittata",
      "Mayo Free Deviled Eggs",
      "Vanilla Maple Almond Sunbutter",
      [4, 468],
      [12, 500],
      [4, 500],
    ],
    [
      "Paleo Granola",
      "Salted Herring",
      "Ginger, coconut and almond slice",
      [6, 504],
      [8, 500],
      [16, 500],
    ],
    [
      "Paleo Scotch Eggs",
      "Summer Waldorf with Yogurt-Tarragon Dressing",
      "Turkey with Oranges and Mint",
      [6, 468],
      [4, 500],
      [4, 500],
    ],
    [
      "Hammy Breakfast Hotdish",
      "Spice Pecans",
      "White Hot Chocolate",
      [10, 460],
      [8, 500],
      [6, 504],
    ],
    [
      "Tomato, mushroom and basil frittata",
      "Bacon Wrapped Hotdogs",
      "Grouper Almondine",
      [4, 468],
      [7, 497],
      [4, 500],
    ],
    [
      "Colorful Frittata",
      "Bihari Kabab ",
      "Using Milk And Lemon Juice Or Vinegar",
      [4, 468],
      [6, 500],
      [1, 495],
    ],
    [
      "Wild Mushroom Omelette",
      "Garlic Confit Oil with Thyme and Black Pepper",
      "Coconut Snow",
      [2, 468],
      [4, 500],
      [2, 492],
    ],
  ],
  [
    [
      "Tambo Tambo ",
      "Roasted Sweet Potato Salad with Black Beans and Chili Dressing",
      "Warming Autumn Soup w. Fresh and Crunchy Toppings",
      [4, 472],
      [4, 500],
      [3, 501],
    ],
    [
      "Kheer",
      "Cucumber & Red Pepper Salad",
      "Chunky Black Bean and Sweet Potato Soup",
      [4, 472],
      [6, 500],
      [4, 500],
    ],
    [
      "Pixie's Pomegranate Porridge",
      "Triple Rice Salad with Dried Fruits and Nuts",
      "Vegan Creamy Mushroom Soup",
      [2, 470],
      [6, 504],
      [3, 501],
    ],
    [
      "Coconut Lovers Paleo Granola",
      "Herbed Buckwheat, Avocado & Microgreens",
      "Coconut Pumpkin Cream Soup",
      [4, 472],
      [2, 500],
      [4, 500],
    ],
    [
      "Quinoa and Hazelnut Porridge - Natvia",
      "Quinoa Chickpea Salad with Avocado Dressing",
      "Kale Soup",
      [1, 470],
      [4, 500],
      [4, 500],
    ],
    [
      "Coconut Quinoa Power Bowls",
      "Quinoa Chickpea Salad with Avocado Dressing",
      "Skinny Butternut Squash and Red Pepper Bisque",
      [4, 468],
      [4, 500],
      [4, 500],
    ],
    [
      "Chia Seed Porridge",
      "Winter Citrus Marmalade",
      "Vegan Rice Mushroom",
      [4, 470],
      [12, 500],
      [4, 500],
    ],
    ["", "", "", [], [], []],
    ["", "", "", [], [], []],
    ["", "", "", [], [], []],
    ["", "", "", [], [], []],
    ["", "", "", [], [], []],
    ["", "", "", [], [], []],
    ["", "", "", [], [], []],
  ],
  [
    [
      "Omelette with Watercress and Roasted Mushrooms",
      "Meal prep : Rice",
      "Soup w. Fresh and Crunchy Toppings",
      [6, 472],
      [1, 500],
      [3, 500],
    ],
    [
      "Mediterranean Three-Cheese Omelet",
      "Rhubarb Balsamic Reduction",
      "Yogurt-Cucumber Soup with Chickpea Dip",
      [1, 475],
      [1, 500],
      [6, 500],
    ],
    [
      "Tomato, cheese and avocado omelette",
      "Sweet Potatoes With Charred Lemons and Crunchies",
      "White Bean and Barley Soup With Tomatoes and Greens",
      [1, 470],
      [4, 500],
      [4, 500],
    ],
    [
      "Green Chile Tortilla Scramble",
      "Steam-Roasted Carrots",
      "Chunky Black Bean and Sweet Potato Soup",
      [1, 475],
      [1, 500],
      [4, 500],
    ],
    [
      "The Ultimate Breakfast Scramble",
      "Steam-Roasted Carrots",
      "Leek and Potato Soup with Roasted Hazelnut",
      [1, 470],
      [1, 500],
      [6, 500],
    ],
    [
      "Caramelized Mushroom and Onion Frittata",
      "Diabetic 'Sugar' And Spice Pecans",
      "Roasted Cauliflower Soup ",
      [4, 468],
      [8, 500],
      [2, 500],
    ],
    [
      "Goat Cheese and Red Pepper Frittata",
      "Banana Slush",
      "Vegan Creamy Mushroom Soup",
      [4, 475],
      [12, 500],
      [3, 501],
    ],
    [
      "Crunchy Apple Spice Granola",
      "Nutty Tropical Kale and Rice Salad",
      "Soup w. Fresh and Crunchy Toppings",
      [6, 468],
      [4, 500],
      [3, 500],
    ],
    [
      "Raw Oatmeal",
      "Chickpea Salad",
      "Yogurt-Cucumber Soup with Chickpea Dip",
      [6, 468],
      [4, 500],
      [6, 500],
    ],
    [
      "Springtime Oats",
      "Lentils, Radicchio and Walnuts with Honey",
      "White Bean and Barley Soup With Tomatoes and Greens",
      [4, 468],
      [4, 500],
      [4, 500],
    ],
    [
      "Sweet and Crunchy Quinoa Granola",
      "Blackberry and Mango Almond Nut Pâté Salad",
      "Chunky Black Bean and Sweet Potato Soup",
      [8, 464],
      [4, 500],
      [4, 500],
    ],
    [
      "Coconut Rice Balls",
      "Warm balmain bug salad with saffron dressing",
      "Leek and Potato Soup with Roasted Hazelnut",
      [6, 500],
      [2, 500],
      [4, 500],
    ],
    [
      "No-Oats Baked 'Oatmeal'",
      "Goat Cheese and Beet Salad",
      "Roasted Cauliflower Soup ",
      [4, 468],
      [4, 500],
      [2, 500],
    ],
    [
      "Cherry Overnight Oats",
      "Butternut Squash Caprese Salad",
      "Vegan Creamy Mushroom Soup",
      [1, 468],
      [4, 500],
      [3, 501],
    ],
  ],
  [
    [
      "Paleo Scotch Eggs",
      "Carpaccio with Green Salad",
      "Bihari Kabab",
      [6, 468],
      [4, 500],
      [6, 500],
    ],
    [
      "Low-Carb Italian Sausage and Sweet Mini-Peppers Breakfast Bake",
      "Green Salad With Mozzarella And Tomatoes",
      "Salmon en Papillote aka Salmon Pouches in an Oven",
      [8, 464],
      [6, 500],
      [2, 500],
    ],
    [
      "Sweet & Spicy Bacon",
      "Bacon-Wrapped Tuna Steaks with Frisée and Avocado Salad",
      "Diabetic 'Sugar' And Spice Pecans (Crock Pot)",
      [4, 466],
      [4, 500],
      [8, 500],
    ],
    [
      "Colorful Frittata",
      "Steak and Feta Spinach Salad",
      "Cajun Chicken Tacos",
      [4, 468],
      [4, 500],
      [2, 500],
    ],
    [
      "Wild Mushroom Omelette",
      "Easy Chicken Salad For Sandwiches",
      "Garlic Orange Glazed Salmon",
      [2, 468],
      [4, 500],
      [4, 500],
    ],
    [
      "Breakfast with Scrambled Eggs and Bacon, Coffee, Orange Juice and Rolls",
      "Greek Salad Chicken",
      "Pork Chops with Wine and Garlic",
      [1, 468],
      [4, 500],
      [6, 500],
    ],
    [
      "Colorful Frittata",
      "Crab & Pea Salad",
      "Spit Roasted Leg of Lamb",
      [4, 468],
      [4, 500],
      [6, 500],
    ],
    [
      "Paleo Scotch Eggs",
      "Garlic Confit Oil with Thyme and Black Pepper",
      "Bihari Kabab",
      [6, 468],
      [4, 500],
      [6, 500],
    ],
    [
      "Low-Carb Italian Sausage and Sweet Mini-Peppers Breakfast Bake",
      "Cajun Chicken Tacos ",
      "Bacon Dip",
      [8, 467],
      [2, 500],
      [4, 499],
    ],
    [
      "Sweet & Spicy Bacon",
      "Diabetic 'Sugar' And Spice Pecans (Crock Pot)",
      "Fiesta Chicken",
      [4, 466],
      [8, 500],
      [4, 499],
    ],
    [
      "Colorful Frittata",
      "Spit Roasted Leg of Lamb recipes",
      "Salted Herring",
      [4, 468],
      [6, 500],
      [8, 500],
    ],
    [
      "Wild Mushroom Omelette",
      "Air Fryer Lemon Parmesan Garlic Chicken Wings",
      "Halibut with hazelnuts, marjoram and vermouth",
      [2, 468],
      [6, 500],
      [2, 500],
    ],
    [
      "Breakfast with Scrambled Eggs and Bacon, Coffee, Orange Juice and Rolls",
      "Have a Yummy Yuletide with Stella Cheese",
      "Mayo Free Deviled Eggs ",
      [1, 468],
      [4, 500],
      [12, 500],
    ],
    [
      "Colorful Frittata Recipe",
      "Lemon And Garlic Broiled Or Grilled Chicken Breasts",
      "Salmon en Papillote aka Salmon Pouches in an Oven",
      [4, 468],
      [4, 500],
      [2, 500],
    ],
  ],
  [
    [
      "Homemade Cornflakes Cereal ",
      "White Bean Chili ",
      "Rhubarb Balsamic Reduction",
      [2, 464],
      [4, 500],
      [1, 500],
    ],
    [
      "Vanilla-Date Breakfast Smoothie",
      "Rosemary & mushroom risotto",
      "Charred Orange Margarita",
      [2, 468],
      [4, 500],
      [4, 500],
    ],
    [
      "Vanilla-Date Breakfast Smoothie",
      "Cinnamon Lavender Kasha with Honey & Berries",
      "banana slush",
      [2, 468],
      [2, 500],
      [12, 500],
    ],
    [
      "Blackberry Chia Jam-The Healthy Maven",
      "Butternut Squash Tacos with Cranberry-Jalapeño Relish",
      "The Caipirinha and the Rise of Craft Cocktails",
      [1, 466],
      [5, 500],
      [1, 500],
    ],
    [
      "Cardamom-Plum Jam from 'Little Jars, Big Flavors'",
      "Sweet and Spicy Chipotle Chicken Stir-Fry",
      "Limoncello",
      [5, 465],
      [5, 500],
      [8, 500],
    ],
    [
      "Quince-Orange Jam",
      "Chunky Black Bean and Sweet Potato Soup",
      "Pale Rider Cocktail",
      [8, 464],
      [4, 500],
      [2, 500],
    ],
    [
      "Chinese Rice Cake",
      "Tomato & pineapple rice",
      "Candied Jalapenos",
      [4, 464],
      [6, 500],
      [12, 500],
    ],
    [
      "Pimm's jelly jars",
      "Polenta Fries recipes",
      "Rhubarb Balsamic Reduction",
      [6, 364],
      [4, 500],
      [1, 500],
    ],
    [
      "Simple Peach Butter",
      "Mexican Stuffed Peppers",
      "Charred Orange Margarita",
      [12, 470],
      [4, 500],
      [4, 500],
    ],
    [
      "Vanilla scented sour apricot preserves",
      "Chicken and asparagus risotto",
      "banana slush",
      [10, 430],
      [4, 500],
      [12, 500],
    ],
    [
      "Protein Power Goddess Bowl",
      "Candied Fennel Stalks",
      "The Caipirinha and the Rise of Craft Cocktails",
      [10, 300],
      [1, 500],
      [1, 500],
    ],
    [
      "Quinoa Grapefruit Blueberry Breakfast",
      "Homemade Garlic Mashed Potatoes",
      "Limoncello",
      [4, 276],
      [6, 500],
      [8, 500],
    ],
    [
      "The Feel Good Bowl",
      "Salsa Chicken",
      "Pale Rider Cocktail",
      [1, 252],
      [4, 500],
      [2, 500],
    ],
    [
      "Fresh Fruity Yogurt",
      "Easy Steamed Clams",
      "Candied Jalapenos",
      [4, 252],
      [2, 500],
      [12, 500],
    ],
  ],
  [
    [
      "Springtime Oats",
      "Simple Sag Aloo",
      "Pan Roasted Little Potatoes ",
      [4, 468],
      [4, 500],
      [4, 500],
    ],
    [
      "Raw Oatmeal",
      "Weeknight Risotto with Bacon and Corn ",
      "Jacket potatoes with pork and mushroom ragu",
      [6, 468],
      [4, 500],
      [6, 500],
    ],
    [
      "Smoothie",
      "Creamy Chipotle Sweet Potato & Quinoa Casserole",
      "Lentils and Rice with Caramilized Onions",
      [1, 470],
      [8, 500],
      [6, 500],
    ],
    [
      "Homemade Cornflakes Cereal",
      "Vegan chickpea tikka masala",
      "Potato & Cabbage Stir Fry",
      [2, 464],
      [4, 500],
      [4, 500],
    ],
    [
      "Turmeric Oatmeal",
      "Coconut Lentil Curry",
      "Asparagus Risotto with Pecorino Romano",
      [1, 470],
      [6, 500],
      [6, 500],
    ],
    [
      "Sweet and Crunchy Quinoa Granola",
      "Campfire Stuffed Peppers",
      "Hen-Of-The-Woods Honey Cream",
      [8, 470],
      [4, 500],
      [6, 500],
    ],
    [
      "Banana Bread Overnight Oats",
      "Acorn Squash Stuffed with Chorizo Sausage",
      "Baked Macaroni and Cheese",
      [1, 470],
      [4, 500],
      [8, 500],
    ],
    [
      "Bacon & pepper frittata",
      "Pan Roasted Little Potatoes",
      "White Bean and Barley Soup With Tomatoes and Greens",
      [4, 510],
      [4, 500],
      [4, 500],
    ],
    [
      "Breakfast in a Pan Frittata",
      "Jacket potatoes with pork and mushroom ragu",
      "Smoky Potato & Cheese Soup",
      [2, 594],
      [6, 500],
      [8, 500],
    ],
    [
      "Crab and Corn Chowder",
      "Garlic Smashed Potatoes",
      "Breakfast In A Pan Frittata",
      [2, 594],
      [6, 500],
      [6, 500],
    ],
    [
      " Omelette and Rice",
      "Hen-Of-The-Woods Honey Cream",
      "Rustic Thai Beef Soup",
      [2, 490],
      [6, 500],
      [8, 500],
    ],
    [
      "Denver Omelette in a Mug",
      "Baked Macaroni and Cheese",
      "Bean and Vegetable Soup",
      [1, 480],
      [8, 500],
      [6, 500],
    ],
    [
      "Good Morning Frittata",
      "Potato, zucchini and pesto bake",
      "Curried Lentil Soup",
      [2, 410],
      [6, 500],
      [4, 500],
    ],
    [
      "Jelly Omelet",
      "Potato & Cabbage Stir Fry",
      "White Bean, Kale, and Pesto Soup",
      [1, 410],
      [4, 500],
      [4, 500],
    ],
  ],
];
//  Immuno-Supportive
let ImmunoSupportive = [
  [
    [
      "Poached eggs with smashed avocado, preserved lemon and sumac",
      "Poached eggs with smashed avocado, preserved lemon and sumac",
      "Pan Roasted Little Potatoes",
      [2, 470],
      [4, 500],
      [4, 500],
    ],
    [
      "Turmeric Oatmeal",
      "Mashed Sweet Potato and Smoked Gouda Cakes",
      "Potato Green Bean Salad with Lemon Dill Aioli",
      [1, 470],
      [6, 500],
      [4, 500],
    ],
    [
      "Baked egg florentine",
      "Avocado and feta toasties",
      "Warming Autumn Soup w. Fresh and Crunchy Toppings",
      [1, 470],
      [4, 500],
      [3, 500],
    ],
    [
      "Chocolate, Peanut Butter, and Banana Smoothie",
      "Blackberry and Mango Almond Nut Pâté Salad",
      "Orange pepper faces with spaghetti",
      [1, 470],
      [4, 500],
      [4, 500],
    ],
    [
      "Avocado & black bean",
      "Whole30 Sweet Potato Hash",
      "Tabbouleh",
      [2, 468],
      [4, 500],
      [4, 500],
    ],
    [
      "Healthy Breakfast Salad",
      "BLT Cups",
      "Roasted ratatouille pasta",
      [2, 468],
      [4, 500],
      [2, 500],
    ],
    [
      "Citrus Oatmeal - Refreshing and Vegan",
      "Easy Guacamole",
      "Swordfish Skewers with Lime",
      [1, 466],
      [4, 500],
      [4, 500],
    ],
    [
      "Winter citrus breakfast salad with quinoa and toasted walnuts",
      "Pan Roasted Little Potatoes",
      "Orange pepper faces with spaghetti",
      [3, 540],
      [4, 500],
      [4, 500],
    ],
    [
      "Baby Kale Berry Breakfast Salad",
      "Potato Green Bean Salad with Lemon Dill Aioli",
      "Roasted ratatouille pasta",
      [1, 525],
      [4, 500],
      [2, 500],
    ],
    [
      "Rösti (Rosti) with Egg",
      "Warming Autumn Soup w. Fresh and Crunchy Topping",
      "Swordfish Skewers with Lime",
      [1, 505],
      [3, 501],
      [4, 500],
    ],
    [
      "Green Goddess Grain Bowl",
      "Blackberry and Mango Almond Nut Pâté Salad",
      "Tomato and eggplant pizza",
      [1, 494],
      [4, 500],
      [4, 500],
    ],
    [
      "Healthy Breakfast Salad",
      "Avocado and feta toasties",
      "Tomato and Eggplant Gratin",
      [2, 468],
      [4, 500],
      [4, 500],
    ],
    [
      "Warm potato salad with cheesy sauce",
      "Mashed Sweet Potato and Smoked Gouda Cakes",
      "Sweet Potato Nacho Boats",
      [8, 468],
      [6, 498],
      [6, 498],
    ],
    [
      "California Caprese Bowl",
      "Sweet Potato Hash",
      "Potato Casserole",
      [1, 460],
      [4, 500],
      [10, 500],
    ],
  ],
  [
    [
      "Maryland Pit Beef",
      "French Onion Soup",
      "Grilled Stuffed Whole Snapper",
      [8, 290],
      [6, 500],
      [4, 500],
    ],
    [
      "Breakfast Tomatoes",
      "Grilled Balmain bug salad",
      "Barbecued prawns with avocado pico de gallo",
      [4, 252],
      [4, 500],
      [6, 500],
    ],
    [
      "Biltong",
      "Halibut Packets",
      "Easy Halibut Fillets With Herb Butter",
      [6, 252],
      [6, 510],
      [2, 500],
    ],
    [
      "Egg White Omele",
      "Red mullet with fennel",
      "Halibut Fillets with Herb Butter",
      [1, 195],
      [4, 504],
      [2, 500],
    ],
    [
      "Egg Muffins",
      "Roasted barramundi with lemon, chilli and coconut",
      "Roasted Halibut with Grapefruit Salsa",
      [1, 185],
      [2, 512],
      [4, 500],
    ],
    [
      "Lower Sodium Breakfast Sausage",
      "French Onion Soup",
      "Venison Jerky ",
      [4, 180],
      [6, 504],
      [4, 500],
    ],
    [
      "Egg Breakfast Muffins Cups",
      "Heat Pork Roast",
      "Grilled Fish",
      [4, 180],
      [4, 512],
      [4, 500],
    ],
    [
      "Maryland Pit Beef on the Char-Broil Big Ea",
      "Orange Halibut with Arugula",
      "Grilled Fish",
      [8, 288],
      [4, 520],
      [4, 496],
    ],
    [
      "Special Breakfast Tomatoes",
      "Salt Crusted Whole Red Snapper",
      "Smoked Trout",
      [4, 252],
      [6, 516],
      [6, 498],
    ],
    [
      "Biltong",
      "Halibut Packets",
      "red mullet with fennel",
      [6, 248],
      [6, 510],
      [4, 504],
    ],
    [
      "Egg White Omelet with Seared Asparagus",
      "Grilled Stuffed Whole Snapper",
      "Rosemary Thyme Turkey",
      [1, 195],
      [4, 500],
      [6, 492],
    ],
    [
      "Egg Muffins",
      "Easy Halibut Fillets With Herb Butter",
      "Barramundi with kipflers and roasted capsicum",
      [1, 185],
      [2, 500],
      [4, 488],
    ],
    [
      "Lower Sodium Breakfast Sausage",
      "Easy Halibut Fillets with Herb Butter",
      "Roasted barramundi with lemon, chilli and coconut",
      [4, 180],
      [2, 500],
      [2, 510],
    ],
    [
      "Egg Breakfast Muffins Cups",
      "Roasted Halibut with Grapefruit Salsa",
      "Roast Turkey Breast for Slicing",
      [4, 170],
      [4, 500],
      [8, 500],
    ],
  ],
  [
    [
      "Perfect Quinoa",
      "Rosemary Oil",
      "Grilled Pompano",
      [6, 204],
      [16, 496],
      [4, 500],
    ],
    [
      "Coconut Quinoa",
      "Plain & Simple Roast Chicken",
      "Salt-Fried Rib-Eye Steak",
      [4, 480],
      [4, 580],
      [6, 300],
    ],
    [
      "Perfect Quinoa",
      "Salted Herring",
      "Grilled Steak",
      [6, 300],
      [4, 580],
      [4, 480],
    ],
    [
      "Plain Millet",
      "Oatmeal",
      "Roasted Pork with apple Stuffing",
      [4, 188],
      [1, 600],
      [4, 428],
    ],
    [
      "Basic Millet",
      "Roast Chicken",
      "Grilled Tuscan Chicken",
      [4, 188],
      [6, 618],
      [8, 424],
    ],
    [
      "Basic Steamed Millet",
      "Fully Salted Roast Chicken",
      "Quinoa Pizza Crust",
      [6, 186],
      [4, 620],
      [2, 414],
    ],
    [
      "Quinoa",
      "Fully Salted Roast Chicken",
      "Roasted Pork with apple Stuffing",
      [4, 188],
      [4, 620],
      [3, 402],
    ],
    [
      "Instant Pot Quinoa",
      "Fully Salted Roast Chicken",
      "Baked Hamsi Skewer",
      [4, 156],
      [4, 620],
      [3, 402],
    ],
    [
      "Coconut Quinoa",
      "Salted Herring",
      "Grilled Tuscan Chicken",
      [6, 300],
      [8, 500],
      [8, 420],
    ],
    [
      "Basic Millet",
      "Oatmeal",
      "Grilled Pompano",
      [4, 180],
      [1, 600],
      [4, 500],
    ],
    [
      "Steamed Millet",
      "Salted Roast Chicken",
      "Quinoa Pizza Crust",
      [6, 186],
      [4, 620],
      [2, 414],
    ],
    [
      "Quinoa",
      "Roast Chicken",
      "Baked Hamsi Skewer",
      [4, 180],
      [4, 620],
      [3, 402],
    ],
    [
      "Perfect Quinoa",
      "Rosemary Oil",
      "Grilled Pompano",
      [6, 204],
      [16, 500],
      [4, 500],
    ],
    [
      "Coconut Quinoa",
      "Salted Herring",
      "Salt-Fried Steak",
      [6, 300],
      [8, 500],
      [4, 480],
    ],
  ],
  [
    [
      "Healthy Breakfast Salad",
      "Vegetables with Spelt Berries and Herbed Quark",
      "Roasted Lamb",
      [2, 470],
      [4, 500],
      [6, 500],
    ],
    [
      "Caramelized Mushroom and Onion Frittata",
      "Kumara rösti with portobello mushrooms",
      "Air Fryer Lemon Parmesan Garlic Chicken Wings",
      [4, 472],
      [4, 500],
      [6, 500],
    ],
    [
      "Wild Mushroom Omelette",
      "Seared Swordfish with Herb Butter",
      "Kheema-Spiced Ground Beef",
      [2, 468],
      [4, 500],
      [6, 500],
    ],
    [
      "Poached Eggs & Avocado Toasts",
      "Cinnamon Chicken",
      "Lemon And Garlic Broiled Chicken",
      [468],
      [4, 500],
      [4, 500],
    ],
    [
      "Apple, Cheese & Bacon Frittata",
      "Swedish Meatball Orzo",
      "Swordfish Skewers with Lime",
      [4, 468],
      [5, 500],
      [4, 500],
    ],
    [
      "Rolled Omelet with Spinach and Cheddar",
      "Chicken Pies",
      "Tomato and Eggplant Gratin",
      [4, 470],
      [4, 500],
      [4, 500],
    ],
    [
      "Blue Cheese Sauce with Brussels Sprouts, Fennel and Bacon",
      "Barbecued prawns with avocado",
      "Roast Chicken with Thyme and Onions",
      [4, 410],
      [6, 504],
      [10, 500],
    ],
    [
      "Cheese Omelet",
      "Vegetables with Spelt Berries and Herbed Quark Dressing",
      "Salted Herring",
      [1, 470],
      [4, 500],
      [8, 500],
    ],
    [
      "Tomato, cheese and avocado omelette",
      "Kumara rösti with portobello mushrooms",
      "Garlic Confit Oil with Thyme and Black Peppe",
      [1, 470],
      [4, 500],
      [4, 500],
    ],
    [
      "Green Chile Tortilla Scramble",
      "Seared Swordfish with Herb Butter",
      "Roasted Lamb",
      [1, 470],
      [4, 500],
      [6, 500],
    ],
    [
      "Plain Omelette",
      "Cinnamon Chicken",
      "Air Fryer Lemon Parmesan Garlic Chicken Wings",
      [1, 470],
      [4, 500],
      [6, 500],
    ],
    [
      "Cheesy Spinach & Bacon Frittata",
      "Swedish Meatball Orzo",
      "Kheema-Spiced Ground Beef",
      [2, 470],
      [5, 500],
      [6, 500],
    ],
    [
      "Family-Style Rolled Omelet with Spinach and Cheddar",
      "Chicken Pies",
      "Lemon And Garlic Broiled Chicken",
      [4, 470],
      [4, 500],
      [4, 500],
    ],
    [
      "Caramelized Mushroom and Onion Frittata",
      "Barbecued prawns with avocado pico de gallo",
      "Creamy Italian Dressing",
      [4, 468],
      [6, 500],
      [4, 500],
    ],
  ],
  [
    [
      "Detox Smoothie",
      "Buca Di Beppo Bruschetta ",
      "Warming Autumn Soup w. Fresh and Crunchy Toppings",
      [1, 470],
      [4, 500],
      [3, 501],
    ],
    [
      "Pixie's Pomegranate Porridge",
      "Grilled Potato Salad",
      "Rhubarb Balsamic Reduction",
      [2, 474],
      [12, 500],
      [1, 500],
    ],
    [
      "Tropical Green Smoothie",
      "Roasted Potato Wedges with Herbs",
      "Garlic Confit Oil with Thyme and Black Pepper",
      [1, 474],
      [1, 500],
      [4, 500],
    ],
    [
      "Creamy Avo Spinach Raspberry Smoothie",
      "Pasta with Cauliflower, Peppers and Walnut Pesto",
      "Tabbouleh",
      [2, 475],
      [6, 500],
      [4, 500],
    ],
    [
      "Blackberry Banana Kale Smoothie",
      "Raw Avocado Kale Pesto with Zucchini Noodles",
      "Roasted ratatouille pasta",
      [2, 470],
      [4, 500],
      [2, 500],
    ],
    [
      "Spicy Pina-Rita",
      "Shallot Vinaigrette",
      "Creamy Italian Dressing",
      [1, 475],
      [1, 500],
      [4, 500],
    ],
    [
      "Avocado Citrus Breakfast Shake",
      "Roasted Sweet Potato Salad with Black Beans and Chili Dressing",
      "Easy Guacamole",
      [2, 466],
      [4, 500],
      [4, 500],
    ],
    [
      "Avocado Rose on Toast",
      "Warming Autumn Soup w. Fresh and Crunchy Toppings",
      "Roasted ratatouille pasta",
      [2, 500],
      [3, 501],
      [2, 500],
    ],
    [
      "Chocolate Orange Green Smoothie",
      "Chilled Tomato-Tarragon Soup With Croutons",
      "Roasted Potato Wedges with Herbs",
      [1, 500],
      [4, 500],
      [1, 500],
    ],
    [
      "Mango Banana Smoothie Bowl ",
      "Cold Bell Pepper and Coconut ",
      "Pasta with Cauliflower, Peppers and Walnut Pesto",
      [2, 500],
      [2, 520],
      [6, 500],
    ],
    [
      "Apple-Coconut Breakfast",
      "Heirloom tomato gazpacho",
      "Roasted Sweet Potato Salad with Black Beans and Chili Dressing",
      [1, 480],
      [4, 520],
      [4, 500],
    ],
    [
      "Avocado Citrus Breakfast Shake",
      "Coconut Ramen Noodle Soup",
      "Raw Avocado Kale Pesto with Zucchini Noodles ",
      [2, 466],
      [2, 536],
      [4, 500],
    ],
    [
      "Tropical Turmeric Smoothie Bowl",
      "Sopa de Fideo",
      "French Fries with Homemade Habanero, Orange and Tomato Ketchup",
      [1, 540],
      [4, 500],
      [32, 500],
    ],
    [
      "Coconut Peach Green Smoothie ",
      "Black Bean Soup",
      "Roasted Garlic Dipping Oil",
      [2, 540],
      [2, 500],
      [4, 500],
    ],
  ],
  [
    [
      "Creamed Spinach",
      "Pumpkin, Sweet Potato, and Leek Soup ",
      "Pan Roasted Little Potatoes",
      [4, 476],
      [4, 504],
      [4, 500],
    ],
    [
      "Peanut Butter Banana French Toast",
      "Roasted Root Vegetable Soup",
      "Orange pepper with spaghetti",
      [1, 480],
      [2, 500],
      [4, 500],
    ],
    [
      "Apple-Coconut Breakfast Bowl ",
      "Creamy Mushroom Pasta with No Canned Soup",
      "Roasted ratatouille pasta",
      [1, 480],
      [4, 500],
      [2, 500],
    ],
    [
      "Sweet Potato Breakfast",
      "Chilled Tomato-Tarragon Soup With Croutons",
      "Pizza alla Napoletana",
      [2, 484],
      [4, 500],
      [8, 500],
    ],
    [
      "Savory Parmesan Crusted French Toast",
      "Potato, Broccoli, and Cheddar Soup",
      "Kumara rösti with portobello mushrooms",
      [4, 476],
      [4, 500],
      [4, 500],
    ],
    [
      "Make-Ahead Fruit & Yogurt Breakfast Parfaits",
      "Cheesy Potato Soup",
      "Tomato and eggplant pizza",
      [1, 470],
      [4, 510],
      [4, 500],
    ],
    [
      "Peanut Butter Jelly Smoothie",
      "Asparagus Cheese Soup",
      "Tomato and Eggplant Gratin",
      [1, 480],
      [6, 504],
      [4, 500],
    ],
    [
      "Scrambled omelette toast topper",
      "Roasted ratatouille pasta",
      "Pan Roasted Little Potatoes",
      [1, 470],
      [2, 500],
      [4, 500],
    ],
    [
      "Turmeric Oatmeal",
      "Vegetables with Spelt Berries and Herbed Quark Dressing",
      "Potato Green Bean Salad with Lemon Dill Aioli",
      [1, 470],
      [4, 500],
      [4, 500],
    ],
    [
      "Poached eggs with smashed avocado, preserved lemon and sumac",
      "Kumara rösti with portobello mushrooms",
      "Warming Autumn Soup w. Fresh and Crnchy Toppings",
      [2, 468],
      [4, 500],
      [3, 501],
    ],
    [
      "Baked egg florentine",
      "Mashed Sweet Potato and Smoked Gouda Cakes",
      "Rhubarb Balsamic Reduction",
      [1, 470],
      [6, 500],
      [1, 500],
    ],
    [
      "Wild Mushroom Omelette",
      "Peanut Butter Fig Sandwich with Banana",
      "Garlic Confit Oil with Thyme and Black Pepper",
      [2, 470],
      [1, 500],
      [4, 500],
    ],
    [
      "Chocolate, Peanut Butter, and Banana Smoothie",
      "Blackberry and Mango Almond Nut Pâté Salad",
      "Orange pepper faces with spaghetti",
      [1, 470],
      [4, 500],
      [4, 500],
    ],
    [
      "Citrus Oatmeal - Refreshing and Vegan",
      "Avocado and feta toasties",
      "Tabbouleh",
      [1, 470],
      [4, 500],
      [4, 500],
    ],
  ],
  [
    [
      "Cheesy Spinach & Bacon Frittata",
      "Cinnamon Chicken",
      "Salted Herring",
      [2, 474],
      [4, 500],
      [8, 500],
    ],
    [
      "Roasted Asparagus With Scrambled Eggs",
      "Lemon And Garlic Grilled Chicken",
      "Garlic Confit Oil with Thyme and Black Pepper ",
      [6, 474],
      [4, 500],
      [4, 500],
    ],
    [
      "Basic Omelette",
      "Cajun Spiced Pecans",
      "Roastes Lamb",
      [1, 480],
      [4, 500],
      [6, 504],
    ],
    [
      "Wild Mushroom Omelette",
      "Coconut Chicken ",
      "Air Fryer Lemon Parmesan Garlic Chicken Wings",
      [2, 468],
      [4, 500],
      [6, 504],
    ],
    [
      "Truffled omelette",
      "Kheema-Spiced Ground Beef",
      "Creamy Italian Dressing",
      [4, 468],
      [6, 504],
      [4, 500],
    ],
    [
      "Avocado Egg Cups",
      "Chia Caesar Dressing",
      "Grilled Stuffed Whole Snapper",
      [2, 480],
      [2, 500],
      [4, 500],
    ],
    [
      "Baked Eggs in Avocado Cups from Eat Drink Shine",
      "Cooked Lamb Chops Recipe",
      "Citrus Vinaigrette",
      [2, 480],
      [4, 500],
      [3, 501],
    ],
    [
      "Cheesy Spinach & Bacon Frittata",
      "Roasted Tomato Soup",
      "Roasted Lamb",
      [2, 474],
      [8, 536],
      [6, 504],
    ],
    [
      "Roasted Asparagus With Scrambled Eggs",
      "Chicken Soup",
      "Air Fryer Lemon Parmesan Garlic Chicken Wings",
      [6, 474],
      [7, 552],
      [6, 500],
    ],
    [
      "Basic Omelette",
      "Beefy Velveeta Cheese Soup",
      "Kheema-Spiced Ground Beef",
      [1, 480],
      [6, 522],
      [6, 504],
    ],
    [
      "Wild Mushroom Omelette",
      "Watercress soup shots",
      "Lemon And Garlic Grilled Chicken",
      [2, 468],
      [6, 486],
      [4, 500],
    ],
    [
      "Truffled omelette",
      "Chicken Broth",
      "Grilled Pompano",
      [4, 464],
      [4, 460],
      [4, 500],
    ],
    [
      "Avocado Egg Cups",
      "Easy Low-Carb Keto Broccoli Cheddar Soup",
      "Cajun Spiced Pecans",
      [2, 480],
      [6, 426],
      [4, 500],
    ],
    [
      "Baked Eggs in Avocado Cups from Eat Drink Shine",
      "Chicken Zoodle Soup",
      "Wisconsin Walleye Au Gratin ",
      [2, 480],
      [6, 384],
      [6, 504],
    ],
  ],
  [
    [
      "Antioxidant Pomegranate Smoothie",
      "Shepard’s Pie Soup",
      "Fettuccine with eggplant, pine nuts and basil",
      [4, 480],
      [4, 600],
      [4, 500],
    ],
    [
      "Detox Smoothie",
      "Detox Soup",
      "Asparagus and Parsley Pasta",
      [1, 470],
      [4, 580],
      [4, 500],
    ],
    [
      "Pixie's Pomegranate Porridge",
      "Thermos Noodle Soup",
      "Summer Veggie Pasta",
      [2, 470],
      [1, 585],
      [4, 500],
    ],
    [
      "Cinnamon Roll Waffles",
      "Black Bean And Pumpkin Soup",
      "Southwestern Spaghetti",
      [2, 492],
      [6, 520],
      [4, 496],
    ],
    [
      "Healthy Breakfast Smoothies",
      "Black Bean Soup",
      "Simple Tomato Pasta",
      [1, 460],
      [4, 636],
      [4, 504],
    ],
    [
      "Strawberry Banana Nice Cream Smoothie",
      "Mexican Noodle Soup",
      "Spicy Pasta with Chopped Cress",
      [2, 455],
      [4, 500],
      [4, 504],
    ],
    [
      "Healthy Breakfast Smoothies",
      "Black Bean Soup",
      "Simple Tomato Pasta",
      [2, 454],
      [2, 658],
      [4, 504],
    ],
    [
      "Mushroom Spinach Omelet",
      "Rhubarb Balsamic Reduction",
      "Grilled Stuffed Whole Snapper",
      [2, 500],
      [1, 500],
      [4, 500],
    ],
    [
      "Herb & Onion Frittata",
      "Potato Salad",
      "Fusilli with Asparagus & Sun Dried Tomato Pesto",
      [1, 370],
      [4, 504],
      [2, 500],
    ],
    [
      "Potato Basil Scramble",
      "Asparagus and Parsley Pasta",
      "Noodle Soup",
      [4, 340],
      [4, 500],
      [4, 500],
    ],
    [
      "Potato Basil Scramble",
      "Spicy Pasta with Chopped Cress",
      "Cranberry Orange Dutch Oven Crusty Bread",
      [4, 340],
      [4, 504],
      [4, 500],
    ],
    [
      "Potato Frittata With Mushroom & Spinach",
      "Simple Tomato Pasta",
      "Homemade Garlic Mashed Potatoes",
      [6, 270],
      [4, 500],
      [6, 504],
    ],
    [
      "Spring potato omelette",
      "Rhubarb Balsamic Reduction",
      "Knoephla, Potatoes and Sauerkraut",
      [4, 240],
      [1, 500],
      [6, 504],
    ],
    [
      "Florentine Omelette",
      "Potato Soup",
      "Poverty Soup",
      [6, 230],
      [4, 500],
      [1, 500],
    ],
  ],
  [
    [
      "Banana",
      "Bruschetta Linguine",
      "Pan Roasted Little Potatoes",
      [2, 474],
      [6, 504],
      [4, 500],
    ],
    [
      "Green Goddess Smoothie",
      "Ricotta and walnut pasta",
      "Orange pepper with spaghetti",
      [1, 472],
      [4, 500],
      [4, 500],
    ],
    [
      "Savory Oats",
      "Italian Onion Soup",
      "Apple & Sweet Potato Peanut Butter Dog Biscuits",
      [1, 475],
      [4, 500],
      [4, 500],
    ],
    [
      "Powerhouse Smoothie",
      "Cauliflower & macaroni cheese",
      "Pizza alla Napoletana",
      [1, 478],
      [4, 504],
      [8, 500],
    ],
    [
      "Spicy Eggs & Yams",
      "One Pot Cheesy Pumpkin Pasta ",
      "Pizza from Naples",
      [4, 468],
      [4, 500],
      [4, 500],
    ],
    [
      "Peanut Butter Banana French Toast",
      "Fettuccine Alfredo with Broccoli Casserole",
      "Baked Pasta With Sun-Dried Tomatoes and Ricotta Cheese",
      [1, 478],
      [4, 500],
      [4, 500],
    ],
    [
      "Avocado & black bean eggs",
      "Creamy Millet with Roasted Portobellos",
      "Four-cheese sweet potato gnocchi",
      [2, 468],
      [4, 500],
      [6, 504],
    ],
    [
      "Potato & chorizo breakfast hash",
      "Pan Roasted Little Potatoe",
      "Italian Onion Soup",
      [2, 550],
      [4, 500],
      [4, 500],
    ],
    [
      "Mustard Greens, Cheddar And Farm Egg Breakfast Pizza",
      "Orange pepper with spaghetti",
      "Tomato Soup with Bread",
      [3, 530],
      [4, 500],
      [4, 504],
    ],
    [
      "Cheesy Baked Egg and Bacon Boats",
      "Apple & Sweet Potato Peanut Butter Dog Biscuits",
      "Creamy Mushroom Pasta with No Canned Soup",
      [4, 560],
      [4, 500],
      [4, 508],
    ],
    [
      "Green Quinoa Bowls",
      "Pasta Shells with Spinach Filling",
      "Noodle Soup with Vegetables and Bacon",
      [4, 460],
      [4, 500],
      [4, 500],
    ],
    [
      "Spiced quinoa with almonds & feta",
      "Cauliflower & macaroni cheese",
      "Minestrone",
      [4, 450],
      [4, 500],
      [4, 512],
    ],
    [
      "Huevos Rotos",
      "Ricotta and walnut pasta",
      "Pink Potato Soup",
      [2, 444],
      [4, 500],
      [4, 512],
    ],
    [
      "Quinoa Breakfast Hash",
      "Easy Bruschetta Linguine",
      "French Onion Soup",
      [2, 424],
      [6, 504],
      [8, 488],
    ],
  ],
];
// Peanut Free
let Peanut_Free = [
  [
    [
      "Granola-Almond Pear Crunch",
      "Potato Green Bean Salad with Lemon Dill Aioli",
      "Roasted Garlic-Herb Mushrooms and Butternut Mash",
      [1, 466],
      [4, 500],
      [4, 500],
    ],
    [
      "Blackberry Chia Jam Bread",
      "Spaghetti with leeks, peas & pesto",
      "Coconut Quinoa, Sunshine and Squash Wraps",
      [1, 466],
      [2, 500],
      [2, 500],
    ],
    [
      "Blueberry Banana Oatmeal Smoothie",
      "Beans w. Rice",
      "Roasted fennel and pine nut polpette",
      [1, 466],
      [6, 500],
      [4, 500],
    ],
    [
      "Apple Oatmeal Pancakes",
      "Pan Roasted Little Potatoes",
      "Chocolate Cake",
      [4, 468],
      [4, 500],
      [12, 504],
    ],
    [
      "Citrus Oatmeal",
      "Taco Stuffed Peppers",
      "White Bean and Cabbage Soup",
      [1, 466],
      [4, 500],
      [8, 496],
    ],
    [
      "Savoury Pancakes",
      "Roasted Garlic-Herb Mushrooms and Butternut Mash",
      "Lentil Soup",
      [2, 468],
      [4, 500],
      [4, 500],
    ],
    [
      "Cranberry Strawberry Jam Bread",
      "Eggplant Lentil Moussaka",
      "Sweet Potatoes With Charred Lemons and Crunchies",
      [6, 468],
      [6, 500],
      [4, 500],
    ],
    [
      "Blueberry Banana Oatmeal Smoothie",
      "Spicy Goose Stew",
      "Chicken with Kale and Wild Mushrooms",
      [1, 466],
      [8, 500],
      [4, 500],
    ],
    [
      "Banana Split Oatmeal",
      "Steam-Roasted Carrots",
      "potatoes with mushroom ragu",
      [1, 468],
      [1, 500],
      [6, 498],
    ],
    [
      "Baked egg florentine",
      "Garlic Pasta with Roasted Cajun Cauliflower",
      "Stuffed Peppers With Couscous Grain Blend",
      [1, 468],
      [3, 500],
      [6, 500],
    ],
    [
      "Strawberry Shake",
      "Baked Acorn Squash W. Rice,Cranberry Stuffing",
      "Taco Stuffed Peppers",
      [1, 468],
      [4, 500],
      [4, 500],
    ],
    [
      "Banana Split Oatmeal",
      "Garlic Smashed Potatoes",
      "White Bean and Cabbage Soup",
      [1, 468],
      [6, 500],
      [8, 496],
    ],
    [
      "Avocado & black bean eggs",
      "Sweet Potatoes With Charred Lemons",
      "Lemon Cherry Cheesecake",
      [2, 468],
      [4, 500],
      [8, 496],
    ],
    [
      "Avocado Citrus Shake ",
      "Prawn, lime & avocado burritos",
      "Apple Cider Waffles",
      [2, 468],
      [4, 500],
      [4, 500],
    ],
  ],
  [
    [
      "Blueberry Protein Muffins",
      "Fiesta Chicken",
      "Parmesan spring chicken",
      [8, 536],
      [4, 500],
      [4, 500],
    ],
    [
      "pancakes with prawns",
      "Indian Spiced Chicken & Spinach",
      "Halibut with hazelnuts, marjoram and vermouth",
      [4, 576],
      [4, 500],
      [2, 500],
    ],
    [
      "Coronation Chicken",
      "Barbecued prawns with avocado",
      "Mayo Free Deviled Eggs",
      [2, 504],
      [6, 498],
      [12, 504],
    ],
    [
      "Protein Waffle",
      "Grilled Chipotle Lime Chicken ",
      "Sashimi of Fluke with Sweet Shrimp",
      [2, 160],
      [4, 500],
      [4, 600],
    ],
    [
      "Vanilla Whey Protein Crepes",
      "Fried Chicken Sandwich",
      "Stir Fry",
      [4, 140],
      [4, 560],
      [1, 500],
    ],
    [
      "Vegan Scrambled Eggs",
      "Basil Chicken & Dried Tomato",
      "Dry Brined Roast Turkey",
      [2, 258],
      [4, 600],
      [12, 552],
    ],
    [
      "omelette with sorrel",
      "Moroccan Fish",
      "Curry With Kale and Spinach",
      [4, 360],
      [6, 546],
      [2, 550],
    ],
    [
      "Sweet Potato Mushroom Egg White Frittata",
      "Roast Turkey with Herb Butter",
      "Chicken Posole Stew",
      [4, 164],
      [10, 600],
      [4, 548],
    ],
    [
      "Poached Cod in Spicy Sauce with Chinese Cabbage",
      "Cheesy Hasselback Chicken",
      "Crawfish Bisque",
      [4, 364],
      [4, 500],
      [6, 600],
    ],
    [
      "Peppermint Patty Shake",
      "Baked Whole Snapper",
      "Coconut Lime Chicken",
      [1, 310],
      [2, 600],
      [4, 548],
    ],
    [
      "Baked Egg",
      "Spanish Halibut",
      "Salt Encrusted Snapper",
      [6, 306],
      [2, 600],
      [2, 600],
    ],
    [
      "Blueberry Protein Muffins",
      "Crawfish Bisque",
      "Baked Chicken w. Tomatoes, Mushrooms",
      [8, 536],
      [2, 600],
      [4, 500],
    ],
    [
      "Turkey Sausage",
      "Chicken Piccata with Fried Capers ",
      "Broccoli and Chicken Rice",
      [4, 396],
      [2, 600],
      [4, 500],
    ],
    [
      "Strawberry Yogurt Smoothie",
      "Fish with Sprouts and Cilantro",
      "Spiced Chicked and Spinach Rice",
      [2, 348],
      [4, 500],
      [4, 500],
    ],
  ],
  [
    [
      "Nasi ulam",
      "Salted Herring",
      "Broiled Filet Mignon",
      [4, 524],
      [8, 496],
      [2, 500],
    ],
    [
      "Monte Cristo Casserole",
      "Rice Milk",
      "Grilled Pompano",
      [4, 500],
      [5, 500],
      [4, 500],
    ],
    [
      "Semolina Pasta Dough",
      "Maple-glazed hot wings",
      "Chicken Cordon Bleu",
      [1, 450],
      [4, 500],
      [4, 500],
    ],
    [
      "Kesra - Algerian Bread",
      "Soramame Rice",
      "Orleans Cakes",
      [4, 450],
      [4, 500],
      [6, 504],
    ],
    [
      "Berber Bread",
      "Traeger Chicken",
      "Fluffy Rice",
      [4, 432],
      [6, 500],
      [3, 546],
    ],
    [
      "White Rice",
      "Oatmeal",
      "Basil Pesto Grilled Chicken",
      [4, 352],
      [1, 600],
      [4, 552],
    ],
    [
      "Coconut Quinoa",
      "Crispy Asian-Spiced Shrimp",
      "Grilled Skirt Steak",
      [6, 300],
      [8, 592],
      [2, 548],
    ],
    [
      "Wali - Kenyan Coconut Rice",
      "Jelly (Jello) Shooters",
      "Cornbread Croutons",
      [6, 400],
      [4, 600],
      [4, 536],
    ],
    [
      "Semolina Pasta Dough",
      "Grilled Lamb Chops with Lavender Salt",
      "Coconut Rice",
      [1, 450],
      [12, 612],
      [4, 556],
    ],
    [
      "Lego Fruit Snacks",
      "Soramame Rice",
      "Roast loin of Wessex saddleback",
      [2, 108],
      [4, 400],
      [6, 612],
    ],
    [
      "Cherry Pork Chops",
      "Roasted Chicken Drumsticks",
      "High Temp Eye Of Round Roast",
      [2, 254],
      [6, 582],
      [4, 588],
    ],
    ["Keto Coffee", "Turducken", "Kalua Pork", [1, 132], [8, 496], [8, 536]],
    [
      "Rice Cream (Vegan)",
      "Crispy Korean Tofu",
      "Roast fillet of beef with shallot & mushroom sauce",
      [6, 228],
      [4, 496],
      [6, 534],
    ],
    [
      "Crispy Korean Tofu",
      "Boiled or Steamed Lobsters",
      "Roast loin of pork",
      [2, 248],
      [4, 524],
      [8, 536],
    ],
  ],
  [
    [
      "Sausage Breakfast Casserole",
      "Crispy Sardines With Lemon And Mint recipes",
      "Caramel Apple Pork Chops",
      [12, 468],
      [4, 500],
      [4, 500],
    ],
    [
      "Sweet & Spicy Bacon ",
      "Turkey-Stuffed Peppers ",
      "Bihari Kabab",
      [4, 468],
      [2, 500],
      [6, 504],
    ],
    [
      "Scotch Eggs",
      "Mayo Free Deviled Eggs ",
      "Taco Stuffed Peppers",
      [28, 468],
      [12, 504],
      [4, 500],
    ],
    [
      "Low-Carb Italian Sausage and Sweet Mini-Peppers",
      "Spicy Goose Stew",
      "Bacon Wrapped Hotdogs",
      [8, 468],
      [8, 504],
      [7, 497],
    ],
    [
      "Colorful Frittata",
      "Summer Waldorf with Yogurt-Tarragon ",
      "Barbecue Salmon and Snap Pea Slaw",
      [4, 468],
      [4, 500],
      [4, 500],
    ],
    [
      "Bacon, Chorizo & Butternut Squash Breakfast Casserole",
      "Honey Garlic Sriracha Chicken",
      "Bacon Dip",
      [4, 468],
      [6, 504],
      [4, 500],
    ],
    [
      "Hammy Breakfast Hotdish",
      "Diabetic Sugar And Spice Pecans",
      "Fiesta Chicken",
      [10, 468],
      [8, 504],
      [4, 500],
    ],
    [
      "Avocado-Kale Bento ",
      "Grilled Fingerling Potato Salad with Feta, Green Beans and Olives",
      "Almond-Crusted Chicken With Arugula Salad",
      [1, 500],
      [6, 600],
      [4, 548],
    ],
    [
      "Matzo Ball Soup",
      "Meat and Sweet Potato Casserole",
      "Barbecue Salmon and Snap Pea Slaw",
      [6, 498],
      [6, 600],
      [4, 500],
    ],
    [
      "Cheddar Ham Chowder ",
      "Coconut Lime Chicken",
      "Bihari Kabab",
      [6, 486],
      [4, 548],
      [6, 504],
    ],
    [
      "Milk Ricotta Cheese",
      "Salmon Wellington",
      "Cornbread Sausage Stuffing",
      [12, 336],
      [10, 500],
      [7, 504],
    ],
    [
      "Shrimp Bacon and Corn Chowder",
      "Chicken Thighs Herbs ",
      "Pork, apple and pecan tray stuffing",
      [5, 450],
      [5, 500],
      [8, 512],
    ],
    [
      "Hazelnut gelato with rich chocolate sauce",
      "Hot Chipped Beef Dip Appetizer",
      "Crispy Prosciutto Cups with Sausage and Apple Stuffing",
      [6, 474],
      [4, 500],
      [24, 504],
    ],
    [
      "Egg Cupcakes",
      "Chicken with Kale and Wild Mushrooms",
      "Paleo Apple Cranberry Sausage Stuffing",
      [6, 474],
      [4, 500],
      [4, 492],
    ],
  ],
  [
    [
      "Blueberry Banana Oatmeal Smoothie",
      "banana slush",
      "Coconut Quinoa, Sunshine and Squash Wraps",
      [1, 466],
      [12, 504],
      [2, 500],
    ],
    [
      "Granola-Almond Pear Crunch",
      "Masala Dosa ",
      "Rice",
      [1, 466],
      [4, 500],
      [1, 500],
    ],
    [
      "Tropical Fruit Smoothie",
      "Simple Sag Aloo",
      "Warming Autumn Soup w. Fresh and Crunchy Toppings",
      [1, 467],
      [4, 500],
      [3, 501],
    ],
    [
      "Hawaii Twist",
      "Hummus with Tahini & Spicy Chickpeas",
      "Vegan Spring Soba Noodle",
      [1, 467],
      [6, 498],
      [2, 500],
    ],
    [
      "Maple Pecan Granola",
      "Vegan chickpea tikka masala",
      "Eggplant Lentil Moussaka",
      [10, 467],
      [4, 500],
      [6, 500],
    ],
    [
      "Puckleberry Jam",
      "Bulgur Chili",
      "Rhubarb Balsamic Reduction",
      [12, 468],
      [6, 498],
      [1, 500],
    ],
    [
      "Ube (Purple Yam) Coconut Rice Balls",
      "Roasted ratatouille pasta",
      "Lemon Cherry Cheesecake",
      [4, 468],
      [2, 500],
      [8, 496],
    ],
    [
      "Pancake tacos",
      "Caipirinha and the Rise of Craft Cocktails",
      "Peppermint Patties",
      [3, 468],
      [1, 500],
      [4, 500],
    ],
    [
      "Quinoa and Hazelnut Porridge",
      "Limoncello",
      "Lentils and Rice with Caramilized Onions",
      [1, 471],
      [8, 496],
      [6, 498],
    ],
    [
      "Ricotta Citrus Pancakes and Orange Rosemary Marmalade",
      "Pomegranate Mountain Dew Jelly",
      "Roasted ratatouille pasta",
      [14, 462],
      [8, 496],
      [2, 500],
    ],
    [
      "Vegan Keto Scallion Pancakes",
      "3-Ingredient Carob Pudding",
      "Lemon Cherry Cheesecake",
      [2, 470],
      [2, 500],
      [8, 496],
    ],
    [
      "Quince Jam",
      "Glazed Sweet Potatoes With Lentils",
      "Rice",
      [8, 464],
      [4, 500],
      [1, 500],
    ],
    [
      "Samosa Pinwheels (Aloo Bhakarwadi / Spiced Potato Pinwheels)",
      "Vegetable Couscous",
      "Peppermint Patties",
      [4, 468],
      [2, 500],
      [4, 500],
    ],
    [
      "Karam Gavvalu",
      "Vegan Vanilla Cake With Whipped Coconut Cream",
      "Vegan Garlic Pasta with Roasted Cajun Cauliflower",
      [4, 472],
      [8, 500],
      [3, 501],
    ],
  ],
  [
    [
      "Pretzel Rolls",
      "Spaghetti with leeks, peas & pesto",
      "Raspberry-Almond Jelly Roll",
      [4, 468],
      [2, 500],
      [10, 500],
    ],
    [
      "Apple Oatmeal Pancakes",
      "Chocolate Fudge Cake",
      "Coconut Quinoa, Sunshine and Squash Wraps",
      [4, 468],
      [10, 500],
      [2, 500],
    ],
    [
      "Poppy Seed Loaf With Lemon Icing",
      "Potato Green Bean Salad with Lemon Dill Aioli",
      "Lightened Up Potato Salad",
      [12, 468],
      [4, 500],
      [4, 500],
    ],
    [
      "Flaky Sriracha Pancakes",
      "Vegan Spring Soba Noodle",
      "Pan Roasted Little Potatoes",
      [4, 468],
      [2, 500],
      [4, 500],
    ],
    [
      "Pumpkin Waffles With Maple-Apple Syrup",
      "Pasta salad with garlic vinaigrette",
      "Chocolate Mousse",
      [6, 468],
      [10, 500],
      [6, 500],
    ],
    [
      "Fragrant Banana Bread",
      "Pretzel Cherry Cheesecake",
      "Pan Roasted Little Potatoes",
      [8, 464],
      [12, 504],
      [4, 500],
    ],
    [
      "Citrus Oatmeal",
      "Warming Autumn Soup w. Fresh and Crunchy Toppings",
      "Ligurian apricot tart",
      [1, 466],
      [3, 501],
      [6, 498],
    ],
    [
      "Pineapple and Cheese Muffin",
      "Low-Cal Fettuccine Alfredo",
      "Roasted fennel and pine nut polpette",
      [2, 580],
      [4, 500],
      [4, 500],
    ],
    [
      "Egg Salad English-Muffin Sandwich",
      "Steam-Roasted Carrots",
      "Eggplant Lentil Moussaka",
      [1, 513],
      [1, 500],
      [6, 498],
    ],
    [
      "Baked Eggs and Spinach on Whole Wheat English Muffin",
      "Vegan Garlic Pasta with Roasted Cajun Cauliflower",
      "Onion and Cheese Quesadilla",
      [1, 376],
      [3, 501],
      [4, 500],
    ],
    [
      "Blueberry Spelt Muffin Cake Sandwiches",
      "Tortellini Marinara and Zucchini Bake",
      "Garlic Smashed Potatoes",
      [10, 270],
      [4, 500],
      [6, 498],
    ],
    [
      "Tomato Avocado English Muffin Sandwich",
      "Funchi fries",
      "Risotto with Sun-Dried Tomatoes and Mozzarella",
      [4, 232],
      [4, 500],
      [6, 498],
    ],
    [
      "Ube (Purple Yam) Coconut Rice Balls",
      "Sweet Potatoes With Charred Lemons and Crunchies",
      "Lightened Up Spring Stuffing",
      [4, 468],
      [4, 500],
      [4, 488],
    ],
    [
      "Sweet and Crunchy Quinoa Granola",
      "Paneer with curried chickpea braise",
      "Farro Stuffing with Cranberries and Walnuts",
      [8, 464],
      [4, 500],
      [4, 516],
    ],
  ],
  [
    [
      "Low-Carb Italian Sausage and Sweet Mini-Peppers",
      "Garlic Confit Oil with Thyme and Black Pepper",
      "Bihari Kabab",
      [8, 468],
      [4, 500],
      [6, 504],
    ],
    [
      "Paleo Scotch Eggs ",
      "Cajun Chicken Tacos ",
      "Bacon Dip",
      [6, 468],
      [2, 500],
      [4, 500],
    ],
    [
      "Sweet & Spicy Bacon ",
      "Diabetic Sugar And Spice Pecans ",
      "Fiesta Chicken",
      [4, 468],
      [8, 504],
      [4, 500],
    ],
    [
      "Colorful Frittata",
      "Spit Roasted Leg of Lamb",
      "Salted Herring",
      [4, 468],
      [6, 504],
      [8, 504],
    ],
    [
      "Wild Mushroom Omelette",
      "Beef and mixed sprout salad",
      "Crispy Sardines With Lemon And Mint recipes",
      [2, 468],
      [4, 500],
      [4, 500],
    ],
    [
      "Mayo Free Deviled Eggs ",
      "Air Fryer Lemon Parmesan Garlic Chicken Wings",
      "Halibut with hazelnuts, marjoram and vermouth",
      [10, 420],
      [6, 504],
      [2, 500],
    ],
    [
      "Chicharrón with Lime and Chili Salt",
      "Garlic Confit Oil with Thyme and Black Pepper",
      "Salmon en Papillote ",
      [16, 480],
      [4, 500],
      [2, 500],
    ],
    [
      "Pesto & Egg Power Bowl",
      "Cajun Chicken Tacos ",
      "Sous Vide Rack Of Lamb With Mint-Shallot Vinaigrette",
      [8, 468],
      [2, 500],
      [2, 600],
    ],
    [
      "Bacon and Egg with Cherry Tomatoes",
      "Dairy-Free Almond Cheese",
      "Almond-Crusted Chicken With Arugula Salad",
      [4, 352],
      [3, 600],
      [4, 550],
    ],
    [
      "Frisee Salad with Lardons and Poached Eggs",
      "Almond-crusted fish with saffron sauce",
      "Grilled Spiced Salmon",
      [4, 336],
      [2, 600],
      [4, 548],
    ],
    [
      "Smoked Fish Pate",
      "Sour Cream Chicken",
      "Bihari Kabab",
      [4, 468],
      [4, 500],
      [6, 504],
    ],
    [
      "Breakfast with Scrambled Eggs and Bacon, Coffee, Orange Juice and Rolls",
      "Olive-Caper Tapenade with Fresh Mint",
      "Sheet Pan Vinegar Chicken",
      [1, 468],
      [1, 668],
      [6, 504],
    ],
    [
      "Avocado Egg Cups",
      "Salted Herring",
      "Stuffed Chicken",
      [2, 480],
      [8, 504],
      [3, 504],
    ],
    [
      "Vanilla Chai Spiced Ghee",
      "Halibut with hazelnuts, marjoram and vermouth",
      "Nut-Crusted Fried Brie Bites",
      [3, 576],
      [2, 500],
      [6, 504],
    ],
  ],
  [
    [
      "Lavender And Honey Bread",
      "Fusilli alla norma with eggplant and ricotta salata",
      "Cinnamon Apple Sangria",
      [4, 468],
      [4, 500],
      [6, 498],
    ],
    [
      "Blackberry Chia Jam",
      "Sweet and Sour Chicken Stir-Fry Casserole",
      "Charred Orange Margarita",
      [1, 466],
      [6, 498],
      [4, 500],
    ],
    [
      "Puckleberry Jam",
      "White Bean Chili",
      "Pomegranate Mountain Dew Jelly",
      [12, 468],
      [4, 500],
      [8, 496],
    ],
    [
      "Oatmeal Tea Bread",
      "Rosemary & mushroom risotto",
      "banana slush",
      [4, 468],
      [4, 500],
      [12, 504],
    ],
    [
      "Passionfruit and tomato jam",
      "Bulgur Chili",
      "Pickled Garlic Scapes",
      [10, 468],
      [6, 498],
      [3, 501],
    ],
    [
      "Flaky Sriracha Pancakes",
      "Rhubarb Freezer Jam",
      "Cinnamon Lavender Kasha with Honey & Berries",
      [4, 468],
      [16, 500],
      [2, 500],
    ],
    [
      "Spiced Honey Pretzels",
      "Fusilli alla norma with eggplant and ricotta salata",
      "Cold Sesame Noodles With Kimchi",
      [4, 468],
      [4, 500],
      [2, 500],
    ],
    [
      "Quince Jam",
      "Pasta and Cottage Cheese",
      "Instant Pot Minestrone soup",
      [8, 464],
      [1, 500],
      [6, 498],
    ],
    [
      "Milk & Honey Sprouted Wheat Bread",
      "Grilled Venison and Vegetables",
      "Grilled Stuffed Whole Snapper",
      [6, 468],
      [4, 500],
      [4, 500],
    ],
    [
      "Pretzel Rolls",
      "Caipirinha and the Rise of Craft Cocktails",
      "Spicy Shrimp with Spinach and Farfalle",
      [4, 468],
      [1, 500],
      [2, 500],
    ],
    [
      "Kneip Bread",
      "Prawn Rice",
      "Homemade Garlic Mashed Potatoes",
      [12, 468],
      [2, 500],
      [6, 498],
    ],
    [
      "Yogurt with Granola and Frozen Berries",
      "Flaky Sriracha Pancakes",
      "Salsa Chicken",
      [4, 468],
      [4, 468],
      [4, 500],
    ],
    [
      "Blueberry Lemon Scones",
      "Peach Jam with Brown Sugar and Bourbon",
      "Orzo and Shrimp with Fresh Basil",
      [4, 468],
      [7, 504],
      [6, 498],
    ],
    [
      "Pixie's Pomegranate Porridge",
      "Black Bean and Corn Salsa",
      "Strawberry Banana Pineapple Bites",
      [2, 470],
      [4, 500],
      [8, 496],
    ],
  ],
  [
    [
      "Lemon Curd and Chia Seed Oatmeal ",
      "Orange pepper faces spaghetti",
      "Pan Roasted Little Potatoes ",
      [2, 468],
      [4, 500],
      [4, 500],
    ],
    [
      "Savoury Pancakes ",
      "Vegetable Couscous",
      "Jacket potatoes with pork and mushroom ragu",
      [2, 468],
      [2, 500],
      [6, 500],
    ],
    [
      "Lasagna",
      "Megadarra (Lentils and Rice with Caramilized Onions)",
      "Vegan Spring Soba Noodle",
      [8, 464],
      [6, 504],
      [2, 500],
    ],
    [
      "Savory Sausage Pancakes",
      "White Bean & Quinoa Burgers With Sumac Yogurt",
      "White Bean and Barley Soup With Tomatoes and Greens",
      [8, 464],
      [4, 500],
      [4, 500],
    ],
    [
      "Cranberry Coconut Baked Oatmeal",
      "Cheese Quesadilla ",
      "Garlic Smashed Potatoes",
      [4, 468],
      [1, 500],
      [6, 496],
    ],
    [
      "Apple Oatmeal Pancakes",
      "Mango Rice Pudding",
      "Stuffed Peppers With Couscous or Harvest Grain Blend",
      [4, 468],
      [4, 500],
      [6, 504],
    ],
    [
      "Pretzel Eggs",
      "Potato & Cabbage Stir Fry",
      "Risotto with Sun-Dried Tomatoes and Mozzarella",
      [4, 472],
      [4, 500],
      [6, 504],
    ],
    [
      "Breakfast Crisp",
      "Baked Shrimp Wontons",
      "Orange pepper faces spaghetti",
      [4, 472],
      [4, 500],
      [4, 500],
    ],
    [
      "Crispy Baked Breakfast Taquitos",
      "Chilli-bean nachos",
      "White Bean & Quinoa Burgers With Sumac Yogurt",
      [8, 464],
      [4, 500],
      [4, 500],
    ],
    [
      "Nigerian-Style Spicy Eggs & Yams",
      "Risotto with Sun-Dried Tomatoes and Mozzarella",
      "Muffaletta Sandwiches",
      [4, 464],
      [6, 504],
      [6, 504],
    ],
    [
      "Avocado & black bean eggs",
      "Garlic Frittata",
      "Sweet potato and tuna burgers",
      [2, 468],
      [6, 534],
      [4, 500],
    ],
    [
      "Balaleet",
      "Asparagus & Fontina Frittata W/Sliced Tomato & Red Onion",
      "Indian Sloppy Joe (Pav Bhaji)",
      [6, 468],
      [4, 568],
      [4, 500],
    ],
    [
      "Hemp Chocolate Smoothie with Raspberries & Pomegranates",
      "Baked Spaghetti Omelette",
      "Kitchen-Sink Soft Tacos ",
      [2, 472],
      [2, 540],
      [6, 504],
    ],
    [
      "Mango Smoothie Bowl With Pistachio and Chia Seeds",
      "Spaghetti Omelette",
      "Broccoli and Feta Omelet with toast",
      [1, 468],
      [2, 540],
      [2, 560],
    ],
  ],
];
// Lupin Free
let Lupin_Free = [
  [
    [
      "Apple Oatmeal Pancakes ",
      "Jacket potatoes with pork and mushroom",
      "Roasted Garlic-Herb Mushrooms and Butternut Mash",
      [4, 464],
      [6, 504],
      [4, 500],
    ],
    [
      "Citrus Oatmeal",
      "Potato Green Bean Salad with Lemon Dill Aioli",
      "Lemongrass Pork & Spaghetti Squash Noodle Bowl with Peanut Sauce",
      [1, 465],
      [4, 500],
      [4, 500],
    ],
    [
      "Blackberry Chia Jam",
      "Spaghetti with leeks, peas & pesto",
      "Coconut Quinoa, Sunshine and Squash Wraps",
      [1, 466],
      [2, 500],
      [2, 500],
    ],
    [
      "Granola-Almond Pear Crunch",
      "Easy Butterfinger Candy",
      "Bean Bourguignon",
      [1, 466],
      [12, 504],
      [6, 504],
    ],
    [
      "Fruit-and-Nut Peanut Butter Snack Bites",
      "Spaghetti With Leeks, Peas & Pesto",
      "Pan Roasted Little Potatoes",
      [4, 464],
      [2, 500],
      [4, 500],
    ],
    [
      "Cranberry Strawberry Jam",
      "Roasted fennel and pine nut polpette",
      "Halwa",
      [6, 468],
      [4, 500],
      [4, 500],
    ],
    [
      "Avocado Citrus Breakfast Shak",
      "Meal prep : Rice",
      "Taco Stuffed Peppers",
      [2, 466],
      [1, 500],
      [4, 500],
    ],
    [
      "Blood Orange Maple Pecan Yogurt Bowls",
      "Jacket potatoes with pork and mushroom",
      "Roasted Garlic-Herb Mushrooms and Butternut Mash",
      [2, 476],
      [6, 504],
      [4, 500],
    ],
    [
      "Fresh Summer Strawberry and Spinach Salad Smoothie",
      "Potato Green Bean Salad with Lemon Dill Aioli",
      "Lemongrass Pork & Spaghetti Noodle Bowl with Peanut Sauce",
      [2, 476],
      [4, 500],
      [4, 500],
    ],
    [
      "Bulgur wheat with carrots & hazelnuts",
      "Spaghetti with leeks, peas & pesto",
      "Bean Bourguignon",
      [10, 480],
      [2, 500],
      [6, 504],
    ],
    [
      "Chickpea and Sesame Cracker",
      "Butterfinger Candy",
      "Pan Roasted Little Potatoes",
      [4, 482],
      [12, 500],
      [4, 500],
    ],
    [
      "Yoghurt with Toasted Buckwheat, Mint, Berry + Pomegranate ",
      "Spaghetti With Leeks, Peas & Pesto",
      "Roasted fennel and pine nut polpette",
      [2, 475],
      [2, 500],
      [4, 500],
    ],
    [
      "Chickpeas and Greens",
      "Lime-Rubbed Shrimp with Avocado-Grapefruit Salad",
      "Curried Chicken And Green Beans",
      [2, 476],
      [4, 500],
      [4, 500],
    ],
    [
      "Brown Rice Bowl With Soy Sauce Marinated Tofu And A Fried Egg",
      "Meal prep: Rice",
      "Eggplant Lentil Moussaka",
      [4, 484],
      [1, 500],
      [6, 504],
    ],
  ],
  [
    [
      "Blueberry Protein Muffins",
      "Fiesta Chicken",
      "Parmesan spring chicken",
      [8, 540],
      [4, 500],
      [4, 500],
    ],
    [
      "Pancakes with prawns",
      "Halibut with hazelnuts, marjoram and vermouth",
      "Mayo Free Deviled Eggs",
      [4, 578],
      [2, 500],
      [12, 500],
    ],
    [
      "Fair Turkey Drumsticks",
      "Shredded Beef",
      "Honey-Balsamic Baked Chicken",
      [6, 521],
      [4, 500],
      [4, 500],
    ],
    [
      "Breakfast Rabbit Sausage",
      "Stir 'Fry'",
      "Cheesy Hasselback Chicken",
      [8, 504],
      [1, 500],
      [4, 500],
    ],
    [
      "Coronation Chicken",
      "Indian Spiced Chicken & Spinach",
      "Parmesan spring chicken",
      [2, 510],
      [4, 500],
      [4, 500],
    ],
    [
      "Apple and Onion Chicken",
      "Broccoli and Chicken",
      "Glazed Ham with Prunes",
      [2, 484],
      [4, 500],
      [12, 500],
    ],
    [
      "Smoothie Booster",
      "Barbecued prawns with avocado pico de gallo",
      "Spicy Sweet Bacon Chicken",
      [36, 396],
      [6, 500],
      [5, 500],
    ],
    [
      "Rabbit Breakfast Sausage",
      "Fiesta Chicken",
      "Halibut with hazelnuts, marjoram and vermouth",
      [8, 504],
      [4, 500],
      [2, 500],
    ],
    [
      "Beef Kielbasa",
      "Perfect Roast Turkey",
      "Coconut Lime Chicken",
      [26, 338],
      [8, 600],
      [4, 552],
    ],
    [
      "Blue swimmer crab omelette with sorrel",
      "Chicken Piccata with Fried Capers",
      "Irish Curry With Kale and Spinach",
      [4, 360],
      [2, 600],
      [2, 550],
    ],
    [
      "Poached Cod in Spicy Sauce with Chinese Cabbage",
      "Chicken Cordon Bleu",
      "Southern-Fried Tofu",
      [4, 364],
      [4, 600],
      [4, 552],
    ],
    [
      "Skinny Peppermint Patty Shak",
      "Basil Chicken & Sun Dried Tomato Bowl",
      "Mediterranean Artichoke Chicken with Orzo",
      [1, 312],
      [4, 600],
      [4, 552],
    ],
    [
      "Baked Egg Cups",
      "Sashimi of Fluke with Sweet Shrimp",
      "Foil Pack Halibut with Feta and Olives",
      [6, 306],
      [4, 600],
      [1, 560],
    ],
    [
      "Belgian Beef Stew With Beer",
      "Crock Pot Orange Chicken",
      "Chicken Caprese",
      [8, 304],
      [6, 600],
      [4, 548],
    ],
  ],
  [
    ["Nasi ulam", "Salted Herring", "Turducken", [4, 524], [8, 500], [8, 500]],
    [
      "Monte Cristo Breakfast Casserole",
      "Homemade Rice Milk",
      "Grilled Pompano",
      [4, 500],
      [5, 505],
      [4, 500],
    ],
    [
      "Soramame Rice",
      "Tavern Style Pot Roast",
      "Broiled Filet Mignon",
      [4, 404],
      [6, 510],
      [2, 500],
    ],
    [
      "Semolina Pasta Dough",
      "Olive Oil-Infused Vodka",
      "Chicken Cordon Bleu",
      [1, 450],
      [2, 512],
      [4, 496],
    ],
    [
      "Kesra - Algerian Bread",
      "Cherry Pork Chop",
      "Rosemary Oil",
      [4, 448],
      [4, 504],
      [16, 512],
    ],
    [
      "Berber Bread",
      "Maple-glazed hot wings",
      "Grilled Pompano",
      [4, 432],
      [4, 508],
      [4, 500],
    ],
    [
      "Soramame Rice",
      "Smothered Turkey Wings",
      "Confit De Canard",
      [4, 404],
      [6, 516],
      [10, 490],
    ],
    [
      "Basic White Rice",
      "Jelly Shooters",
      "Fluffy Rice",
      [4, 352],
      [4, 600],
      [3, 552],
    ],
    [
      "Cracklin's",
      "Jelly Shooters",
      "Traeger Chicken",
      [8, 308],
      [4, 600],
      [6, 546],
    ],
    [
      "Kenyan Coconut Rice",
      "Oatmeal - Crockpot",
      "Basil Pesto Grilled Chicken",
      [6, 396],
      [1, 600],
      [4, 552],
    ],
    [
      "Soramame Rice",
      "Crispy Asian-Spiced Shrimp",
      "Roast fillet of beef with shallot & mushroom sauce",
      [4, 404],
      [8, 590],
      [6, 534],
    ],
    [
      "Basic Glutinous Rice",
      "Kahlua Pork",
      "Roast loin of pork",
      [4, 280],
      [10, 590],
      [8, 536],
    ],
    [
      "Forbidden Black Rice",
      "Salted Herring",
      "Fluffy Rice",
      [6, 246],
      [8, 500],
      [3, 552],
    ],
    [
      "Basic White Rice",
      "Maple-glazed hot wings",
      "Grilled Pompano",
      [6, 234],
      [4, 508],
      [4, 500],
    ],
  ],
  [
    [
      "N'Oatmeal Breakfast Bowl",
      "Maryland Pumpkin Seeds",
      "Peppermint Patties",
      [2, 462],
      [6, 504],
      [4, 500],
    ],
    [
      "Apple Cinnamon Paleo Rawnola",
      "Sikil Pak",
      "Raw Avocado Kale Pesto with Zucchini Noodles",
      [4, 452],
      [3, 501],
      [4, 500],
    ],
    [
      "Breakfast Quesadilla",
      "Olive-Caper Tapenade with Fresh Mint",
      "Sichuan Chili Oil",
      [4, 428],
      [1, 500],
      [4, 496],
    ],
    [
      "Tofu",
      "Almond Cheese",
      "Vegetable Green Curry",
      [3, 351],
      [3, 200],
      [2, 560],
    ],
    [
      "Tofu Scramble + Tempeh-Bacon Breakfast Bowl",
      "Fried cauliflower, chickpea and silverbeet salad",
      "Roasted Garlic and Sriracha Hummus",
      [4, 336],
      [6, 600],
      [4, 550],
    ],
    [
      "Vegan Frittata",
      "Portobello Mushrooms, and a Basil Oven Roasted Tomato",
      "Tofu and Broccoli Green Curry",
      [2, 374],
      [4, 600],
      [4, 448],
    ],
    [
      "Apple Pecan Quinoa Bowl",
      "Mixed Salad",
      "Bok Choy Curry Indian Style",
      [12, 372],
      [4, 600],
      [4, 548],
    ],
    [
      "Avocado Citrus Shake",
      "Maryland Pumpkin Seeds",
      "Peppermint Patties",
      [2, 466],
      [6, 504],
      [2, 500],
    ],
    [
      "Peanut Butter Coco-nutty Power bites",
      "Sikil Pak",
      "Garlic Confit Oil with Thyme and Black Pepper ",
      [15, 465],
      [3, 501],
      [4, 500],
    ],
    [
      "Green Smoothie",
      "Olive-Caper Tapenade with Fresh Mint",
      "3-Ingredient Carob Pudding",
      [1, 470],
      [1, 660],
      [2, 500],
    ],
    [
      "Chocolate Peanut Butter Smoothie",
      "Raw Avocado Kale Pesto with Zucchini Noodles",
      "Creamy Italian Dressing",
      [2, 470],
      [4, 500],
      [4, 500],
    ],
    [
      "Citrus Pine Nut Butter",
      "Vanilla Maple Almond Sunbutter",
      "Maple-Apple Cider Vinaigrette ",
      [4, 472],
      [4, 500],
      [1, 500],
    ],
    [
      "Silky Smoothie - Banana/Strawberry",
      "Cucumber & Red Pepper Salad",
      "Sambazon Acai Bowl",
      [2, 466],
      [6, 504],
      [1, 500],
    ],
    [
      "Flax Granola",
      "Fried Tofu with Broccoli and Mushrooms",
      "Strawberry Fruit Vinaigrette Dressing",
      [3, 474],
      [4, 500],
      [4, 500],
    ],
  ],
  [
    [
      "Blueberry Banana Oatmeal Smoothie",
      "banana slush",
      "Coconut Quinoa, Sunshine and Squash Wraps",
      [1, 468],
      [12, 504],
      [2, 500],
    ],
    [
      "Chocolate Peanut Butter Cup Oatmeal",
      "Caipirinha Craft Cocktail",
      "Warming Autumn Soup w. Fresh and Crunchy Toppings",
      [1, 468],
      [1, 500],
      [3, 501],
    ],
    [
      "Granola-Almond Pear Crunch",
      "Garlic Confit Oil with Thyme and Black Pepper",
      "Vegan Spring Soba Noodle",
      [1, 468],
      [4, 500],
      [2, 500],
    ],
    [
      "Blackberry Chia Jam Bread",
      "Pomegranate Jelly",
      "Rice with beans",
      [1, 468],
      [8, 504],
      [1, 500],
    ],
    [
      "Flaky Sriracha Pancakes",
      "Limoncello",
      "Eggplant Lentil Moussaka",
      [4, 468],
      [8, 504],
      [6, 504],
    ],
    [
      "Tropical Fruit Smoothie with Coconut Flour",
      "Masala Dosa ",
      "Rhubarb Balsamic Reduction",
      [1, 468],
      [4, 500],
      [1, 500],
    ],
    [
      "Hawaii Twist Shake",
      "Sweet Potatoes With Lentils",
      "Lemon Cherry Cheesecake",
      [1, 468],
      [4, 500],
      [8, 504],
    ],
    [
      "Broiled Banana Bagel",
      "Zucchini Aglio et Olio",
      "Rice With Beans",
      [1, 468],
      [2, 500],
      [1, 500],
    ],
    [
      "Ricotta Citrus Pancakes and Orange Rosemary Marmalade",
      "Roasted ratatouille pasta",
      "Eggplant Lentil Moussaka",
      [4, 468],
      [2, 500],
      [6, 504],
    ],
    [
      "Waffles",
      "Sag Aloo",
      "Peppermint Patties ",
      [4, 468],
      [4, 500],
      [4, 500],
    ],
    [
      "Blueberry Banana Oatmeal Smoothie",
      "Vegan chickpea tikka masala",
      "Vegan Garlic Pasta with Roasted Cajun Cauliflower",
      [1, 468],
      [4, 500],
      [3, 501],
    ],
    [
      "Caramelized Banana Oatmeal with Pomegranate and Blueberries",
      "Bulgur Chili",
      "Sesame Noodles",
      [2, 468],
      [6, 504],
      [6, 504],
    ],
    [
      "pancake tacos",
      "Maryland Pumpkin Seeds",
      "Tabbouleh",
      [3, 468],
      [6, 504],
      [4, 500],
    ],
    [
      "Vegan Keto Scallion Pancakes",
      "Hummus with Tahini & Spicy Chickpeas ",
      "Vegetable Couscous",
      [2, 468],
      [6, 504],
      [2, 500],
    ],
  ],
  [
    [
      "Poppy Seed Loaf With Lemon Icing",
      "Potato Green Bean Salad with Lemon Dill Aioli",
      "Raspberry-Almond Jelly Roll",
      [12, 468],
      [4, 500],
      [10, 500],
    ],
    [
      "Citrus Oatmeal",
      "Spaghetti with leeks, peas & pesto",
      "Coconut Quinoa, Sunshine and Squash Wraps",
      [1, 468],
      [2, 500],
      [2, 500],
    ],
    [
      "Pretzel Rolls",
      "Butterfinger Candy ",
      "Lightened Up Potato Salad ",
      [4, 468],
      [12, 504],
      [4, 500],
    ],
    [
      "Apple Oatmeal Pancakes",
      "Chocolate Fudge Cake",
      "Pan Roasted Little Potatoes",
      [4, 468],
      [10, 500],
      [4, 500],
    ],
    [
      "Fruit-and-Nut Peanut Butter Snack Bites ",
      "Spaghetti With Leeks, Peas & Pesto",
      "Chocolate Mousse",
      [4, 468],
      [2, 500],
      [6, 504],
    ],
    [
      "Cranberry Strawberry Jam Bread",
      "Vegan Spring Soba Noodle",
      "Gajar Halwa",
      [6, 468],
      [2, 500],
      [4, 500],
    ],
    [
      "Flaky Sriracha Pancakes",
      "Gluten-Free Chocolate Cake",
      "Pretzel Cherry Cheesecake",
      [4, 468],
      [12, 504],
      [12, 504],
    ],
    [
      "Strawberry and Spinach Salad Smoothie",
      "Butterfinger Candy",
      "Butterfinger Candy",
      [2, 476],
      [12, 504],
      [4, 500],
    ],
    [
      "Poached Eggs Caprese",
      "Chocolate Fudge Cake",
      "Spaghetti with leeks, peas & pesto",
      [2, 480],
      [10, 500],
      [2, 500],
    ],
    [
      "Syllabub",
      "Fig Holiday Roll",
      "Spaghetti With Leeks, Peas & Pesto",
      [4, 480],
      [16, 496],
      [2, 500],
    ],
    [
      "Chickpea and Sesame Cracker",
      "Gluten-Free Chocolate Cake",
      "Roasted fennel and pine nut polpette",
      [4, 480],
      [12, 504],
      [4, 500],
    ],
    [
      "Orange Maple Pecan Yogurt",
      "Eggplant Lentil Moussaka",
      "Onion and Cheese Quesadilla",
      [2, 476],
      [6, 504],
      [4, 500],
    ],
    [
      "Yoghurt with Toasted Berry & Pomegranate Salad",
      "Rhubarb Balsamic Reduction",
      "Diabetic Sugar And Spice Pecans",
      [2, 476],
      [1, 500],
      [8, 504],
    ],
    [
      "Arugula Breakfast Salad with Soft Boiled Eggs",
      "Chocolate Mousse",
      "Steam-Roasted Carrots",
      [2, 484],
      [6, 504],
      [1, 500],
    ],
  ],
  [
    [
      "Low-Carb Italian Sausage and Sweet Mini-Peppers",
      "Garlic Confit Oil with Thyme and Black Pepper",
      "Bihari Kabab",
      [8, 464],
      [4, 500],
      [6, 504],
    ],
    [
      "Scotch Eggs",
      "Cajun Chicken Tacos ",
      "Bacon Dip",
      [8, 464],
      [2, 500],
      [4, 500],
    ],
    [
      "Paleo Scotch Eggs ",
      "Diabetic Sugar And Spice Pecans",
      "Fiesta Chicken",
      [6, 468],
      [8, 504],
      [4, 500],
    ],
    [
      "Sweet & Spicy Bacon ",
      "Spit Roasted Leg of Lamb",
      "Salted Herring",
      [4, 468],
      [6, 504],
      [8, 504],
    ],
    [
      "Colorful Frittata",
      "Beef and mixed sprout salad",
      "Crispy Sardines With Lemon And Mint ",
      [4, 468],
      [4, 500],
      [4, 500],
    ],
    [
      "Colorful Frittata",
      "Air Fryer Lemon Parmesan Garlic Chicken Wings",
      "Halibut with hazelnuts, marjoram and vermouth",
      [4, 468],
      [6, 504],
      [2, 500],
    ],
    [
      "Wild Mushroom Omelette",
      "Mayo Free Deviled Eggs",
      "Salmon en Papillote ",
      [2, 468],
      [12, 504],
      [2, 500],
    ],
    [
      "Quick baguettes",
      "Seared Tuna",
      "Mexican Chicken",
      [4, 512],
      [2, 500],
      [4, 500],
    ],
    [
      "Double Bacon Liver Pate",
      "Pan Vinegar Chicken",
      "Stuffed Omelette",
      [4, 500],
      [6, 504],
      [2, 500],
    ],
    [
      "Ham Roll Ups",
      "Chile Crisp-Glazed Bacon Bites",
      "Grilled Stuffed Whole Snapper",
      [10, 500],
      [10, 500],
      [4, 500],
    ],
    [
      "Keto Bagels",
      "Olive-Caper Tapenade with Fresh Mint",
      "Kentucky Farmhouse Scramble",
      [8, 536],
      [1, 667],
      [4, 500],
    ],
    [
      "Bacon Jalapenno Bread",
      "Sour Cream Chicken",
      "Omelette Wrap",
      [4, 536],
      [4, 500],
      [4, 500],
    ],
    [
      "Smoked Fish Pate",
      "Blue Lamb Chops",
      "Gluten-Free Fish Fingers",
      [4, 468],
      [4, 500],
      [4, 500],
    ],
    [
      "Paleo Bacon Jalapeño Bread",
      "Keto Meatloaf",
      "Creamy Parmesan Flans",
      [4, 536],
      [6, 504],
      [4, 500],
    ],
  ],
  [
    [
      "Passionfruit and tomato",
      "Limoncello",
      "Rhubarb Balsamic Reduction",
      [10, 470],
      [8, 500],
      [1, 500],
    ],
    [
      "Ricotta Citrus Pancakes and Orange Rosemary Marmalade",
      "Quick and Easy Rhubarb Freezer Jam",
      "Pickled Garlic Scape",
      [14, 462],
      [16, 500],
      [3, 501],
    ],
    [
      "Puckleberry Jam",
      "Instant Masala Dosa",
      "Charred Orange Margarita",
      [12, 468],
      [4, 500],
      [4, 500],
    ],
    [
      "Blackberry Chia Jam",
      "Mango Coconut Margarita",
      "Banana slush",
      [1, 450],
      [2, 500],
      [12, 500],
    ],
    [
      "Mango Pineapple Jam",
      "Chunky Black Bean and Sweet Potato Soup",
      "Banana slush",
      [10, 470],
      [4, 500],
      [1, 500],
    ],
    [
      "Flaky Sriracha Pancakes",
      "Bulgur Chili",
      "Pomegranate Mountain Dew Jelly",
      [4, 468],
      [6, 504],
      [8, 500],
    ],
    [
      "Quince Jam",
      "Sangria Lightened Up",
      "Pale Rider Cocktail",
      [8, 468],
      [4, 500],
      [2, 500],
    ],
    [
      "Blueberry Banana Pancakes",
      "Rhubarb Balsamic Reduction",
      "Miso, kale and crispy tofu soup",
      [2, 500],
      [1, 500],
      [4, 500],
    ],
    [
      "Pancake Mix",
      "Quick and Easy Rhubarb Freezer Jam",
      "Chunky Black Bean and Sweet Potato Soup",
      [4, 484],
      [16, 500],
      [4, 500],
    ],
    [
      "Ricotta Citrus Pancakes and Orange Rosemary Marmalade",
      "Limoncello",
      "Oven Roasted Vegetable & Noodle Soup",
      [14, 470],
      [8, 500],
      [8, 500],
    ],
    [
      "Flaky Sriracha Pancakes",
      "Instant Masala Dosa",
      "Mexican Noodle Soup",
      [4, 468],
      [4, 500],
      [4, 500],
    ],
    [
      "Homemade Pancake",
      "Pear-Rosemary Cocktails",
      "Roasted Peach Soup",
      [5, 460],
      [8, 500],
      [4, 500],
    ],
    [
      "Moby's Vegan Blueberry Pancakes",
      "Lemon Vodka",
      "Red Lentil Soup",
      [4, 450],
      [4, 500],
      [4, 500],
    ],
    [
      "Instant Masala Dosa",
      "Passionfruit and tomato",
      "Banana slush",
      [10, 470],
      [4, 500],
      [1, 500],
    ],
  ],
  [
    [
      "Savoury Pancakes ",
      "Orange pepper faces spaghetti",
      "Roasted Little Potatoes",
      [2, 468],
      [4, 500],
      [4, 500],
    ],
    [
      "Chocolate Peanut Butter Cup Oatmeal",
      "Chilli-bean nachos",
      "Jacket potatoes with pork and mushroom ragu",
      [1, 468],
      [4, 500],
      [6, 504],
    ],
    [
      "Lasagna",
      "Mango Rice Pudding",
      "Vegan Spring Soba Noodle",
      [8, 468],
      [4, 500],
      [2, 500],
    ],
    [
      "Lemon Curd and Chia Seed Oatmeal",
      "White Bean & Quinoa Burgers With Sumac Yogurt",
      "White Bean and Barley Soup With Tomatoes and Green",
      [4, 468],
      [4, 500],
      [4, 500],
    ],
    [
      "Savory Sausage Pancakes",
      "Cheese Quesadilla ",
      "Garlic Smashed Potatoes",
      [8, 468],
      [1, 500],
      [6, 504],
    ],
    [
      "Apple Oatmeal Pancakes",
      "Megadarra (Lentils and Rice with Caramilized Onions)",
      "Stuffed Peppers With Couscous or Harvest Grain Blend",
      [4, 468],
      [6, 504],
      [6, 504],
    ],
    [
      "Cheesy Focaccia Bread",
      "Potato & Cabbage Stir Fry",
      "Risotto with Sun-Dried Tomatoes and Mozzarella",
      [6, 474],
      [4, 500],
      [6, 504],
    ],
    [
      "Garlic Bread",
      "Baked Shrimp Wontons",
      "Jacket potatoes with pork and mushroom ragu",
      [8, 472],
      [4, 500],
      [6, 504],
    ],
    [
      "Bacon Corn Bread",
      "Vegetable Couscous",
      "Sesame Noodles",
      [6, 474],
      [2, 500],
      [6, 504],
    ],
    [
      "Baked Oatmeal",
      "Noodles",
      "Orange pepper faces spaghetti",
      [12, 468],
      [6, 504],
      [4, 500],
    ],
    [
      "Bacon, Egg And Cheese Biscuit",
      "Potato, zucchini and pesto bake",
      "Pumpkin Pasta",
      [6, 468],
      [6, 504],
      [6, 504],
    ],
    [
      "Braided Sesame Seed Bread",
      "Mango Rice Pudding",
      "Chilli-bean nachos",
      [10, 470],
      [4, 500],
      [4, 500],
    ],
    [
      "Cookies",
      "Baked Macaroni and Cheese",
      "Buckwheat Crepes",
      [5, 475],
      [8, 504],
      [1, 500],
    ],
    [
      "Lemon Curd and Chia Seed Oatmeal",
      "Chickpea burger",
      "Brussels Waffles",
      [2, 468],
      [6, 504],
      [4, 496],
    ],
  ],
];

// Fibre
// Protein
// No Sugar
// Low Carbs
// Vegan
// Vegetarian
// Keto
// Low Fat
// Balanced

// Arthritis
let Arthritis_data = [
  [
    "Strawberry-Mango-Banana Smoothie",
    "White Bean & Avocado Toast & Pear",
    "Salmon & Quinoa Bowls with Green Beans, Olives & Feta",
    [1,300],
    [1,360],
    [1,484]
  ],
  [
    "Berry Chia Pudding",
    "Chopped Veggie Grain Bowls with Turmeric Dressing",
    "Grilled Chicken with Red Pepper-Pecan Romesco Sauce",
    [1,340],
    [1,370],
    [1,430]
  ],
  [
    "Fruit smoothie with berries and nuts",
    "Black bean and sweet potato soup",
    "Kale & Avocado Salad with Blueberries & Edamame",
    [1,476],
    [1,210],
    [1,460]
  ],  [
    "Berry Chia Pudding",
    "Whole wheat pasta and steamed broccoli",
    "Spiced Grilled Chicken with Cauliflower 'Rice' Tabbouleh & Salad",
    [1,340],
    [1,190],
    [1,540]
  ],  [
    "Plain Yogurt with blueberries and chopped Walnut",
    "Chopped Veggie Grain Bowls with Turmeric Dressing",
    "Sheet-Pan Balsamic-Parmesan Roasted Chickpeas & Vegetables",
    [1,280],
    [1,370],
    [1,500]
  ],  [
    "Strawberry-Mango-Banana Smoothie",
    "Mixed Greens with Lentils & Sliced Apple",
    "Strawberry Chicken Salad with Mint & Goat Cheese",
    [1,300],
    [1,350],
    [1,440]
  ],  [
    "Scrambled eggs with grilled vegetables and whole-grain toast",
    "Vegetarian chilli with beans, vegetables, and whole-grain cornbread",
    "Southwestern Cauliflower Rice Bowls with Shrimp & Avocado Crema",
    [1,215],
    [1,335],
    [1,400]
  ],
  [
    "Overnight oats with seeds-berries mix, and almond milk",
    "Chickpea and vegetable curry with brown rice",
    "Salmon & Quinoa Bowls with Green Beans, Olives & Feta",
    [1,450],
    [2,670],
    [1,484]
  ],
  [
    "Whole grain toast with scrambled eggs",
    "Whole wheat pita with hummus, veggies, and grilled chicken",
    "Sheet-Pan Balsamic-Parmesan Roasted Chickpeas & Vegetables",
    [2,540],
    [2,450],
    [1,500]
  ],
  [
    "Greek yoghourt with seeds and fruit & nut mix",
    "Quinoa and vegetable stir-fry",
    "Spiced Grilled Chicken with Cauliflower 'Rice' Tabbouleh & Salad",
    [2,398],
    [1,290],
    [1,540]
  ]
]
// Diabetes
let Diabetes_data = [
  [
    "Oatmeal with Plum and chopped Walnut",
    "Chipotle Ranch Egg Salad Wraps and Hummus",
    "One-Pot Garlicky Shrimp & Spinach & Whole-Wheat Couscous",
    [1,300],
    [1,446],
    [1,450]
  ],
  [
    "Bagel Avocado Toast Alomg with Orange and Pistachio",
    "Zucchini Noodles with Quick Turkey Bolognese & Baguette",
    "Lentil & Roasted Vegetable Salad with Green Goddess Dressing",
    [1,320],
    [1,360],
    [2,477]
  ],
  [
    "Yogurt with Blueberries & Honey and Muesli",
    "Veggie & Hummus Sandwich with plum",
    "Chicken Sausage and Peppers",
    [1,305],
    [2,550],
    [1,446]
  ],[
    "Oatmeal with Plum and chopped Walnut",
    "Zucchini Noodles with Quick Turkey Bolognese & Baguette",
    "Smoky Maple-Mustard Salmon and Green Beans",
    [1,300],
    [1,360],
    [1,480]
  ],  [
    "Plain Yogurt with blueberries and chopped Walnut",
    "Chopped Veggie Grain Bowls with Turmeric Dressing",
    "Sheet-Pan Balsamic-Parmesan Roasted Chickpeas & Vegetables",
    [1,280],
    [1,370],
    [1,500]
  ],  [
    "Everything Bagel Avocado Toast with yogurt and blueberries",
    "Mixed Greens with Lentils & Sliced Apple",
    "Pork Paprikash with Cauliflower Rice & whole wheat Baguette",
    [1,370],
    [1,350],
    [1,470]
  ],  [
    "Scrambled eggs with grilled vegetables and whole-grain toast",
    "Vegetarian chilli with beans, vegetables, and whole-grain cornbread",
    "Southwestern Cauliflower Rice Bowls with Shrimp & Avocado Crema",
    [1,215],
    [1,335],
    [1,400]
  ],
  [
    "Yogurt with Blueberries & Honey",
    "Veggie & Hummus Sandwich with plum",
    "Roast Chicken with Parmesan-Herb Sauce",
    [1,310],
    [2,550],
    [1,490]
  ],
  [
    "Whole grain toast with scrambled eggs",
    "Whole wheat pita with hummus, veggies, and grilled chicken",
    "Sheet-Pan Balsamic-Parmesan Roasted Chickpeas & Vegetables",
    [2,540],
    [2,450],
    [1,500]
  ],
  [
    "Spinach & Egg Scramble with Raspberries with Orange",
    "Green Salad with Pita Bread & Hummus",
    "Mushroom-Sauced Pork with easy Brown Rice and Steamed Bean",
    [2,360],
    [1,370],
    [1,490]
  ]
]
// Hypertension 
let Hypertension_data = [
  [
      "Hot Rolled Oats",
      "Hummus & Veggie Sandwich on whole grain toast",
      "Lentils w. Diced Carrots",
      [2,300],
      [3,540],
      [3,450]
  ],
  [
      "Greek Yogurt w. Granola",
      "Whole Grain Vegetable Toast Sandwich",
      "Tortillas w. Guacamole",
      [3,360],
      [3,540],
      [3,480]
  ],
  [
      "Mutigrain Waffles",
      "Sliced Chicken & Vegetables",
      "Whole Grain Pasta w. Garlic",
      [2,280],
      [3,570],
      [3,480]
  ],
  [
      "Multigrain Toast w. Avacado",
      "Pasta & Sliced Veggies",
      "Quinoa w. Dried Cranberries",
      [2,300],
      [3,480],
      [3,570]
  ],
  [
      "Millet Dosa",
      "Vegetable Stir Fry w. Sesame Oil",
      "Monkfish & Brown Rice",
      [3,420],
      [3,510],
      [3,600]
  ],
  [
      "Whole Wheat Bagel",
      "Hummus Plate w. cucumber",
      "Roasted Salmon",
      [2,350],
      [3,480],
      [3,570]
  ],
  [
      "Oatmeal without Salt",
      "Whole Wheat Roll & Spinach Salad",
      "whole-grain spaghetti ",
      [2,300],
      [3,570],
      [4,600]
  ],
  [
      "Avacado Toast",
      "lentil kebabs w. bell pepper & onion",
      "whole-grain tortilla",
      [3,360],
      [3,540],
      [3,480]
  ],
  [
      "Tuna Salad on Crackers",
      "Scrambled tofu ",
      "cauliflower rice bowl w. olive oil",
      [3,360],
      [4,520],
      [3,540]
  ],
  [
      "mixed fruit such as melon & grapes",
      "Spinach and egg white crepes",
      "Stir-fried chicken",
      [3,300],
      [4,600],
      [3,585]
  ],
]
// Cholestrol
let LowerCholestrol_data =[
  [
      "Peanut Butter Toast",
      "Veggie & Hummus Sandwich",
      "Sheet-Pan Salmon w. Sweet potatoes & Broccolli",
      [3,300],
      [4,600],
      [2,500]
  ],
  [
      "Cinnamon-Roll Overnight Oats",
      "Sweet Potato,Kale & Chicken Salad with Peanut Dressing",
      "Stuffed Sweet Potato w. Hummus Dressing",
      [2,300],
      [2,430],
      [2,470]
  ],
  [
      "Plain Greek Yogurt",
      "Toastie Quesadillas w. Avacado Salsa",
      "Turkey & Sweet Potato Chili",
      [3,450],
      [2,400],
      [2,450]
  ],
  [
      "Apple & Peanut Butter Toast",
      "Wholemeal Pita w. cooked Vegetables",
      "Skillet Lemon Chicken & Potatoes w. Kale",
      [3,450],
      [2,500],
      [2,400]
  ],
  [
      "Cinnamon-Roll Overnight Oats",
      "Honey Walnut Shrimp",
      "Slow-Cooker Mediterranean Diet Stew",
      [2,300],
      [2,450],
      [3,600]
  ],
  [
      "Chia & Oat Pudding",
      "Blackened Fish Tacos",
      "Sheet-Pan Balsamic-Parmesan Roasted Chickpeas & Vegetables",
      [3,300],
      [2,600],
      [2,500]
  ],
  [
      "Homemade Baked Beans",
      "Spiced Pumkin,Lentil & Tofu Salad",
      "Chicken & Chickpea Curry",
      [2,380],
      [4,600],
      [3,450]
  ],
  [
      "Cooked Mushrooms & Tomato on Wholegrain Toast",
      "Wholemeal Pita w. cooked Vegetables",
      "Lemmon-Garlic Dump Chicken w. Broccoli",
      [3,300],
      [2,500],
      [3,540]
  ],
  [
      "Porridge Topped w. Plain Yogurt",
      "Spinach & Feta Turkey Meatballs w. Herbed Quinoa",
      "Chopped Power Salad w. Creamy Cilantro Dressing",
      [2,300],
      [4,600],
      [4,600]
  ],
  [
      "Bircher Muesli Topped w. Nuts",
      "Baked Frittata w. Butternut Squash,Kale & Sage",
      "Hummus-Crusted Chicken",
      [2,400],
      [2,500],
      [3,540]
  ],
]
// Heart 
let Heart_data = [
  [
    "Avocado-Egg Toast",
    "Loaded Black Bean Nacho Soup",
    "Seared Salmon with Green Peppercorn Sauce with steamed green beans",
    [1,270],
    [1,350],
    [1,460]
  ],
  [
    "Bran Cereal with fat-free milk & blueberries",
    "Mixed vegetable pulao with Raita",
    "Charred Shrimp, Pesto & Quinoa Bowls",
    [1,265],
    [1,310],
    [1,430]
  ],
  [
    "Yogurt with Blueberries, Almonds & Honey",
    "Spinach & Strawberry Meal-Prep Salad", 
    "Curried Sweet Potato & Peanut Soup",
    [1,300],
    [1,375],
    [1,420]
  ],[
    "Sprouted grain bread topped with mashed Avocado", 
    "Lentil Soup with Green salad with pumpkin seeds, feta cheese, cherry tomatoes", 
    "Cod with Tomato Cream Sauce with brown rice amd steamed broccoli",
    [2,410],
    [1,342],
    [1,430]
  ], 
  [
    "Oats with fat-free milk and raspberries",
    "Grilled shrimp and pineapple kabobs with Green Salad", 
    "Cauliflower Chicken Fried Rice",
    [1,335],
    [1,360],
    [1,300]
  ],  [
    "Oats with almond butter, chia seeds, cashew milk, golden raisins, and mixed berries", 
    "Tuna, White Bean & Dill Salad",
    "Toaster-Oven Tostadas",
    [1,250],
    [1,300],
    [1,460]
  ],  [
    "Egg Omelet made with sautéed peppers, kale, and onions with sliced avocado and berries", 
    "Tuna, White Bean & Dill Salad with toasted whole wheat bread",
    "Skillet Lemon Chicken & Potatoes with Kale",
    [1,340],
    [1,370],
    [1,375]
  ],
  [
    "Oatmeal with chopped fruits and nuts",
    "Mixed vegetable pulao with Raita",
    "Baked chicken breast with butternut squash and asparagus",
    [1,340],
    [1,310],
    [1,370]
  ],
  [
    "Greek yogurt with berries and a sprinkle of flaxseeds",
    "Brown rice with spinach and mushroom curry",
    "Black bean burgers with cucumber & red onion salad & potato wedges",
    [1,350],
    [1,420],
    [2,400]
  ],
  [
    "Whole grain upma with vegetables",
    "Quinoa and vegetable stir-fry",
    "Salmon with pesto served with broccoli and roasted sweet potatoes",
    [2,210],
    [1,240],
    [2,504]
  ],
]



let day_mapping = {
  0: "Monday",
  1: "Tuesday",
  2: "Wednesday",
  3: "Thursday",
  4: "Friday",
  5: "Saturday",
  6: "Sunday",
};
let food_entries = [];
let calories_allowed_global = 0;
function capitalizeFirstLetter(str) {
  if (str && typeof str === "string") {
    return str.charAt(0).toUpperCase() + str.slice(1);
  } else {
    return str;
  }
}
function showPlan(e) {
  let Age = document.getElementById("age").value;
  let Height = document.getElementById("Height").value;
  let Weight = document.getElementById("Weight").value;
  let Gender = document.getElementById("gender").value;
  let Exercise = document.getElementById("exercise-intensity").value;
  let BMR = 0;
  if (Gender == 0) {
    BMR = 10 * Weight + 6.25 * Height - 5 * Age + 5;
  } else {
    BMR = 10 * Weight + 6.25 * Height - 5 * Age - 161;
  }
  let ideal_calorie_intake = 0;
  if (Exercise == 0) {
    ideal_calorie_intake = BMR * 1.2;
  } else if (Exercise == 1) {
    ideal_calorie_intake = BMR * 1.375;
  } else if (Exercise == 2) {
    ideal_calorie_intake = BMR * 1.55;
  } else if (Exercise == 3) {
    ideal_calorie_intake = BMR * 1.725;
  } else {
    ideal_calorie_intake = BMR * 1.9;
  }
  calories_allowed_global = Number(ideal_calorie_intake.toFixed(2));
  let height2 = Height / 100;
  let bmi_c = document.querySelector(".BMI-content");
  let bmr_c = document.querySelector(".BMR-content");
  let calorie_c = document.querySelector(".calorie-content");

  bmi_c.innerText = "Your Body Mass Index Is : " + (Weight / (height2 * height2)).toFixed(2);
  bmr_c.innerText = "Your Basal Metabolic Rate Is : " + BMR.toFixed(2);
  calorie_c.innerText = "Your Calorie Intake Is : " + ideal_calorie_intake.toFixed(2);
  e.preventDefault();
  let selected_article = [];
  let Preferencediet = document.getElementById("dietPreference").value;
  let targetDietDatabase;

  if(Preferencediet==0){
    let targetRandomNumber = Math.floor(Math.random()*6)
    if(targetRandomNumber == 0){
      targetDietDatabase = Gluten_Free
    }else if(targetRandomNumber == 1){
      targetDietDatabase = Dairy_Free
    }else if(targetRandomNumber == 2){
      targetDietDatabase = Wheat_Free
    }else if(targetRandomNumber == 3){
      targetDietDatabase = ImmunoSupportive
    }else if(targetRandomNumber ==4){
      targetDietDatabase = Peanut_Free
    }else{
      targetDietDatabase = Lupin_Free
    }
  }else if(Preferencediet==1){
    targetDietDatabase = Gluten_Free
  }else if(Preferencediet==2){
    targetDietDatabase = Dairy_Free
  }else if(Preferencediet==3){
    targetDietDatabase = Wheat_Free
  }else if(Preferencediet==4){
    targetDietDatabase = ImmunoSupportive
  }else if(Preferencediet==5){
    targetDietDatabase = Peanut_Free
  }else if(Preferencediet==6){
    targetDietDatabase = Lupin_Free
  }else{
    let dis_selected = document.getElementById('select_disease').value;
    if(dis_selected==0){
      targetDietDatabase = Hypertension_data
    }else if(dis_selected==1){
      targetDietDatabase = Heart_data
    }else if(dis_selected==2){
      targetDietDatabase = Arthritis_data
    }else if(dis_selected==3){
      targetDietDatabase = Diabetes_data
    }else if(dis_selected==4){
      targetDietDatabase = LowerCholestrol_data
    }
  }
  let Typediet = document.getElementById("dietType").value;
  if(Typediet != 9)
  {
    selected_article = targetDietDatabase[Typediet]
  }
  else{
    selected_article = targetDietDatabase
  }
  let random_number = Math.floor(Math.random() * (selected_article.length));

  let tableContainer = document.getElementById("tableContainer");
  document.querySelector(".health-report").classList.remove("d-none");

  let first_random_split = [0.25,0.5,0.25]
  let second_random_split = [0.4,0.30,0.30]
  let third_random_split = [0.3,0.40,0.30]
  let fourth_random_split = [0.3,0.3,0.4]
  console.log(selected_article)
  let tableHTML = "";
  tableHTML += "<table>";
  tableHTML += "<tr><th>Day</th><th>Breakfast</th><th>Lunch</th><th>Dinner</th></tr>";

  for (var i = 0; i < 7; i++) 
  {
    let random_split_selector = Math.floor(Math.random()*4)
    let target_split = first_random_split;
    if(random_split_selector == 1)
    {
      target_split = second_random_split
    }else if(random_split_selector == 2){
      target_split = third_random_split
    }else if(random_split_selector == 3){
      target_split = fourth_random_split
    }

    let breakfast_split = target_split[0]
    let lunch_split = target_split[1]
    let dinner_split = target_split[2]

    let breakfast_calorie = Math.round(calories_allowed_global * breakfast_split)
    let lunch_calorie = Math.round(calories_allowed_global * lunch_split)
    let dinner_calorie = Math.round(calories_allowed_global*dinner_split)
    
    let breakfast_string = selected_article[(random_number+i)% selected_article.length][0] 
    let lunch_string = selected_article[(random_number+i)% selected_article.length][1]
    let dinner_string = selected_article[(random_number+i)% selected_article.length][2]
  
    let breakfast_serving = breakfast_calorie/((selected_article[(random_number+i)% selected_article.length][3][1])/(selected_article[(random_number+i)% selected_article.length][3][0]))
    let lunch_serving = lunch_calorie/((selected_article[(random_number+i)% selected_article.length][4][1])/(selected_article[(random_number+i)% selected_article.length][4][0]))
    let dinner_serving = dinner_calorie/((selected_article[(random_number+i)% selected_article.length][5][1])/(selected_article[(random_number+i)% selected_article.length][5][0]))

    breakfast_serving = roundToNearestHalf(breakfast_serving)
    lunch_serving = roundToNearestHalf(lunch_serving)
    dinner_serving = roundToNearestHalf(dinner_serving)

    let breakfast_serving_string = breakfast_serving.toString()
    let lunch_serving_string = lunch_serving.toString()
    let dinner_serving_string = dinner_serving.toString()

    breakfast_serving_string = capitalizeFirstLetters(breakfast_serving_string) + " Serving"
    lunch_serving_string = capitalizeFirstLetters(lunch_serving_string) + " Serving"
    dinner_serving_string = capitalizeFirstLetters(dinner_serving_string) + " Serving"

    let breakfast_calorie_string = breakfast_calorie.toString()
    let lunch_calorie_string = lunch_calorie.toString()
    let dinner_calorie_string = dinner_calorie.toString()

    breakfast_calorie_string = breakfast_calorie_string + " Calories"
    lunch_calorie_string = lunch_calorie_string + " Calories"
    dinner_calorie_string = dinner_calorie_string + " Calories"

    breakfast_string = breakfast_string + "<br> " +breakfast_serving_string + "<br>" +breakfast_calorie_string
    lunch_string = lunch_string + "<br>" + lunch_serving_string + "<br>" +lunch_calorie_string
    dinner_string = dinner_string + "<br>" + dinner_serving_string + "<br>" + dinner_calorie_string

    tableHTML += "<tr class='table-row'>";
    tableHTML += "<td>" + day_mapping[i] + "</td>";
    tableHTML += "<td>" + breakfast_string + "</td>";
    tableHTML += "<td>" + lunch_string + "</td>";
    tableHTML += "<td>" + dinner_string + "</td>";
    tableHTML += "</tr>";
  }

  tableHTML += "</table>";
  tableHTML += "<h2 class='diet-warning'>Disclaimer : <span class = 'disclaimer'> The provided diet plan is for educational purposes only and is not intended to replace professional medical advice. It is recommended to consult with a qualified healthcare provider or a registered dietitian before implementing any dietary changes or starting a new diet plan. Individual nutritional needs may vary, and a healthcare professional can provide personalized guidance based on specific health conditions and goals.</span></h2>"
  tableContainer.innerHTML = tableHTML;

  const section1 = document.querySelectorAll(".table-row");
            console.log(section1)
            let len = section1.length;
            const observer = new IntersectionObserver((entries, observer) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting) {
                  section1.forEach((sect)=>{
                    animateElement(sect);
                  })
                  observer.unobserve(entry.target);
                }
              });
            });
            for(let i=0;i<len;i++) {
                if(i%2==1)
                {
                    section1[i].classList.add('odd')
                }
                else{
                    section1[i].classList.add('even')
                }
                observer.observe(section1[i]);   
            }
            // Function to animate the element based on its ID
            function animateElement(element) {
              const elementClasses = element.classList;
              if (elementClasses.contains("odd")) {
                element.style.animation = "fadeInLeft 2s ease-in-out forwards";
              } 
              else if (elementClasses.contains("even")) {
                element.style.animation = "fadeInRight 2s ease-in-out forwards";
              }
        
            }
  tableContainer.scrollIntoView({ behavior: "smooth" });
  document.querySelector(".important-tips").classList.remove("d-none");
  document.querySelector(".serving-info").classList.remove("d-none");
  document.querySelector("#tableContainer").classList.remove("d-none");
  let tempdiv = document.querySelector(".calorie-count");
  let hori = document.createElement("hr");
  let bo = document.querySelector("body");
  bo.insertBefore(hori, tempdiv);
  document.querySelector(".calorie-count").classList.remove("d-none");
  return true;
}
function replaceSpacesWithPlus(str) {
  // Remove leading and trailing spaces
  let trimmedStr = str.trim();
  // Replace spaces between words with '+'
  return trimmedStr.replace(/\s+/g, '+');
}
function showfood() {
  let unsplash_link = "https://source.unsplash.com/1600x1000/?";
  let pixaby_link = "https://pixabay.com/api/?key=43264731-9e21b94e1ec8dc5ad26e92d74&q="
  let food_item = document.querySelector(".searched-food").value;
  let name = document.querySelector("#fi-name-val");
  let calorie = document.querySelector("#fi-calorie-val");
  let fat = document.querySelector("#fi-fat-val");
  let sugar = document.querySelector("#fi-sugar-val");
  let carb = document.querySelector("#fi-carb-val");
  let protein = document.querySelector("#fi-protein-val");
  let cholestrol = document.querySelector("#fi-chol-val");
  let sodium = document.querySelector("#fi-sodi-val");
  let fibres = document.querySelector('#fi-fibre-val')
  let potassium = document.querySelector("#fi-pota-val");
  let sfats = document.querySelector("#fi-sfats-val");
  let image = document.querySelector(".food-item-pic");
  let query2 = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=813a735f77e04e1888c984bd559f471a&query='
  let query22 = pixaby_link + replaceSpacesWithPlus(food_item)
  let image_source ;
  query2=query2+food_item;
  fetch(query2).then((data)=>{
    return data.json();
  }).then((data)=>{
    console.log(data)
    if(data.results.length>0)
    {
      let length_of_result = (data.results).length;
      let rndom_result =Math.floor(Math.random()*length_of_result);
      let results = data.results;
      image_source  = results[rndom_result].image;
      console.log(image_source)
      image.src = image_source;
    }
    else
    {
      image_source =unsplash_link + food_item;
      image.src = image_source;
    }
})
  

  // Searching food
  let query = food_item;
  if (food_item != "") {
    $.ajax({
      method: "GET",
      url: "https://api.calorieninjas.com/v1/nutrition?query=" + query,
      headers: { "X-Api-Key": "atnurNQGjxIy9KZ1IPNdOQ==TpqC0uCTajAya62Y" },
      contentType: "application/json",
      success: function (result) {
        if (result.items.length > 0) {
          document
            .querySelector(".display-food-item")
            .classList.remove("d-none");
          document.querySelector(".item-not-found").classList.add("d-none");
          let found = result.items;
          name.innerText = capitalizeFirstLetter(found[0].name);
          calorie.innerText = found[0].calories;
          fat.innerText = found[0].fat_total_g;
          sugar.innerText = found[0].sugar_g;
          carb.innerText = found[0].carbohydrates_total_g;
          protein.innerText = found[0].protein_g;
          cholestrol.innerText = found[0].cholesterol_mg;
          sodium.innerText = found[0].sodium_mg;
          potassium.innerText = found[0].potassium_mg;
          fibres.innerText = found[0].fiber_g;
          sfats.innerText = found[0].fat_saturated_g
        } else if (result.items.length == 0) {
          document.querySelector(".display-food-item").classList.add("d-none");
          document.querySelector(".item-not-found").classList.remove("d-none");
          document.querySelector(
            "#not-found-span"
          ).innerText = `"${food_item}"`;
        }
      },
      error: function ajaxError(jqXHR) {
        console.error("Error: ", jqXHR.responseText);
      },
    });
  }
}
function check() {
  let food_item = document.querySelector(".searched-food").value;
  if (food_item == "") {
    document.querySelector(".display-food-item").classList.add("d-none");
    document.querySelector(".item-not-found").classList.add("d-none");
  }
}

// Adding Food
let table_calorie_header =
  '<div class="food-item-box"><p class="h-sfi-sno">S.No</p><p class="h-sfi-name">Food-Item</p><p class="h-sfi-image">Food-Image</p><p class="h-sfi-input">Serving (1 Serve = 100g)</p><p class="h-sfi-calorie">Calories</p>';
function add() {
  let obje1 = {
    food_item: capitalizeFirstLetter(
      document.querySelector(".searched-food").value
    ),
    food_image:document.querySelector(".food-item-pic").src,
    calories: document.querySelector("#fi-calorie-val").innerText,
    sugar: document.querySelector("#fi-sugar-val").innerText,
    fat: document.querySelector("#fi-fat-val").innerText,
    carbs: document.querySelector("#fi-carb-val").innerText,
    protein : document.querySelector("#fi-protein-val").innerText,
    fibre : document.querySelector("#fi-fibre-val").innerText,
    cholestrol :document.querySelector("#fi-chol-val").innerText,
    sodium : document.querySelector("#fi-sodi-val").innerText,
    potassium : document.querySelector("#fi-pota-val").innerText,
    sfats :document.querySelector("#fi-sfats-val").innerText,
  };
  food_entries.push(obje1);
  let base_height = 215;
  let addition_height = 15;
  let toheight = 0;
  if(food_entries.length > 0)
  {
    let main_box = document.querySelector(".calorie-count");
    stringheight = (base_height + addition_height*(food_entries.length)).toString()
    stringheight = stringheight+"vh";
    main_box.style.height = stringheight;
  }
  
  
  // outerbox
  let box = document.createElement("div");
  box.classList.add("food-item-box");
  if (food_entries.length == 1) {
    document.querySelector(".selected-food-item").innerHTML =
      table_calorie_header;
    document.querySelector(".selected-food-item").classList.remove("d-none");
  }
  // Sno
  let serial_number = document.createElement("p");
  serial_number.classList.add("sfi-sno");
  serial_number.innerText = food_entries.length;

  // Name
  let food_item_name = document.createElement("p");
  food_item_name.classList.add("sfi-name");
  food_item_name.innerText = obje1.food_item;

  // Image
  let image_container = document.createElement("div");
  image_container.classList.add("fbi-img-container");
  let image = document.createElement("img");
  image.src = obje1.food_image;
  image.classList.add("sfi-image");

  image_container.appendChild(image);

  // Input
  let input = document.createElement("input");
  input.classList.add("sfi-serving");
  input.setAttribute("type", "Number");
  input.setAttribute("id", food_entries.length);
  input.addEventListener("change", () => {
    let inp_id = input.getAttribute("id");
    let new_id = "calorie" + inp_id;
    let dis = document.getElementById(new_id);
    dis.innerText = Number(
      ((input.value * food_entries[inp_id - 1].calories)).toFixed(2)
    );
    let total_calorie = 0;
    let calorie_array = document.querySelectorAll(".sfi-calorie");
    calorie_array.forEach((ca) => {
      total_calorie = total_calorie + Number(ca.innerText);
    });
    let total_fat = 0;
    let total_sugar = 0;
    let total_carbs = 0;
    let total_protein = 0;
    let total_fibre = 0;
    let total_cholestrol = 0;
    let total_sodium = 0;
    let total_potassium = 0;
    let total_sfats =0;
    let input_array = document.querySelectorAll(".sfi-serving");
    for (let i = 0; i < input_array.length; i++) {
      let tfat = (
        (input_array[i].value * Number(food_entries[i].fat))
      ).toFixed(2);
      total_fat = total_fat + Number(tfat);

      let tsugar = (
        (input_array[i].value * Number(food_entries[i].sugar)) 
      ).toFixed(2);
      total_sugar = total_sugar + Number(tsugar);

      let tcarb = (
        (input_array[i].value * Number(food_entries[i].carbs)) 
        
      ).toFixed(2);
      total_carbs = total_carbs + Number(tcarb);

      let tprotein = (
        (input_array[i].value * Number(food_entries[i].protein)) 
        
      ).toFixed(2);
      total_protein = total_protein + Number(tprotein);

      let tfibre = (
        (input_array[i].value * Number(food_entries[i].fibre)) 
        
      ).toFixed(2);
      total_fibre = total_fibre + Number(tfibre);

      let tcholes = (
        (input_array[i].value * Number(food_entries[i].cholestrol)) 
        
      ).toFixed(2);
      total_cholestrol = total_cholestrol + Number(tcholes);

      let tsodium = (
        (input_array[i].value * Number(food_entries[i].sodium)) 
        
      ).toFixed(2);
      total_sodium = total_sodium + Number(tsodium);

      let tsfats = (
        (input_array[i].value * Number(food_entries[i].sfats)) 
        
      ).toFixed(2);
      total_sfats = total_sfats + Number(tsfats)

      let tpota = (
        (input_array[i].value * Number(food_entries[i].potassium)) 
        
      ).toFixed(2);
      total_potassium = total_potassium + Number(tpota);
    }
    let calories_left = calories_allowed_global - total_calorie;
    document.querySelector(".nutrition-summary").classList.remove("d-none");
    document.querySelector(
      ".calories-consumed"
    ).innerText = `Calories Consumed `;
    document.querySelector(
      ".calories-consumed-2"
    ).innerText = `: ${total_calorie.toFixed(2)} cal`;
    if (Number(calories_allowed_global) > 0) {
      document.querySelector(
        ".calories-allowed"
      ).innerText = `Permissible Calorie Intake`;
      document.querySelector(
        ".calories-allowed-2"
      ).innerText = `: ${calories_allowed_global} cal`;

      document.querySelector(
        ".calories-left"
      ).innerText = `Calories Left `;
      document.querySelector(
        ".calories-left-2"
      ).innerText = `: ${calories_left.toFixed(2)} cal`;
    }

    document.querySelector(
      ".fats-consumed"
    ).innerText = `Fats Consumed (g) `;
    document.querySelector(
      ".fats-consumed-2"
    ).innerText = `: ${total_fat.toFixed(2)} g`;

    document.querySelector(
      ".sugar-consumed"
    ).innerText = `Sugar Consumed (g)`;
    document.querySelector(
      ".sugar-consumed-2"
    ).innerText = `: ${total_sugar.toFixed(2)} g`;

    document.querySelector(
      ".carbs-consumed"
    ).innerText = `Carbohydrates Consumed (g)`;
    document.querySelector(
      ".carbs-consumed-2"
    ).innerText = `: ${total_carbs.toFixed(2)} g`;

    document.querySelector(
      ".protein-consumed"
    ).innerText = `Protein Consumed (g)`;
    document.querySelector(
      ".protein-consumed-2"
    ).innerText = `: ${total_protein.toFixed(2)} g`;

    document.querySelector(
      ".fibre-consumed"
    ).innerText = `Fibre Consumed (g)`;
    document.querySelector(
      ".fibre-consumed-2"
    ).innerText = `: ${total_fibre.toFixed(2)} g`;

    document.querySelector(
      ".sfats-consumed"
    ).innerText = `Saturated Fats Consumed (g)`;
    document.querySelector(
      ".sfats-consumed-2"
    ).innerText = `: ${total_sfats.toFixed(2)} g`;

    document.querySelector(
      ".chols-consumed"
    ).innerText = `Cholestrol Consumed (mg)`;
    document.querySelector(
      ".chols-consumed-2"
    ).innerText = `: ${total_cholestrol.toFixed(2)} mg`;

    document.querySelector(
      ".sodi-consumed"
    ).innerText = `Sodium Consumed (mg)`;
    document.querySelector(
      ".sodi-consumed-2"
    ).innerText = `: ${total_sodium.toFixed(2)} mg`;

    document.querySelector(
      ".poti-consumed"
    ).innerText = `Potassium Consumed (mg)`;
    document.querySelector(
      ".poti-consumed-2"
    ).innerText = `: ${total_potassium.toFixed(2)} mg`;

    let color_code="";
    let number2 = Number(total_calorie.toFixed(2));
    let number1 = Number(calories_allowed_global.toFixed(2));
    console.log(number1)
    if (number1>0) {
      if (number1 - number2 > 1500) {
        document.querySelector(".mm-msg").innerText =
          "You Have Shown A Good Control....Keep It Up 🤩";
          color_code = "rgb(16, 202, 103)";
      } 
      else if (number1 - number2 > 600) {
        document.querySelector(".mm-msg").innerText =
          "You Have Eaten More Than Half Of Your Prescribed Calories 😄";
          color_code = "rgb(125, 203, 51)";
      } 
      else if (number1 - number2 > 100) {
        document.querySelector(".mm-msg").innerText =
          "You Have Alomst Reached The Limit.....Eat Light Food In Case Of Hunger 😐";
          color_code = "rgb(181, 217, 21)";
      } 
      else if (number1 - number2 > -300) {
        document.querySelector(".mm-msg").innerText =
          "You Have Cross The Limit.....You Need To Stop Now 🤐";
          color_code = "rgb(217, 139, 21)";
      } 
      else {
        document.querySelector(".mm-msg").innerText =
          "You Have Eaten Over 300 Extra Calories ....You Need To Control 😔";
          color_code = "rgb(217, 34, 21)";
      }
      document.querySelector('.mm-msg').style.color = color_code;
      document.querySelector('.mm-msg').classList.remove('d-none');
    }
  });



  // Calorie
  let calorie = document.createElement("p");
  calorie.classList.add("sfi-calorie");
  calorie.setAttribute("id", `calorie${food_entries.length}`);
  box.appendChild(serial_number);
  box.appendChild(food_item_name);
  box.appendChild(image_container);
  box.appendChild(input);
  box.appendChild(calorie);
  document.querySelector(".selected-food-item").appendChild(box);
}
const firebaseConfig = {
  apiKey: "AIzaSyDlyUeeNCRwhdkqRv3dfC6kmspEy-1ZDYA",
  authDomain: "nutrithrive-database.firebaseapp.com",
  databaseURL: "https://nutrithrive-database-default-rtdb.firebaseio.com",
  projectId: "nutrithrive-database",
  storageBucket: "nutrithrive-database.appspot.com",
  messagingSenderId: "638478447610",
  appId: "1:638478447610:web:7221f45861a807d83a2a43"
};
firebase.initializeApp(firebaseConfig);
let database = firebase.database();
function putdata(){
  let username = localStorage.getItem("user_name");
  console.log(username);
  const usersRef = database.ref("users");
  usersRef.child(username).once("value").then((snapshot) => {
      let data = snapshot.val();
      if(data["dob"])
      {
          let date1 = data["dob"];
          let date2 = new Date().toLocaleDateString()
          document.getElementById('age').value= Number(calculateAge(date1,date2))
      }
      if(data["height"])
      {
          document.getElementById('Height').value  = data["height"] 
      }
      if(data["gender"])
      {
        let gen = data["gender"]
        if(String(gen)=='Male')
        {

          document.querySelector('#gender').value = '0'
          console.log(document.getElementById('gender').value)
        }
        else{
          document.getElementById('gender').value = '1'
        }
          
      }

      if(data["weight"])
      {
        document.getElementById('Weight').value  = data["weight"] 
      }
  })
}
document.addEventListener("DOMContentLoaded", function () {
  const section1 = document.querySelector(".animated-cartoon");
  // const section2 = document.querySelectorAll(".wwb-desc")[0];
  // const section3 = document.querySelectorAll(".wwb-desc")[1];
  // const sec3 = document.querySelectorAll(".f-card");
  // const sec4 = document.querySelector(".pcard33");
  // const sec5 = document.querySelector(".h-r-are-you")
  // const sec6 = document.querySelector(".h-r-ready")
  // const sec7 = document.querySelector(".h-r-your-limit")
  // const sec8 = document.querySelector(".h-r-push")
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
  
        animateElement(entry.target);
        observer.unobserve(entry.target);
      }
    });
  });
  observer.observe(section1);
  // Function to animate the element based on its ID
  function animateElement(element) {
    const elementClasses = element.classList;
    if (elementClasses.contains("animated-cartoon")) {
      element.style.animation = "SlideInRight 2s ease-in-out forwards";
    } 
  }
});
putdata()

function switchoffon(select_element){
  let selectedValue = select_element.value;
  if(selectedValue==0)
  {
    document.getElementById('dietPreference').disabled = false;
    document.getElementById('dietPreference').value = ""

    document.getElementById('dietType').disabled = false;
    document.getElementById('dietType').value = "";

    document.getElementById('select_disease').disabled = true;
    document.getElementById('select_disease').value = "5"
  }
  else{
    document.getElementById('select_disease').disabled = false;
    document.getElementById('select_disease').value = "";

    document.getElementById('dietPreference').disabled = true;
    document.getElementById('dietPreference').value = "7";

    document.getElementById('dietType').disabled = true;
    document.getElementById('dietType').value = "9";
  }
}
const hamburgerIcon = document.getElementById('hamburger-icon');
const sidebar = document.getElementById('sidebar');

hamburgerIcon.addEventListener('click', () => {
    sidebar.classList.toggle('show');
});