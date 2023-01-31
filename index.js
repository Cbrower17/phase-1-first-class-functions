function receivesAFunction(callback) {
  return callback();
}

function returnsANamedFunction() {
  const fun = (a) => a + 1;
  return fun;
}

function returnsAnAnonymousFunction() {
  return () => console.log('hot doggy dog');
}

function holla() {
  console.log("holla\n\nhot dog");
}

holla();

function returnFunction() {
  return function () {
    console.log("Return Function!");
  };
}
newFunction = returnsAnAnonymousFunction();
console.log(newFunction());
