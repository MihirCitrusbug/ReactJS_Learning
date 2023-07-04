
// * First name validation
function first_name_validation() {
    let first_name = document.getElementById("first_name").value.trim();
    if (first_name == "" || first_name == null) {
        document.getElementById("first_name_error").style.display = "block";
        return false
    }
    else {
        document.getElementById("first_name_error").style.display = "none";
        return true
    }
}

// * Last name validation
function last_name_validation() {
    let last_name = document.getElementById('last_name').value.trim();
    if (last_name == "" || last_name == null) {
        document.getElementById("last_name_error").style.display = "block";
        return false
    }
    else {
        document.getElementById("last_name_error").style.display = "none";
        return true
    }
}

// * Email validation
function email_validation() {
    let email_regex = /^([-!#-'*+/-9=?A-Z^-~]+(\.[-!#-'*+/-9=?A-Z^-~]+)*|"([]!#-[^-~ \t]|(\\[\t -~]))+")@([0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?(\.[0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?)*|\[((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|IPv6:((((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){6}|::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){5}|[0-9A-Fa-f]{0,4}::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){4}|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):)?(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){3}|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,2}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){2}|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,3}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,4}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::)((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3})|(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3})|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,5}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3})|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,6}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::)|(?!IPv6:)[0-9A-Za-z-]*[0-9A-Za-z]:[!-Z^-~]+)])$/
    let email = document.getElementById('email').value.trim();
    let email_error = document.getElementById("email_error")
    if (email == "" || email == null) {
        email_error.textContent = "this field is required";
        email_error.style.display = "block"
        return false
    }
    else {
        email_error.textContent = "";
        email_error.style.display = "none"
        if (email.match(email_regex)) {
            email_error.textContent = "";
            email_error.style.display = "none"
            return true
        } else {
            email_error.textContent = "Invalid email address!";
            email_error.style.display = "block"
            return false
        }
    }
}

// * Phone No. validation
function phoneNo_validation() {
    let phoneNo_regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    let phoneNo = document.getElementById("phoneNo").value.trim();
    let phoneNo_error = document.getElementById("phoneNo_error");
    if (phoneNo == "" || phoneNo == null) {
        phoneNo_error.textContent = "this field is required";
        phoneNo_error.style.display = "block"
        return false
    }
    else {
        phoneNo_error.textContent = "";
        phoneNo_error.style.display = "none"
        if (phoneNo.match(phoneNo_regex)) {
            phoneNo_error.textContent = "";
            phoneNo_error.style.display = "none"
            return true
        } else {
            phoneNo_error.textContent = "Invalid Phone number!";
            phoneNo_error.style.display = "block"
            return false
        }
    }
}

// * Zip code validation
function zipcode_validation() {
    let zipcode_regex = /(^\d{6}$)|(^\d{6}-\d{4}$)/;
    let zipcode = document.getElementById("zipcode").value.trim();
    let zipcode_error = document.getElementById("zipcode_error")
    if (zipcode == "" || zipcode == null) {
        zipcode_error.textContent = "this field is required";
        zipcode_error.style.display = "block"
        return false
    }
    else {
        zipcode_error.textContent = "";
        zipcode_error.style.display = "none"
        if (zipcode.match(zipcode_regex)) {
            zipcode_error.textContent = "";
            zipcode_error.style.display = "none"
            return true
        } else {
            zipcode_error.textContent = "Invalid Zipcode!"
            zipcode_error.style.display = "block"
            return false
        }
    }
}

// * Date of Birth validation
function dob_validation() {
    let dob = document.getElementById('dob').value
    if (dob == "" || dob == null) {
        document.getElementById("dob_error").style.display = "block"
        return false
    }
    else {
        document.getElementById("dob_error").style.display = "none"
        return true
    }
}

function submit_fuc() {
    let first_name_flag = first_name_validation()
    let last_name_flag = last_name_validation()
    let email_flag = email_validation()
    let phoneNo_flag = phoneNo_validation()
    let zipcode_flag = zipcode_validation()
    let dob_flag = dob_validation()

    if (first_name_flag && last_name_flag && email_flag && phoneNo_flag && zipcode_flag && dob_flag) {
        Swal.fire(
            'Good job!',
            'You clicked the button!',
            'success'
        )
        document.querySelector(".swal2-confirm").addEventListener("click", (event) => {
            window.location.reload();
        });
    }
}

