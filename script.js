console.log(data)

const ramens = [
    
    { id: 3, name: "Nirvana Shiromaru", restaurant: "Ippudo", image: "https://cdn.pixabay.com/photo/2017/04/04/00/36/ramen-2199962_960_720.jpg", rating:7, comment:"Do buy the hype" },
    { id: 1, name: "Shoyu Ramen", restaurant: "Nonono", image: "https://img.freepik.com/free-photo/bowl-with-delicious-ramen_23-2150858000.jpg", rating: 7, comment: "Delish. Can't go wrong with a classic!" },
    { id: 2, name: "Naruto Ramen", restaurant: "Naruto", image: "https://img.freepik.com/free-photo/korean-instant-…ki-korean-spicy-sauce-ancient-food_1150-43004.jpg", rating: 10, comment: "My absolute fave!" },
    { id: 4, name: "Gyukotsu Ramen", restaurant: "Za-Ya Ramen", image: "https://cdn.pixabay.com/photo/2024/06/18/07/13/ramen-8837174_960_720.png", rating:10, comment:"Good to the last drop." },
    { id: 5, name: "Kojiro Red Ramen", restaurant: "Ramen-Ya", image: "https://img.freepik.com/free-photo/steaming-bowl-ramen_23-2151950838.jpg", rating:6, comment:"Perfect for a cold night." },
    
 ];

 /*const images [
    { src: "https://www.freepik.com/free-ai-image/bowl-with-delicious-ramen_72554344.htm#fromView=search&page=2&position=21&uuid=a0abd953-4788-4218-82c5-31b1a6330815&query=ramen", alt: "Shoyu Ramen" },

    { src: "https://www.freepik.com/free-photo/korean-instant-noodle-tteokbokki-korean-spicy-sauce-ancient-food_13902897.htm#fromView=search&page=3&position=15&uuid=a0abd953-4788-4218-82c5-31b1a6330815&query=ramen", alt: "Naruto Ramen" },

    { src: "https://pixabay.com/photos/ramen-japanese-food-cooking-2199962/", alt: "Nirvana Shiromaru" },

    { src: "https://pixabay.com/illustrations/ramen-dish-savory-noodles-soup-8837174/", alt: "Gyukotsu Ramen" },

    { src: "https://www.freepik.com/free-ai-image/steaming-bowl-ramen_414996564.htm#fromView=search&page=2&position=34&uuid=a0abd953-4788-4218-82c5-31b1a6330815&query=ramen", alt: "Kojiro Red Ramen" }
 ];
*/

const ramenDetail = document.querySelector("#ramen-detail");
//console.log(displayRamen)
function displayRamen(ramen){
     ramenDetail.innerHTML=` 
     <div id="ramen-detail">
    <!--<img class="detail-image" src="${ramen.image}" alt="${ramen.name}" />
    <h2 class="name"> ${ramen.name}Insert Name Here</h2>
    <h3 class="restaurant">Insert Restaurant Here</h3>
  

  <h3>Rating:</h3>
  <p>
    <span id='rating-display'>Insert rating here</span> / 10
     ${ramen.rating}
  </p>
  <h3>Comment:</h3>
  <p id='comment-display'>
    Insert comment here
    ${ramen.comment}
  </p>-->
  </div>`;
}
 
 
const ramenMenu = document.querySelector("#ramen-menu");

function displayRamens(){
    //const ramenMenu = document.querySelector("#ramen-menu");

    if (ramenMenu){
        ramenMenu.innerHTML ='<p>Delicious Ramen!</p>';
    }else {}
      
    ramens.forEach((ramens, index) => {
        const ramenImage = document.createElement('img');
        //console.log (ramenImage)
        ramenImage.src = ramens.image;
        ramenImage .alt = ramens.name;
        ramenImage.addEventListener("click", ()=> displayRamen (ramen));
        ramenMenu.append(ramenImage);
        //console.log(ramens)
    });
}
displayRamens();

/*
function handleClick(index) {
    const ramen = ramens[index];

   document.querySelector('.detail-image').src = ramen.image;
   document.querySelector('.detail-image').alt = ramen.name;
   document.querySelector ('.name').textContent = ramen.name;
   document.querySelector('.restaurant').textContent = ramen.restaurant;
   document.getElementById('rating-display').textContent = ramen.rating;
   document.getElementById('comment-display').textContent = ramen.comment 
}
*/

function addSubmitListner (){
    const form = document.getElementById('new-ramen-form');
    form.addEventListener('submit',(event) =>{
        event.preventDefault();

        /*const name = document.getElementById('#ramen-detail.name');
        const restaurant = document.getElementById("#ramen-detail.restaurant");
        const detailImage = document.getElementById("#ramen-detail.image");
        const rating = document.getElementById("#ramen-detail.rating");
        const comment = document.getElementById("#ramen-detail.comment");

        const newRamen = {
            name: name,
            restaurant: restaurant,
            rating: parseInt(rating),
            comment: comment,
            image: image
        };

        ramens.push(newRamen);
        displayRamens();

        form.rest();*/

        const name = document.get
    });
}

function main(){
    displayRamens();
    addSubmitListner();
}

document.addEventListener('DOMContentLoaded',main);
