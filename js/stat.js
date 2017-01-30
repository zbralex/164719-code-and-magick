window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)'; //рисую тень
  ctx.fillRect(120, 20, 420, 270);

  ctx.fillStyle = '#fff';//рисую белый прямоугольник
  ctx.fillRect(110, 10, 420, 270);

  ctx.fillStyle = '#000'; //пишу надписи в две строки
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура! Вы Победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);
  var max = -1;

  for (var i = 0; i < times.length; i++) {  //цикл по массиву времен
    var time = times[i];
    if (time > max) {
      max = time;
    }
  }

  var histoHeight = 150;
  var histoX = 140;
  var step = histoHeight / max;
  var columnIndent = 90;

  for (var i = 0; i < times.length; i++) {
    var name = names[i];
    var time = times[i];

    var height = step * time;
    ctx.fillText(time.toFixed(0), histoX + columnIndent * i, 90 + histoHeight - height);

    if (name === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = ['rgba(0, 0, ', ((Math.random() * 5) * 50).toFixed(0), ',', (Math.random()).toFixed(1), ')'].join('');
    }

    ctx.fillRect(histoX + columnIndent * i, 100 + histoHeight - height, 40, height);
    ctx.fillStyle = '#000';
    ctx.fillText(name, histoX + columnIndent * i, 100 + histoHeight + 20);
  }
};


