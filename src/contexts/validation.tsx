export const validate = (e: any, form?:any) => {
    
    if (e.type === 'submit') {
     const errors:any = {}
     errors.name = validate_name(form.name)
     errors.email = validate_email(form.email)
     errors.comments = validate_comments(form.comments)
     return errors
 
    } else {
         const {id, value} = e.target
         switch(id) {
             case 'name':
                 return validate_name(value)
             case 'email':
                 return validate_email(value)
             case 'comments':
                 return validate_comments(value)
         }
    }
 }
 
 
 const validate_name = (value:string) => {
     const regex_name = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u
 
     if (!value)
         return 'A name is required'
     else if (value.length < 2)
         return 'Your name must be longer then 2 characters'
     else if (!value.match(regex_name))
         return 'Your name can not include numbers or special characters'
     else
         return null
 }
 
 const validate_email = (value:string) => {
     const regex_email = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
     
     if (!value)
         return 'An email address is required'
     else if (!regex_email.test(value))
         return 'You must enter an valid email address, eg. tobias@domain.se'
     else
         return null
 }
 
 const validate_comments = (value:string) => {
     if (!value)
         return 'A comment is required'
     else if (value.length < 5)
         return 'Your comment must be at least 5 characters long'
     else
         return null
 }