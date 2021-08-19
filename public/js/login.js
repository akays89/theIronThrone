document
.querySelector('#login-form');


const formHandler = async (event) => {
    event.preventDefault();
    // console.log("login click", event.submitter);
    // Collect values from the login form
    const user = document.querySelector('#user-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
    const endpoint =  event.submitter.id === "logIn" ? "logIn" : "signUp";
    console.log(endpoint);
  if (user && password) {
    // Send a POST request to the API endpoint
    const response = await fetch(`/api/users/${endpoint}`, {
      
      method: 'POST',
      body: JSON.stringify({ user, password }),
      headers: { 'Content-Type': 'application/json' },
    });
    document.location.replace("/");
    if (endpoint === "signUp") {
      
      if ( response.ok ) {
            document.location.reload();
          } else {
            alert(response.statusText);
            
          };
          document.location.reload();
  }}};


  document.addEventListener('submit', formHandler);

