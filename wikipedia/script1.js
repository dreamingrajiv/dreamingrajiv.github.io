

/*$(document).ready(function(){
  $("button").click(function(){
    $(this).hide();
  });
});*/

function display(){
    
   /* fetch('https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=Modi&format=json')
    .then(response => response.json())  
    .then(data => {
        // Do what you want with your data
        document.write(data)
    });
    fetch('https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=Modi&format=json', {mode: 'no-cors'})
    .then(function(response) {
    console.log(response); 
    }).catch(function(error) {  
    console.log('Request failed', error)  
    });*/

    fetch(
        'https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=Modi&format=json',
        { 
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin':'*'   
          } 
        }
      )
        .then((response) => {
          console.log('Request suceeded', response);
        })
        .catch((response) => {
          console.log('Request failed', response);
        });

}