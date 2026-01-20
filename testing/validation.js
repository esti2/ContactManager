const validateContactAdd = (name, email, phone) => {
    if (!name || !email || !phone) {
        console.log(
            'Missing arguments for add command\nUsage: node app.js add "name" "email" "phone"',
        );
        return false;
    }
    if (!email.includes("@")) {
        console.log("Email must contain @ symbol");
        return false;
    }
    return true;
};

module.exports = {
    validateContactAdd
}
