"use strict";
const getMonth = (m) => {
  let monthArray = ["Error","January","February","March","April","May","June","July","August","Septemper","October","November","December"];
  console.log("inside getMonth", m);

 return monthArray[m]


};
module.exports = {
  getMonth
 };

