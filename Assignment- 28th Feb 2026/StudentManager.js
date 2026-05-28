
let students = [
    {
        name: "Bhavana",
        marks: [85, 90, 88]
    },
    {
        name: "Rahul",
        marks: [70, 75, 80]
    },
    {
        name: "Anita",
        marks: [95, 92, 89]
    }
];


function calculateAverage(marks) {
    let sum = 0;
    for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
    }
    return sum / marks.length;
}


students.forEach(student => {
    let avg = calculateAverage(student.marks);
    console.log("Name:", student.name);
    console.log("Marks:", student.marks);
    console.log("Average:", avg.toFixed(2));
    console.log("----------------------");
});