const dropzone = document.querySelector('.dropzone');
dropzone.addEventListener('dragover', (event) => {
  event.preventDefault();
});

dropzone.addEventListener('drop', (event) => {
  event.preventDefault();
  const files = event.dataTransfer.files;
  console.log(files);
  const file = files[0];
  const img = document.createElement('img');

   img.src = URL.createObjectURL(file);

document.body.appendChild(img);
});

