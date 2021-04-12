let lists = ["SQL", "PHP", "JavaScript", "CSS", "RUBY", "JSON", "Bootstrap"];
document.getElementById("button").addEventListener("click", function(){
    alert(document.getElementById('message').value);
});


function show(){
    alert(lists);
    document.getElementById("result").innerHTML = lists;
}
