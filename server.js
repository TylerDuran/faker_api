const express = require("express");
const { faker } = require('@faker-js/faker');
const app = express();
const PORT = 8000;

// ---- middleware ----
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// --------------------

const User = class {
    constructor() {
        this.password = faker.internet.password(),
            this.email = faker.internet.email(),
            this.phone = faker.phone.phoneNumberFormat(),
            this.lastName = faker.name.lastName(),
            this.firstName = faker.name.firstName(),
            this.id = faker.datatype.number()
    }
};


// let user1 = new User()
// console.log(user1);

const Company = class {
    constructor() {
        this.id = faker.datatype.number()
        this.companyName = faker.company.companyName(),
            this.address = {
                street: faker.address.streetName(),
                city: faker.address.city(),
                state: faker.address.state(),
                zipCode: faker.address.zipCode(),
                country: faker.address.country()
            }
    }
}

// let company1 = new Company()
// console.log(company1);


// Create an api route "/api/users/new" that returns a new user

app.get("/api/users/new", (req, res) => {
    // req.body will contain the form data from Postman or from React
    console.log(req.body);
    let user1 = new User();
    res.json({ status: "ok", user1 });
});

// Create an api route "/api/companies/new" that returns a new company

app.get("/api/companies/new", (req, res) => {
    // req.body will contain the form data from Postman or from React
    console.log(req.body);
    let company1 = new Company();
    res.json({ status: "ok", company1 });
});

// Create an api route "/api/user/company" that returns both a new user and a new company
app.get("/api/user/company", (req, res) => {
    // req.body will contain the form data from Postman or from React
    console.log(req.body);
    let user1 = new User();
    let company1 = new Company();
    res.json({ status: "ok", user1, company1 });
});


// this needs to be below the other code blocks
app.listen(PORT, () => console.log(`>> SERVER started on port ${PORT} and is listening for REQuests to RESpond to <<`))