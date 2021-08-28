function myFunction() {
    var x = document.getElementsByClassName("price-annually");
    var i;
    for (i = 0; i <= x.length-1; i++) {
       if (x[i].style.display ==="none") {
        x[i].style.display = "block";
        } else {
            x[i].style.display ="none";
        };
    }
   

    var x = document.getElementsByClassName("price-monthly");
    var i;
    for (i = 0; i <= x.length-1; i++) {
       if (x[i].style.display ==="block") {
        x[i].style.display = "none";
        } else {
            x[i].style.display ="block";
        };
    }
  
};