//grab user input


document.querySelector(".js-go").addEventListener('click',function(){
    //alert("test");
    var inputValue=document.querySelector(".js-userinput").value;
    //console.log(input);
    //get user input
    var userInput=inputValue;
    searchGiphy(userInput);
});

document.querySelector(".js-userinput").addEventListener('keyup',function(e){

    //if Enter(keycode=13) is pressed then the page should display gif's
    if(e.which===13){
       var userInput=getUserInput();
       searchGiphy(userInput)
    }
});

function getUserInput(){
    var inputValue=document.querySelector('.js-userinput').value;
    return inputValue
}


//function to search giphy

function searchGiphy(searchQuery){
//Do the data stuff with the API
var url = "https://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=" + searchQuery;

//AJAX request
var GiphyAjaxCall=new XMLHttpRequest();
GiphyAjaxCall.open('GET',url);
GiphyAjaxCall.send();

GiphyAjaxCall.addEventListener('load',function(data){
    var actualData =data.target.response;
    
    pushToDOM(actualData);
    //console.log(data);

});


//Show the GIf's
function pushToDOM(input){

    //prase data with json
    var response=JSON.parse(input);

    //get the image data
    var imageUrl=response.data;
    
    //loop through the data
    imageUrl.forEach(function(image){

    var src=image.images.fixed_height.url;

    //container-where the images are displayed
    var container=document.querySelector(".js-container");
    //takes the image and add another one to it
    container.innerHTML= container.innerHTML+ "<img src=\""+ src+ "\" class=\"container-image\">";
        
    });


}}