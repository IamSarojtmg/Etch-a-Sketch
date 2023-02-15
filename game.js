const contDiv = document.createElement('section')
const mainDiv = document.createElement('div')

document.body.appendChild(contDiv)
contDiv.style.height = '500px';
contDiv.style.width = '500px'
contDiv.appendChild(mainDiv)

mainDiv.style.border = 'gold solid 1px';
mainDiv.style.display = 'grid';

document.documentElement.style.setProperty('--columns-row', 16 )

for (let x = 1; x <=256; x++)
// 256 loop is hardcoded and only works on 16. In other words 16x16 = 256.
{   
    const gridDiv = document.createElement('div')
    mainDiv.appendChild(gridDiv)
    mainDiv.style.gridTemplateColumns = 'repeat(var(--columns-row),1fr)';
    mainDiv.style.gridTemplateRows = 'repeat(var(--columns-row),1fr';


    // gridDiv.style.border = '1px solid white';
    gridDiv.style.aspectRatio = '1/1';
    

    gridDiv.addEventListener('mouseover', ()=>
        {
            gridDiv.style.backgroundColor = 'white'
        })
}

const btn = document.createElement('button')
document.body.appendChild(btn)
btn.style.width = '50px'
btn.style.height = '20px'
btn.textContent = 'Reset'

btn.addEventListener('click', ()=> 
{
    let userInput = prompt('Enter between 1 and 100');
    let multiply = userInput*userInput;
    mainDiv.textContent = ''; // clears the contents of the mainDiv.

    if(userInput >=100){
        return mainDiv.style.border = '';
    }

    document.documentElement.style.setProperty("--columns-row", userInput);
    
    for (let x = 1; x <= multiply; x++)
    {
        const newGridDiv = document.createElement('div')
        mainDiv.appendChild(newGridDiv)

        mainDiv.style.gridTemplateColumns = 'repeat(var(--columns-row), 1fr)';
        mainDiv.style.gridTemplateRows = 'repeat(var(--columns-row), 1fr)';
   





        // newGridDiv.style.border = '1px solid white';
        newGridDiv.style.aspectRatio = '1/1'





         newGridDiv.addEventListener('mouseover', ()=>
         {
             newGridDiv.style.backgroundColor = 'white'
         })
    }
    


})

