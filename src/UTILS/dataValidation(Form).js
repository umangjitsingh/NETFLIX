export function validateData(email, password ) {

   const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
   const isPasswordValid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/.test(password);

   if (!isEmailValid) return "Email ID is not valid";
   if (!isPasswordValid) return "Password is not valid";

   return null;
}

export function validateName(name){
   const isNameValid = /^[a-zA-Z]{2,40}$/.test(name);
   if(!isNameValid) return "Name is not valid";

   return null;
}