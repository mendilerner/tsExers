// 1
var bigNum = function (num1, num2) {
    if (num1 > num2) {
        return num1;
    }
    else {
        return num2;
    }
};
//console.log(bigNum(3, 7));
// 2
var PrintBigNum = function (num1, num2) {
    if (num1 > num2) {
        console.log(num1);
    }
    else {
        console.log(num2);
    }
};
//PrintBigNum(5,1)
// 3
function checkOddOrEven(num) {
    if (num % 2 === 0) {
        return "num is even";
    }
    else {
        return "num is odd";
    }
}
//console.log(checkOddOrEven(3));
// 4
function stringLen(str) {
    return str.length;
}
//console.log(stringLen("some string"));
// 5
var getNumArr = function (num) {
    var numsArray = [];
    for (var i = 1; i < num; i++) {
        numsArray.push(i);
    }
    return numsArray;
};
//console.log(getNumArr(7));
// 6
var arrayBigNum = function (arr) {
    var bigNumber = arr[0];
    arr.forEach(function (num) {
        if (num > bigNumber) {
            bigNumber = num;
        }
    });
    return bigNumber;
};
// 8
var printPerson = function (man) {
    console.log("name: ".concat(man.Name, ", age: ").concat(man.age, ", is student: ").concat(man.isStudent));
};
var meni = { Name: "meni", age: 43, isStudent: true };
//printPerson(meni)
// 9
function isMinor(man) {
    if (man.age > 18) {
        return true;
    }
    else {
        return false;
    }
}
var readers = [
    {
        Name: "Alice",
        age: 25,
        isStudent: true,
        favoriteBook: {
            title: "The Catcher in the Rye",
            author: "J.D. Salinger",
            year: 1951
        }
    },
    {
        Name: "Bob",
        age: 32,
        isStudent: false,
        favoriteBook: {
            title: "To Kill a Mockingbird",
            author: "Harper Lee",
            year: 1960
        }
    },
    {
        Name: "Carol",
        age: 19,
        isStudent: true,
        favoriteBook: {
            title: "1984",
            author: "George Orwell",
            year: 1949
        }
    },
    {
        Name: "David",
        age: 45,
        isStudent: false,
        favoriteBook: {
            title: "Pride and Prejudice",
            author: "Jane Austen",
            year: 1813
        }
    },
    {
        Name: "Eve",
        age: 29,
        isStudent: false,
        favoriteBook: {
            title: "The Great Gatsby",
            author: "F. Scott Fitzgerald",
            year: 1925
        }
    }
];
// 12
var oldestReader = function (readersArr) {
    var olderPerson = readersArr[0];
    readersArr.forEach(function (element) {
        if (element.age > olderPerson.age) {
            olderPerson = element;
        }
    });
    return olderPerson;
};
//console.log(oldestReader(readers));
// 13
function oldestBook(readersArr) {
    var olderBook = readersArr[0].favoriteBook;
    readersArr.forEach(function (element) {
        if (olderBook.year > element.favoriteBook.year) {
            olderBook = element.favoriteBook;
        }
    });
    return olderBook;
}
//console.log(oldestBook(readers));
