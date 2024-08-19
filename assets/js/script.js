const clearDisplay = () => {
  document.getElementById('display').innerText = '0';
};

const appendToDisplay = value => {
  const display = document.getElementById('display');

  if (display.innerText === '0') {
    display.innerText = value;
  } else {
    display.innerText += value;
  }
};

/*const appendToDisplay = value => {
  const display = document.getElementById('display');
  if (display.innerText === 0 && value !== '/') {
    display.innerText = value;
  } else {
    display.innerText += value;
  }
};*/

const showResult = () => {
  const display = document.getElementById('display');
  try {
    display.innerText = eval(display.innerText);
  } catch {
    display.innerText = 'Error 404';
  }
};
