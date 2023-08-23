// 1.
// צור פונקציה גנרית ותנו לה שם מתאים שלוקחת שני ארגומנטים מסוגים שונים ומחזירה מערך המכיל את שני הארגומנטים.
// תפקיד הפונקציה, ליצור צמד 
// ['asd',3]
function pair<T,U>(arg1: T, arg2: U): [T,U]{
    return [arg1, arg2]
}
//console.log(pair<number, string>(2,"aaaabbbbb"));



// 2.
// צור פונקציה גנרית שמקבלת אובייקט מכל סוג ומפתח ומחזירה את ערך המפתח באובייקט
const getValueByKey = <T , K extends keyof T>(obj: T, prop: K) => {
    return obj[prop]
}
interface Book {
    title: string;
    author: string;
    year: number;
}
const bookObj: Book = {title: 'the sun', author: 'dr lev', year: 1982}
//console.log(getValueByKey<Book, "title">(bookObj, "title"));
//מתקדם
//צור פונקציה גנרית שמקבלת מערך של אובייקטים ואובייקט כארגומנטים. הפונקציה תוסיף את האובייקט שהתקבל לכל איבר במערך 
// עליכם לקרוא על ולהשתמש ב: Record  

// type objType = {Record<T, U>}
// const addObj = ,  >(objArr, objToAdd) => {
//     for(let obj of objArr){
//         objArr.add = objArr
//     }
// }

// כתבו פונקציה שמקבלת אובייקט ושם שדה(מפתח).  הפונקציה תחזיר אובייקט חדש בלי המפתח
// קראו על Omit


// כתוב פונקציה שמקבלת אובייקט,מפתח וערך. הפונקציה תחזיר אובייקט חדש עם המפתח והערך שהוזנו לה כשדה חדש באובייקט שהוזן לה
// השתמשו ב &

