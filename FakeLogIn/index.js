const btn = document.querySelector('.btn');
btn.addEventListener('click', ()=>{
    const name = document.querySelector('.name').value;
    const pass = document.querySelector('.pass').value;

    if (name !== "" && pass !== "") {
        alert('Eres un CRACK ' + name);
    }else{
        alert('Por favor llene todos los campos...');
    }
})