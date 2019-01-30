document.getElementById('submit-button').addEventListener('click', () => {
  let data = document.getElementById('json-text-input').value;
  console.log('clicked');
  fetch('http://localhost:3000', {
    method: 'POST',
    mode: 'cors',
    redirect: 'error',
    headers: {
      'Content-Type': 'application/json',
      // "Content-Type": "application/x-www-form-urlencoded",
    },
    body: JSON.stringify(data),
  }).then((data) => {
    console.log('data from first promise', data);
    fetch('http://localhost:3000/data', {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((data) => {
      data = data.text().then((data) => {

        console.log('data', data);
      }) 
    });
  });
});
