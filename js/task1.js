
$(document).ready(function () {
    console.log("ready!");
});

// First name validation
function first_name_validation() {
    let first_name = $("#first_name").val()
    if (first_name == "" || first_name == null) {
        $("#first_name_error").show()
        return false
    }
    else {
        $("#first_name_error").hide()
        return true
    }
}
$("#first_name").on("input", function () {
    first_name_validation()
});

// Last name validation
function last_name_validation() {
    let last_name = $("#last_name").val()
    if (last_name == "" || last_name == null) {
        $("#last_name_error").show()
        return false
    }
    else {
        $("#last_name_error").hide()
        return true
    }
}
$("#last_name").on("input", function () {
    last_name_validation()
});

// Email validation
function email_validation() {
    let email_regex = /^([-!#-'*+/-9=?A-Z^-~]+(\.[-!#-'*+/-9=?A-Z^-~]+)*|"([]!#-[^-~ \t]|(\\[\t -~]))+")@([0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?(\.[0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?)*|\[((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|IPv6:((((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){6}|::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){5}|[0-9A-Fa-f]{0,4}::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){4}|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):)?(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){3}|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,2}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){2}|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,3}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,4}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::)((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3})|(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3})|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,5}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3})|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,6}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::)|(?!IPv6:)[0-9A-Za-z-]*[0-9A-Za-z]:[!-Z^-~]+)])$/
    let email = $("#email").val()
    if (email == "" || email == null) {
        $("#email_error").text("this field is required")
        $("#email_error").show()
        return false
    }
    else {
        $("#email_error").text("")
        $("#email_error").hide()
        if (email.match(email_regex)) {
            $("#email_error").text("")
            $("#email_error").hide()
            return true
        } else {
            $("#email_error").text("Invalid email address!")
            $("#email_error").show()
            return false
        }
    }
}
$("#email").on("input", function () {
    email_validation()
});

// Phone No. validation
function phoneNo_validation() {
    let phoneNo_regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    let phoneNo = $("#phoneNo").val();
    if (phoneNo == "" || phoneNo == null) {
        $("#phoneNo_error").text("this field is required")
        $("#phoneNo_error").show()
        return false
    }
    else {
        $("#phoneNo_error").text("")
        $("#phoneNo_error").hide()
        if (phoneNo.match(phoneNo_regex)) {
            $("#phoneNo_error").text("")
            $("#phoneNo_error").hide()
            return true
        } else {
            $("#phoneNo_error").text("Invalid Phone number!")
            $("#phoneNo_error").show()
            return false
        }
    }
}
$("#phoneNo").on("input", function () {
    phoneNo_validation()
})

// Zip code validation
function zipcode_validation() {
    let zipcode_regex = /(^\d{6}$)|(^\d{6}-\d{4}$)/;
    let zipcode = $("#zipcode").val();
    if (zipcode == "" || zipcode == null) {
        $("#zipcode_error").text("this field is required")
        $("#zipcode_error").show()
        return false
    }
    else {
        $("#zipcode_error").text("")
        $("#zipcode_error").hide()
        if (zipcode.match(zipcode_regex)) {
            $("#zipcode_error").text("")
            $("#zipcode_error").hide()
            return true
        } else {
            $("#zipcode_error").text("Invalid Zipcode!")
            $("#zipcode_error").show()
            return false
        }
    }
}
$("#zipcode").on("input", function () {
    zipcode_validation()
})

// Date of Birth validation
function dob_validation() {
    let dob = $("#dob").val()
    if (dob == "" || dob == null) {
        $("#dob_error").show()
        return false
    }
    else {
        $("#dob_error").hide()
        return true
    }
}
$("#dob").on("input", function () {
    dob_validation()
});

$("#submit_btn").on("click", function () {
    console.log("submit button clicked")
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
    }
})