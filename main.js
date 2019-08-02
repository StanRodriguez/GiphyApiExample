const images = document.getElementById("images");
const searchForm = document.getElementById("searchForm");

const search = document.getElementById("search");

const submit = document.getElementById("submit");

searchForm.addEventListener("submit", function(e) {
  images.innerHTML = "";
  e.preventDefault();
  getData(search.value);
});

function getData(query) {
  //   console.log(query);
  const uriQuery = encodeURI(query);

  fetch(
    "http://api.giphy.com/v1/gifs/search?q=" +
      uriQuery +
      "&api_key=PUT_YOUR_API_KEY_HERE&limit=5"
  )
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      renderData(myJson);
      //   console.log(JSON.stringify(myJson));
    });
}
function renderData(data) {
  console.log(data.data);
  for (let i = 0; i < data.data.length; i++) {
    const img = document.createElement("img");
    img.src = data.data[i].images.original.url;

    images.appendChild(img);
  }
}
