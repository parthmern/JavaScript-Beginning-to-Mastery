// set type="module" in html while connecting the script

import { firstName } from "./script2";

import { age } from "./script3";

import { Person } from "../script4";

console.log(firstName,age);

const person1 = new Person("parth","patel",88);
person1.info();