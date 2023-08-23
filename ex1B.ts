// Step 1: נתון לכם אינאם - אתם רשאים להפוך אותו למשהו אחר
export enum ItemType {
  Book = 'book',
  DVD = 'dvd',
}

// Step 2:  ספר צריך להכיל שדות
interface Book {
  type: ItemType.Book;
  title: string;
  author: string
}

interface DVD {
  type: ItemType.DVD;
  title: string;
  duration: number;
}

// Step 3: פונקציה מקבלת מערך של פריטים, ופונקצית פילטור. ומחזירה מערך מפולטר של פריטים
function filterItems<T>(items: T[], filterFn: (item: T) => boolean): T[] {
  const filterdItems: T[] = items.filter(filterFn)
  return filterdItems

}
//console.log(filterItems<number>([1,5,7,3,2,9,0], (item) => item > 4));
// Step 4: הפונקציה מקבלת מערך של פריטים ומדפיסה את כל המידע הרלוונטי לגבי כל פריט
function printItemsData(items: (DVD | Book)[]): void {
  for (let item of items) {
    if (item.type === ItemType.DVD) {
      console.log(`type: ${item.type} title: ${item.title} duration:${item.duration}`);
    }
    else {
      console.log(`type: ${item.type} title: ${item.title} duration:${item.author}`);
    }
  }
}




// Test data

const libraryItems: (Book | DVD)[] = [
  { type: ItemType.Book, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
  { type: ItemType.DVD, title: 'Inception', duration: 18 },
  { type: ItemType.Book, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
  { type: ItemType.DVD, title: 'Avatar', duration: 162 },
  { type: ItemType.Book, title: 'Go Set a Watchman', author: 'Harper Lee' },
];


// Step 5:  הדפיסו את כל המידע הנתון 
printItemsData(libraryItems);

// Step 6: ממשו את פונקצית הפילטור כך שתחזיר סרטים ארוכים משעתיים והדפיסו את המערך 
const longestsDvd: (Book | DVD)[] = filterItems<Book | DVD>(libraryItems, (item) => item.type === ItemType.DVD && item.duration > 120)
//console.log(longestsDvd);
// Step 7:  Harper Lee ממשו את פונקצית הפילטור כך שתחזיר רק ספרים של  
const HarperLeeBooks: (Book | DVD)[] = filterItems<Book | DVD>(libraryItems, (item) => item.type === ItemType.Book && item.author === "Harper Lee")
//console.log(HarperLeeBooks);