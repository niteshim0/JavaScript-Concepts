let counter = 0;

const expensiveOperation = () => {
  console.log("...Expensive Operation", counter++);
};

const throttle = (func, limit) => {
  let flag = true;
  return function () {
    if (flag) {
      func();
      flag = false;
      setTimeout(() => {
        flag = true;
      }, limit);
    }
  };
};

const betterFunction = throttle(expensiveOperation, 300);

window.addEventListener('resize', betterFunction);
