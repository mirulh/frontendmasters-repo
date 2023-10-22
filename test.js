const teaType = function teaStore() {
  return "Black Tea";
};

const prepareForTea = function executeTea(numberOfTea) {
  const teaArr = [];

  for (let i = 0; i < numberOfTea; i++) {
    const teaCup = teaType();
    teaArr.push(teaCup);
  }
  return teaArr;
};

const callForTea = prepareForTea(40);

console.log(callForTea);
