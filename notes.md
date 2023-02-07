# Documentation

 *Remember that doing a flex 1 will fill out your remaining space of you container. You were having this issue when trying to create 16x16 grid. Right now in the 16x16 you do not need flex because height and minWidth is taking care of the sizes and the wrap is filling the container evenly.*

 *Remember that the code that is local cannot be used outside its scope or globally. For e.g smallBox is inside for loop and I had to write the event listener inside it, for it to work.* 

 ### **HOW TO MANUPLATE OUTER DIV TO RESIZE ACCORDING TO INNERDIV**
- Turn the outerdiv display into inline-block
    `outerDiv.style.display = 'inline-block'`


### **MAX-WIDTH**
- If the browser has a width higher than the declared max-width, then do not render the widht of the element any further. However if the browser width is smaller than the element itself then yes render the element thinner so that it can fit in the new width of the browser. 

### **REPLACING DIV FIXED**
- For this one this is what I did.
    1. When the user clicks the button and inputs his data, the mainDiv contents gets cleared away.
    2. Like this `mainDiv.textContent = '';`
    3. Than the data entered by the user gets sent to the loop where it creates a newGridDiv and displays its contents inside the mainDiv.