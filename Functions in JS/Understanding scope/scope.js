
    const x = 1;

    function a() {
      const y = 2;
    }

    function b() {
      const z = 3;
    }

    function output(value) {
      const para = document.createElement('p');
      document.body.appendChild(para);
      para.textContent = `Value: ${value}`;
    }
    output(x);
    output(y);//"ReferenceError: y is not defined"
    output(z);//"ReferenceError: z is not defined" since they are not in global scope