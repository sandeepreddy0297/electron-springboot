// const apiUrl = "http://localhost:8080/api";

// function getStudentData() {
//   fetch(`${apiUrl}/students`)
//     .then((response) => response.json())
//     .then((data) => {
//       const studentTable = document.getElementById("studentData");
//       studentTable.innerHTML = "";

//       data.forEach((student, index) => {
//         const row = document.createElement("tr");
//         row.innerHTML = `
//           <td>${index + 1}</td>
//           <td>${student.firstName}</td>
//           <td>${student.lastName}</td>
//           <td>${student.age}</td>
//           <td>${student.address}</td>
//           <td>
//             <button class="btn btn-sm btn-warning me-2" onclick='editStudent(${JSON.stringify(
//               student
//             )})'>Edit</button>
//             <button class="btn btn-sm btn-danger" onclick="deleteStudent(${
//               student.id
//             })">Delete</button>
//           </td>
//         `;
//         studentTable.appendChild(row);
//       });
//     })
//     .catch((error) => console.error("Error fetching student data:", error));
// }

// function submitStudentForm(event) {
//   event.preventDefault();

//   const student = {
//     id: document.getElementById("studentId").value || null,
//     firstName: document.getElementById("firstName").value,
//     lastName: document.getElementById("lastName").value,
//     age: parseInt(document.getElementById("age").value),
//     address: document.getElementById("address").value,
//   };

//   const method = student.id ? "PUT" : "POST";
//   const endpoint = student.id ? `${apiUrl}/${student.id}` : apiUrl;

//   fetch(endpoint, {
//     method: method,
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(student),
//   })
//     .then(() => {
//       resetForm();
//       getStudentData();
//     })
//     .catch((error) => console.error("Error saving student:", error));
// }

// function deleteStudent(id) {
//   fetch(`${apiUrl}/${id}`, {
//     method: "DELETE",
//   })
//     .then(() => getStudentData())
//     .catch((error) => console.error("Error deleting student:", error));
// }

// function editStudent(student) {
//   document.getElementById("studentId").value = student.id;
//   document.getElementById("firstName").value = student.firstName;
//   document.getElementById("lastName").value = student.lastName;
//   document.getElementById("age").value = student.age;
//   document.getElementById("address").value = student.address;
// }

// function resetForm() {
//   document.getElementById("studentForm").reset();
//   document.getElementById("studentId").value = "";
// }
