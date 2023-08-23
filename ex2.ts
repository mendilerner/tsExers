// 1
const getEvens = (numsArr: number[]): number => {
    let evenSum: number = 0;
    for (let num of numsArr) {
        if (num % 2 === 0) {
            evenSum += num
        }
    }
    return evenSum
}
//console.log(getEvens([3,6,2,7,9,1,10]));

// 2
interface Rectangle {
    width: number;
    hight: number;
}
const getRectangleArea = (dimensions: Rectangle): number => {
    return dimensions.width * dimensions.hight
}

//console.log(getRectangleArea({width: 120, hight: 9}));

// 3
const checkPolindrom = (str: string): boolean => {
    let l: number = 0;
    let r: number = str.length - 1;
    while (l < r) {
        if (str[l] !== str[r]) {
            return false
        }
        l += 1
        r -= 1
    }
    return true
}
//console.log(checkPolindrom("1254321"));

// 4
const upperFirst = (strsArr: string[]): string[] => {
    const upperStrs: string[] = []
    strsArr.forEach((word: string): void => {
        let upperWord: string = word[0].toUpperCase() + word.slice(1).toLowerCase()
        upperStrs.push(upperWord)
    })
    return upperStrs
}
const mixedStrings: string[] = ["HeLLo", "WoRld", "JaVaScrIpt", "OpEnAI", "MiXeD", "StRiNgS"];
//console.log(upperFirst(mixedStrings));

// 5
const removeDuplicates = (numsArr: number[]): number[] => {
    const uniqNums: number[] = [];
    for (let num of numsArr) {
        if (!uniqNums.includes(num)) {
            uniqNums.push(num)
        }
    }
    return uniqNums
}
//console.log(removeDuplicates([1,6,3,4,89,2,4,7,6]));

// 6
interface FullName {
    firstName: string;
    lastName: string;
}

interface Acronyms {
    firstInitial: string;
    lastInitial: string;
}

const fullNameExample: FullName = {
    firstName: "John",
    lastName: "Doe"
};

const getAcronyms = (fullName: FullName): Acronyms => {
    return { firstInitial: fullName.firstName[0], lastInitial: fullName.lastName[0] }
}
// console.log(getAcronyms(fullNameExample));

// 7
interface Man {
    Name: string;
    age: number;
}

function getAgeAverage(menArr: Man[]): number {
    let sum: number = 0;
    menArr.forEach((person: Man): void => {
        sum += person.age
    })
    let average: number = sum / menArr.length
    return average
}

const men: Man[] = [
    { Name: "John", age: 25 },
    { Name: "Jane", age: 30 },
    { Name: "Bob", age: 40 },
]

// console.log(getAgeAverage(men));

// 8
function getMinAndMax(numsArr: number[]): { min: number, max: number } {
    let minNum: number = numsArr[0];
    let maxNum: number = numsArr[0];
    for (let num of numsArr) {
        if (minNum > num) {
            minNum = num
        }
        if (maxNum < num) {
            maxNum = num
        }
    }
    return { min: minNum, max: maxNum }
}
// console.log(getMinAndMax([3,1,-9,5,2,8,11,5]));

// 9
function reverseArr(arr: unknown[]): unknown[] {
    const reversedArr: unknown[] = []
    for (let i: number = arr.length - 1; i >= 0; i--) {
        reversedArr.push(arr[i])
    }
    return reversedArr
}
//console.log(reverseArr([3, 9, 5, 2, 8, 11]));
