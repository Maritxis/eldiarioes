const accesorPath=(obj, def, prop)=>{
    const arrayPath=prop.split('.');
    const value= arrayPath.reduce((prev, curr)=>{
        return prev?prev[curr]?prev[curr]:def:def
    }, obj);
    return value
}

const accesorNoPath=(obj,def)=>{
    return prop=>accesorPath(obj,def,prop)
}

const accessor=(...args)=>{
    return args.length==2?accesorNoPath(...args):accesorPath(...args);
}

console.log(accessor({a:{b:1}}, null, 'b.c.d.e.f'))
