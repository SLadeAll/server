class Person
{
	constructor(name,lastName,bornDate,gender){
		this.name = name;
		this.lastName = lastName;
		this.bornDate = bornDate;
		this.gender = gender;
	}
	getAge()
	{
		var dif = (Date.now() - this.bornDate) / 1000;
		dif = dif/ (24 * 60 * 60); // dias

		return Math.round(dif/(365));


	}
	getPrettyDate()
	{
		var d = this.bornDate.getDate()+'/'+
		this.bornDate.getMonth()+'/'+
		this.bornDate.getFullYear();
		return d;
	}
	isAdult()
	{
		if(this.getAge()>=18)
		{
			return true;
		}
		return false;
	}
	saludo(){
		console.log("Hi, my name is "+this.name+this.lastName+" and I am "+this.getAge()+ " years old");
	}
}
export default Person;
