 function calculate() {
     let n = document.getElementById("num").value;
     let sum = 0;

     for (let i = 1; i <= n; i++) {
         if (i % 2 === 0) {
             sum += i;
         }
     }

     document.getElementById("result").innerText = "Sum = " + sum;
     //  alert("result");
     //  alert("sum =" + sum);
 }