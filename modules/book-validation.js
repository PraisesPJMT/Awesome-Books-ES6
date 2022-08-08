const errorMessage = document.querySelector('.input-error');

export const bookAdditionSuccess = () => {
  errorMessage.classList.remove('red');
  errorMessage.classList.add('green');
  errorMessage.innerHTML = 'New Book Added Successfully';
};

export const bookAdditionError = () => {
  errorMessage.classList.add('red');
  errorMessage.classList.remove('green');
  errorMessage.innerHTML = 'Please the Book Title and Author should not be empty';
};