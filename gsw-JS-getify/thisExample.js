function ask(question) {
  console.log(this.teacher, question);
}

function otherClass() {
  // this is a function

  var myContext = {
    // this is an object inside a function
    teacher: "Suzy", // this is a property of an object
    student: "James",
  };

  // this is invoking a function using a method call (outside of an object)
  ask.call(myContext, "Why?"); // Suzy, Why?
}

otherClass();
