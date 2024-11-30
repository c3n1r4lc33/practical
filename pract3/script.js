const typeshit = document.forms.spider;
const realshit = document.forms.test;
let trueshit = 0;
    typeshit.addEventListener("submit", (event) => {
    event.preventDefault();
    let res = "";
    let test = true;
    if (typeshit.names.validity.valid) {
        res += "Имя: " + typeshit.names.value + `\n`
    }else {
        typeshit.names.labels[1].innerText = "Неверный ввод.";
        test = false;
    }
    if (typeshit.date.validity.valid) {
        res += "Дата рождения: " + typeshit.date.value + `\n`
    }else {
        typeshit.date.labels[1].innerText = "Неверный ввод.";
        test = false;
    }
    res += "Пол: " + typeshit.gender.value
    if (test) {
        document.documentElement.style.setProperty("--per", -600 + "px");
        document.getElementById("print").innerText = res

    }
});

realshit.addEventListener("submit", (event) => {
    event.preventDefault();
    

    trueshit+=Number(realshit.gor.validity.valid)
    trueshit+=Number(realshit.sch.validity.valid)
    trueshit += Number(realshit.q1.value)
    trueshit += Number(realshit.q2.value)
    trueshit += Number(realshit.q3.value)
    document.documentElement.style.setProperty("--per", 2 * -600 + "px");
    document.getElementById("print1").innerText ="Ваш результат: "+ trueshit 

        
   
})
    

function atfirst() {
    typeshit.reset()
    realshit.reset()
    typeshit.names.labels[1].innerText = " ";
    typeshit.date.labels[1].innerText = " ";
    document.documentElement.style.setProperty("--per", 0 + "px");
}
const btnshit2 = document.getElementById("btnshit2");
btnshit2.addEventListener("click", atfirst );

function atback(){
    typeshit.names.labels[1].innerText = " ";
    typeshit.date.labels[1].innerText = " ";
    document.documentElement.style.setProperty("--per", 0 + "px");
    
}
const btnshit = document.getElementById("btnshit");
btnshit.addEventListener("click", atback);

