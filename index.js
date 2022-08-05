const request1 = require('request');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const csvWriter = createCsvWriter({
    path: 'user.csv',
    header: [
        {id: 'id', title: 'ID'},
        {id: 'email', title: 'Email'},
        {id: 'first_name', title: 'First Name'},
        {id: 'last_name', title: 'Last Name'}
    ]
});

let url = 'https://reqres.in/api/users';
let options = {json: true};

request1(url, options, (error, res, body) => {
    if (error) {
        return console.log(error)
    };

    if (!error && res.statusCode == 200) {
        csvWriter
            .writeRecords(body.data)
            .then(()=> console.log('The CSV file was written successfully'));
    };
});