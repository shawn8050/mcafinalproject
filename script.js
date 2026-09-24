/* =========================================
   SCAN SOURCE SELECTION
========================================= */

const scanOptions = document.querySelectorAll(
    ".option"
);

scanOptions.forEach(function(option) {

    option.addEventListener("click", function() {

        const radio = option.querySelector(
            "input[type='radio']"
        );

        if (!radio) {
            return;
        }

        document
            .querySelectorAll(
                "input[name='scanSource']"
            )
            .forEach(function(item) {

                item.checked = false;

            });

        document
            .querySelectorAll(
                ".option"
            )
            .forEach(function(item) {

                item.classList.remove("selected");

            });

        radio.checked = true;

        option.classList.add("selected");

    });

});