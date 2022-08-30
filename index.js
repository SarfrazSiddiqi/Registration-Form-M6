
function submitForm (){
    let firstName = document.getElementById('first-name').value
    let lastName = document.getElementById('last-name').value
    let email = document.getElementById('email').value
    let phone = document.getElementById('phone').value
    let batch = document.getElementById('batch').value
    let module = document.getElementById('module').value
    let tnc = document.getElementById('tnc').checked
    // console.log(firstName) 
    let error =false;

    if(firstName.length>=3){
        document.getElementById('valid-firstName').style.display='block'
        document.getElementById('invalid-firstName').style.display='none'
    }
    else{
        document.getElementById('valid-firstName').style.display='none'
        document.getElementById('invalid-firstName').style.display='block'
        error = true
    } 
      if(lastName.length>=3){
        document.getElementById('valid-lastName').style.display='block'
        document.getElementById('invalid-lastName').style.display='none'
      }
      else{
        document.getElementById('valid-lastName').style.display='none'
        document.getElementById('invalid-lastName').style.display='block'
        error = true
    }
     if(email && email.includes('@') && email.includes('.')
        && email.lastIndexOf('.')<=email.length-3
         && email.indexOf('@')!==0){
            document.getElementById('valid-email').style.display='block'
            document.getElementById('invalid-email').style.display='none'
          }
          else{
            document.getElementById('valid-email').style.display='none'
            document.getElementById('invalid-email').style.display='block'
            error = true
         }
         if(phone.length===10){
            document.getElementById('valid-phone').style.display='block'
            document.getElementById('invalid-phone').style.display='none'
          }
          else{
            document.getElementById('valid-phone').style.display='none'
            document.getElementById('invalid-phone').style.display='block'
            error = true
         }
         if(batch!='None'){
            document.getElementById('valid-batch').style.display='block'
            document.getElementById('invalid-batch').style.display='none'
          }
          else{
            document.getElementById('valid-batch').style.display='none'
            document.getElementById('invalid-batch').style.display='block'
            error = true
         }
          if(module!='None'){
            document.getElementById('valid-module').style.display='block'
            document.getElementById('invalid-module').style.display='none'
          }
          else{
            document.getElementById('valid-module').style.display='none'
            document.getElementById('invalid-module').style.display='block'
            error = true
          }
          if(tnc){
            document.getElementById('invalid-check').style.display='none'
            
          }
          else{
            document.getElementById('invalid-check').style.display='block'
            error= true
        }
        if(!error){
            alert('Your details have been saved successfully!')
        document.getElementById('first-name').value=""
        document.getElementById('last-name').value=""
        document.getElementById('email').value=""
        document.getElementById('phone').value=""
        document.getElementById('batch').value=""
        document.getElementById('module').value=""
        document.getElementById('tnc').checked= false

        document.getElementById('valid-firstName').style.display='none'
        document.getElementById('valid-lastName').style.display='none'
        document.getElementById('valid-email').style.display='none'
        document.getElementById('valid-phone').style.display='none'
        document.getElementById('valid-batch').style.display='none'
        document.getElementById('valid-module').style.display='none'
        }
    }