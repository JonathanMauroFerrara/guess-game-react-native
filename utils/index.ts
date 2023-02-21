const generateRandomNumberBetween = (min: number, max: number, exclude: number): number => {
  const randNumb = Math.floor(Math.random() * (max - min)) + min

  if(randNumb === exclude){
    return generateRandomNumberBetween(min, max, exclude);
  }else{
    return randNumb
  }
}

export {generateRandomNumberBetween}