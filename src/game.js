import { Console, Random } from "@woowacourse/mission-utils"

const getComputerAnswer = () => {
  const computer = [];
  while (computer.length < 3) {

    const number = Random.pickNumberInRange(1, 9);
    if (!computer.includes(number)) {
      computer.push(number);
    }
  }
  return computer;
}

export default async function gameStart() {
  const answer = getComputerAnswer();
  Console.print(answer);
}