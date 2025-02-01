document.getElementById("booking-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the form from submitting traditionally

    // Get form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const from = document.getElementById("from").value;
    const to = document.getElementById("to").value;

    // Prepare the data to be sent in the POST request
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("from", from);
    formData.append("to", to);

    // Send the data to Google Apps Script
    fetch("https://script.google.com/macros/s/AKfycbxdueBzdpHjqnbplgAPAN-IEK31FKTFT4Ee90wcEfxCnpVISLJX015iOqq3TNujE9Q-fg/exec", {
        method: "POST",
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        // Add confirmation message in the DOM
        const confirmationMessage = document.createElement('p');
        confirmationMessage.textContent = "Booking successfully submitted!";
        confirmationMessage.style.color = 'green';
        document.getElementById("book-form").appendChild(confirmationMessage);

        // Optionally, clear the form
        document.getElementById("booking-form").reset();
    })
    .catch(error => {
        console.error("Error:", error);
    
        // Create a wrapper for the success message and dark overlay
        const successOverlay = document.createElement('div');
        successOverlay.classList.add('success-overlay'); // For dark background and centering
    
        // Create a wrapper for the message and icon
        const successMessageWrapper = document.createElement('div');
        successMessageWrapper.classList.add('success-message-wrapper'); // For styling and animation
    
        // Create the green checkmark icon
        const checkmarkIcon = document.createElement('div');
        checkmarkIcon.classList.add('checkmark-icon');
    
        // Create the success message text
        const successMessage = document.createElement('p');
        successMessage.textContent = "Booking successfully submitted!";
        successMessage.style.color = 'green';
    
        // Create the "Go to Home" clickable message
        const goHomeMessage = document.createElement('p');
        goHomeMessage.textContent = "Go to Homepage";
        goHomeMessage.classList.add('go-home-message');
        goHomeMessage.addEventListener('click', () => {
            window.location.href = 'index.html'; // Redirect to home page
        });
    
        // Append the checkmark icon and message to the wrapper
        successMessageWrapper.appendChild(checkmarkIcon);
        successMessageWrapper.appendChild(successMessage);
        successMessageWrapper.appendChild(goHomeMessage); // Add the Go to Home message
    
        // Append the wrapper to the overlay
        successOverlay.appendChild(successMessageWrapper);
    
        // Append the overlay to the body
        document.body.appendChild(successOverlay);
    
        // Add the pop-in animation class
        successMessageWrapper.classList.add('pop-in');
    
        // Hide the success message after 3 seconds (fade-out)
        setTimeout(() => {
            successMessageWrapper.classList.add('fade-out');
            successOverlay.classList.add('fade-out');
        }, 3000); // 3 seconds delay before fading out
    });
    
    
    
});