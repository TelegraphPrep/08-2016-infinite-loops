
## Git Workflow

**Fork the Repository**

1. On Github's website, navigate to the [Higher Order Functions Repository.](https://github.com/TelegraphPrep/higherOrderFunctions)
2. Click the "Fork" button near the top right part of the screen.
3. In the popup box, select your Github profile to copy the repository from the TelegraphPrep Github profile to your profile.

**Clone the Repository**

4. Once the repository is on your Github profile, navigate to your fork of that repository on Github's website.  
5. Click the "Copy to clipboard" button to copy the Git link for the repository.  
6. In your terminal, navigate to the folder you want to copy the repository into.  
7. In your terminal, type git clone [pasteTheLinkYouJustCopiedHere] then hit enter to clone the repository from Github to your local machine.  

**Open the Repository on Your Local Machine**

In your terminal, navigate to the repository.
View the location of that repository in your finder by typing open . into the terminal.  
To open the repository in Sublime, drag the repository folder over the Sublime icon in your Dock (at the bottom of the screen). All of the files within the repository should now be viewable in the sidebar in Sublime.

**More information on [Git Workflow](https://github.com/TelegraphPrep/PrepPlus-Wiki/blob/master/gitWorkflow.md)

## Pair Programming Dynamics
See the following document on [Pairing Dynamics Workflow](https://github.com/TelegraphPrep/PrepPlus-Wiki)

## About the Sprint

### Goals:  
1. Expand understanding of how scope works when using functions within functions.
2. Practice passing anonymous functions as callback functions.

## Lesson: Higher Order Functions

```javascript

var loop = function(collection, callback){
    // ultimate side-effects function
    for (var i = 0; i < collection.length; i++){
      callback(collection[i]);
    }
};

```

### countVowels:
`countVowels` takes one string as an argument and returns the number of vowels in the string.
* [ ] instead of writing your own `for` loop, use `loop` to complete countVowels.

```javascript

// Example:
var numberOfVowels = countVowels('hey whats up');
console.log(numberOfVowels); // 4

```

### stringReversal
`stringReversal` takes a string and returns it in reverse.
* [ ] use `loop` to complete stringReversal.  

```javascript

// Example:
    var olleh = stringReversal('hello');
    console.log(olleh) // 'olleh';
    
```


### isPalindrome
A palindrome is a word that is spelled the exact same way forward than it is backward.`isPalindrome` takes one string as an argument and returns `true` if the string is a palindrome and `false` if the string is not a palindrome.

* [ ] use `loop` to complete `isPalindrome`.  

```javascript

// Example:
  var truePalindrome = isPalindrome('hannah');
  var falsePalindrome = isPalindrome('hello');
  
```



### largestNumber
  `largestNumber` takes one argument, an array of numbers, and returns the largest number in that array.

* [ ] use `loop` to complete `largestNumber`.  

```javascript

// Example:
  var nums = [1, 21, 471, 470, 39, 10, 92];
  var largestNum = largestNumber(nums);
  console.log(largestNum) // 471
  
```


### multBy

`multBy` takes two arguments, an array and a number, and multiplies each value in the array by the input number.

* [ ] use `_.map` to complete `multBy`.

```javascript

  // Example:
  var nums = [1, 2, 3, 4, 5];
  var newArray = prep.multBy(nums, 3);
  console.log(newArray) // [3, 6, 9, 12, 15];
  
```

### squareBy

  `squareBy` takes two arguments, an array and a number, and squares each value in the array by the input number.

* [ ] use _.map to complete `squareBy`.

```javascript

  // Example:
  var nums = [1, 2, 3, 4, 5];
  var newArray = prep.squareBy(nums, 3);
  console.log(newArray) // [1, 8, 27, 256, 3125];
  
```

### capitalizeFirstLetters

  `capitalizeFirstLetters` takes a string as an argument and returns the same string with all of the first letters capitalized.

* [ ] use loop to complete `capitalizeFirstLetters`

```javascript

// Example:
  var string = 'hey how are you?';

  var newString = capitalizeFirstLetters(string)
  console.log(newString) // 'Hey How Are You?';
  
```

## Expanding `Loop` to be used with objects:

Our current `loop` function only works with `Arrays`, and `Objects` are feeling left out. They have their own for-in loop that they'd like to stop using as well. Let's expand the purpose of our `loop` by adding in conditions that separate the functionality based on whether our input is an `object` or an `array`.

Remember the function we built during the week one self assessment? We can use it here as well:

```javascript

var loop = function(collection, callback){

  if (Array.isArray(collection)){
    for (var i = 0; i < collection.length; i++){
      callback(collection[i]);
    }
  } else if (typeof collection === 'object'){
    for (var key in collection){
      callback(collection[key]);
    }
  }
};


```

By just adding 4 lines of code, we can loop through `objects` as well! Solve the next 2 challenges using our new and improved loop function.



### collectValues
    `collectValues` takes an object as an argument and returns an array containing all of its values.

```javascript

// Example:

var obj = {name: 'Albrey', favoriteMovie: 'Inception'};

var listOfvalues = collectionValues(obj);

console.log(listOfValues) // ['Albrey', 'Inception'];

```

### containsValue

`containsValue` takes two arguments, an object and a target value. If the object contains the target value, `containsValue` returns `true`; if not, `containsValue` returns `false`.


```javascript

// Example:

var obj = {name: 'Albrey', favoriteMovie: 'Inception'};

var targetTest = containsValue(obj, 'Albrey');

console.log(targetTest) // true

```


## Expanding our callback:

Okay, so we know now that we can run our loop function on an `object` or an `array` which is awesome, but we're still selling ourselves short here. You have probably noticed already -- the functions we have built are working with the **values** of both objects and arrays, but rarely (especially with objects), will that be the only data we care about.

For example, what if I wanted to collect data at *only* every even index. With a for-loop, that would look like this:

```javascript

var evenIndexArray = function(arr){
  var results = [];
  // making sure our loop stops at the middle index in the array.
  for (var i = 0; i <= arr.length / 2; i++){
    // push each item
    result.push(arr[i]);
  };

  return results;
};

```

Attempting to use `loop` it would look like this:

```javascript

var evenIndexArray = function(arr){
  var results = [];
  // we don't have access to the index, so we create a count to substitue
  var count = 0;
  loop(arr, function(val){
    // if the count is equal to zero, it's considered even.
    if (count === 0){
      result.push(val);
      // add 1 to the count
      count++
    // if the count is divisible by 2, it's even.
    } else if (count % 2 === 0){
      result.push(val);
      // add 1 to the count
      count++
    }
  });

  return results;
};

```

As you can see, That's a lot of extra functionality to add in! Our current `loop` function loses its advantage over the `for loop` because it hasn't been given access to the `index` corresponding with each `value` inside of our array. With a little bit of magic we change that.

Inside of our `loop`, lets pass an additional argument to our `callback` function: an index.


```javascript

var loop = function(collection, func){

  if (Array.isArray(collection)){
    for (var i = 0; i < collection.length; i++){
      // passing the index as a second argument to our callback
      callback(collection[i], i);
    }
  } else if (typeof collection === 'object'){
    for (var key in collection){
      // passing the key as a second argument
      callback(collection[key], key);
    }
  }
};

```

Passing in the index/key allows **any** callback that we pass into `loop` access to the index/key corresponding
to the current value that we're looping through! Pretty cool right? How would that change how we build evenIndexArray?

```javascript

var evenIndexArray = function(arr){
  var results = [];
  // no need for count since we have access to the indexes;
  loop(arr, function(value, index){
    // accessing the index that's being passed as the second argument to our callback
    if (index === 0){
      results.push(value)
    } else if (index % 2 === 0){
      results.push(value);
    }
  });

  return results
};

```

Cool! So we got rid of the count all together, which makes this a much more efficient function. This also changes how we can interact with `objects`, rarely we're going to be worried about
**just** the values. In the next handful of exercises you will need to access the value
and the index/key in order to solve the prompts.



### copyObj
`copyObj` takes one argument, an object, and returns a copy of that object.

* [ ] Use `loop` to create a copy of the input object.

```javascript

    // Example:

    var obj = {name: 'Albrey', favoriteMovie: 'Inception'};

    var copyOfObj = copyObj(obj);

    console.log(copyOfObj) // {name: 'Albrey', favoriteMovie: 'Inception'};

```

### extendObj

`extendObj` takes two objects as arguments and uses loop to extend obj1 with the contents of obj2


```javascript

  // Example:

  var objOne = {name: 'Albrey', favoriteMovie: 'Inception'};
  var objTwo = {favoriteColor: 'Blue', hungry: true}

  extendObj(objOne, objTwo);

  console.log(objOne) // {name: 'Albrey', favoriteMovie: 'Inception', favoriteColor: 'Blue', hungry: true};

```


### swapShuffle

`swapShuffle` takes one argument, an array, and mutates the array (it does not make a new one) and returns it with shuffled values.


```javascript

  // Example:
    var numbers = [1, 2, 3, 4, 5];
    swapShuffle(numbers);
    console.log(numbers) //[3, 4, 2, 1, 5];
```


## CarFax.com Sprint

My friend is looking to buy a car this month and is excited to search CarFax.com. Unfortunately their search form is broken, and he has employed you to fix it for him so he can get on the road as soon as possible. Use your `loop` function to solve the next set of prompts. We have created a list of cars for you `sampleCarList` that should should investigate before starting. Each car object has corresponding properties that you will need to sift through to get what you want. Good luck!


```javascript

var sampleCarList = helpers.carFactory(helpers.carDatabase, helpers.carMaker, 100);
console.dir(sampleCarList);

```


### findBlueCars
`findBlueCars` takes a `carList array` and returns an `array` containing each car object who's color is blue.
  * [ ] create an array, `allBlueCars`, to store your cars in.
  * [ ] use loop to loop through your `carList` array
  * [ ] each car is an object, so you'll want to loop through the objects as well
  * [ ] use a conditional to check whether the property is 'color', and the value is 'blue'
  * [ ] if so, push your corresponding car to the `allBlueCars` array.
  * [ ] when you're finished looping through, return the `allBlueCars` list.

### findCarsByColor:
Let's expand our findBlueCars function to create an array of car objects whose color corresponds to what the user passes in.

  * [ ] add a second parameter, `color`, to your `findBlueCars` function
  * [ ] change your internal functionality to look for the color that the user specifies.

You'll notice that there aren't any directions for the next couple of exercises. We helped with the first 2 but it's your job to figure out how to build these out!

### findCarsByYear:

`findCarsByYear` takes 2 parameters: `carList` and `year` and returns a collection of cars objects that were made in that year.

### findCarsBetweenYears:
`findCarsBetweenYears` takes 3 parameters: `carList`, `startYear`, and `endYear` and returns a collection of cars objects that were made between those years.

### findCarsByMake:
`findCarsByMake` takes 2 parameters: `carList` and `make` and returns a collection of car objects that have that make.

### findCarsByMakeAndModel:
`findCarsByMakeAndModel` takes 3 parameters: `carList`, `make`, and `model` and returns a collection of car objects that have that make and model.

## EXTRA CREDIT:

### Random Price Generator
`randomPriceGenerator` extends each `car object` to have a 'price' property with the value set to a random number between 15000 and 50000.

  ```
  // Example:
  var carCollection = [{color: "black", make: "Ford", model:"Everest", year:1994}]
  randomPriceGenerator(carCollection);
  console.log(carCollection);

  // [{color: "black", make: "Ford", model:"Everest", year:1994, price: 27847}];
  ```
Create another function, `findByPrice` that takes a `price` parameter and a `list of cars` and returns a list of every car that falls under that price. If no cars fall under the price return "there are no cars below the price you entered."

  ```javascript
  
  // Example:  
  var carCollection = [{color: "black", make: "Ford", model:"Everest", year:1994, price: 27847}];
  console.log(findByPrice(28000, carCollection);
  // [{color: "black", make: "Ford", model:"Everest", year:1994, price: 27847}];
  
  ```

Extend your findByPrice function to take two parameters, a `lowEndPrice` and a `highEndPrice` and returns a list of cars that are between the two prices.

### VerySpecificSearch

VerySpecificSearch allows the user to search using every specification: make, model, color, year, and between two prices. It returns a list containing each car that fulfills these VerySpecificSearch results. If there are no cars that fit the search terms, return "there are no cars that fit what you're looking for, try cars.com".

## EXTRA EXTRA CREDIT:
If there aren't any cars that fit the search term return "there are no cars that fit what you're looking for" and redirect their browser to Cars.com.
