var a = document.getElementById('submit');
var b = document.getElementById('birthday');
var c = document.getElementById('result');

const today = new Date();

function calculateAge(){
    let birthDate = new Date(b.value);
    let age;
    if (today.getMonth() > birthDate.getMonth() || (today.getMonth() == birthDate.getMonth() && today.getDate() >= birthDate.getDate())){
        age = today.getFullYear()-birthDate.getFullYear();
    }
    else{
        age = today.getFullYear()-birthDate.getFullYear()-1;
    }
    c.innerText = `귀하의 만 나이는 ${age} 입니다.`;

    return age;
}

a.addEventListener("click",calculateAge);