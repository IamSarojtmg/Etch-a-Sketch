const contDiv = document.createElement('section')
const mainDiv = document.createElement('div')
// const gridDiv = document.createElement('div')

document.body.appendChild(contDiv)
// contDiv.style.border = 'solid goldenrod 15px';
// contDiv.style.display = 'flex'
// contDiv.style.justifyContent = 'center';
contDiv.style.height = '600px';
contDiv.style.width = '600px'
contDiv.appendChild(mainDiv)





























mainDiv.style.height = '0';
mainDiv.style.width = '100%';
mainDiv.style.paddingBottom = '100%';
mainDiv.style.border = 'red solid';
mainDiv.style.display = 'flex';
mainDiv.style.flexWrap = 'wrap';
console.log(mainDiv);



for (let x = 1; x <=256; x++)
{   
    const gridDiv = document.createElement('div')
    mainDiv.appendChild(gridDiv)
    gridDiv.style.border = '1px solid black';
    gridDiv.style.height = '30px'
    gridDiv.style.width = '30px'

    gridDiv.addEventListener('mouseover', ()=>
        {
            gridDiv.style.backgroundColor = 'green'
        })
}


const btn = document.createElement('button')
document.body.appendChild(btn)
btn.style.width = '50px'
btn.style.height = '20px'

btn.addEventListener('click', ()=> 
{

    let userInput = prompt('Enter between 1 and 100');
    let multiply = userInput*userInput;

    console.log(mainDiv);


    mainDiv.textContent = ''; // clears the contents of the mainDiv.

    for (let x = 1; x <=multiply; x++)
    {   
        const newGridDiv = document.createElement('div')
        mainDiv.appendChild(newGridDiv)
        // mainDiv.style.maxWidth = '500px'
        console.log(mainDiv);
        newGridDiv.style.border = '1px solid black';
        newGridDiv.style.height = '30px'
        newGridDiv.style.width = '30px'

        newGridDiv.addEventListener('mouseover', ()=>
        {
            newGridDiv.style.backgroundColor = 'green'
        })
    }
    


})

