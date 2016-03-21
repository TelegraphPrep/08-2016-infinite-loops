(function(){


window.helpers = {};


helpers.carMaker = function(year, make, model, color){
  return {
    yeah: year,
    make: make,
    model: model,
    color: color,
  }
};


helpers.carDatabase = { 
  years: [1991, 1992, 1993, 1994,1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
  makes: ['Toyota', 'Ford', 'BMW', 'Nissan'],
  makeAndModel: {
    Toyota: {
      models: ['Camry', 'Corolla', 'Prius', 'Rav4']
    }, 
    Ford: {
      models: ['Fiesta', 'Focus', 'Everest', 'Mustang']
    },
    
    BMW: {
      models: ['M3', '3 Series', '4 Series', '6 Series']
    },
    Nissan: {
      models: ['Altima', 'Pathfinder', 'Leaf', 'Juke']
    }
  },
  colors: ['blue', 'red', 'black', 'white', 'silver', 'champagne'],
};


helpers.carFactory = function(carDatabase, carMaker, numberOfCars){
  var cars = [];
  for (var i = 0; i <= numberOfCars; i++){
    var randomYear = carDatabase.years[Math.floor(Math.random() * carDatabase.years.length)]
    var randomColor = carDatabase.colors[Math.floor(Math.random() * carDatabase.colors.length)];
    var randomMake = carDatabase.makes[Math.floor(Math.random() * carDatabase.makes.length)];
    var randomModel = carDatabase.makeAndModel[randomMake] ? carDatabase.makeAndModel[randomMake]['models'][Math.floor(Math.random() * carDatabase.makeAndModel[randomMake]['models'].length)] : alert("make does not exist in database");
    cars.push(carMaker(randomYear, randomMake, randomModel, randomColor));
  }


  return cars;
};

})()