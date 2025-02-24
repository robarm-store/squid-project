document.addEventListener("DOMContentLoaded", function() {
        let checkboxes = document.querySelectorAll(".item");
        let promoInput = document.getElementById("promoCode");
        let totalSpan = document.getElementById("totalPrice");
        
        function updateTotal() {
          let total = 0;
          checkboxes.forEach(box => {
            if (box.checked) {
              total += parseFloat(box.value);
            }
          });
          
          let promoCode = promoInput.value.trim().toUpperCase();
          if (promoCode === "1") {
            total *= 0.9; // 10% off
            total = Math.ceil(total / 10) * 10;
          }
          
          totalSpan.textContent = total.toFixed(2) + " dr";
        }
        
        checkboxes.forEach(box => box.addEventListener("change", updateTotal));
        promoInput.addEventListener("input", updateTotal);
        updateTotal();
      });
      function goto(){
        window.location.href = 'submit.html'
      }
      let tysm = document.getElementById("thankyou");
      let inputt = document.getElementById("inputt").value;
      tysm.textContent = "Thank you for your purchase, " + inputt + ". We appreciate your business and we hope you enjoyed being a part of RobArm&trade;";
