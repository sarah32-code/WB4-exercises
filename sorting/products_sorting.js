let partcode1 = "ABC:1234-M";
let partcode2 = "XYZ: 322 -L";
let partcode3 = "ACME:6-5";

let thispart = [partcode1, partcode2, partcode3];

function getSupplier(thispart) {
    return thispart.split(":")[0].trim();
}

thispart.sort(function (a, b) {
    let supplierA = getSupplier(a).toLowerCase();
    let supplierB = getSupplier(b).toLowerCase();

    if (supplierA < supplierB) {
        return -1; 
        
    }
    
    else if (supplierA > supplierB) {
        return 1; 
    } else {
        return 0; 
    }
});
console.log("----------------------------------------------------------------");
console.log("Sorted part codes by supplier name:", thispart);
console.log("----------------------------------------------------------------");

