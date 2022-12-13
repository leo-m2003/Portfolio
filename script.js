let handlerClickonArrow = function(ev){
    if(ev.target.id == 'arrow'){
        let closed = ev.target.parentNode
        closed.classList.add('-translate-y-full')
        let open = ev.target.parentNode.offsetParent.lastElementChild
        open.classList.toggle('translate-y-full')
    }
}

let handlerClickonGlass = function(ev){
    if(ev.target.id == 'glass'){
        let closed = ev.target.parentNode.offsetParent.firstElementChild
        closed.classList.remove('-translate-y-full')
        let open = ev.target.parentNode
        open.classList.toggle('translate-y-full')
    }
}

let card = document.querySelector('#cards-container');
card.addEventListener('click', handlerClickonArrow)
card.addEventListener('click', handlerClickonGlass)
