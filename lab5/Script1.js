// Функция для сохранения данных заказа в localStorage
function saveOrder() {
    const selectedToy = document.getElementById("toy").value;
    const quantity = document.getElementById("quantity").value;
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    const orderData = {
        selectedToy,
        quantity,
        name,
        email,
    };

    localStorage.setItem("order", JSON.stringify(orderData));
}

// Функция для загрузки данных заказа из localStorage
function loadOrder() {
    const orderData = localStorage.getItem("order");
    if (orderData) {
        const parsedOrder = JSON.parse(orderData);
        document.getElementById("toy").value = parsedOrder.selectedToy;
        document.getElementById("quantity").value = parsedOrder.quantity;
        document.getElementById("name").value = parsedOrder.name;
        document.getElementById("email").value = parsedOrder.email;
    }
}

// Вызов функции loadOrder при загрузке страницы
window.addEventListener("load", loadOrder);