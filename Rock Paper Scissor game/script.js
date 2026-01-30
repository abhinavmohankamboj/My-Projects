function play(user){
    const choices=["rock","paper","scissor"];
    const comp=choices[Math.floor(Math.random()*3)];
    let msg="";
    if(user===comp) msg="it's a tie!";
    else if(
        (user==="rock" && comp==="scissor")||
        (user==="paper" && comp==="rock")||
        (user==="scissor" && comp==="paper")
    ) msg="you win!";
    else msg="computer wins!";
    document.getElementById("result").innerText=`you chose ${user}, computer chose ${comp}. ${msg}`;
}