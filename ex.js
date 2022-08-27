

let myLeads = []

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const tabBtn = document.getElementById("tab-btn")
const deleteBtn = document.getElementById("delete-btn")
// let closeBtn = document.getElementsByClassName("close")[0]
const ulEl = document.getElementById("ul-el")


// to save the links we add local storage even if you refresh it will be there
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))


if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

function render(leads){
    let listItems = ""
    for(let i=0; i < leads.length; i++){
        listItems += `
        <li>
              <a target='_blank' href='${leads[i]}'>
                 ${leads[i]}
               </a>
        </li>
         `
       
    }
    ulEl.innerHTML = listItems
}

// save tab button function
tabBtn.addEventListener("click", function(){
    // grab the url of current tab directly 
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){

        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })

 })
   

// delete all the links when double clicked delete-btn
deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear()
    myLeads = []
    render(myLeads)

})


// closeBtn.addEventListener("click", function(){

// })

inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    // after save btn the input text should be empty box
    inputEl.value = ""
    //  to save the links we add local storage even if you refresh it will be there
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)

})



