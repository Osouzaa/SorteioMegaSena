import { useState } from "react";
import * as C from "./style";

const PrizeDraw = () => {
  const [numDraws, setNumDraws] = useState<number>(1);
  const [draws, setDraws] = useState<number[][]>([]);
  const [mostRepeatedNumbers, setMostRepeatedNumbers] = useState<number[]>([]);

  const handleNumDrawsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumDraws(Number(e.target.value));
  };

  const generateRandomNumber = (): number => Math.floor(Math.random() * 60) + 1;

  const handleGenerateNumbers = () => {
    const newDraws: number[][] = [];

    for (let i = 0; i < numDraws; i++) {
      const numbers: number[] = [];
      for (let j = 0; j < 5; j++) {
        numbers.push(generateRandomNumber());
      }
      newDraws.push(numbers);
    }

    setDraws(newDraws);
    findMostRepeatedNumbers(newDraws);
  };

  const findMostRepeatedNumbers = (draws: number[][]) => {
    const flattenedDraws: number[] = draws.flat();
    const counts: { [key: number]: number } = {};

    flattenedDraws.forEach((number) => {
      counts[number] = (counts[number] || 0) + 1;
    });

    const sortedNumbers = Object.keys(counts).sort(
      (a, b) => counts[Number(b)] - counts[Number(a)]
    );
    const mostRepeated = sortedNumbers.slice(0, 5).map((num) => Number(num));

    setMostRepeatedNumbers(mostRepeated);
  };
  return (
    <C.Container>
      <C.Title>Sorteio mega</C.Title>
      <C.Content>
        <C.Clabel>
          Quantidade de sorteios:
          <input type="text" value={numDraws} onChange={handleNumDrawsChange} />
        </C.Clabel>
        <button onClick={handleGenerateNumbers}>Gerar Números</button>
      </C.Content>
      <div>
        <C.Table>
          <thead>
            <tr>
              <th>Sorteio</th>
              <th>Nº 1</th>
              <th>Nº 2</th>
              <th>Nº 3</th>
              <th>Nº 4</th>
              <th>Nº 5</th>
            </tr>
          </thead>
          <tbody>
            {draws.map((numbers, index) => (
              <tr key={index}>
                <td>Sorteio {index + 1}</td>
                {numbers.map((num, i) => (
                  <td key={i}>{num}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </C.Table>
      </div>
      <C.SubTitle>
        <h2>Números mais repetidos:</h2>
        <p>{mostRepeatedNumbers.join(", ")}</p>
      </C.SubTitle>
    </C.Container>
  );
};

export { PrizeDraw };
