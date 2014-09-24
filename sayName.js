//Create a Person constructor that accepts name and age as parameters and sets those properties accordingly in the Constructor.

var Person = function(name, age) {
	this.name = name;
	this.age = age;
}


//Now create three instances of Person with data you make up

var kelsey = new Person("Kelsey", 24);
var logan = new Person("Logan", 23);
var chase = new Person("Chase", 21);


//Now add a sayName method on your Person class that will alert the name of whatever Person instance called it.

Person.prototype.sayName = function(){
	alert("Hello " + this.name);
}

  //code here
