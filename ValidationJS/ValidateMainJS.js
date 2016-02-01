
function ValidatePage() {

    if (ValidateEmail() && ValidateDate()) {
        alert("Все ок");
        
    }

}

function ValidateEmail() {
    var testEmail = document.getElementById("txtEmail").value;

    if (testEmail == null || testEmail == "") {
        alert("Заполните поле Email");
        return false;
    }
    else {
        if (ValidateEmailMask(testEmail)) {
            return true;
        }
        else {
            alert("Email введен в неверном формате");
            return false;
        }
    }
}
function ValidateEmailMask(email) {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
function ValidateDate() {
    var sDay = document.getElementById('txtStartDay').value;
    var sMonth = document.getElementById('txtStartMonth').value;
    var sYear = document.getElementById('txtStartYear').value;

    var eDay = document.getElementById('txtEndDay').value;
    var eMonth = document.getElementById('txtEndMonth').value;
    var eYear = document.getElementById('txtEndYear').value;

    if ((sDay == null || sDay == "") || (sMonth == null || sMonth == "") || (sYear == null || sYear == "")) {
        alert("Заполните все поля 'с какого числа'");
    }
    else {
        if ((sDay == null || sDay == "") || (sMonth == null || sMonth == "") || (sYear == null || sYear == "")) {
            alert("Заполните все поля 'по какое число'");           
        }
        else {
            if (isValidDate(sDay, sMonth, sYear) && isValidDate(eDay, eMonth, eYear)) {
                var startDate = Date(sYear, sMonth, sDay);
                var endDate = Date(eYear, eMonth, eDay);
                if ((startDate <= endDate)) {

                    return true;
                }

                return false;
            }
            else {
                alert("Проверьте введенные даты");
                return false;
            }
        }
    }



}
function isValidDate(testDay, testMonth, testYear) {
    var day = parseInt(testDay, 10);
    var month = parseInt(testMonth, 10);
    var year = parseInt(testYear, 10);

    if (year < 1000 || year > 3000 || month == 0 || month > 12)
        return false;

    var monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0))
        monthLength[1] = 29;

    return day > 0 && day <= monthLength[month - 1];
}