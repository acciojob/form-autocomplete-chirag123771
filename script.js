//your JS code here. If required.
  function saveFormData() {
        const formData = {
            firstName: document.getElementById('firstName').value,
            lastName: document.getElementById('lastName').value,
            email: document.getElementById('email').value,
        };

        // Convert the form data to a JSON string and store it in Local Storage
        localStorage.setItem('formData', JSON.stringify(formData));

        alert('Form data has been saved!');
    }

    // Function to load form data from Local Storage and populate the form
    function loadFormData() {
        const storedFormData = localStorage.getItem('formData');

        if (storedFormData) {
            const formData = JSON.parse(storedFormData);

            document.getElementById('firstName').value = formData.firstName || '';
            document.getElementById('lastName').value = formData.lastName || '';
            document.getElementById('email').value = formData.email || '';
        }
    }

    // Load form data when the page is loaded
    window.onload = loadFormData;

