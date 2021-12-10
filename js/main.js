const text = document.querySelector('.text-box p');
text.innerHTML = text.innerText.split("").map(
    (char, i) =>
    `<span style="transform:rotate(${i * 10.2}deg)">${char}</span>`
).join("");