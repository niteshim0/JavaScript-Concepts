let counter = 0;
const getData = () => {
  console.log("...Fetching data",counter++)
}

// Debounces a function, ensuring it is only called after a specified delay since the last invocation.
const debounce = (func, delay) => {
  let timeoutId;

  return function (...args) {
    // Clear the previous timeout if it exists.
    clearTimeout(timeoutId);

    // Set a new timeout to call the function after the specified delay.
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

const betterFunction = debounce(getData,300);