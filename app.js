document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e) {
  const number = document.querySelector('input[type="number"]').value;
  //console.log(number) u will get number

  const xhr = new XMLHttpRequest();

  xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);
  //here we use template literals to not hard code

  xhr.onload = function() {
    if(this.status === 200) {
      const response = JSON.parse(this.responseText);
      //consoling the response u will log the respose of random jokes u get
      //we do JSON parse to cosole in a form of array in which underneath the value in console u get random jokes
      
      let output = '';

      if(response.type === 'success') {
        response.value.forEach(function(joke){
          //we are not gonna write response.forEach but we need to append the value it holds in the form of array
          //it depende on hoe the api is formated some apis can let u append without value 
          output += `<li>${joke.joke}</li>`;
          //here is what written in respose console
          //value: Array(4)...0:...catagory:----....joke:"...." hence we are gonna write joke.joke in template literals
        });
      } else {
        output += '<li>Something went wrong</li>';
      }

      document.querySelector('.jokes').innerHTML = output;
    }
  }

  xhr.send();

  e.preventDefault();
}