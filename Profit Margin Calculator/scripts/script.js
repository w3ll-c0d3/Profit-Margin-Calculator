var netProfit = document.getElementById("profit-text");
      var ofs = 0;
      var blinkResult = document.getElementById("result-field"); 
      const hamburguer = document.querySelector(".hamburguer");
      const mainMenu = document.querySelector(".main-menu");
      
      hamburguer.addEventListener("click", () => {
          hamburguer.classList.toggle("active");
          mainMenu.classList.toggle("active");
      })

      document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
          hamburguer.classList.remove("active");
          mainMenu.classList.remove("active");
      }))

      function smoothScrolling() {
        window.scrollTo({
          top: document.getElementById("section-two").offsetTop, 
          behavior: "smooth"
        })
      }

      function blinkingEffect() {
        window.setInterval(function() {
            blinkResult.style.background = 'rgba(0,0,0,' + Math.abs(Math.sin(ofs))+')';
            ofs += 0.03;
        }, 100);
      }

      function calculate() {
        smoothScrolling()
        blinkingEffect()
        a = cost.value;
        b = (100 - margin.value) / 100;
        result = (a / b);
        res = document.getElementById("revenue-text").innerText = "$" + result.toFixed(2);
        net = netProfit.innerText = "$" + (result.toFixed(2) - a).toFixed(2);
        marginText = document.getElementById('margin-text').innerText = margin.value + "%"
    }