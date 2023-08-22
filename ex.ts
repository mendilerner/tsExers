// 1
const bigNum = (num1: number, num2: number): number => {
    if (num1 > num2) {
        return num1
    }
    else {
        return num2
    }
}
//console.log(bigNum(3, 7));

// 2
const PrintBigNum = (num1: number, num2: number): void => {
    if (num1 > num2) {
        console.log(num1);
    }
    else {
        console.log(num2);
    }
}
//PrintBigNum(5,1)

// 3
function checkOddOrEven(num: number): string {
    if (num % 2 === 0) {
        return "num is even"
    }
    else {
        return "num is odd"
    }
}
//console.log(checkOddOrEven(3));

// 4
function stringLen(str: string): number {
    return str.length
}
//console.log(stringLen("some string"));

// 5
const getNumArr = (num: number): number[] => {
    const numsArray: number[] = []
    for (let i: number = 1; i < num; i++) {
        numsArray.push(i)
    }
    return numsArray
}
//console.log(getNumArr(7));

// 6
const arrayBigNum = (arr: number[]): number => {
    let bigNumber: number = arr[0]
    arr.forEach((num: number): void => {
        if (num > bigNumber) {
            bigNumber = num
        }
    })
    return bigNumber
}
//console.log(arrayBigNum([6,7,1,5,3,9,-1]));

// 7
type Person = {
    Name: string,
    age: number,
    isStudent: boolean
}
// 8
const printPerson = (man: Person): void => {
    console.log(`name: ${man.Name}, age: ${man.age}, is student: ${man.isStudent}`);
}
const meni: Person = { Name: "meni", age: 43, isStudent: true }
//printPerson(meni)

// 9

function isMinor(man: Person): boolean {
    if (man.age > 18) {
        return true
    }
    else {
        return false
    }
}

//console.log(isMinor(meni))

// 10
interface Book {
    title: string;
    author: string;
    year: number;
}

// 11
type Reader = Person & {
    favoriteBook: Book
}

const readers: Reader[] = [
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
const oldestReader = (readersArr : Reader[]) : Reader => {
    let olderPerson: Reader = readersArr[0]
    readersArr.forEach((element: Reader): void => {
        if (element.age > olderPerson.age){
            olderPerson = element
        }
    })
    return olderPerson
}

//console.log(oldestReader(readers));

// 13
function oldestBook (readersArr: Reader[]){
    let olderBook: Book = readersArr[0].favoriteBook;
    readersArr.forEach((element: Reader) :void =>{
        if ( olderBook.year > element.favoriteBook.year){
            olderBook = element.favoriteBook
        }
    })
    return olderBook
}
//console.log(oldestBook(readers));

