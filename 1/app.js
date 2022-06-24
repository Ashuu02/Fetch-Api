document.getElementById('button1').addEventListener('click',getText);
document.getElementById('button2').addEventListener('click', getJson);
document.getElementById('button3').addEventListener('click', getApi);


//get the local file data
function getText(){
    fetch('test.txt')
        // .then(function (res){
        //     return res.json();
        // })
        .then(res => res.text())
        .then(function (data) {
            console.log(data);
            document.getElementById('output').innerHTML = data;
        })
        .catch(err => console.log(err))
}

//get the local json file
function getJson() {
    fetch('posts.json')
        .then(res => res.json())
        .then(data => {
            let output ='';
            data.forEach(post => {
                output += `<li>${post.title}</li>`
            })
            
            document.getElementById('output').innerHTML = output;
        })
        .catch(err => console.log(err))
}

// Get from the external API
function getApi() {
    fetch('https://api.github.com/users')
        .then(res => res.json())
        .then(data=> {
            let output ='';
            data.forEach(post => {
                output += `<li>${post.login}</li>`
            })
            
            document.getElementById('output').innerHTML = output;
        })
        .catch(err => console.log(err))
}