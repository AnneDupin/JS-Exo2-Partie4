let array = ["PHP", "Javascript", "HTML", "CSS", "JAVA", "Bootstrap"];

function addLanguage(){
    let addLanguage = document.getElementById('language').value;
    let addArray = array.unshift(addLanguage); // ajout d'un élément au début du tableau 
    alert(addLanguage + " ajouté au tableau ! ")
    console.log(array);
};

function displayArray(){
    let displayArray = document.querySelector('.array').innerHTML = array;
    alert(array);
};