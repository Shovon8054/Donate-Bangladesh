
function getInputValueById(id){
    const inputNumber=document.getElementById(id).value;
    const inputValue=parseFloat(inputNumber);
    return inputValue
}




//---------------- donation for Noakhali section------------------------------------

document.getElementById("Noakhali-button").addEventListener("click", function(event){
    event.preventDefault();

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

        // history added
        const p = document.createElement('p');
        p.innerText = `${amount} Taka Donated for Flood at Noakhali, Bangladesh on ${new Date().toLocaleString()}`;
        document.getElementById("history").appendChild(p);
        const myBox=document.getElementById("p");




        p.style.border="3px solid black";
        p.style.marginLeft="20rem";
        p.style.marginRight="20rem";
        p.style.padding="1rem";
        p.style.fontWeight="600"
        p.style.marginBottom="10px"
    }
    else{
        alert("Invalid Amount");
    }
})


//------------------donation for Feni section---------------------------------------- 

document.getElementById("Feni-button").addEventListener("click", function(event){
    event.preventDefault();

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

        const p = document.createElement('p');
        p.innerText = `${amount} Taka Donated for Flood at Feni, Bangladesh on ${new Date().toLocaleString()}`;
        document.getElementById("history").appendChild(p);
        const myBox=document.getElementById("p");


        p.style.border="3px solid black";
        p.style.marginLeft="20rem";
        p.style.marginRight="20rem";
        p.style.padding="1rem";
        p.style.fontWeight="600"
        p.style.marginBottom="10px"
    }
    else{
        alert("Invalid Amount");
    }
})


//----------------protest donation section------------------------------------

document.getElementById("Protest-button").addEventListener("click", function(event){
    event.preventDefault();

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


        const p = document.createElement('p');
        p.innerText = `${amount} Taka Donated for 15500 Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh on ${new Date().toLocaleString()}`;
        document.getElementById("history").appendChild(p);
        const myBox=document.getElementById("p");


        p.style.border="3px solid black";
        p.style.marginLeft="20rem";
        p.style.marginRight="20rem";
        p.style.padding="1rem";
        p.style.fontWeight="600"
        p.style.marginBottom="10px"
    }
    else{
        alert("Invalid Amount");
    }
})



document.getElementById("history-btn").addEventListener("click", function(){
    document.getElementById("home").classList.add("hidden");
    document.getElementById("history").classList.remove("hidden");
})


document.getElementById("donation-btn").addEventListener("click", function(){
    document.getElementById("home").classList.remove("hidden");
    document.getElementById("history").classList.add("hidden");
})

