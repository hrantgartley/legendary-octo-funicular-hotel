$(function () {
    "use strict"
    $(".requires-validation").each(function () {
        $(this).on("submit", function (event) {
            if (!this.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            } else {
                $("#submit-message").text("Form submitted")
            }

            $(this).addClass("was-validated")
        })
    })
})
