const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const sem1 = parseFloat(document.querySelector("#sem1").value);
  const sem2 = parseFloat(document.querySelector("#sem2").value);
  const result = document.querySelector(".result");

  if (sem1 === "" || sem1 < 0 || isNaN(sem1)) {
    result.innerHTML = "Please Enter Valid Sem-1 Pointer";
  } else if (sem2 === "" || sem2 < 0 || isNaN(sem2)) {
    result.innerHTML = "Please Enter Valid Sem-2 Pointer";
  } else {
    // Calculate CGPA
    const totalSGPA = sem1 + sem2;
    const numberOfSemesters = 2; // Assuming only two semesters for simplicity
    const cgpa = totalSGPA / numberOfSemesters;

    // Display the CGPA
    result.innerHTML = `Your CGPA is: ${cgpa.toFixed(2)}`;
  }
});

