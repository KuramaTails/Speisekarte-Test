document.addEventListener("DOMContentLoaded", function () {
  let select = document.getElementById("dish-select");
  let dishes;
  if (select) {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3000/",
      },
    };

    fetch("http://localhost:3000/requestDishes", requestOptions)
      .then((response) => response.status === 200 && response.json(response))
      .then((data) => {
        if (!data) return;
        dishes = data;
        console.log(dishes);
        dishes.forEach((dish) => {
          const option = document.createElement("option");
          option.value = dish.name;
          option.text = dish.name;
          select.appendChild(option);
        });
      })
      .catch((error) => console.error(error));
  } else {
    console.error("Dish select element not found");
  }

  const dishInfo = document.querySelector("#dish-info");
  const toggleMode = document.querySelector("#toggle-mode");
  select.addEventListener("change", (event) => {
    const selectedDish = dishes.find(
      (dish) => dish.name === event.target.value
    );
    if (!selectedDish) {
      dishInfo.innerHTML = "";
      return;
    }
    dishInfo.innerHTML = ` 
        <p>${selectedDish.name}</p>
        <img src="${selectedDish.image}" alt="${selectedDish.name}">
        <p>${selectedDish.description}</p>
        <p>${selectedDish.price}</p>
        `;
  });

  toggleMode.addEventListener("click", () => {
    document.body.classList.toggle("night-mode");
  });
});
