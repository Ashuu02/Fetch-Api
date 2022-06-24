class EasyHttp{
    get(url){
        fetch(url)
            .then(res => res.json())
            .then(data=>console.log(data))
            .catch(err=>console.log(err));
    }

    post(url,data){
        return new Promise((resolve,reject)=>{
            fetch(url,
                {
                    method:'POST',
                    headers: {
                        'content-type':'application/json'
                    },
                    body: JSON.stringify(data)
                })
                .then(res => res.json())
                .then(data=>resolve(data))
                .catch(err=>reject(err));
        })
    }
    put(url,data){
        return new Promise((resolve,reject)=>{
            fetch(url,
                {
                    method:'PUT',
                    headers: {
                        'content-type':'application/json'
                    },
                    body: JSON.stringify(data)
                })
                .then(res => res.json())
                .then(data=>resolve(data))
                .catch(err=>reject(err));
        })
    }

    delete(url){
        return new Promise((resolve,reject)=>{
            fetch(url,
                {
                    method:'DELETE',
                    headers: {
                        'content-type':'application/json'
                    },
                    body: JSON.stringify(data)
                })
                .then(res => res.json())
                .then(()=>resolve('Resource deleted ....'))
                .catch(err=>reject(err));
        })
    }
};

