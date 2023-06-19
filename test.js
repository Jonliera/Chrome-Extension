const container = document.getElementById("container");

container.innerHTML = <button onclick="buy()">Buy </button>;

function buy() {
  container.innerHTML += "<p>Thank you for buying</p>";
}

//template literals

const recipient = "James";

const email = `Hey ${recipient} How is it going? Cheers! ${sender}`;

const sender = "Jonathan";
