//alert(localStorage.getItem("project"))
const totalProjects = 50;
let listPosts;
let listPhotos;
let card1='card1',card2='card2',card3='card3';
let project1,project2,project3;
let getproject

async function getProject(){
    let project = localStorage.getItem("project")
    return project
}

async function initialize(){
    let project = await getProject();
    let posts = await getPosts();
    let photos = await getPhotos();

    listPosts = posts;
    listPhotos = photos;

    await fillOnlyProject(project)

    project1 = random(1,totalProjects);
    project2 = random(1,totalProjects);
    project3 = random(1,totalProjects);

    console.log('A =>'+project1+' B =>'+project2+' C =>'+project3)
    await fillCard(project1,card1)
    await fillCard(project2,card2)
    await fillCard(project3,card3)

    var getInput = getproject;
    localStorage.setItem("project",getInput);

}

async function getPosts(){
    return fetch('https://jsonplaceholder.typicode.com/posts').then((response) => response.json())
}

async function getPhotos(){
    return fetch('https://jsonplaceholder.typicode.com/albums/1/photos').then((response) => response.json())
}

async function fillOnlyProject(project){
    
    let contentPhoto = await listPhotos.find(x=>{
        return x.id == project
    });

    let contentPost = await listPosts.find(x=>{
        return x.id == project
    });
    
    let onlycard = document.getElementById('onlyproyectid');
    console.log('only ==> '+ onlycard)
    onlycard.innerHTML=`<h1 class="title">${contentPost.title}</h1>
    <div class="navbar-container">
      <span class="subtitle">UI Design & App Development</span>
      <span class="subtitle">Completed on 27/07/22</span>
    </div>
    <img class="img-onlyproject" src="${contentPhoto.url}" alt="">
    <p class="text-onlyproject">${contentPost.body}</p>
    <p class="text-onlyproject">${contentPost.body}</p>`
}

function random(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

async function fillCard(projectId,cardId){
    let contentPhoto = await listPhotos.find(x=>{
        return x.id == projectId
    });

    let contentPost = await listPosts.find(x=>{
        return x.id == projectId
    });
    
    //let contentPost = ;
    let card = document.getElementById(cardId);

    
    /*let changeImg = card.getElementsByTagName("img");
    changeImg.src = contentPhoto.url;

    let title = card.getElementsByTagName('h3');
    title.textContent = contentPost.title;*/
    card.innerHTML=`<img class="img-project" src="${contentPhoto.url}" alt="">
    <div class="card-content">
      <h3>${contentPost.title}</h3>
      <p class="card-text">${contentPost.body}</p>
      <a onclick="fill${cardId}()" href="">Learn More</a>
    </div>`
}
async function fillcard1 (){
    getproject = project1;
    localStorage.setItem("project",getproject);
}
async function fillcard2 (){
    getproject= project2;
    localStorage.setItem("project",getproject);
}
async function fillcard3 (){
    getproject = project3;
    localStorage.setItem("project",getproject);
}

initialize()