/**
 * Initializes the form validation functionality.
 * @function initializeFormValidation
 */
$(function () {
    "use strict"

    /**
     * Handles form submission and validation.
     * @param {Event} event - The submit event.
     */
    initializeFormValidation()
})

/**
 * Initializes form validation and handles form submission.
 * @function initializeFormValidation
 * @memberof module:hotel/js/script
 * @returns {void}
 */
function initializeFormValidation() {
    "use strict"
    // using strict mode to avoid accidental global variables

    /**
     * Handles form submission and validation.
     * @param {Event} event - The submit event.
     */
    $(".requires-validation").each(function () {
        $(this).on("submit", function (event) {
            if (!this.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            } else {
                // not sure why this doesn't work date: 04/05/2024
                $("#submit-message").text("Form submitted")
            }
            $(this).addClass("was-validated")
        })
    })
}
