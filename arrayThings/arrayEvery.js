const every = (array, func) =>{
	let check = true
	for(let i = 0;i < array.length;i++){
		if(!func(array[i])){
			check = false
		}
	}
	return check
}

const some = (array, func) =>{
	let check = false
	for(let i = 0;i < array.length;i++){
		if(func(array[i])){
			check = true
			break
		}
	}
	return check
}

const none = (array, func) =>{
	let check = true
	for(let i = 0;i < array.length;i++){
		if(func(array[i])){
			check = false
			break
		}
	}
	return check
}

const testArray = [1,2,3,4,5,6,7,8,9,10]

var result = none([1, 2, 3], function(element) {
  return element % 2 === 0;
});


console.log(result)

result = every([2, 4, 6], function(element) {
  return element % 2 === 0;
});

console.log(result)

