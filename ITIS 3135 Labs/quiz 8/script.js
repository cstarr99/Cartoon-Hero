window.addEventListener("load", chainPromises);

   async function chainPromises() {
    try {
    const function1 = await func1();
    const function2 = await func2();
    const function3 = await func3();
    }
      catch(err) {
      console.log(err.message);
  }
}
chainPromises();

  function func1() {
    return new Promise(function(resolve) {
      setTimeout(function() {
        console.log('Time flies like an arrow.');
        resolve();
      }, 1000);
    });
  }

  function func2() {
    return new Promise(function(resolve) {
      setTimeout(function() {
        console.log('Fruit flies like?');
        resolve();
      }, 1000);
    });
  }

  function func3() {
    return new Promise(function(resolve) {
      setTimeout(function() {
        console.log('A banana!');
        resolve();
      }, 2000);
    });
  }



