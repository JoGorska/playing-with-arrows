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

const averagePoints = (arr, subject) => {
    let allResultsInSubject = []

    for (let i in arr) {
        // I need to access each student seperately
        const studentObject = arr[i]
        // I need to access results value for each student
        const resultObject = studentObject["results"]
        // result of a subject for a student
        oneResultInSubject = resultObject[subject]

        console.log(oneResultInSubject)
        return allResultsInSubject += oneResultInSubject
        


        
    }
    return allResultsInSubject
};

    let result = averagePoints(students, "maths");
    console.log(`result = ${result}`)