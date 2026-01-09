var name = 'Diyan';
function ScopeTest(){
    var number = 8;
    document.getElementById('namePrint').innerHTML = name;
}            
document.getElementById('NumberPrint').innerHTML = number; // This will not work
