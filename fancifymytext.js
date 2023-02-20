function onClickBigger() {
    console.log(document.querySelector('body').style.fontFamily)
    const textbox = document.getElementById('textinput');

    // Update the font size.
    textbox.style.fontSize = "24pt"
}

function onChangeFancy() {
    // Fancify the text in the textbox.
    const textbox = document.getElementById('textinput');
    textbox.style.color = "blue"
    textbox.style.fontWeight = "bold"
    textbox.style.textDecoration = "underline"
}


function onChangeBoring() {
    // Reset the textbox styles.
    const textbox = document.getElementById('textinput');
    textbox.style.color = ""
    textbox.style.fontWeight = ""
    textbox.style.textDecoration = ""
}


function onClickMoo() {
    const textbox = document.getElementById('textinput');
    let text = textbox.value;

    // Uppercase and split up the text by sentence.
    text = text.toUpperCase();
    parts = text.split(".");
    console.log(parts)

    // Add the moo suffix to each part.
    for (i = 0; i < parts.length; i++) {
        if (parts[i] == "") {  // Skip empty sentences.
            continue;
        }
        parts[i] += "-Moo.";
    }

    // Update the text in the textbox.
    textbox.value = parts.join("");
}