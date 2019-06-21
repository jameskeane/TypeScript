// @allowJs: true
// @checkJs: true
// @noEmit: true
// @noImplicitAny: true

// @Filename: a.js
/**
 * @typedef {number}
 */
export var numdef;

/**
 * @typedef {string} strdef
 */
var this_is_not_the_name = true;

/** @type {this_is_not_the_name} */
let k;  // should fail, this_is_not_the_name is not bound to the type def

/**
 * @param {numdef} p1
 * @param {strdef} p2
 */
function func1(p1, p2) {}

/**
 * @param {strdef} p1
 * @param {numdef} p2
 */
export function func2(p1, p2) {}


// @Filename: b.js
import { func2, strdef } from './a';
import * as mod from './a';

func2("123", 123);
func2(123, "123");  // should fail


/**
 * @param {strdef} p1
 * @param {mod.numdef} p2
 */
function func3(p1, p2) {}

func3("123", 123);
func3(123, {});  // should fail

/**
 * @typedef {{ a: string, b: number, c: strdef, d: mod.numdef }}
 */
let objdef;

export {
  objdef
};


// @Filename: c.js
import { objdef } from './b';

/**
 * @param {objdef} p1
 */
function func4(p1) {}
func4({a: 'a', b: 0, c: 'c', d: 1});


// @Filename: d.js
/**
 * @typedef {{ a: number }}
 */
let recordDef;
module.exports = { recordDef };


// @Filename: e.ts
import { numdef } from './a';
import { recordDef } from './d';  // commonjs exported nameless typedef

const ex: numdef = 123;
const ex2: recordDef = { a: ex };
const ex3: recordDef = { c: 'hi' }; // should fail

