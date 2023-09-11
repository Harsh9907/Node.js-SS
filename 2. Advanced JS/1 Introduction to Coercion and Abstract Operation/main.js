let obj = {
    valueOf(){
        return {};
    },
    toString(){
        return 9;
    }
};
console.log(10-obj);

// ==========================================

let obj1 = {};
console.log(10-obj1); 

let obj2 = {
    toString(){
        return "9";
    }
};
console.log(10-obj2);

// ==========================================

let obj3 = {
    valueOf(){
        return 5;
    },
    toString(){
        return 8;
    }
};

console.log(10-obj3);

// ==========================================
let obj4 = {
    toString(){
        return 8;
    },
    valueOf(){
        return 3;
    }
};

console.log(10-obj4);
// ==========================================
// substract operator (calls) ToNumber (calls) ToPrimitive (hint number) (calls) OrdinaryToPrimitive

// by default toString gives [object Object], valueOf gives same object, example below

let obj5 = {};
console.log(10-obj5);