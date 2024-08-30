var modals = document.querySelectorAll('.modal');
var btns = document.querySelectorAll(".open-modal");
var spans = document.getElementsByClassName("close-modal");

for(let i = 0; i < btns.length; i++){
    btns[i].onclick = function() {
        modals[i].style.display = "block";
    }
}

for(let i = 0; i < spans.length; i++){
    spans[i].onclick = function() {
        modals[i].style.display = "none";
    }
}

window.onclick = function(event) {
    for(let i = 0; i < modals.length; i++){
        if (event.target == modals[i]) {
            modals[i].style.display = "none";
        }
    }
}

var resumeButton = document.createElement('button');
resumeButton.textContent = "Download Resume";
resumeButton.classList.add('download-resume');
resumeButton.onclick = function() {
    window.location.href = 'Resume.jpg'; 
document.body.appendChild(resumeButton);

document.querySelector('.download-resume').style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    padding: 10px 20px;
    font-size: 16px;
    background-color: lightgoldenrodyellow;
    color: black;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`}