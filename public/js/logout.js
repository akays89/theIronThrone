const logOut = async () => {
    const response = await fetch('/api/user/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
    });
    if (response.ok) {
        document.location.replace('/');
    } else {
        alert('Failed to logout!');
    }
};

document.querySelector('#logOut').addEventListener('click', logOut);