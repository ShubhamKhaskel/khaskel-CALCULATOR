let screen=document.getElementById("screen");
buttons=document.querySelectorAll('button');
let result='';
for(i of buttons)
{
    i.addEventListener('click',(e)=>{
        buttonText=e.target.innerText;
        console.log(buttonText);
        if(buttonText=='X')
        {
            buttonText='*';
            result+=buttonText;
            screen.value=result;
        }
        else if(buttonText=='C')
        {
            result="";
            screen.value=result;
        }
        else if(buttonText=='=')
        {
            screen.value=eval(result);
        }
        else if(buttonText=='.')
        {
            result+=buttonText;
            screen.value=result;
        }
        else if(buttonText=='<-')
        {
            //result=result.slice[0,result.length];
            screen.value=screen.value.slice[0,screen.value.length];
        }
        else{
            result+=buttonText;
            screen.value=result;
        }
    })
}