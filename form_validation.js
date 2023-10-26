function formValidation() {
  var uname = document.registration.username;
  var pw = document.registration.password;
  var fname = document.registration.fname;
  var lname = document.registration.lname;
  var mail = document.registration.email;
  var zipnum = document.registration.zipcode;
  var engCheck = document.registration.english;
  var thCheck = document.registration.thai;

  if (username_validation(uname, 5, 12) &&
      pass_validation(pw, 6, 16) &&
      allLetter(fname) &&
      allLetter(lname) &&
      email_validation(mail) &&
      zip_validation(zipnum) &&
      validateLanguageSelection(engCheck, thCheck)) {
    return true;
  }

  return false;
}

function username_validation(uname, min, max) {
  var uname_len = uname.value.length;

  if (uname_len == 0 || uname_len >= max || uname_len < min) {
    Swal.fire({
      icon: "error",
      title: "Please Try Again!",
      text: `Username cannot be empty or length should be between ${min} to ${max}`,
    });
    uname.focus();
    return false;
  }
  return true;
}

function pass_validation(pw, min, max) {
  var pw_len = pw.value.length;

  if (pw_len == 0 || pw_len >= max || pw_len < min) {
    Swal.fire({
      icon: "error",
      title: "Please Try Again!",
      text: `Password cannot be empty or length should be between ${min} and ${max}`,
    });
    pw.focus();
    return false;
  }
  return true;
}

function allLetter(inputtxt) {
  var letters = /^[A-Za-z]+$/;

  if (inputtxt.value.match(letters)) {
    return true;
  } else {
    Swal.fire({
      icon: "error",
      title: "Please Try Again!",
      text: `${inputtxt.labels[0].innerHTML} Only letters (A-z) are allowed`,
    });
    inputtxt.focus();
    return false;
  }
}

function email_validation(mail) {
  var email = mail.value;
  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  if (!email.match(emailPattern)) {
    Swal.fire({
      icon: "error",
      title: "Please Try Again!",
      text: "Please enter a valid email address",
    });
    mail.focus();
    return false;
  }
  return true;
}

function zip_validation(zipnum) {
  var zip = zipnum.value;
  var numericPattern = /^[0-9]+$/;

  if (numericPattern.test(zip)) {
    return true;
  } else {
    Swal.fire({
      icon: "error",
      title: "Please Try Again!",
      text: "ZIP code must be numeric only",
    });
    zipnum.focus();
    return false;
  }
}

function validateLanguageSelection(engCheck, thCheck) {
  if (!engCheck.checked && !thCheck.checked) {
    Swal.fire({
      icon: "error",
      title: "Please Try Again!",
      text: "Please select the language",
    });
    return false;
  }
  return true;
}
function rowlimit(textarea, maxRows) {
  var lineHeight = parseInt(getComputedStyle(textarea).lineHeight, 15);
  var currentRows = textarea.value.split('\n').length;

  if (currentRows > maxRows) {
    textarea.value = textarea.value.split('\n').slice(0, maxRows).join('\n');
  }

  textarea.style.height = (maxRows * lineHeight) + 'px';
}