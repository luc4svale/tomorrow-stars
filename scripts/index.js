//Dropzones
const dropzones = document.querySelectorAll('.dropzone');
dropzones.forEach(dropzone => {
  const input = dropzone.querySelector('input[type="file"]');
  const span = dropzone.querySelector('span');

  input.addEventListener('change', () => {
    span.innerHTML = input.files.length ? input.files[0].name : 'Clique para <br>selecionar arquivos';
  });
})