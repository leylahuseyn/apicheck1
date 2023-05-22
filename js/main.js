const btn = document.querySelector('#btn');
btn.addEventListener('click',function(){
fetch('https://646bceed7d3c1cae4ce44e88.mockapi.io/card',{
    method: "POST",
    headers :{
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name : document.querySelector('#name').value,
        image : document.querySelector('#image').value,
        price : document.querySelector('#price').value

    })
}).then(res=>{
    if(res.ok){
        successAlert('tamam')
         document.querySelector('#name').value='';
         document.querySelector('#image').value='';
         document.querySelector('#price').value='';
    }
    else{
        errorAlert('yanlis')
    }
    
})
    .catch(()=> errorAlert('yanlis'))
})
