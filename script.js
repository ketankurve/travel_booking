const destinations = [
    "Andaman and Nicobar Islands", "Agra", "Ajanta and Ellora Caves", 
    "Amritsar", "Ayodhya", "Alleppey", "Bangalore", "Bharatpur", "Bhopal", 
    "Bhubaneswar", "Chandigarh", "Chennai", "Cherrapunji", "Coimbatore", "Coorg", 
    "Darjeeling", "Delhi", "Dharamshala", "Dwarka", "Gangtok", "Gaya", "Goa", "Gokarna", 
    "Gulmarg", "Guwahati", "Haridwar", "Hampi", "Hyderabad", "Imphal", "Indore", "Jaipur", 
    "Jaisalmer", "Jammu", "Jodhpur", "Jorhat", "Junagadh", "Kanchipuram", "Kannur", "Kanpur", 
    "Kanyakumari", "Kargil", "Kaziranga", "Kedarnath", "Kochi", "Kodaikanal", "Kolkata", "Kollam", 
    "Kashmir", "Kullu", "Leh", "Lucknow", "Madurai", "Mahabalipuram", "Manali", "Mangalore", "Mathura", 
    "Meghalaya", "Mount Abu", "Munnar", "Mumbai", "Mysore", "Nagpur", "Nainital", "Nashik", "Ooty", "Pahalgam", 
    "Pali", "Patna", "Pondicherry", "Port Blair", "Prayagraj", "Pune", "Puri", "Pushkar", "Rameswaram", "Ranchi", 
    "Ranthambore", "Rishikesh", "Shillong", "Shimla", "Srinagar", "Surat", "Tawang", "Tirupati", "Trichy", "Trivandrum", 
    "Udaipur", "Ujjain", "Vaishno Devi", "Varanasi", "Varkala", "Vellore", "Vijayawada", "Visakhapatnam", "Ziro Valley"
];

// Function to filter destinations as user types
function filterOptions(input, listId) {
    let filter = input.value.toLowerCase();
    let list = document.getElementById(listId);
    list.innerHTML = ""; // Clear previous results

    if (filter) {
        let filteredDestinations = destinations.filter(dest => 
            dest.toLowerCase().includes(filter)
        );

        filteredDestinations.forEach(dest => {
            let li = document.createElement("li");
            li.textContent = dest;
            li.onclick = function () {
                input.value = dest; // Set input value when clicked
                list.style.display = "none"; // Hide dropdown after selection
            };
            list.appendChild(li);
        });

        list.style.display = "block"; // Show dropdown
    } else {
        list.style.display = "none"; // Hide dropdown when input is empty
    }
}

function saveDestinations() {
    // Get user-selected destinations
    let fromDestination = document.getElementById("from-destination").value;
    let toDestination = document.getElementById("to-destination").value;

    // Store values in localStorage
    localStorage.setItem("fromDestination", fromDestination);
    localStorage.setItem("toDestination", toDestination);

    // Redirect to form.html
    window.location.href = "form.html";
}


function openBookingForm() {
    window.location.href = "form.html";
}

// Function to swap From and To destinations
function swapDestinations() {
    let fromInput = document.getElementById("from-destination");
    let toInput = document.getElementById("to-destination");

    let temp = fromInput.value;
    fromInput.value = toInput.value;
    toInput.value = temp;
}

// Hide dropdown when clicking outside
document.addEventListener("click", function(event) {
    // Check if the click was outside any of the dropdowns or inputs
    let dropdowns = document.querySelectorAll(".dropdown-list");
    let inputs = document.querySelectorAll("input");

    let clickedInside = false;

    // Check if the click was inside any input or dropdown
    inputs.forEach(input => {
        if (input.contains(event.target)) {
            clickedInside = true;
        }
    });

    dropdowns.forEach(dropdown => {
        if (dropdown.contains(event.target)) {
            clickedInside = true;
        }
    });

    if (!clickedInside) {
        dropdowns.forEach(list => {
            list.style.display = "none"; // Hide dropdown if clicked outside
        });
    }
});
