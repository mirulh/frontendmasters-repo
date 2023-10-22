// what is 'this' in javascript? - 'this' is a keyword refers to an OBJECT.

// Which object depends on how this is being invoked (used or called).

// This is an example of 'this' in an object method, where 'this' refers to the object

var workshop = {
  teacher: "Kyle",
  ask(question) {
    console.log(this.teacher, question);
  },
};

// this.teacher - Kyle
// question - What is implicit binding?

workshop.ask("What is implicit binding?");
