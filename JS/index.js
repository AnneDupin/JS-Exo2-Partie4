let array = ["SQL", "PCP", "CSS", "JavaScript", "Java", "Ruby", "Vanille"];
document.getElementById("demo").innerHTML = array;

function addFirst() {
  array.unshift("SQL");
  document.getElementById("demo").innerHTML = array;
}