const btnAverage = document.querySelector("#btnAverage");

btnAverage.addEventListener("click", () => {
  const point1 = document.querySelector("#txtPoint1").value;

  const point2 = document.querySelector("#txtPoint2").value;

  const average = getAverage(point1, point2);
  alert(`Ortalamaniz: ${average}`);
  const letter = convertNumberToLetter(average);
  alert(`Notunuz: ${letter}`);
});

const getAverage = (point1, point2) => {
  if (isNaN(parseFloat(point1)) || isNaN(parseFloat(point2))) return;
  const notAverage = (parseFloat(point1) + parseFloat(point2)) / 2;
  return notAverage;
};

const convertNumberToLetter = (average) => {
  if (isNaN(parseFloat(average))) return;
  switch (true) {
    case average > 90 && average <= 100:
      letter = "A";
      break;
    case average > 80 && average <= 90:
      letter = "B";
      break;
    case average > 70 && average <= 80:
      letter = "C";
      break;
    case average > 50 && average <= 70:
      letter = "D";
      break;
    case average > 0 && average <= 50:
      letter = "F";
      break;
    default:
      letter = "Lufen dogru notlar giriniz!!!";
  }

  return letter;
};
