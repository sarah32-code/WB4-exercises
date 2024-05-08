"use strict";

let partcode1 = "ABC:1234-M";
let partcode2 = "XYZ: 322 -L";
let partcode3 = "ACME:6-5";

let thispart = partcode1;

console.log(getSupplier(thispart));

function parsePartCode(partcode) {
    let result = {
        supplier: getSupplier(partcode),
        productNumber: getProductNumber(partcode),
        size: getSize(partcode),
    };
    return result
}