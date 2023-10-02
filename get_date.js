const currentDate = new Date();

currentDate.setDate(currentDate.getDate());

const minDate = currentDate.toISOString().split("T")[0];

document.getElementById("my-date-picker").setAttribute("min", minDate);
