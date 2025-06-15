 const container = document.getElementById("itemContainer");
    const cartModal = document.getElementById("cartModal");
    const cartItems = document.getElementById("cartItems");
    const loginModal = document.getElementById("loginModal");
    const dashboardModal = document.getElementById("dashboardModal");
    const dashboardContent = document.getElementById("dashboardContent");
    let items = JSON.parse(localStorage.getItem("orion_items")) || [];
    let cart = [];

    function renderItems() {
      container.innerHTML = "";
      items.forEach((item, i) => {
        const div = document.createElement("div");
        div.className = "card";
        div.innerHTML = `
          <img src="${item.image}" alt="Item">
          <h3>${item.name}</h3>
          <p>ID: ${item.id}</p>
          <p>Quantity: ${item.quantity}</p>
          <p>Price: $${item.price}</p>
          <button onclick="buyItem(${i})">Buy</button>
          <button onclick="addToCart(${i})">Add to Cart</button>
        `;
        container.appendChild(div);
      });
    }

    function buyItem(index) {
      alert(`Thanks for purchasing ${items[index].name}!`);
    }

    function addToCart(index) {
      cart.push(items[index]);
      alert(`${items[index].name} added to cart.`);
      updateCart();
    }

    function updateCart() {
      cartItems.innerHTML = cart.map(item => `<div>${item.name} - $${item.price}</div>`).join("");
      cartModal.style.display = "flex";
    }

    function closeCart() {
      cartModal.style.display = "none";
    }

    function showLogin() {
      loginModal.style.display = "flex";
    }

    function checkPassword() {
      const pass = document.getElementById("adminPass").value;
      if (pass === "admin123") {
        loginModal.style.display = "none";
        showDashboard();
      } else {
        alert("Incorrect password!");
      }
    }

    function showDashboard() {
      updateDashboard();
      dashboardModal.style.display = "flex";
    }

    function closeDashboard() {
      dashboardModal.style.display = "none";
    }

    function updateDashboard() {
      dashboardContent.innerHTML = items.map((item, i) => `
        <div class="dashboard-item">
          <img src="${item.image}" style="width:100px;height:60px;object-fit:cover;"><br>
          <strong>${item.name}</strong><br>
          ID: ${item.id}<br>
          Quantity: ${item.quantity}<br>
          Price: $${item.price}<br>
          <button onclick="editItem(${i})">Edit</button>
          <button onclick="deleteItem(${i})">Delete</button>
        </div>
      `).join("");
    }

    function deleteItem(index) {
      if (confirm("Are you sure you want to delete this item?")) {
        items.splice(index, 1);
        localStorage.setItem("orion_items", JSON.stringify(items));
        updateDashboard();
        renderItems();
      }
    }

    function editItem(index) {
      const name = prompt("New name", items[index].name);
      const quantity = prompt("New quantity", items[index].quantity);
      const price = prompt("New price", items[index].price);
      if (name && quantity && price) {
        items[index].name = name;
        items[index].quantity = quantity;
        items[index].price = price;
        localStorage.setItem("orion_items", JSON.stringify(items));
        updateDashboard();
        renderItems();
      }
    }

    function addNewItem() {
      const file = document.getElementById("imageInput").files[0];
      const name = document.getElementById("nameInput").value;
      const id = document.getElementById("idInput").value;
      const quantity = document.getElementById("quantityInput").value;
      const price = document.getElementById("priceInput").value;
      if (file && name && id && quantity && price) {
        const reader = new FileReader();
        reader.onload = function(e) {
          const image = e.target.result;
          items.push({ image, name, id, quantity, price });
          localStorage.setItem("orion_items", JSON.stringify(items));
          updateDashboard();
          renderItems();
          document.getElementById("imageInput").value = "";
          document.getElementById("nameInput").value = "";
          document.getElementById("idInput").value = "";
          document.getElementById("quantityInput").value = "";
          document.getElementById("priceInput").value = "";
        };
        reader.readAsDataURL(file);
      } else {
        alert("Please fill all fields.");
      }
    }

    renderItems();

