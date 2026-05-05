/*
when #hamburgButton is clicked:
    if #hamburgMenu is hidden:
        remove .hidden from #hamburgMenu
    else:
        add .hidden to #hamburgMenu
*/

$("#hamburgButton").on("click", function() {
    if ($("#hamburgMenu").hasClass("accessibleHidden")) {
        $("#hamburgMenu").removeClass("accessibleHidden");
    }
    else {
        $("#hamburgMenu").addClass("accessibleHidden");
    }
});
