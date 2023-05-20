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



// const readFile = () => {
//     const reader = new FileReader()
//     reader.onload = () => {
//       document.getElementById('out').innerHTML = reader.result
//       console.log(typeof document.getElementById('out').innerHTML)
//     }
//     // start reading the file. When it is done, calls the onload event defined above.
//     reader.readAsBinaryString(fileInput.files[0])
//   }