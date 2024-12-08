function signup(userName) {
    let users = ["Anjali", "Sumiksha", "Yamini"];

    if (users.includes(userName)) {
        return "User Already Registered, Please Login";
    } else {
        users.push(userName);
        return "Signup Successful, Please Login";
    }
}


console.log(signup("Yamini")); 
console.log(signup("mohit "));     
