// write your code here
document.addEventListener("DOMContentLoaded", () => {
  const menu = document.getElementById("ramen-menu");
    const ramenForm = document.getElementById("new-ramen");
    ramenForm.addEventListener("submit", (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const restaurant = e.target.restaurant.value;
        const image = e.target.image.value;
        const rating = e.target.rating.value;
        const newComment = e.target.new_comment.value;
        showRamen(name, restaurant, image, rating, newComment);
         const imgElement = document.createElement("img");
         imgElement.setAttribute("src", image);
         menu.appendChild(imgElement);
    })
    function showRamen(name,restaurant,image,rating,newComment) {
        document.querySelector("#ramen-detail .detail-image").setAttribute("src", image)
        document.querySelector("#ramen-detail .name").textContent = name
        document
          .querySelector("#ramen-detail .restaurant").textContent=restaurant
        document.querySelector("#rating-display").textContent = rating;
        document.querySelector("#comment-display").textContent = newComment
    }
  displayRamens();
  function displayRamens() {
    getRamens().then((res) => {
      res.forEach((ramen) => {
        const image = document.createElement("img");
        image.setAttribute("src", ramen.image);
        menu.appendChild(image);
      });
    });
  }
  function getRamens() {
    return fetch(`http://localhost:3000/ramens`).then((res) => res.json());
  }
//   function addRamen() {
//     return fetch(`http://localhost:3000/ramens`, {
//       method: "POST",
//       headers: {
//         "Content-type": "application/json",
//         Accept: "application/json",
//         },
//       body
//     }).then((res) => res.json());
//   }
});
