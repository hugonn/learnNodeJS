let getUser = (id,callback) => {
    let user ={
        id : id,
        name: "hugo"
    };
    setTimeout(()=>{
        callback(user); // simulando delay
    },3000)
    
};

//AIzaSyCAhgQAAWqd1d0GP3VvoR-2nAOCblLCkio

getUser(31, (userObject) => {
    console.log(userObject);

})