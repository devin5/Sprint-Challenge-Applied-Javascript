// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>








      
      //axios.get('https://api.github.com/users/devin5')
      https://lambda-times-backend.herokuapp.com/topics
      


      axios.get('https://lambda-times-backend.herokuapp.com/topics')
        .then(function (response) {
          // handle success
          console.log(response);
          // return response;
         createTab(response.data.topics)
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .finally(function () {
          // always executed
          console.log("finally"); 
      });




      function createTab(topics){
            topics.forEach( (i) => {
                  const tabA = document.createElement('div')
                  tabA.textContent = i
                  tabA.classList.add('tab')
                  document.querySelector('.topics').appendChild(tabA)



            }
            )
      }
