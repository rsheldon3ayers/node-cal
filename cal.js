#!/usr/bin/env node --harmony_destructuring
'use strict';

const [,, ...args] = process.argv;
const center = require('./lib/center.js');
const getMonth = require('./lib/month.js');
  console.log(args);
if (args.length === 2) {
  const [month, year] = args;
  console.log(args);
  let modMonth = getMonth.getMonth(month);
  center(modMonth, year);

}  if (args.length === 1){
    const month = args;
    let modMonth = getMonth.getMonth(month);
    //console.log("inside cal.js", modMonth);
    center(modMonth);

}



