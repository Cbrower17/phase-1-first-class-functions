function receivesAFunction(callback){
    return callback();
}

function returnsANamedFunction(){
    const fun = a =>  a + 1;
    return fun;
}

function returnsAnAnonymousFunction(){
    return () => 1;
}