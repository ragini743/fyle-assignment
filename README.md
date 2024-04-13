#### Declare variables in global scope so that we can use it in whole program whenever these requires  .

#### create validateGrossIncome function to validate and update error messages for gross income .

#### create validateExtraIncome function to validate and update error messages for extra income .

#### create validateDeductions function to validate and update error messages for deductions .

#### create validateAge function to validate and update error messages for age .

#### validateGrossIncome ,validateExtraIncome , validateDeductions and validateAge for each function add event listener for input fields so it triggers validation . I developed different validation for different input fields so that all fields did't depend upon each other  .if our user at first input fiels and not enter anything or try to enter string then that input will show error and other fields will have  in its previous state . if user fell first input and submit form then user got error in second and third input vice-verca .

#### create a calculateTax function to Calculate tax based on provided formula

#### add a eventListener to  submit button  in which input fields are validate . created condition to check weather errorText display property inline or not .errorText had inline property then return . and if not then call the calculateTax function . and calculateTax open the Modal .

#### created closeToModal function which is called when we clicked a cross-icon  . I designed a cross icon inside modal .whenever closeTOModal function call it makes input fields empty and remove the modal .

#### created a removeFormFields which is called inside closeToModal.




