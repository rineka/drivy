'use strict';

//list of cars
//useful for ALL exercises
var cars = [{
  'id': 'p306',
  'vehicule': 'peugeot 306',
  'pricePerDay': 20,
  'pricePerKm': 0.10
}, {
  'id': 'rr-sport',
  'pricePerDay': 60,
  'pricePerKm': 0.30
}, {
  'id': 'p-boxster',
  'pricePerDay': 100,
  'pricePerKm': 0.45
}];

//list of rentals
//useful for ALL exercises
//The `price` is updated from exercice 1
//The `commission` is updated from exercice 3
//The `options` is useful from exercice 4
var rentals = [{
  'id': '1-pb-92',
  'driver': {
    'firstName': 'Paul',
    'lastName': 'Bismuth'
  },
  'carId': 'p306',
  'pickupDate': '2016-01-02',
  'returnDate': '2016-01-02',
  'distance': 100,
  'options': {
    'deductibleReduction': false
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}, {
  'id': '2-rs-92',
  'driver': {
    'firstName': 'Rebecca',
    'lastName': 'Solanas'
  },
  'carId': 'rr-sport',
  'pickupDate': '2016-01-05',
  'returnDate': '2016-01-09',
  'distance': 300,
  'options': {
    'deductibleReduction': true
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}, {
  'id': '3-sa-92',
  'driver': {
    'firstName': ' Sami',
    'lastName': 'Ameziane'
  },
  'carId': 'p-boxster',
  'pickupDate': '2015-12-01',
  'returnDate': '2015-12-15',
  'distance': 1000,
  'options': {
    'deductibleReduction': true
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}];

function ChangePrice()
{
	for (var i=0;i<rentals.length;i++)
	{
		var returnDateTemp=new Date(rentals[i].returnDate);
		var pickupDateTemp=new Date(rentals[i].pickupDate);
		var timeDiff = Math.abs(returnDateTemp.getTime() - pickupDateTemp.getTime());
		var day=Math.ceil(timeDiff / (1000 * 3600 * 24))+1;
		var timeComponent;
		var distanceComponent;
		for (var j=0;j<cars.length;j++)
		{
			if(rentals[i].carId==cars[j].id)
			{
				timeComponent=day*cars[j].pricePerDay;
				distanceComponent=rentals[i].distance*cars[j].pricePerKm;
			}
		}
		rentals[i].price=timeComponent+distanceComponent;
		console.log("price ",rentals[i].id," : ", rentals[i].price);
	}
}

function ChangePricePerDay()
{
	for (var i=0;i<rentals.length;i++)
	{
		var returnDateTemp=new Date(rentals[i].returnDate);
		var pickupDateTemp=new Date(rentals[i].pickupDate);
		var timeDiff = Math.abs(returnDateTemp.getTime() - pickupDateTemp.getTime());
		var day=Math.ceil(timeDiff / (1000 * 3600 * 24))+1;
		var timeComponent;
		var distanceComponent;
		for (var j=0;j<cars.length;j++)
		{
			if(rentals[i].carId==cars[j].id)
			{			
				timeComponent=day*cars[j].pricePerDay;
				if((day>1)&&(day<5))
				{
					timeComponent=day*cars[j].pricePerDay*0.9;
				}
				if((day>4)&&(day<11))
				{
					timeComponent=day*cars[j].pricePerDay*0.7;
				}
				if(day>10)
				{
					timeComponent=day*cars[j].pricePerDay*0.5;
				}
				distanceComponent=rentals[i].distance*cars[j].pricePerKm;
			}
		}
		rentals[i].price=timeComponent+distanceComponent;
		console.log("price ",rentals[i].id," : ", rentals[i].price);
	}
}

function ChangePriceCommission()
{
	for (var i=0;i<rentals.length;i++)
	{
		var returnDateTemp=new Date(rentals[i].returnDate);
		var pickupDateTemp=new Date(rentals[i].pickupDate);
		var timeDiff = Math.abs(returnDateTemp.getTime() - pickupDateTemp.getTime());
		var day=Math.ceil(timeDiff / (1000 * 3600 * 24))+1;
		var timeComponent;
		var distanceComponent;
		for (var j=0;j<cars.length;j++)
		{
			if(rentals[i].carId==cars[j].id)
			{			
				timeComponent=day*cars[j].pricePerDay;
				if((day>1)&&(day<5))
				{
					timeComponent=day*cars[j].pricePerDay*0.9;
				}
				if((day>4)&&(day<11))
				{
					timeComponent=day*cars[j].pricePerDay*0.7;
				}
				if(day>10)
				{
					timeComponent=day*cars[j].pricePerDay*0.5;
				}
				distanceComponent=rentals[i].distance*cars[j].pricePerKm;
			}
		}
		rentals[i].price=timeComponent+distanceComponent;
		//console.log("price ",rentals[i].id," : ", rentals[i].price);
		var commission = rentals[i].price*0.3;
		rentals[i].commission.insurance=commission*0.5;
		rentals[i].commission.assistance=day;
		rentals[i].commission.drivy=commission-rentals[i].commission.insurance-rentals[i].commission.assistance;
		console.log("commission : ", commission);
		console.log("insurance : ",rentals[i].commission.insurance);
		console.log("assistance : ",rentals[i].commission.assistance);
		console.log("drivy : ",rentals[i].commission.drivy);
	}
}

function ChangePriceOption()
{
	for (var i=0;i<rentals.length;i++)
	{
		var returnDateTemp=new Date(rentals[i].returnDate);
		var pickupDateTemp=new Date(rentals[i].pickupDate);
		var timeDiff = Math.abs(returnDateTemp.getTime() - pickupDateTemp.getTime());
		var day=Math.ceil(timeDiff / (1000 * 3600 * 24))+1;
		var timeComponent;
		var distanceComponent;
		for (var j=0;j<cars.length;j++)
		{
			if(rentals[i].carId==cars[j].id)
			{			
				timeComponent=day*cars[j].pricePerDay;
				if((day>1)&&(day<5))
				{
					timeComponent=day*cars[j].pricePerDay*0.9;
				}
				if((day>4)&&(day<11))
				{
					timeComponent=day*cars[j].pricePerDay*0.7;
				}
				if(day>10)
				{
					timeComponent=day*cars[j].pricePerDay*0.5;
				}
				distanceComponent=rentals[i].distance*cars[j].pricePerKm;
			}
		}
		rentals[i].price=timeComponent+distanceComponent;
		
		var commission = rentals[i].price*0.3;
		rentals[i].commission.insurance=commission*0.5;
		rentals[i].commission.assistance=day;
		rentals[i].commission.drivy=commission-rentals[i].commission.insurance-rentals[i].commission.assistance;
		if(rentals[i].options.deductibleReduction)
		{
			rentals[i].commission.drivy+=4*day;
			rentals[i].price+=4*day;
		}
		console.log("price ",rentals[i].id," : ", rentals[i].price);
		console.log("commission : ", commission);
		console.log("insurance : ",rentals[i].commission.insurance);
		console.log("assistance : ",rentals[i].commission.assistance);
		console.log("drivy : ",rentals[i].commission.drivy);
	}
}


//list of actors for payment
//useful from exercise 5
var actors = [{
  'rentalId': '1-pb-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}, {
  'rentalId': '2-rs-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}, {
  'rentalId': '3-sa-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}];

//list of rental modifcation
//useful for exercise 6
var rentalModifications = [{
  'rentalId': '1-pb-92',
  'returnDate': '2016-01-04',
  'distance': 150
}, {
  'rentalId': '3-sa-92',
  'pickupDate': '2015-12-05'
}];
console.log("ex1");
ChangePrice();
console.log("ex2");
ChangePricePerDay();
console.log("exo3");
ChangePriceCommission();
console.log("exo4");
ChangePriceOption();
console.log(cars);
console.log(rentals);
console.log(actors);
console.log(rentalModifications);
