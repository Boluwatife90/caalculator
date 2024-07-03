var display = document.getElementById('display')
    var button = Array.from(document.getElementsByClassName('button'))



  
    button.map(button =>{
      button.addEventListener('click',(e)=>{
        if(e.target.innerText ===  '=' ){
            try{
                display.innerText =  eval(display.innerText)
            }catch(e){
              
                display.innerText = 'Error!'
            }
        }
        else if (e.target.innerText === 'c'){
          display.innerText = ''
        }else if(e.target.innerText === 'delect'){
          display.innerText = display.innerText.slice(0,-1)
        }
        else{
          display.innerText += (e.target.innerText)
        }

      })
    })

    