var popupbg=document.querySelector('.popupbg')
var popup=document.querySelector('.popup')
function show(){
    popup.style.display='block'
    popupbg.style.display='block'
}
var closepop=document.getElementById('close')

closepop.addEventListener('click',function(){
    popup.style.display='none'
    popupbg.style.display='none'
})

var mainelement=document.querySelector('.mainelement')
var popuptit=document.getElementById('popuptit')
var description=document.getElementById('description')
var addbtn=document.getElementById('add')

addbtn.addEventListener('click',function(event){
    var newbox=document.createElement('div')
    newbox.setAttribute('class','list-box')
    newbox.innerHTML=`<h1>${popuptit.value}</h1>
                <p>${description.value}</p>
                <button onclick="listremove(event)">Delete</button>`
    mainelement.append(newbox)
    popup.style.display='none'
    popupbg.style.display='none'
})

// var deletelist=document.getElementById('delelist')

function listremove(event){
    event.target.parentElement.remove()
}

// deletelist.addEventListener('click',function(event){
//     event.target.parentElement.remove()
// })