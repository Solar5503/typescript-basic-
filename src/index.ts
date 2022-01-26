//! Basic Types
let id: number = 5;
let company: string = 'Media';
let isPublished: boolean = true;
let x: any = 'Hello';
let a: number;
a = 30;

let ids: number[] = [1, 2, 3, 4, 5];
let arr: any[] = [1, true, 'Hello'];

//^ Tuple
let person: [number, string, boolean] = [1, 'Vadim', true];

//& Tuple array
let employee: [number, string][];
employee = [
  [1, 'Brad'],
  [2, 'Vadim'],
  [3, 'Jill'],
];

//* Union
let pid: string | number;
pid = '22';

//~ Enum
enum Direction1 {
  Up = 1,
  Down,
  Left,
  Right,
}

enum Direction2 {
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right',
}
// console.log(Direction1);

//^ Objects
// 1

// const user: {
//   id: number;
//   name: string;
// } = {
//   id: 1,
//   name: 'Vadim',
// };

//2

type User = {
  id: number;
  name: string;
};

const user: User = {
  id: 1,
  name: 'John',
};

//& Type assertion
let cid: any = 1;
// 1
// let customerId = <number>cid;

// 2
let customerId = cid as number;

//* Functions
function addNum(x: number, y: number): number {
  return x + y;
}
// console.log(addNum(1, 5));

function log(message: string | number): void {
  console.log(message);
}
// log('1');

//~ Interfaces
interface UserInterface {
  readonly id: number;
  name: string;
  age?: number;
}

const user1: UserInterface = {
  id: 1,
  name: 'John',
};
// console.log(user1);

type Point = number | string;
const p1: Point = 1;

// user1.id = 5;

interface MathFunc {
  (x: number, y: number): number;
}

const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;
// console.log(sub(2, 3));

//^ Classes
class Person {
  private id: number;
  name: string;
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
  register() {
    return `${this.name} is now registered`;
  }
}
const vadim = new Person(1, 'Vadim');
// console.log(vadim);
// vadim.id = 7;
// console.log(vadim.id);
console.log(vadim.register());
