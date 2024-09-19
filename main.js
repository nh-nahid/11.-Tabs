import './style.css';



async function getData() {
    const response = await fetch("./textDB.json")
    return response.json()
}


async function showData (callName)  {

    const obj = await getData()
    const allText = obj.data;
const container = document.querySelector('.container-box')
    container.innerHTML = "";

    allText.forEach((data) => {

        const headline = data.headline;

        if(callName === headline){

         /*html*/

            const packHTML = ` <div><h5>${data.headline}</h5></div> 
                               <div><p class="text">${data.text}</p></div>`
      
           container.innerHTML += packHTML
        }
        
      
    })
}
// showData("Goals")
showData("History")

function button(){
    const allButton = document.querySelectorAll('button')
   allButton.forEach(function(btn){
    btn.addEventListener('click', function(){
        showData(btn.innerText)
    })
})
}

button()


