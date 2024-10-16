console.log("added")
function getInputValueById(id){
    const inputNumber=document.getElementById(id).value;
    const inputValue=parseFloat(inputNumber);
    return inputValue
}


//---------------------------- donation for Noakhali section------------------------------------

document.getElementById("Noakhali-button").addEventListener("click", function(){

    const amount=getInputValueById("Noakhali-input");

    // my balance
    let myBalance = document.getElementById("myBalance").innerText;
    myBalance = parseFloat(myBalance.replace(/[^0-9.]/g, ''));

    // noakhali balance
    let NoakhaliBalance = document.getElementById("Noakhali-balance").innerText;
    NoakhaliBalance = parseFloat(NoakhaliBalance.replace(/[^0-9.]/g, ''));
    
    if (amount>=0 && myBalance>=amount){
        const newNoakhaliBalance=NoakhaliBalance+amount;
        document.getElementById("Noakhali-balance").innerText=newNoakhaliBalance;

        const myUpdatedBalance=myBalance-amount;
        document.getElementById("myBalance").innerText=myUpdatedBalance;
    }
    else{
        alert("Invalid Amount");
    }
})


//-----------------------------donation for Feni section---------------------------------------- 

document.getElementById("Feni-button").addEventListener("click", function(){

    const amount=getInputValueById("Feni-input");

    // my balance
    let myBalance = document.getElementById("myBalance").innerText;
    myBalance = parseFloat(myBalance.replace(/[^0-9.]/g, ''));

    // Feni balance
    let FeniBalance = document.getElementById("Feni-balance").innerText;
    FeniBalance = parseFloat(FeniBalance.replace(/[^0-9.]/g, ''));
    
    if (amount>=0 && myBalance>=amount){
        const newFeniBalance=FeniBalance+amount;
        document.getElementById("Feni-balance").innerText=newFeniBalance;

        const myUpdatedBalance=myBalance-amount;
        document.getElementById("myBalance").innerText=myUpdatedBalance;
    }
    else{
        alert("Invalid Amount");
    }
})


//---------------------------------protest donation section------------------------------------

document.getElementById("Protest-button").addEventListener("click", function(){

    const amount=getInputValueById("Protest-input");

    // my balance
    let myBalance = document.getElementById("myBalance").innerText;
    myBalance = parseFloat(myBalance.replace(/[^0-9.]/g, ''));

    // Protest balance
    let ProtestBalance = document.getElementById("Protest-balance").innerText;
    ProtestBalance = parseFloat(ProtestBalance.replace(/[^0-9.]/g, ''));
    
    if (amount>=0 && myBalance>=amount){
        const newProtestBalance=ProtestBalance+amount;
        document.getElementById("Protest-balance").innerText=newProtestBalance;

        const myUpdatedBalance=myBalance-amount;
        document.getElementById("myBalance").innerText=myUpdatedBalance;
    }
    else{
        alert("Invalid Amount");
    }
})
