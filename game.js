const contDiv = document.createElement('div')
const mainDiv = document.createElement('div')
// const gridDiv = document.createElement('div')

document.body.appendChild(contDiv)
contDiv.style.border = 'solid green';
contDiv.style.display = 'inline-block'
contDiv.appendChild(mainDiv)

mainDiv.style.border = 'solid red';
mainDiv.style.maxWidth = '500px'
mainDiv.style.display = 'flex';
mainDiv.style.flexWrap = 'wrap';



for (let x = 1; x <=256; x++)
{   
    const gridDiv = document.createElement('div')
    mainDiv.appendChild(gridDiv)
    gridDiv.style.border = '1px solid black';
    gridDiv.style.height = '30px'
    gridDiv.style.width = '30px'
}


const btn = document.createElement('button')
document.body.appendChild(btn)
btn.style.width = '50px'
btn.style.height = '20px'

btn.addEventListener('click', ()=> 
{

    let userInput = prompt('Enter between 1 and 100');
    let multiply = userInput*userInput;

    mainDiv.textContent = ''; // clears the contents of the mainDiv.

    for (let x = 1; x <=multiply; x++)
    {   
        const newGridDiv = document.createElement('div')
        mainDiv.appendChild(newGridDiv)
        newGridDiv.style.border = '1px solid black';
        newGridDiv.style.height = '30px'
        newGridDiv.style.width = '30px'

        // newGridDiv.addEventListener('mouseover', ()=>
        // {
        //     newGridDiv.style.backgroundColor = 'green'
        // })
    }
    


})

