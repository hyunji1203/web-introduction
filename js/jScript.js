function test(){
    const obj_length = document.getElementsByName("movie").length;
    var name = document.getElementById('input').value;
    let correct = 0;

    for (let i=0; i<obj_length; i++) {
        if (document.getElementsByName("movie")[i].checked == true) {
            correct++
        }
    }
    alert(name + "님, 저와 " + correct + "개의 취향이 같으시네요!");
}