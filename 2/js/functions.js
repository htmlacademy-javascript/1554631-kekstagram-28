/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
const formLine = '-7';
const maxLengtLine = 10;

// Функция для проверки длины строки
function checksLengthString(line, maxLengt) {
  const lineLength = line.length;
  if (lineLength <= maxLengt) {
    return true;
  }
  return false;
}

checksLengthString(formLine, maxLengtLine);

// Функция проверка строки на Палиндромность
function checksPalindromicity(line) {
  const formLineInseparable = line.replaceAll(' ', '');
  // строка без пробелов и верхних регистров
  const formLineOptimized = formLineInseparable.toLowerCase();
  // Цикл для инвертации символов строк
  let formLineInverted = '';
  for (let lettersScroll = formLineOptimized.length - 1; lettersScroll >= 0; lettersScroll = lettersScroll - 1) {
    formLineInverted = formLineInverted + formLineOptimized.at(lettersScroll);
  }

  if (formLineInverted === formLineOptimized) {
    return 'yes';
  }

  return 'no';
}

checksPalindromicity(formLine);

// Функция для извлечения цифр из строк
function extractsNumbers(line) {
  String(line);
  line = line.replaceAll(' ', '');
  let symbolSum = '';
  // Цикл для дробления строки на символы
  for (let symbolsLine = 0; symbolsLine < line.length; symbolsLine++) {
    // Перевожу все символы строки в Числа, чтобы отсортировать числа от букв
    const sumbolNumber = Number(line.at(symbolsLine));
    // Делаю конкатенацию всех символов, все  буквы стали - NaN
    symbolSum = symbolSum + String(sumbolNumber);
  }
  // Сортирую строчку от NaN, остались только цифры
  symbolSum = symbolSum.replaceAll('NaN', '');
  // Делаю условие, если строка пустая => параметр line был введен без цифр
  if (symbolSum.length < 1) {
    return NaN;
  }
  const lineNubers = Number(symbolSum);
  return lineNubers;
}

extractsNumbers(formLine);

// Функция добавления символов
function addSymbolsStart(line, minLength, additionalSymbol) {
  if (line.length < minLength) {
    // maxLengthAddSymbol - Число недостающих символов
    const maxLengthAddSymbol = minLength - line.length;
    if (additionalSymbol.length > maxLengthAddSymbol) {
      // Если длина 'добивки' > maxLengthAddSymbol, то обрезаем её до нужной длины
      additionalSymbol = additionalSymbol.slice(0, maxLengthAddSymbol);
      return additionalSymbol + line;
    } else if (additionalSymbol.length < maxLengthAddSymbol) {
      // Цикл с минимумом итераций, чтобы увеличить число символов в 'Добивке'
      for (let i = 0; i < maxLengthAddSymbol; i++) {
        additionalSymbol = additionalSymbol + additionalSymbol;
      }
      // Обрезаем 'Добивку', если символов добивки было > 2
      additionalSymbol = additionalSymbol.slice(0, maxLengthAddSymbol);
      return additionalSymbol + line;
    }
    return additionalSymbol + line;
  }
  return line;
}

addSymbolsStart(formLine, 10, 'q');
