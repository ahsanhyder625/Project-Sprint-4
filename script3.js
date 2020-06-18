var book=function(event){
    var id,user,dt,address,mob
    user=localStorage.getItem("user")
    address=JSON.parse(localStorage.getItem(user))['address']
    mob=JSON.parse(localStorage.getItem(user))['mob']
    id=event.target.parentNode.id
    dt=new Date()
    dt.setHours(dt.getHours()+1)
    if(id){
        alert("The "+id+" will reach on the address "+address+" by "+dt.toLocaleTimeString()+'. '+'Will contact you on '+mob+'.')
    }
};
window.addEventListener('click',book)