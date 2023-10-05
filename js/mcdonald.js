let button = document.getElementById(`order-btn`);
button.addEventListener(`click`, function(e){
    let randomTime = 
    setTimeout(function(){
        new Promise(function(resolve,reject){
            document.getElementById(`hidden`).style.display = `block`
            resolve("promise resolved")
        }).then(res =>{
            console.log(res);
        })
        
    }, randomTime);
})