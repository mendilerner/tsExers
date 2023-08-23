"use strict";
// 1
const getEvens = (numsArr) => {
    let evenSum = 0;
    for (let num of numsArr) {
        if (num % 2 === 0) {
            evenSum += num;
        }
    }
    return evenSum;
};
const getRectangleArea = (dimensions) => {
    return dimensions.width * dimensions.hight;
};
//console.log(getRectangleArea({width: 120, hight: 9}));
// 3
const checkPolindrom = (str) => {
    let l = 0;
    let r = str.length - 1;
    while (l < r) {
        if (str[l] !== str[r]) {
            return false;
        }
        l += 1;
        r -= 1;
    }
    return true;
};
//console.log(checkPolindrom("1254321"));
// 4
const upperFirst = (strsArr) => {
    const upperStrs = [];
    strsArr.forEach((word) => {
        let upperWord = word[0].toUpperCase() + word.slice(1).toLowerCase();
        upperStrs.push(upperWord);
    });
    return upperStrs;
};
const mixedStrings = ["HeLLo", "WoRld", "JaVaScrIpt", "OpEnAI", "MiXeD", "StRiNgS"];
//console.log(upperFirst(mixedStrings));
// 5
const removeDuplicates = (numsArr) => {
    const uniqNums = [];
    for (let num of numsArr) {
        if (!uniqNums.includes(num)) {
            uniqNums.push(num);
        }
    }
    return uniqNums;
};
const fullNameExample = {
    firstName: "John",
    lastName: "Doe"
};
const getAcronyms = (fullName) => {
    return { firstInitial: fullName.firstName[0], lastInitial: fullName.lastName[0] };
};
function getAgeAverage(menArr) {
    let sum = 0;
    menArr.forEach((person) => {
        sum += person.age;
    });
    let average = sum / menArr.length;
    return average;
}
const men = [
    { Name: "John", age: 25 },
    { Name: "Jane", age: 30 },
    { Name: "Bob", age: 40 },
];
// console.log(getAgeAverage(men));
// 8
function getMinAndMax(numsArr) {
    let minNum = numsArr[0];
    let maxNum = numsArr[0];
    for (let num of numsArr) {
        if (minNum > num) {
            minNum = num;
        }
        if (maxNum < num) {
            maxNum = num;
        }
    }
    return { min: minNum, max: maxNum };
}
// console.log(getMinAndMax([3,1,-9,5,2,8,11,5]));
// 9
function reverseArr(arr) {
    const reversedArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArr.push(arr[i]);
    }
    return reversedArr;
}
//console.log(reverseArr([3, 9, 5, 2, 8, 11]));
