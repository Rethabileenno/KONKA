document.addEventListener("DOMContentLoaded", function() {
  // Define a class for the payment form
  class PaymentForm {
      constructor(formSelector, buttonSelector, inputSelector) {
          // Select DOM elements
          this.form = document.querySelector(formSelector);
          this.button = document.querySelector(buttonSelector);
          this.inputs = document.querySelectorAll(inputSelector);

          // Bind event listeners
          this.init();
      }

      // Initialize the form
      init() {
          // Add event listeners for input fields
          this.inputs.forEach(input => {
              input.addEventListener('input', () => this.updateButtonStatus());
          });

          // Add event listener for button click
          this.button.addEventListener('click', () => this.handleButtonClick());

          // Initially disable the button
          this.updateButtonStatus();
      }

      // Check if all input fields are filled
      checkInputsFilled() {
          return Array.from(this.inputs).every(input => input.value.trim() !== '');
      }

      // Enable/disable button based on input status
      updateButtonStatus() {
          this.button.disabled = !this.checkInputsFilled();
      }

      // Handle button click
      handleButtonClick() {
          if (this.checkInputsFilled()) {
              // Reset all input fields
              this.form.reset();

              // Redirect to another page after 2 seconds
              setTimeout(() => {
                  window.location.href = 'another_page.html';
              }, 2000);
          } else {
              // If not all inputs are filled, show an error message
              this.showError('Please fill in all fields before proceeding.');
          }
      }

      // Show error message
      showError(message) {
          alert(message);
      }
  }

  // Instantiate the PaymentForm class
  const paymentForm = new PaymentForm('.form', '.checkout-btn', '.input-field');
});
