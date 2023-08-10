// اول اسبوع في جافا سكربت


// let
let myname = "rayyan";

// const
const myage = 17;

// non primetive
let objects = {
    name : "rayyan",
    age : 17,
};

// primetive

// string
let str_1 = "text";
console.log(typeof str_1);

// number

// integer
let num_2 = 6;
console.log(typeof num_2);

// duoble
let duoble = 6.6;
console.log(typeof duoble);

// bigint
let big = 7n;
console.log(typeof big);

// null
const null_2 = null;
console.log(typeof null_2);

// boolean
let bool = true;
console.log(typeof bool);

// undefined
let un = undefined;
console.log(typeof un);

//string propreti
let str_2 = "rayyan alharbi";
console.log(str_2.length);
console.log(str_2.charAt(3));
console.log(str_2.slice(0,6));
console.log(str_2.split(" "));

//Conversion string

//string to string
const str = "text";
const StrToStr=String(str);
console.log(`${typeof str}: ${str}`);
console.log(`${typeof StrToStr}: ${StrToStr}`);

// Num to string
const num_1 = 20;
const NumToStr = String(num_1);
console.log(`${typeof num_1}: ${num_1}`);
console.log(`${typeof NumToStr}: ${NumToStr}`);

// boolean to string
const bool_1 = true;
const BoolToString = String(bool_1);
console.log(`${typeof bool_1}: ${bool_1}`);
console.log(`${typeof BoolToString}: ${BoolToString}`);

// Undefined to string
const Un = undefined;
const UnToString = String(Un);
console.log(`${typeof Un}: ${Un}`);
console.log(`${typeof UnToString}: ${UnToString}`);

// Null to string 
const null_1 = null;
const NullToString = String(null_1);
console.log(`${typeof null_1}: ${null_1}`);
console.log(`${typeof NullToString}: ${NullToString}`);

// Bigint to string
const bigint = 4n;
const BigToString = String(bigint);
console.log(`${typeof bigint}: ${bigint}`);
console.log(`${typeof BigToString}: ${BigToString}`);

// number to number
const number = 5;
const NumToNum = Number (number);
console.log(`${typeof number}: ${number}`);
console.log(`${typeof NumToNum}: ${NumToNum}`);

// string to number
const str1 = "6";
const StrToNum1 = Number(str1);
console.log(`${typeof str1}: ${str1}`);
console.log(`${typeof StrToNum1}: ${StrToNum1}`);

const str2 = "rayyan";
const StrToNum2 = Number(str2);
console.log(`${typeof str2}: ${str2}`);
console.log(`${typeof StrToNum2}: ${StrToNum2}`);

// bigint to number
const big2 = 7n;
const BigToNum = Number(big2);
console.log(`${typeof big2}: ${big2}`);
console.log(`${typeof BigToNum}: ${BigToNum}`);

// boolean to number
const bool_2 = true;
const BoolToNum = Number(bool_2);
console.log(`${typeof bool_2}: ${bool_2}`);
console.log(`${typeof BoolToNum}: ${BoolToNum}`);

// null to number
const null_3 = null;
const NullToNum = Number(null_3);
console.log(`${typeof null_3}: ${null_3}`);
console.log(`${typeof NullToNum}: ${NullToNum}`);

// boolean to boolean
const bool_3 = true;
const BoolToBool = Boolean(bool_3);
console.log(`${typeof bool_3}: ${bool_3}`);
console.log(`${typeof BoolToBool}: ${BoolToBool}`);

// string to boolean 
const str_3 = "rayyan";
const StrToBool = Boolean(str_3);
console.log(`${typeof str_3}: ${str_3}`);
console.log(`${typeof StrToBool}: ${StrToBool}`);

// empty to boolean
const empty = "";
const EmptyToBool = Boolean(empty);
console.log(`${typeof empty}: ${empty}`);
console.log(`${typeof EmptyToBool}: ${EmptyToBool}`);

// number to boolean 
const num_3 = 8;
const NumToBool = Boolean(num_3);
console.log(`${typeof num_3}: ${num_3}`);
console.log(`${typeof NumToBool}: ${NumToBool}`);

const num_4 = 0;
const NumToBool_2 = Boolean(num_4);
console.log(`${typeof num_4}: ${num_4}`);
console.log(`${typeof NumToBool_2}: ${NumToBool_2}`);

// undefind to boolean
const Un_2 = undefined;
const UnToBool = Boolean(Un_2);
console.log(`${typeof Un_2}: ${Un_2}`);
console.log(`${typeof UnToBool}: ${UnToBool}`);

// null to boolean
const null_4 = null;
const NullToBool = Boolean(null_4);
console.log(`${typeof null_4}: ${null_4}`);
console.log(`${typeof NullToBool}: ${NullToBool}`);

// automatic conversion
const plus = 22 + "1";
const _ = 22 - "1";
console.log(`${plus} : ${_}`);