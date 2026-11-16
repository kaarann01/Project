$(document).ready(function () {

    $("#five-section").accordion({
        heightStyle: "content",
        active:0,

        activate: function (event, ui) {

            $("#five-section .ui-accordion-header")
                .removeClass("active-header")
                .addClass("default-header");

            ui.newHeader
                .removeClass("default-header")
                .addClass("active-header");
        }
    });
$("#five-section .ui-accordion-header").addClass("default-header");

    $("#five-section .ui-accordion-header").first()
        .removeClass("default-header")
        .addClass("active-header");

});
