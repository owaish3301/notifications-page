const markRead = document.querySelector("#mark-as-read");
const unreadCounter = document.querySelector("#unread-counter");
const dot = document.querySelectorAll(".dot");
const unread = document.querySelectorAll(".unread");

const read = () =>{
    dot.forEach(elem=>{
        elem.classList.remove("dot");
    })
    unreadCounter.innerText = "0";
    unread.forEach(elem=>{
        elem.classList.remove("unread");
        elem.classList.add("read");
    })
}

markRead.addEventListener("click",read);