document.addEventListener("DOMContentLoaded", function () {
  class PaymentForm {
    constructor(formSelector, buttonSelector, inputSelector) {
      this.form = document.querySelector(formSelector);
      this.button = document.querySelector(buttonSelector);
      this.inputs = document.querySelectorAll(inputSelector);
      this.init();
    }

    init() {
      this.inputs.forEach((input) => {
        input.addEventListener("input", () => this.updateButtonStatus());
      });
      this.button.addEventListener("click", () => this.handleButtonClick());
      this.updateButtonStatus();
    }

    checkInputsFilled() {
      return Array.from(this.inputs).every(
        (input) => input.value.trim() !== ""
      );
    }

    updateButtonStatus() {
      this.button.disabled = !this.checkInputsFilled();
    }

    handleButtonClick() {
      if (this.checkInputsFilled()) {
        // Reset all input fields
        this.form.reset();

        // Show a pop-up message
        alert("Thank you! Your invoice will be loaded in a bit.");

        // Redirect to another page after 2 seconds
        setTimeout(() => {
          window.location.href = "konka.html";
        }, 2000);
      } else {
        // If not all inputs are filled, show an error message
        this.showError("Please fill in all fields before proceeding.");
      }
    }

    showError(message) {
      alert(message);
    }
  }

  const paymentForm = new PaymentForm(".form", ".checkout-btn", ".input-field");
});
