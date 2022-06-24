const http = new EasyHttp;

// http.get('https://jsonplaceholder.typicode.com/users');

const data = {
    name : 'John Doe',
    username : 'john62',
    email : 'johndoe@gmail.com'
}

// http.post('https://jsonplaceholder.typicode.com/users',data)
//     .then(data =>console.log(data))
//     .catch(err=>console.log(err));

//Updates user
// http.put('https://jsonplaceholder.typicode.com/users/7',data)
// .then(data =>console.log(data))
// .catch(err=>console.log(err));


//Delete user
http.delete('https://jsonplaceholder.typicode.com/users/7')
.then(data =>console.log(data))
.catch(err=>console.log(err));