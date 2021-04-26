import { Queue } from "../data-structures/queue";


export function decimalToBinary(decNumber: number) {
    const queue = new Queue();
    let rem: number;
    let binaryString = '';
  
    while (decNumber > 0) {
      rem = Math.floor(decNumber % 2);
      queue.enqueue(rem);
      decNumber = Math.floor(decNumber / 2);
    }
  
    return queue.items().join('');
  }

export function queueExercises() {
  const decimalNumber = 1024;

  console.log(`Number ${decimalNumber} to binary: ${decimalToBinary(decimalNumber)}`);
}
