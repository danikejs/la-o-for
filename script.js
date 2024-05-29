function tabuada(){
    num=parseInt(document.getElementById('num1').value);
    res=0.
    saida='';

    for(let i=1;i<=10;i++){
        res=num*i
        saida=`${saida} ${num} x ${i} ${res} <br>`;
    }
    document.getElementById('saida').innerHTML=saida
}