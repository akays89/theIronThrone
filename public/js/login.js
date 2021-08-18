const formHandler = async (event) => {
    event.preventDefault();
    // console.log("login click", event.submitter);
    // Collect values from the login form
    const user = document.querySelector('#user-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
    const endpoint =  event.submitter.id === "logIn" ? "login" : "signup";
    console.log(endpoint);
  if (user && password) {
    // Send a POST request to the API endpoint
    const response = await fetch(`/api/users/${endpoint}`, {
      
      method: 'POST',
      body: JSON.stringify({ user, password }),
      headers: { 'Content-Type': 'application/json' },
    });
    // if (endpoint === "signup") {
      
    //   if ( response.ok ) {
    //         document.location.replace('/');
    //       } else {
    //         alert(response.statusText);
    //  };
  }};

  document
    .querySelector('#login-form')
     .addEventListener('submit', formHandler);
  

