var person = (function(name, age) {
  return {
    name: name,
    age: age,
    greet: function() {
    document.querySelector(".ads").innerText = `Welcome to the page ${name}`;
      }
  };
})("John", 20);

person.greet();

alert("testing scripts");