//create 16x16 div


const mainDiv = document.createElement('div')
mainDiv.classList.add('container')
document.body.appendChild(mainDiv)



function div ()
{
    for(x = 1; x <=256; x++)
    {
        const smallBox = document.createElement('div')
        mainDiv.appendChild(smallBox)
        smallBox.style.backgroundColor = 'pink'
        smallBox.style.height = '30px'
        smallBox.style.minWidth = '5.5%'
        smallBox.style.borderColor = 'black'
        smallBox.style.borderStyle = 'solid'
        smallBox.style.borderWidth = '1px'
        // divOne.style.flex = '1'

        smallBox.addEventListener('mouseover', ()=>{
            smallBox.style.backgroundColor = 'green'
        })
    }

}
div()




