'use strict';

const upload = (e = this.event) => {
  const msg = document.querySelector('#message');
  console.log('working');
  e.preventDefault();
  msg.innerHTML = 'Uploading';
  const file = document.querySelector('input[type="file"]');
  const data = new FormData();


  data.append('fileup', file.files[0]);

  const set = {
    method: 'POST',
    credentials: 'same-origin',
    body: data
  };

  fetch('/node/profile', set).then((response) => {
    return response.json();
  }).then((json) => {
    msg.innerHTML = 'Completed';
    console.log(json);
    //document.querySelector('img').src = json.src;
  });
};

document.querySelector('form').addEventListener('submit', upload);

// HTML contains element 'message'. This is used to show the server's response
// Select it and save it as a variable/object

// make function 'upload' which
// - prevents the form from sending
// - writes 'Upload in progress...' into 'message' element
// - selects the file input field
// - makes FormData -object and adds the file selected byt the user into the object
// - send the file to the same url as in task a by using fetch -method
// - when file upload is complete, writes server response to 'message' element
// function ends

// make an event listener which calls upload function when the form is submitted
