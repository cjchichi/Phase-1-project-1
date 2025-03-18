console.log(data)

const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Nonono", image: "https://www.freepik.com/free-ai-image/bowl-with-delicious-ramen_72554344.htm#fromView=search&page=2&position=21&uuid=a0abd953-4788-4218-82c5-31b1a6330815&query=ramen", rating: 7, comment: "Delish. Can't go wrong with a classic!" },
    { id: 2, name: "Naruto Ramen", restaurant: "Naruto", image: "https://www.freepik.com/free-photo/korean-instant-noodle-tteokbokki-korean-spicy-sauce-ancient-food_13902897.htm#fromView=search&page=3&position=15&uuid=a0abd953-4788-4218-82c5-31b1a6330815&query=ramen", rating: 10, comment: "My absolute fave!" },
    { id: 3, name: "Nirvana Shiromaru", restaurant: "Ippudo", image: "https://pixabay.com/photos/ramen-japanese-food-cooking-2199962/", rating:7, comment:"Do buy the hype" },
    { id: 4, name: "Gyukotsu Ramen", restaurant: "Za-Ya Ramen", image: "https://pixabay.com/illustrations/ramen-dish-savory-noodles-soup-8837174/", rating:10, comment:"Good to the last drop." },
    { id: 5, name: "Kojiro Red Ramen", restaurant: "Ramen-Ya", image: "file:///home/cynthia/Downloads/steaming-bowl-ramen.jpg", rating:6, comment:"Perfect for a cold night." },
    
 ];

 /*const images = [
    { src: "https://www.freepik.com/free-ai-image/bowl-with-delicious-ramen_72554344.htm#fromView=search&page=2&position=21&uuid=a0abd953-4788-4218-82c5-31b1a6330815&query=ramen", alt: "Shoyu Ramen" },

    { src: "https://www.freepik.com/free-photo/korean-instant-noodle-tteokbokki-korean-spicy-sauce-ancient-food_13902897.htm#fromView=search&page=3&position=15&uuid=a0abd953-4788-4218-82c5-31b1a6330815&query=ramen", alt: "Naruto Ramen" },

    { src: "https://pixabay.com/photos/ramen-japanese-food-cooking-2199962/", alt: "Nirvana Shiromaru" },

    { src: "https://pixabay.com/illustrations/ramen-dish-savory-noodles-soup-8837174/", alt: "Gyukotsu Ramen" },

    { src: "https://www.freepik.com/free-ai-image/steaming-bowl-ramen_414996564.htm#fromView=search&page=2&position=34&uuid=a0abd953-4788-4218-82c5-31b1a6330815&query=ramen", alt: "Kojiro Red Ramen" }
 ];
*/

 
const ramenMenu = document.querySelector("#ramen-menu");

function displayRamens(ramens){
    //const ramenMenu = document.querySelector("#ramen-menu");
    if (ramenMenu){
        ramenMenu.innerHTML ='<p>Delicious Ramen!</p>';
    }else {}
      
    ramens.forEach((ramens, index) => {
        const ramenImage = document.createElement('img');
        //console.log (ramenImage)
        ramenImage.src = ramens.image;
        ramenImage .alt = ramens.name;
        //img.addEventListener('click', () => handleClick(ramen));
        ramenMenu.append(ramenImage);
        //console.log(ramens)
    });
}
displayRamens(ramens)

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


function addSubmitListner (){
    const form = document.getElementById('new-ramen-form');
    form.addEventListener('submit',(event) =>{
        event.preventDefault();

        const name = document.getElementById('name').value;
        const restaurant = document.getElementById('restaurant').value;
        const image = document.getElementById('image').value;
        const rating = document.getElementById('rating').value;
        const comment = document.getElementById('comment').value;

        const newRamen = {
            name: name,
            restaurant: restaurant,
            rating: parseInt(rating),
            comment: comment,
            image: image
        };

        ramens.push(newRamen);
        displayRamens();

        form.rest();
    });
}

function main(){
    displayRamens();
    addSubmitListner();
}

document.addEventListener('DOMContentLoaded',main);
*/