function reverze() {
    let inputText = document.getElementById("inputText").value;
    let reversedText = inputText.split("").reverse().join("");
    document.getElementById("result").innerText = reversedText;
}

function rozdeleni() {
    let inputText = document.getElementById("inputText").value;
    let words = inputText.split(/\s+/);
    document.getElementById("result").innerText = words.join("\n");
}

function pocitanislov() {
    let inputText = document.getElementById("inputText").value;
    let wordToCount = prompt("Zadejte slovo pro počítání:");
    let count = inputText.split(wordToCount).length - 1;
    document.getElementById("result").innerText = `Počet výskytů slova '${wordToCount}': ${count}`;
}

function nahradit() {
    let inputText = document.getElementById("inputText").value;
    let textToReplace = prompt("Zadejte text k nahrazení:");
    let replacementText = prompt("Zadejte text nahrazení:");
    let replacedText = inputText.replace(new RegExp(textToReplace, 'g'), replacementText);
    document.getElementById("result").innerText = replacedText;
}

function najittext() {
    let inputText = document.getElementById("inputText").value;
    let searchText = prompt("Zadejte hledaný text:");
    let positions = [];
    let pos = inputText.indexOf(searchText);
    while (pos > -1) {
        positions.push(pos);
        pos = inputText.indexOf(searchText, pos + 1);
    }
    document.getElementById("result").innerText = `Pozice hledaného textu: ${positions.join(", ")}`;
}

function generatePassword() {
    var length = document.getElementById('passwordLength').value;
    var includeLowercase = document.getElementById('includeLowercase').checked;
    var includeUppercase = document.getElementById('includeUppercase').checked;
    var includeNumbers = document.getElementById('includeNumbers').checked;
    var includeSymbols = document.getElementById('includeSymbols').checked;

    var lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    var uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var numberChars = '0123456789';
    var symbolChars = '!@#$%^&*()_+{}:"<>?|[];\',./`~';

    var allChars = '';
    if (includeLowercase) allChars += lowercaseChars;
    if (includeUppercase) allChars += uppercaseChars;
    if (includeNumbers) allChars += numberChars;
    if (includeSymbols) allChars += symbolChars;

    var password = '';
    for (var i = 0; i < length; i++) {
        var charIndex = Math.floor(Math.random() * allChars.length);
        password += allChars[charIndex];
    }

    document.getElementById('passwordOutput').textContent = password;
}

function statistikyTextu() {
    let inputText = document.getElementById("inputText").value;

    // Počet znaků
    let charCount = inputText.length;

    // Počet slov - rozdělení textu podle bílých znaků a filtraci prázdných řetězců
    let wordCount = inputText.split(/\s+/).filter(function(n) { return n != '' }).length;

    // Počet vět - rozdělení textu podle teček, otazníků a vykřičníků
    let sentenceCount = inputText.split(/[.!?]+/).filter(function(n) { return n != '' }).length;

    // Vytvoření a zobrazení statistik
    let resultText = `Počet znaků: ${charCount}\nPočet slov: ${wordCount}\nPočet vět: ${sentenceCount}`;
    document.getElementById("result").innerText = resultText;
}

function caesarCipher(str, amount) {
    if (amount < 0) {
        return caesarCipher(str, amount + 26);
    }

    let output = '';
    for (let i = 0; i < str.length; i++) {
        let c = str[i];
        if (c.match(/[a-z]/i)) {
            let code = str.charCodeAt(i);
            if (code >= 65 && code <= 90) {
                c = String.fromCharCode(((code - 65 + amount) % 26) + 65);
            } else if (code >= 97 && code <= 122) {
                c = String.fromCharCode(((code - 97 + amount) % 26) + 97);
            }
        }
        output += c;
    }
    return output;
}

// Funkce pro šifrování a dešifrování pomocí Caesarovy šifry...
