// 18. Given`[{age: 15}, {age: 22}, {age: 30}]`, filter only people older than 18.
let people = [{ age: 15 }, { age: 22 }, { age: 30 }];

let olderPeople = people.filter((people) => {
    return people.age > 18
})
console.log(olderPeople)


// 19. Filter `[0, '', null, undefined, 'hello', 42]` to keep only truthy values.
let types = [0, '', null, undefined, 'hello', 42];
let filters = types.filter((types) => {
    return (types);
})
console.log(filters)