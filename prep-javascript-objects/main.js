var person = { firstName: 'Victor', lastName: 'Park', hobby: 'Golf' };
var fullName = person.firstName + ' ' + person.lastName;
console.log("This person's name is", fullName);
person.job = 'Racer';
console.log("This person's current job is:", person.job);
person.previousJob = 'Bum';
console.log("This person's previous job is:", person.previousJob);
console.log('The complete person object:', person);
