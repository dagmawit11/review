const review =[{
    id: 1,
    name: 'Jeniffer Lopez',
    job: "musician",
    img: "C:/Users/Davido/Desktop/html/images/jlo.jpg",
    text: "American actress, dancer and singer. In 1991, she began appearing as a Fly Girl dancer on the sketch comedy television series In Living Color, where she remained a regular until she decided to pursue an acting career in 1993.",
},
{
    id: 2,
    name:'Shah Rukh Khan',
    job:'Actor',
    img: 'C:/Users/Davido/Desktop/html/images/shar.jpg',
    text:" an Indian actor and film producer who works in Hindi films. Referred to in the media as the 'Baadshah of Bollywood' and 'King Khan', he has appeared in more than 90 films"
},
{
    id: 3,
    name:"Dagmawit Belay",
    job: "freelancer",
    img: "C:/Users/Davido/Desktop/html/images/dagi.gif",
    text:"Software engineering student, software development intern , omishtu job software company. Developing applications to improve services"
}]
const img = document.getElementById("person");
const job = document.getElementById("job");
const name = document.getElementById("name");
const about = document.getElementById("about");

const prev= document.querySelector(".prev");
const next= document.querySelector(".next");

let currentItem=0;
//load initial item
window.addEventListener('DOMContentLoaded', function (){
    
});

//show person based on item
function showPerson(num){
    const item= review[currentItem];
    img.src = item.img;
    job.textContent = item.job;
    name.textContent= item.name;
    about.textContent= item.text;
}
//show next person
next.addEventListener('click', function(){
    currentItem++;
    if (currentItem > review.length - 1) {
        currentItem = 0;
      }
    showPerson(currentItem);
});
 
//show previous person
prev.addEventListener('click', function(){
    currentItem--;
    if (currentItem < review.length - 1) {
        currentItem = review.length - 1;
      }
    showPerson(currentItem);
});

