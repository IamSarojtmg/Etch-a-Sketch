//create 16x16 div


const mainDiv = document.createElement('div')
mainDiv.classList.add('container')
document.body.appendChild(mainDiv)



function div ()
{
    for(x = 1; x <=256; x++)
    {
        const divOne = document.createElement('div')
        mainDiv.appendChild(divOne)
        divOne.classList.add('grids')
        divOne.style.backgroundColor = 'pink'
        divOne.style.height = 'auto'
        divOne.style.minWidth = '5.5%'

        divOne.style.borderColor = 'black'
        divOne.style.borderStyle = 'solid'
        divOne.style.borderWidth = '1px'
        divOne.style.flex = '1'
        
    }

}




div()

