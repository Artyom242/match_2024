const text = [
    'Пусть весна подарит счастье,\n',
    'Настроение и успех.\n',
    'Пусть обходят вас ненастья,\n',
    'И звучит почаще смех!\n',
    '\n',
    'Наслаждайтесь, улыбайтесь.\n',
    'Оптимизма и добра.\n',
    'С праздником 8 Марта!\n',
    'Вы прекрасны, как всегда!'
  ];
  
    let line = 0;
    let count = 0;
    let result = '';
    function typeLine() {
      let interval = setTimeout(
        () => {
          result += text[line][count]
          document.querySelector('pre').innerHTML =result;
  
  
        count++;
        if (count >= text[line].length) {
          count = 0;
          line++;
          if (line == text.length) {
            clearTimeout(interval);
             document.querySelector('.pre').innerHTML =result;
            return true;
          }
        }
        typeLine();
      }, getRandomInt(getRandomInt(250*1)))
    }
    typeLine();
  
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
  }