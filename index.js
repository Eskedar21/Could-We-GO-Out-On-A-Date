    const askingGif = document.getElementById('ask');
    const celebrationGif = document.getElementById('celebration')
    const noButton = document.getElementById('no')



function hide (){
    askingGif.classList.add('hidden');
    celebrationGif.classList.remove('hidden')
}

noButton.addEventListener("mouseover", movingButton)

function movingButton (event) {
    const btn = event.target;
    event.preventPropagetion;
    btn.style.position = "absolute"
    btn.style.transition = "all 0.5s ease-in-out"
    btn.style.top = `${Math.floor(Math.random() * 90)}%`
    btn.style.left = `${Math.floor(Math.random() * 90)}%`


}