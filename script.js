function mincost(arr) { 
  // Return the minimum cost to connect ropes
  let totalCost = 0;
  arr = arr.sort((a, b) => a - b);

  while (arr.length > 1) {
    let first = arr.shift();
    let second = arr.shift();
    let sum = first + second;

    totalCost += sum;
    arr.push(sum);
    arr.sort((a, b) => a - b); // maintain sorted order
  }

  return totalCost;
}


module.exports=mincost;
