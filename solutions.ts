const filterEvenNumbers = (numbers: number[]): number[] => {
    return numbers.filter((number) => number % 2 === 0);
};


const reverseString = (str: string): string => {
    const reversedStr = str.split('').reverse().join('');
    return reversedStr;
};


type StringOrNumber = string | number;
const checkType = (value: StringOrNumber): string => {
    if (typeof value === "string") {
        return "String";
    } else if (typeof value === "number") {
        return "Number";
    }
    return "Unknown";
};


const getProperty = <T, K extends keyof T>(obj: T, key: K): T[K] => {
    return obj[key];
}


interface Book {
    title: string;
    author: string;
    publishedYear: number;
};
const toggleReadStatus = (book: Book): Book & { isRead: boolean } => {
    return {
        ...book,
        isRead: true
    }
};


class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
};

class Student extends Person {
    grade: string;

    constructor(name: string, age: number, grade: string) {
        super(name, age);
        this.grade = grade;
    }

    getDetails(): string {
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`
    }
};


const getIntersection = (arr1: number[], arr2: number[]): number[] => {
    return arr1.filter((value) => arr2.includes(value));
};
