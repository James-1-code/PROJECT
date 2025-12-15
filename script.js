function toggleMarriedFields() {
    const status = document.getElementById("maritalStatus").value;
    const fields = document.getElementById("marriedFields");

    fields.style.display = status === "Married" ? "block" : "none";

    if (status !== "Married") {
        document.getElementById("spouseName").value = "";
        document.getElementById("childrenCount").value = "";
    }
}

function processForm() {
    let name = document.getElementById("fullName").value.trim();
    let age = parseInt(document.getElementById("age").value);
    let occupation = document.getElementById("occupation").value;
    let maritalStatus = document.getElementById("maritalStatus").value;
    let children = parseInt(document.getElementById("childrenCount").value) || 0;
    let salary = parseFloat(document.getElementById("salary").value);
    let email = document.getElementById("email").value.trim();

    // Validation
    if (!name || !age || !occupation || !maritalStatus || !salary || !email) {
        alert("Please fill in all required fields.");
        return;
    }

    let msg = "<h3>Form Results:</h3>";

    // If-else logic
    if (age < 18) {
        msg += "<p>• You are underage.</p>";
    }
    else {
        msg += "<p>• You are an adult.</p>";
    }

    if (salary > 500000) {
        msg += "<p>• High earner!</p>";
    }
    else {
        msg += "<p>• Average income.</p>";
    }

    if (maritalStatus === "Married" && children > 2) {
        msg += "<p>• Big family!</p>";
    }
    else {
        msg += "<p>• Small family.</p>";
    }

    // Switch occupation message
    switch (occupation) {
        case "Student":
            msg += "<p>• Keep studying hard!</p>";
            break;
        case "Engineer":
            msg += "<p>• Building the future!</p>";
            break;
        case "Doctor":
            msg += "<p>• Thank you for your service!</p>";
            break;
        default:
            msg += "<p>• That's a great career!</p>";
            break;
    }

    document.getElementById("messages").innerHTML = msg;
    document.getElementById("messages").style.display = "block";
}