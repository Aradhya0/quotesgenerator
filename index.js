 // http://quotes.stormconsultancy.co.uk/random.json  
 const Quote = document.getElementById("quote");  
 const Author = document.getElementById("author");  
 function getQuote() {  
  fetch("http://type.fit/api/quotes")  
  .then((res) => {  
   return res.json();  
  })  
  .then((data) => {  
   Quote.innerText = data.quote;  
   Author.innerText = `-${data.author}`;  
  });  
 }  
 getQuote();  