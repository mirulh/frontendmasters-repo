const dogURL = " https://dog.ceo/api/breed/hound/list";

async function getResponse(url) {
  const response = await fetch(url);
  //   console.log(response);
  const processedResponse = await response.json();
  console.log(processedResponse);

  return processedResponse;
}

getResponse(dogURL);
