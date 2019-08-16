// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
// hi
var myUrl = "https://lambda-times-backend.herokuapp.com/articles"; 

axiosGet(myUrl); 

function createCard(aCard){
    console.log("I am in createCard()."); 
    var outerDiv = document.createElement("div"); 
    outerDiv.classList.add("card"); 
    
    var headLineDiv = document.createElement("div"); 
    headLineDiv.classList.add("headline"); 
    headLineDiv.textContent = aCard.headline; 
    outerDiv.appendChild(headLineDiv); 

    var authorDiv = document.createElement("div"); 
    authorDiv.classList.add("author"); 
    outerDiv.appendChild(headLineDiv);

    var imgDiv = document.createElement("div"); 
    imgDiv.classList.add("img-container"); 
    var img = document.createElement("img"); 
    img.setAttribute("src", aCard.authorPhoto);
    imgDiv.appendChild(img); 
    authorDiv.appendChild(imgDiv); 

    var span = document.createElement("span"); 
    span.textContent = ("By " + aCard.authorName);
    authorDiv.appendChild(span); 

    outerDiv.appendChild(authorDiv); 
    
    
    console.log("cards div: " + outerDiv); 
    return outerDiv; 
}

function axiosGet(url){
    console.log("I am in axiosGet()."); 
    
    axios.get(url)
      .then(function (response) {
        // handle success
        console.log(response);
        // return response;
        for(var article in response.data.articles){
            response.data.articles[article].forEach(function(card){
                document.querySelector(".cards-container").appendChild(createCard(card));  
            });
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
        console.log("finally"); 
      });
}