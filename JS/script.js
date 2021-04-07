const form = document.getElementById('form')
const errorElement = document.getElementById('error')
const payment = document.getElementById("payment")
const success = document.getElementById("success")
const checkAkkoord = document.getElementById("checkAkkoord")

errorElement.style.display = "none"
success.style.display = "none"
payment.style.display = "none"


function validateForm() {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let errors = []
        // https://www.w3schools.com/js/js_validation.asp
        if (form.voornaam.value == "" || form.voornaam.value == null) {
            errors.push('Het veld voornaam is vereist. ')
        }
        if (form.naam.value == "" || form.naam.value == null) {
            errors.push('Het veld naam is vereist. ')
        }
        if (form.gebruikersnaam.value == "" || form.gebruikersnaam.value == null) {
            errors.push('Het veld gebruikersnaam is vereist. ')
        }
        if (form.mail.value == "" || form.mail.value == null) {
            errors.push('Het veld mail is vereist. ')
        }

        if (ValidateEmail(form.mail.value) == false) {
            errors.push('Het veld mail  is niet correct. ')
        }
        if (form.wachtwoord.value == "" || form.wachtwoord.value == null  && form.herhaalWachtwoord.value == "" || form.herhaalWachtwoord.value == null) {
            errors.push('Het veld wachtwoord is vereist.')
        }
        if (form.wachtwoord.value.length < 7 ) {
            errors.push('Het wachtwoord moet langer zijn dan 7 karakters. ')
        }
        if (form.wachtwoord.value != null && form.herhaalWachtwoord.value != null) {
            if (alertpassword(form.wachtwoord.value, form.herhaalWachtwoord.value) == false) {
                errors.push('Je wachtwoorden komen niet overeen. ')
            }
        }
        if (checkPC(form.postcode.value)) {
            errors.push("De waarde van postcode moet tussen 1000 en 9999 liggen.")
        }
        if (form.postcode.value == "") {
            errors.push("Het veld postcode is vereist.")
        }
        // https://stackoverflow.com/questions/9887360/how-can-i-check-if-a-checkbox-is-checked
        if (checkAkkoord.checked == false) {
            errors.push("Je moet de algemene voorwarden accepteren.")
        }
        if (errors.length > 0) {
            errorElement.innerHTML = '\<h4\>Yikes, errors...</h4>' + errors.join('<br>')
            errorElement.style.display = "inline"
        }
        else {
            errorElement.style.display = "none"
            var veld = document.querySelector('input[type="radio"]:checked').dataset.title;
            validatePayment(veld);
            success.style.display = "inline"
        }
    })

}
function alertpassword(herhaalWachtwoord, wachtwoord) {
    //https://www.w3schools.com/howto/howto_js_password_validation.asp
    //https://www.w3resource.com/javascript/form/password-validation.php
    if (herhaalWachtwoord != wachtwoord) {
        return false;
    }
}
function ValidateEmail(inputText) {
    // https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(inputText).toLowerCase());
}

function validatePayment(veld) {
    payment.innerHTML = " <h4>Betalingwijze</h4> <p>Je betalingswijze is " + veld;
    payment.style.display = "inline"
}

function checkPC(veld) {
    if (veld < 0 || veld > 10000) {
        return true;
    }
}