window.onload = function(){
    let change = document.getElementById('change-color');
    change.addEventListener('change', function(e){
        document.body.classList.toggle('change' ,e.target.checked);
    })
}