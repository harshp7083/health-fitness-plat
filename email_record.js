function save(e){
    e.preventDefault();
    let db = firebase.database()
    db.ref('Emails/').once('value', function(message_object) {
        var index = parseFloat(message_object.numChildren()) + 1
        db.ref('Emails/' + `email_${index}`).set({
          email: document.getElementById('update-mail').value,
        }).then(()=>{
          document.getElementById('update-mail').value = ""
          document.querySelector('.email-confirmation').classList.remove('d-none-msg')
          document.querySelector('.email-confirmation').classList.add('sliding')
          setTimeout(()=>{
            document.querySelector('.email-confirmation').classList.remove('sliding')
            document.querySelector('.email-confirmation').classList.add('sliding2')
          },1500)    
          setTimeout(()=>{
            document.querySelector('.email-confirmation').classList.remove('sliding2')
            document.querySelector('.email-confirmation').classList.add('d-none-msg')
          },2500)
          })
        }
      )

      
}
document.querySelector('.footer-form').addEventListener("submit",save)

