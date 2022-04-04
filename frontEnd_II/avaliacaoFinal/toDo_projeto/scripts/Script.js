function logIn() {
    const inputEmail = document.getElementById('inputEmail').value;
    const validEmail = inputEmail.toLowerCase();
    const inputPassword = document.getElementById('inputPassword').value;
    
    if(inputPassword.length > 8 && inputPassword.length < 12 && /.com$/.test(validEmail)) {
        localStorage.setItem('login', validEmail);
    
        alert('Login feito com sucesso!');
    
        window.location.href='./tarefas.html'
    }else {
        alert('Login não efetuado!')
    }
}




