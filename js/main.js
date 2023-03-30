function getData(){
    const xhr = new XMLHttpRequest();

    xhr.open("GET", 'https://www.omdbapi.com/?apikey=b6003d8a&s=All');

    xhr.send();
 
 xhr.onload = ()=>{
     let data = JSON.parse(xhr.response);
     console.log(data.Search)
 }
    
 };


let films = document.querySelector(".films");

let a = fetch('https://www.omdbapi.com/?apikey=b6003d8a&s=All');


a.then((response)=>{
    return response.json();
}).then((info)=>{
    films.innerHTML = "";
    info.Search.forEach((elem)=>{

        films.innerHTML  +=`
        <div class="movie">
        <h5 id="fontS">${elem.Title}</h5>
        <h6>${elem.Year}</h6>
        <hy4>${elem.Type}</h4>
        <br>
        <img src="${elem.Poster}" alt="user" width="300">
    
    </div>
        `
    });
});







