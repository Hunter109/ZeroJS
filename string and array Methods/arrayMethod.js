// Create an array of your 5 favorite foods and print the first and last.

let foods = ['momo', 'chowmein', 'sephali', 'kemmaNoodles', 'burger'];

console.log(`the first element is ${foods[0]} and the last element is ${foods[foods.length - 1]}`)


// Add "pizza" at the end using push().
foods.push('pizza');
console.log(foods);

// Remove the last item using pop().
foods.pop();
console.log(foods)

// Use includes() to check if "momo" is in the array.
if (foods.includes('momo')) {
    console.log('momo is listed in array');
}
else {
    console.log('no momo is not listed in array');
}

// Use splice() to replace the 2nd item with "burger".

foods.splice(1, 1, 'burger');
console.log(foods)