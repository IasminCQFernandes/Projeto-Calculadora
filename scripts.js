function calculate(event){
    event.preventDefault();
    let bill = document.getElementById('bill').value;
    let servico = document.getElementById('servico').value;
    let people = document.getElementById('people').value;

    if(bill == ''| servico == 0){
        alert("Por favor, preencha os valores")
        return; 
    }

    if(people == "" | people <= 1){
        people = 1;
        document.getElementById('dividir').style.display="none"
    } else {
        document.getElementById('dividir').style.display="block"
    }
    let total = (bill * servico)/people;
    total=total.toFixed(2);
    document.getElementById('valor').innerHTML = total;
    document.getElementById('total').style.display="block";
}
document.getElementById('total').style.display="none";
document.getElementById('dividir').style.display="none";

document.getElementById('form').addEventListener('submit', calculate);

