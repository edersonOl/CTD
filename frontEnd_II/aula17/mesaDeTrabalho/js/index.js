const button = document.getElementById('random');
button.onclick = () => {
    fetch('https://randomuser.me/api/')
        .then(response => {
          console.log(response);  
          return response.json();
        })
        .then(data => {
            console.log(data)
            const div = document.getElementById('div');
            for(index of data.results) {
                div.innerHTML = `<div class="card">
                <img src="${index.picture.large}" alt="Avatar" style="width:100%">
                <div class="container">
                  <h4><b>${index.name.first}, ${index.dob.age}</b></h4>
                  <p>${index.location.city}, ${index.location.state}</p>
                </div>
              </div>`
            }
        });
}
