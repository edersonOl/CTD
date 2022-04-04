function sign() {
    const firstName = document.getElementById('nameInput').value;
    const lastName = document.getElementById('LastNameInput').value;
    const email = document.getElementById('emailInput').value;
    const validMail = email.toLowerCase();
    const password = document.getElementById('passwordInput').value;
    const password2 = document.getElementById('passwordInput2').value;
    const data = [];
    
    data.push(firstName, lastName, email, password, password2)

    
    for(index of data) {
        if(index == '') {
          return alert('Campo em branco');
        }
    }
    
    
    if (/[0-9]/.test(firstName) && /[0-9]/.test(lastName) || firstName === lastName) {
        return alert('Insira um nome válido');
    }
    if(/.com$/.test(validMail) === false) {
        return alert('Insira um sucesso válido');
    }
    if(password.length < 8 && password.length > 12) {
        return alert('Insira uma senha válida');
    }
    if(password != password2) {
        return alert('Insira uma senha válida');
    }else {
        localStorage.setItem('name', firstName);
        localStorage.setItem('lastName', lastName);
        localStorage.setItem('email', validMail);
        localStorage.setItem('password', password);
        alert('success!');
        window.location.href='./index.html'
    }
}
