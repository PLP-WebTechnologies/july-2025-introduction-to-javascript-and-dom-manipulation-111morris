// sess_one: JavaScript Basics — Variables, Conditionals
let username = "";

// This is a function to capture username and update greeting
function startSession() {
	const input = document.getElementById("usernameInput");
	username = input.value.trim();

	if (username === "") {
		alert("Please enter your name.");
		return;
	}

	// This hides the input section after getting the username
	document.getElementById("userInputSection").style.display = "none";

	const greeting = document.getElementById("greeting");
	greeting.textContent = `Welcome, ${username}! Let's learn JavaScript`;

	console.log(`Session started for ${username}`);
}

// Function to calculate total price of selected items
function calculateCartTotal() {
	const items = document.querySelectorAll(".item");
	let total = 0;

	items.forEach(item => {
		if (item.checked) {
			total += parseFloat(item.dataset.price);
		}});
	let dollar = total/129;

	const totalDisplay = document.getElementById("totalResult");

	if (username) {
		totalDisplay.textContent = `Hello ${username}, your total is Ksh. ${total.toFixed(2)} that is $${dollar.toFixed(2)} (rate=129)`;
	} else {
		totalDisplay.textContent = `Your total is Ksh. ${total.toFixed(2)} that is $${dollar.toFixed(2)} (rate=129)`;
	}
}


//ses_three
for (let i = 1; i <= 5; i++) {
	const li = document.createElement("li");
	li.textContent = `Item ${i}`;
	document.getElementById("loopOutput").appendChild(li);
}
let countdown = 3;
while (countdown > 0) {
	console.log(`Countdown: ${countdown}`);
	countdown--;

}




//sess_four
// Item one: Toggle visibility
document.getElementById("toggleButton").addEventListener("click", function () {
	const msg = document.getElementById("message");
	msg.style.display = msg.style.display === "none" ? "block" : "none";
});

// Item two: Add item dynamically
document.getElementById("addItemButton").addEventListener("click", function () {
	const newItem = document.createElement("li");
	newItem.textContent = "New list item!";
	document.getElementById("dynamicList").appendChild(newItem);
});

// Item three: Change text on load
document.addEventListener("DOMContentLoaded", function () {
	document.getElementById("message").textContent = "Page loaded and ready!";
});
