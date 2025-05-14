function mincost(arr)
{ 
//write your code here
// return the min cost
let totalCost = 0
	 arr = arr.sort((a,b)=>a-b)
		while (arr.length>1) {
			let first = arr.shift()
			let second = arr.shift()
			let sum = first + second
				totalCost+ = sum
				arr.push(const)
			arr.sort((a,b)=>a-b)
		}
  return totalCost
}

module.exports=mincost;
