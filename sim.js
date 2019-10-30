const simulate = (tasksCount, max) => {
  const startTime = performance.now();
  let results = { numbersGenerated: tasksCount * 1000 };

  // launch a simulation of 100 tasks
  for (let i = 0; i < tasksCount; i++) {
    // "...1000 random numbers between 0 and 50."
    for (let j = 0; j < 1000; j++) {
      // let num = Math.floor(Math.random() * (max + 1));   // 0 - 50
      let num = Math.ceil(Math.random() * (max - 1));   // 1 - 49

      // increment numbersGenerated
      // results.numbersGenerated++;

      // if number has already occured, increment it
      if (results[num]) {
        results[num]++;
        // else add it as 1
      } else {
        results[num] = 1;
      }
    }
  }
  // log runtime and return results
  results.runtime = performance.now() - startTime;
  return results;
}

export default simulate;
