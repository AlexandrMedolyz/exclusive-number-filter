const filterNumbers = (numbers) => {
    let result = [];
 for ( let i=0; i<numbers.length; i++) {
   let res =  numbers.filter(elem => elem === numbers[i]);
   res.length === 1 ? result.push(numbers[i]) : false
 }
 return result;
  }

  const btnGetNumbers = document.querySelector('.btn-get-number');
  const fieldAddNumbers = document.querySelector('.field-values');
  const fieldResult = document.querySelector('.num-val');
  btnGetNumbers.addEventListener('click', () => {
    if (fieldAddNumbers.value !== '') {
        const resFunNumbers = filterNumbers(fieldAddNumbers.value.split('')).toString();
        resFunNumbers !== '' ? fieldResult.innerHTML= filterNumbers(fieldAddNumbers.value.split('')).toString() : fieldResult.innerHTML= 'Exclusive numbers are missing'
    } else {
        fieldResult.innerHTML = 'Please add numbers'
    }  
  })
