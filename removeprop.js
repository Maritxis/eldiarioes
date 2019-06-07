function removeProperty(obj, prop){
    console.log(obj.hasOwnProperty(prop))
    if (obj[prop]){
        delete obj[prop]
        return true
    }else{
        return false
    }
}

const obj1={a:'a', b:'b', c:'c'}

const obj2=Object.create(obj1);
console.log(obj2.a);

console.log(obj2.__proto__)
console.log(removeProperty(obj2, 'b'));
console.log(removeProperty(obj2, 'b'));
console.log(obj2.__proto__);