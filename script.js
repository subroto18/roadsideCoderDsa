const textInput = document.getElementById("input");
const output = document.getElementById("output");
const btn = document.getElementById("btn");

const handleEvent = (event) => {
  console.log(event.target, "this is awesome");
};

// const myThottle = _.debounce(handleEvent, 1000);

const thottle = (cb, delay) => {
  let flag = false;

  return (...arg) => {
    const context = this;
    if (flag) {
      cb.apply(context, arg);
      flag = false;
    }
    setTimeout(() => {
      flag = true;
    }, delay);
  };
};

const myThottle = thottle(handleEvent, 1000);

btn.addEventListener("click", myThottle);
