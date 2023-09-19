const getColor = () => {
    const randomNumber = Math.floor(Math.random()*16777215);
    const randomCode = ("#"+randomNumber.toString(16)).toUpperCase();
    document.body.style.backgroundColor = randomCode;
    document.querySelector('h2').outerHTML = `<h2>${randomCode}</h2>`;
    navigator.clipboard.writeText(randomCode);
    
}
//Initial call
getColor();
//Event call
document.getElementById("btn").addEventListener('click', getColor);