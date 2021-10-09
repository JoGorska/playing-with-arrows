let students = [
    {
        name: 'John',
        subjects: ['maths', 'english', 'cad'],
        teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
        results: {maths: 90, english: 75, cad: 87},
    },
    {
        name: 'Emily',
        subjects: ['science', 'maths','english', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', english: 'Joan', art: 'Simon'},
        results: {science: 93, maths: 95, english: 80, art: 95},
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
        results: {science: 63, maths: 79, art: 95},
    }
];

// You will create a function using the arrow syntax that should return the average marks of a subject. 
// Your function should loop through the array that is passed in. For each student contained within, you should: 1. Check if the subject passed into your function is in said student's results object; 2. If it is, add it to a cumulative total of all results for that subject. 3. Finally, return the average result for the subject.
// You will only be asked to return the average marks for the subject english, but your function must be able to return the average marks if another subject name is used, and the tests will check for this.
// Declare a variable named averagePoints using the keyword const
// Assign it an arrow function, which should take two parameters named: arr and subject
// The function should have a return statement
// Declare a variable named: result using the keyword let
// Assign it the return value from calling the function averagePoints, and passing it the students array and one of the following strings: 'maths', 'english', 'cad', 'science', 'art'
// log out the variable result to see its value
// The function should return the correct value no matter which subject is used.

const averagePoints = (arr, subject) => {
    let allResultsInSubject = 0

    for (let i in arr) {

            // I need to access each student seperately
            const studentObject = arr[i]
            // I need to access results value for each student
            const resultObject = studentObject["results"]
            // checks if student has this subjects, if he has, than adds to all results in subject
            if (subject in resultObject) {
                // result of a subject for a student
                oneResultInSubject = resultObject[subject]


                // ads one result in subject for each student to all results
                allResultsInSubject += parseInt(oneResultInSubject)
            }
    }
    // all results in subject i a sum of all results for all students
    // arr.lenght is a number of students in the array
    return allResultsInSubject / arr.length
};

    let result = averagePoints(students, "art");
    console.log(result)
