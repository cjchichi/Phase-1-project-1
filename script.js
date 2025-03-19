//console.log(data)

const ramens = [
    
    { id: 3, name: "Nirvana Shiromaru", restaurant: "Ippudo", image: "https://cdn.pixabay.com/photo/2017/04/04/00/36/ramen-2199962_960_720.jpg", rating:7, comment:"Do buy the hype" },
    { id: 1, name: "Shoyu Ramen", restaurant: "Nonono", image: "https://img.freepik.com/free-photo/bowl-with-delicious-ramen_23-2150858000.jpg", rating: 7, comment: "Delish. Can't go wrong with a classic!" },
    { id: 2, name: "Naruto Ramen", restaurant: "Naruto", image: "https://img.freepik.com/free-photo/korean-instant-…ki-korean-spicy-sauce-ancient-food_1150-43004.jpg", rating: 10, comment: "My absolute fave!" },
    { id: 4, name: "Gyukotsu Ramen", restaurant: "Za-Ya Ramen", image: "https://cdn.pixabay.com/photo/2024/06/18/07/13/ramen-8837174_960_720.png", rating:10, comment:"Good to the last drop." },
    { id: 5, name: "Kojiro Red Ramen", restaurant: "Ramen-Ya", image: "https://img.freepik.com/free-photo/steaming-bowl-ramen_23-2151950838.jpg", rating:6, comment:"Perfect for a cold night." },
    
 ];

 

  const header = document.getElementById("header1");
header.innerHTML =`<h1>Ramen Rater</h1>
`

document.addEventListener("DOMContentLoaded", () => {
    const ramenMenu = document.getElementById("images"); 
    const detailImage = document.getElementById("detail-image"); 
    const detailName = document.getElementById("detail-name"); 
    const detailRestaurant = document.getElementById("detail-restaurant"); 
    const detailRating = document.getElementById("detail-rating"); 
    const detailComment = document.getElementById("detail-comment"); 
    const newRamenForm = document.getElementById("new-ramen-form"); 

    // Function to display ramen images
    function displayRamens() {
        ramens.forEach((ramen) => {
            const img = document.createElement("img");
            img.src = ramen.image;
            img.alt = ramen.name;
            img.classList.add("ramen-thumbnail");
            img.addEventListener("click", () => handleClick(ramen));
            ramenMenu.appendChild(img);
        });
    }

    // Function to handle ramen image click
    function handleClick(ramen) {
        detailImage.src = ramen.image;
        detailName.textContent = ramen.name;
        detailRestaurant.textContent =` Restaurant: ${ramen.restaurant}`;
        detailRating.textContent =` Rating: ${ramen.rating}`;
        detailComment.textContent =` Comment: ${ramen.comment}`;
    }

    // Function to handle new ramen form submission
    function addSubmitListener() {
        newRamenForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const newRamen = {
                id: ramens.length + 1,
                name: document.getElementById("name").value,
                restaurant: document.getElementById("restaurant").value,
                image: document.getElementById("image").value,
                rating: document.getElementById("rating").value,
                comment: document.getElementById("comment").value
            };

            ramens.push(newRamen);

            const img = document.createElement("img");
            img.src = newRamen.image;
            img.alt = newRamen.name;
            img.classList.add("ramen-thumbnail");
            img.addEventListener("click", () => handleClick(newRamen));
            ramenMenu.appendChild(img);

            newRamenForm.reset();
        });
    }

    //  initializing the app
    function main() {
        displayRamens();
        addSubmitListener();
    }

    main();
});