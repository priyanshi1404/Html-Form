// Theme toggle
const toggle = document.getElementById("themeSwitch");
toggle.addEventListener("change", () => {
  document.body.classList.toggle("dark", toggle.checked);
});

// Form validation
const form = document.getElementById("registrationForm");
form.addEventListener("submit", function (e) {
  const phone = document.getElementById("phone").value;
  const password = document.getElementById("pass").value;
  const firstname = document.getElementById("firstname").value;

  if (!/^\d{10}$/.test(phone)) {
    alert("Phone number must be 10 digits.");
    e.preventDefault();
  }

  if (password.length < 6) {
    alert("Password must be at least 6 characters long.");
    e.preventDefault();
  }

  //Success message
  const container = document.querySelector(".container");
  container.innerHTML = `
    <h2>Form Submitted</h2>
    <p>Thank you, <strong>${firstname}</strong>! Your form has been submitted successfully. ✅</p>
  `;
});

// Show specialization dropdown only if B.Tech is selected
document.getElementById("course").addEventListener("change", function () {
  const specializationContainer = document.getElementById(
    "specialization-container"
  );
  if (this.value === "B.Tech") {
    specializationContainer.style.display = "block";
  } else {
    specializationContainer.style.display = "none";
    document.getElementById("specialization").value = "";
  }
});

// Show sub-specialization dropdown based on selected specialization
document
  .getElementById("specialization")
  .addEventListener("change", function () {
    const subSpecializationContainer = document.getElementById(
      "sub-specialization-container"
    );
    const subSpecializationSelect =
      document.getElementById("subSpecialization");

    const specialization = this.value;

    const subOptions = {
      CSE: [
        "AI & ML",
        "Cyber Security & Privacy",
        "Data Science",
        "Full Stack",
      ],
      ECE: ["Embedded Systems", "VLSI Design"],
      ME: ["Automobile", "Thermal"],
      CE: ["Structural", "Environmental"],
      EE: ["Power Systems", "Control Systems"],
    };

    subSpecializationSelect.innerHTML =
      '<option value="">Select Sub-specialization</option>';

    if (subOptions[specialization]) {
      subOptions[specialization].forEach((sub) => {
        const opt = document.createElement("option");
        opt.value = sub;
        opt.textContent = sub;
        subSpecializationSelect.appendChild(opt);
      });
      subSpecializationContainer.style.display = "block";
    } else {
      subSpecializationContainer.style.display = "none";
    }
  });
