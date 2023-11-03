// ... (previous JavaScript code)

const getSum = () => {
  // Select the table
  const table = document.querySelector("table");

  // Select all elements with class "price" in the table
  const priceElements = table.querySelectorAll(".price");

  // Initialize the total price to 0
  let totalPrice = 0;

  // Calculate the total price
  priceElements.forEach((priceElement) => {
    const price = parseFloat(priceElement.textContent);
    totalPrice += price;
  });

  // Display the total price in the element with id "ans"
  const ansElement = document.getElementById("ans");
  ansElement.textContent = `Total Price: Rs ${totalPrice}`;
};

getSumBtn.addEventListener("click", getSum);
