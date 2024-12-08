function login(userName, password) {
    let users = ["Anjali", "Sumiksha", "Yamini"];
    const correctPassword = "Emp@123";

    if (!users.includes(userName)) {
        return "User Not Found, Please Signup";
    } else if (password !== correctPassword) {
        return "Wrong Password...";
    } else {
        return "Login Successful...";
    }
}


console.log(login("Anjali", "Emp@123"));  // Login Successful...
console.log(login("Yamini", "kmc")); // Wrong Password....

