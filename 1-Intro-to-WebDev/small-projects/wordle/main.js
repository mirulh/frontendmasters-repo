const letters = document.querySelectorAll(".scoreboard-letter");
const loading = document.querySelector(".info-bar");
const ANSWER_LENGTH = 5;
const ROUNDS = 6;

function isLetter(letter) {
  return /^[a-zA-Z]$/.test(letter);
}

async function init() {
  // create a buffer
  let currentGuess = "";
  let currentRow = "0";
  let isLoading = true;

  // handle the api request to get the word of the day
  const WORD_URL = "https://words.dev-apis.com/word-of-the-day?random=1";
  // const WORD_URL = "https://words.dev-apis.com/word-of-the-day";

  const promise = await fetch(WORD_URL);
  const processedResponse = await promise.json();

  const wordOfTheDay = processedResponse.word.toUpperCase();
  const wordParts = wordOfTheDay.split("");
  let done = false;
  setLoading(false);
  isLoading = false;

  function addLetter(letter) {
    if (currentGuess.length < ANSWER_LENGTH) {
      currentGuess = currentGuess + letter;
      console.log("currentGuess += letter: ", currentGuess);
    } //
    else {
      // replace the last letter
      currentGuess =
        currentGuess.substring(0, currentGuess.length - 1) + letter;
      console.log(
        "last guess replace: ",
        (currentGuess =
          currentGuess.substring(0, currentGuess.length - 1) + letter)
      );
    }
    letters[ANSWER_LENGTH * currentRow + currentGuess.length - 1].innerText =
      letter;
    console.log("recent guess: ", currentGuess);
    console.log(
      `----- letters [${
        ANSWER_LENGTH * currentRow + currentGuess.length
      }] -------`
    );
  }

  // break line

  function backspace() {
    currentGuess = currentGuess.substring(0, currentGuess.length - 1);

    console.log("letter removed: ", 0, currentGuess.length - 1);
    console.log("after remove: ", currentGuess);

    letters[ANSWER_LENGTH * currentRow + currentGuess.length].innerText = "";

    console.log(
      "removed at: ",
      letters[ANSWER_LENGTH * currentRow + currentGuess.length]
    );
  }

  function markInvalidWord() {
    // alert("not a valid word");
    for (let i = 0; i < ANSWER_LENGTH; i++) {
      letters[currentRow * ANSWER_LENGTH + i].classList.remove("invalid");

      setTimeout(function () {
        letters[currentRow * ANSWER_LENGTH + i].classList.add("invalid");
      }, 10);
    }
  }

  async function commit() {
    if (currentGuess.length !== ANSWER_LENGTH) {
      return;
    } //

    // TODO validate the word

    isLoading = true;
    setLoading(true);
    const res = await fetch("https://words.dev-apis.com/validate-word", {
      method: "POST",
      body: JSON.stringify({ word: currentGuess }),
    });

    const resObj = await res.json();
    const validWord = resObj.validWord;

    isLoading = false;
    setLoading(false);

    if (!validWord) {
      markInvalidWord();
      return;
    }

    // TODO do all the marking as correct, close, or wrong
    const guessParts = currentGuess.split("");
    const map = makeMap(wordParts);
    console.log(map);

    for (let i = 0; i < ANSWER_LENGTH; i++) {
      // mark as correct
      if (guessParts[i] === wordParts[i]) {
        letters[currentRow * ANSWER_LENGTH + i].classList.add("correct");
        map[guessParts[i]]--;
      } //
    }

    for (let i = 0; i < ANSWER_LENGTH; i++) {
      if (guessParts[i] === wordParts[i]) {
      } //
      else if (wordParts.includes(guessParts[i]) && map[guessParts[i]] > 0) {
        letters[currentRow * ANSWER_LENGTH + i].classList.add("present");
      } //
      else {
        letters[currentRow * ANSWER_LENGTH + i].classList.add("absent");
      }
    }

    currentRow++; // set it to the next line by incrementing 1

    // TODO did they win or lose
    if (currentGuess === wordOfTheDay) {
      //win
      alert("you win");
      document.querySelector(".title").classList.add("winner");
      done = true;
      return;
    } //
    else if (currentRow === ROUNDS) {
      alert(`you lose, the word was ${wordOfTheDay}`);
      done = true;
    }
    currentGuess = ""; // set the guess to empty
  }

  document.addEventListener("keydown", function keypress(e) {
    if (done || isLoading) {
      // do nothing
      return;
    }

    console.log("logout e.key: ", e.key);

    let inputKey = e.key;

    if (inputKey === "Enter") {
      console.log("execute enter function");
      commit();
    } //
    else if (inputKey === "Backspace") {
      backspace();
      console.log("execute backspace function");
    } //
    else if (isLetter(inputKey)) {
      console.log("filter key and return uppercase: ", inputKey.toUpperCase());
      addLetter(inputKey.toUpperCase());
    } //
    else {
      console.log("key ignored");
    }
  });
}

function setLoading(isLoading) {
  loading.classList.toggle("show", isLoading);
}

function makeMap(array) {
  const obj = {};
  for (let i = 0; i < array.length; i++) {
    const letter = array[i];
    if (obj[letter]) {
      obj[letter]++;
    } //
    else {
      obj[letter] = 1;
    }
  }

  return obj;
}

init();
