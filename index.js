var array= [
	{
		"id": "0001",
		"type": "donut",
		"name": "Cake",
		"ppu":0.78,
		"batters":
			{
				"batter":
					[
						{ "id": "1001", "type": "Regular" },
						{ "id": "1002", "type": "Chocolate" },
						{ "id": "1003", "type": "Blueberry" },
						{ "id": "1004", "type": "Devil's Food" }
					]
			},
		"topping":
			[
				{ "id": "5001", "type": "None" },
				{ "id": "5002", "type": "Glazed" },
				{ "id": "5005", "type": "Sugar" },
				{ "id": "5007", "type": "Powdered Sugar" },
				{ "id": "5006", "type": "Chocolate with Sprinkles" },
				{ "id": "5003", "type": "Chocolate" },
				{ "id": "5004", "type": "Maple" }
			]
	},
	{
		"id": "0002",
		"type": "donut",
		"name": "Raised",
		"ppu": 0.55,
		"batters":
			{
				"batter":
					[
						{ "id": "1001", "type": "Regular" }
					]
			},
		"topping":
			[
				{ "id": "5001", "type": "None" },
				{ "id": "5002", "type": "Glazed" },
				{ "id": "5005", "type": "Sugar" },
				{ "id": "5003", "type": "Chocolate" },
				{ "id": "5004", "type": "Maple" }
			]
	},
	{
		"id": "0003",
		"type": "donut",
		"name": "Old Fashioned",
		"ppu":0.26,
		"batters":
			{
				"batter":
					[
						{ "id": "1001", "type": "Regular" },
						{ "id": "1002", "type": "Chocolate" }
					]
			},
		"topping":
			[
				{ "id": "5001", "type": "None" },
				{ "id": "5002", "type": "Glazed" },
				{ "id": "5003", "type": "Chocolate" },
				{ "id": "5004", "type": "Maple" }
			]
	}
]

var array1= new Array();

function f1(){
	for(let i=0; i<array.length;i++){
	for(let j=0; j<array[1].topping.length;j++){
array1.push(array[1].topping[j].type);
	}
}
return array1;
};
f1();
console.log(array1);


var array2 =new Array();
function f2(){
	for(let i=0; i<array.length;i++){
		for(let j=0; j<array[i].batters.batter.length;j++){
	array2.push(array[i].batters.batter[j].type);
	}
}
return array2;
};
f2();
console.log(array2);


var ave=0;
var sum=0;
function f3(){
	for(let i=0;i<array.length;i++){
sum+=array[i].ppu; 
ave=sum/array.length;
	}
	return ave;
};
f3();
console.log(ave);

var sum=0;
function f4(){
	for(i=0;i<array.length;i++){
sum+=array[i].ppu; 
	}
	return sum;
};
f4();
console.log(sum);

var array3=new Array();
function f5(){
	for(let i=0;i<array.length;i++){
		if(array[i]!=array[i].topping||array[i].batters){
			array3.push(array[i].id);}
		
		         for(let j=0;j<array[i].topping.length;j++){
		            	array3.push(array[i].topping[j].id);}
		
	              	for(let j=0;j<array[i].batters.batter.length;j++){
		            	array3.push(array[i].batters.batter[j].id);}
	     
	}
	return array3;
};
f5();
console.log(array3);