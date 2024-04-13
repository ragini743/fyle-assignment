console.log("hello");

var grossIncome, extraIncome, deductions, age;

function validateGrossIncome() {
  grossIncome = document.getElementById("grossIncome").value;
  var grossIncomeError = document.getElementById("grossIncomeError");

  if (!grossIncome || isNaN(grossIncome) || grossIncome <= 0) {
    grossIncomeError.style.display = "inline";
  } else {
    grossIncomeError.style.display = "none";
  }
}

function validateExtraIncome() {
  extraIncome = document.getElementById("extraIncome").value;
  var extraIncomeError = document.getElementById("extraIncomeError");

  if (!extraIncome || isNaN(extraIncome) || extraIncome < 0) {
    extraIncomeError.style.display = "inline";
  } else {
    extraIncomeError.style.display = "none";
  }
  console.log(extraIncomeError);
}

function validateDeductions() {
  deductions = document.getElementById("deductions").value;
  var deductionsError = document.getElementById("deductionsError");

  if (!deductions || isNaN(deductions) || deductions < 0) {
    deductionsError.style.display = "inline";
  } else {
    deductionsError.style.display = "none";
  }
  console.log(deductionsError);
}

function validateAge() {
  age = document.getElementById("age").value;
  var ageError = document.getElementById("ageError");

  if (!age) {
    ageError.style.display = "inline";
  } else {
    ageError.style.display = "none";
  }
  console.log(ageError);
}

// Event listeners for input fields to trigger validation
document
  .getElementById("grossIncome")
  .addEventListener("input", validateGrossIncome);
document
  .getElementById("extraIncome")
  .addEventListener("input", validateExtraIncome);
document
  .getElementById("deductions")
  .addEventListener("input", validateDeductions);
document.getElementById("age").addEventListener("change", validateAge);

function calculateTax() {
  var tax = 0;
  var taxableIncome =
    parseFloat(grossIncome) + parseFloat(extraIncome) - parseFloat(deductions);
  if (taxableIncome > 800000) {
    if (age === "<40") {
      tax = 0.3 * (taxableIncome - 800000);
    } else if (age === "≥40 & <60") {
      tax = 0.4 * (taxableIncome - 800000);
    } else if (age === "≥60") {
      tax = 0.1 * (taxableIncome - 800000);
    }
  }
  // Show modal with final tax calculation
  var modalContent = "Final Tax Calculation:\n";
  modalContent += "Taxable Income: " + taxableIncome + "\n";
  modalContent += "Tax Amount: " + tax + "\n";
  // Add more details as needed

  document.getElementById("modalContent").innerText = modalContent;
  document.getElementById("modal").style.display = "block";
}

document
  .getElementById("submitButton")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    validateGrossIncome();
    validateExtraIncome();
    validateDeductions();
    validateAge();

    // Check if any errors exist
    const grossIncomeError =
      document.getElementById("grossIncomeError").style.display;
    const extraIncomeError =
      document.getElementById("extraIncomeError").style.display;
    const deductionsError =
      document.getElementById("deductionsError").style.display;
    const ageError = document.getElementById("ageError").style.display;

    if (
      grossIncomeError === "inline" ||
      extraIncomeError === "inline" ||
      deductionsError === "inline" ||
      ageError === "inline"
    ) {
      // There are errors in the form, do not open the modal
      return;
    }

    calculateTax();
  });

function closeToModal() {
  document.getElementById("modal").style.display = "none";
  clearFormFields();
}
function clearFormFields() {
  document.getElementById("grossIncome").value = "";
  document.getElementById("extraIncome").value = "";
  document.getElementById("deductions").value = "";

  document.getElementById("grossIncomeError").style.display = "none";
  document.getElementById("extraIncomeError").style.display = "none";
  document.getElementById("deductionsError").style.display = "none";
}

const closeModal = document.getElementById("closeModal");

closeModal.addEventListener("click", () => closeToModal());
