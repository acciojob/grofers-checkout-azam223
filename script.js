const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

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

  // Create a new row and cell for the total
  const newRow = table.insertRow(-1); // -1 to add the row at the end
  const totalCell = newRow.insertCell(0);

  // Set the text content of the total cell
  totalCell.textContent = `Total Price: Rs ${totalPrice}`;

  // Optional: You can add a class to style the total row
  newRow.classList.add("total-row");
};

getSumBtn.addEventListener("click", getSum);
