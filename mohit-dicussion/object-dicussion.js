const details = {
    fname: "pramod",
    lname:"malviya",
    a: {
        b: [],
        c: {
            d: ''
        }
    }
}

const key = "fname";

console.log(details.fname);
console.log(details['fname'])
console.log(details[key])

const copy = details;
console.log(copy == details)

const name = "xxx"
const name1 = name;
console.log(name, name1)

details.fname = "ram";
console.log(details)
copy.fname="priyam";
console.log(copy)
console.log(details)

const {...copy1} = details // rest operator
const copy2 = {...details} // spread operator

const copy3 = {
    ...details,
    fname: "pop"
}

const copyObj1 = {
    ...details,
    test: {
        ...a,
        b: '',
        c: {
            ...c,
            d: ''
        }
    }
}

// structuredClone
// test = JSON.parse(JSON.stringify(obj));
// lodash
const copyObj = Object.assign({}, details);

// {f, l}

copy1.fname = "mohit";
copy2.fname = "test";
console.log(copy1)
console.log(details)
console.log(copy2)
copy3




{
    fname:"a"
    lname:'b'
}
['a','b']