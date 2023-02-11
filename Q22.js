const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

// - Sort the array and find the min and max age
ages.sort()
let minAge = ages[0]
let maxAge = ages[ages.length - 1]
console.log(minAge, maxAge);

// - Find the median age(one middle item or two middle items divided by two)
let midIndex = ages[Math.round((ages.length - 1) / 2)]
console.log(midIndex / 2)

// - Find the average age(all items divided by number of items)
let sum = 0;

for (let i = 0; i < ages.length; i++) {
    sum += ages[i];
}

let averageAge = sum / ages.length
console.log(averageAge);

// - Find the range of the ages(max minus min)
ages.sort()
let range = (ages[ages.length - 1]) - ages[0]
console.log(range)

// - Compare the value of (min - average) and (max - average), use abs() method
ages.sort()
let minValue = ages[0]
let maxValue = ages[ages.length - 1]

for (let i = 0; i < ages.length; i++) {
    sum += ages[i];
}
let averageValue = sum / ages.length

let minAvarage = minValue - averageValue
let maxAvarage = maxValue - averageValue

console.log(Math.abs(minAvarage, maxAvarage));