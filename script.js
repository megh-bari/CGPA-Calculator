const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const sem1 = parseFloat(document.querySelector("#sem1").value);
  const sem2 = parseFloat(document.querySelector("#sem2").value);
  const result = document.querySelector(".result");

  if (sem1 === "" || sem1 < 0 || isNaN(sem1) || sem1 > 10) {
    result.innerHTML = "Please Enter Valid Sem-1 SGPA (0-10)";
  } else if (sem2 === "" || sem2 < 0 || isNaN(sem2) || sem2 > 10) {
    result.innerHTML = "Please Enter Valid Sem-2 SGPA (0-10)";
  } else {
    //* Calculate CGPA
    const totalSGPA = sem1 + sem2;
    const numberOfSemesters = 2; 
    const cgpa = totalSGPA / numberOfSemesters;

    result.innerHTML = `Your CGPA is: ${cgpa.toFixed(2)}`;
  }
});
