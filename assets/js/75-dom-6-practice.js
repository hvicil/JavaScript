import { students } from "../data/students.js";

const loadStudents = () => {
  let strStudents = "";

  students.forEach((student, index) => {
    strStudents += `
            <tr>
            <th scope="row">${index + 1}</th>
            <td>${student.name}</td>
            <td>${student.point}</td>
            <td><button class="btn btn-danger btn-delete">Sil</button></td>
            </tr>
        `;
  });

  document.querySelector("#tblStudents tbody").innerHTML = strStudents;
};

const setStudentBg = () => {
  const rows = document.querySelectorAll("#tblStudents tbody tr");

  for (let row of rows) {
    const point = row.querySelector("td:nth-child(3)").innerText;
    if (point < 60) {
      row.classList.add("table-danger");
    }
  }
};

loadStudents();
setStudentBg();

document.querySelectorAll(".btn-delete").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const row = e.target.closest("tr");
    const name = row.querySelector("td").innerText;

    const result = confirm(
      `${name} isimli kaydi silmek istediginizden emin misiniz?`
    );

    if (!result) return;

    row.remove();
  });
});

document.querySelectorAll("#tblStudents tbody tr").forEach((row) => {
  row.addEventListener("click", (e) => {
    e.target.closest("tr").classList.toggle("table-success");
  });
});