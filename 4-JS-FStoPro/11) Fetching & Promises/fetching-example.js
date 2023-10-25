// Eureka! holy shit it works!

DOGGO_URL = "https://dog.ceo/api/breeds/image/random";

// only can be executed inside async function
async function init() {
  // fetching the data with await to make it synchronous (remove await to see the difference)
  let response = await fetch(DOGGO_URL);

  // awaiting with json() to make it synchronous (remove await to see the difference)
  let body = await response.json();

  console.log(body);
}

init();
