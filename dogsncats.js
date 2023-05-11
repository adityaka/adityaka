
let CatFact = function() {
    this.render  = async function() {
        let rootDiv = document.querySelector('#meowfact');
        if(!rootDiv) {
            rootDiv = document.createElement('div');
            rootDiv.id = 'meowfact';
            document.body.append(this.rootElement);
        }
        let fact = null;
        promise = fetch("https://catfact.ninja/fact").then(function(response){
            console.log("response received");
            console.log(response);
            response.json().then(function(data){
                fact = data.fact;
                rootDiv.innerHTML = `<article class="fact"> ${fact ? fact:"No valid response"} </article>`
            });
        }).catch(function(err){
            fact = err;
            rootDiv.innerHTML = `<article class="fact"> ${fact ? fact:"No valid response"} </article>`
        });
    }   
};

let DogImages = function() {
    this.render = function() {
        uri = "https://dog.ceo/api/breeds/image/random"
        imgContainer = document.querySelector("#dogimages");
        if (!imgContainer) {
            imgContainer = document.createElement("div");
            imgContainer.id="dogimages";
            document.body.appendChild(imgContainer);
        }
        fetch(uri).then(function(response){
            response.json().then(function(data){
                message = data.message;
                imgContainer.innerHTML = "";
                image = document.createElement('img');
                image.src=message;
                imgContainer.append(image);
            }).catch(function(err){
                console.log(err);
            })
        }).catch(function(err){
            console.log(err)
        });
    }
}

let oDog = new DogImages();
let doginterval = setInterval(function(){
    oDog.render();
}, 10000);

let oCat = new CatFact();
let interval = setInterval(function(){
    oCat.render();
}, 10000);
