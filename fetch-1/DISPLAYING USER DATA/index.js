document.getElementById(`fetchuserbt`).addEventListener('click' ,fetchusers);

function fetchusers(){
    fetch('https://reqres.in/api/users')
    .then(responce => responce.json())
    .then(data =>{
        console.log(data.data);

        let output = '';
        data.data.forEach(user => {
            console.log(user)

            output  += `
            <div class="user-card">
            <img src="${user.avatar}" alt="User Avatar">
            <div class="user-details">
                <span class="name">${user.first_name}</span>
                <span class="email">${user.email}</span>
            </div>
        </div> 
        `

        })
        document.getElementById('userslist').innerHTML = output;

    })
}