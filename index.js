console.log("hello");
function calculateTax() {
  // Fetch input values
  var grossIncome = document.getElementById("grossIncome").value;
  var extraIncome = document.getElementById("extraIncome").value || 0;
  var deductions = document.getElementById("deductions").value || 0;
  var age = document.getElementById("age").value;

  // Validate input values
  var errors = false;
  if (isNaN(grossIncome) || grossIncome <= 0) {
    document.getElementById("grossIncomeError").style.display = "inline";
    errors = true;
  } else {
    document.getElementById("grossIncomeError").style.display = "none";
  }
  // Validate other fields similarly
//  var taxCalculatorForm = document.getElementById("taxCalculatorForm");
//  console.log(taxCalculatorForm)
//  taxCalculatorForm.style.display="none"
  // If errors exist, stop processing
  if (errors) return;

  // Calculate tax based on provided formula
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
};



document.getElementById("submitButton").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    calculateTax(); // Call your function to calculate tax
    // displayResultModal(/* Pass tax amount as needed */); // Call function to display the modal
});


// hide modal
function closeToModal () {
    document.getElementById("modal").style.display = "hidden";
};
const 





