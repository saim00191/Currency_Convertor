#! /usr/bin/env node

import inquirer from "inquirer";

let Currency : any = {
    USD: 1,
    EURO: 0.92,
    PKR: 277.70,
    BTC: 0.000015,
    ETH: 0.00030,
    INR: 83.29,
    EGP: 47.33,
    BDT: 109.50,
    AED : 3.67
}


const answer = await inquirer.prompt([
    {
        name: "From",
        type: "list",
        message: "Select Your Currency : ",
        choices : ["USD","EURO" , "PKR" , "BTC" , "ETH" , "INR" , "EGP" , "BDT" , "AED" ]
    },
    {
        name: "To",
        type: "list",
        message: "Select Your Convertion Currency : ",
        choices : ["USD","EURO" , "PKR" , "BTC" , "ETH" , "INR" , "EGP" , "BDT" , "AED" ]
    },
    {
        name: "amount",
        type: "number",
        message : "Enter your Convertion Amount : "
    }
])

let FromAmount = Currency[answer.From]
let ToAmount = Currency[answer.To]
let Amount = answer.amount

let BaseAmount = Amount / FromAmount ;
let ConvertedAmount = BaseAmount * ToAmount;

console.log(ConvertedAmount.toFixed(2));