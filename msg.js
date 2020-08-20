const {hash}=window.location;
const msg=(atob(hash.replace('#','')));
if(msg){
    document.querySelector('#msg-form').classList.add('hide');
    document.querySelector('#show-msg').classList.remove('hide');
    document.querySelector('h1').innerHTML=msg;
}

document.querySelector('form').addEventListener('submit',event=>{
    event.preventDefault();
    document.querySelector('#msg-form').classList.add('hide')
    document.querySelector('#link-form').classList.remove('hide')
    const inp=document.querySelector('#msg-input')
    const encrypt=btoa(inp.value)
    const link=document.querySelector('#link-input')
    link.value=`${window.location}#${encrypt}`;
    link.select();
})