var getRandomNumberX = function (i) {
        var ii = Math.floor(Math.random() * i);
        if (ii < 40) {
          ii += 40;
        }
        if (ii > 335) {
          ii -= 40;
        }
        return ii;
      };

      var getRandomNumberY = function (i) {
        var ii = Math.floor(Math.random() * i);
        if (ii < 90) {
          ii += 90;
        }
        if (ii > 520) {
          ii -= 90;
        }
        return ii;
      };

      var getDistance = function (event, target) {
        var diffX = event.offsetX - target.x;
        var diffY = event.offsetY - target.y;
        return Math.sqrt(diffX * diffX + diffY * diffY);
      };

      var getDistanceHint = function (distance) {
        if (distance < 15) {
          return "Обожжёшься!";
        } else if (distance < 20) {
          return "Очень горячо";
        } else if (distance < 40) {
          return "Горячо";
        } else if (distance < 80) {
          return "Тепло";
        } else if (distance < 160) {
          return "Холодно";
        } else if (distance < 320) {
          return "Очень холодно";
        } else {
          return "Замёрзнешь!";
        }
      };

      var width = 380;
      var height = 509;

      var target = {
        x: getRandomNumberX(width),
        y: getRandomNumberY(height),
      };

      var clicks = 0;

      $("#mapId").click(function (event) {
        clicks++;
        var distance = getDistance(event, target);
        var distanceHint = getDistanceHint(distance);
        $("#hintId").text(distanceHint);
        if (distance < 9) {
          alert("Тысяча чертей, клад найден. Сделано кликов: " + clicks);
          location.reload();
        }
      });