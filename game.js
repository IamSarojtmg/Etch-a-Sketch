const mainDiv = document.createElement('div')
mainDiv.classList.add('container')
document.body.appendChild(mainDiv)

function div ()
{
    for(x = 1; x <=256; x++)
    {
        const smallBox = document.createElement('div')
        mainDiv.appendChild(smallBox)
        smallBox.classList.add('grid')
        smallBox.addEventListener('mouseover', ()=>{
            smallBox.style.backgroundColor = 'green'
        })
    }
    
    
    
}
div()




const button = document.createElement('button')
button.classList.add('button')
document.body.appendChild(button)
button.addEventListener('click', ()=>{
    let userInput = prompt('Enter number between 0 - 100')
    console.log(userInput);
})