<?php

// Fill in the code for the following four functions


function incomeTaxSingle($taxableIncome) {
    $incTax = 0.0;
    
    if($taxableIncome > 0 && $taxableIncome < 9700){
        $incTax = number_format((($taxableIncome - 0) * 0.10),2,'.');
        
    
    }
    
    else if($taxableIncome > 9700 && $taxableIncome < 39475){
        $incTax = number_format((($taxableIncome - 9700) * 0.12) + 970,2,'.');
        
    
    }
    
    else if($taxableIncome > 39475 && $taxableIncome < 84200){
         $incTax = number_format((($taxableIncome - 39475) * 0.22) + 4543,2,'.');
    
    
    }
    
    else if($taxableIncome > 84200 && $taxableIncome < 160725){
         $incTax = number_format((($taxableIncome - 84200) * 0.24) + 14382,2,'.');
    
    }
    
    else if($taxableIncome > 160725 && $taxableIncome < 204100){
          $incTax = number_format((($taxableIncome - 160725) * 0.32) + 32748,2,'.');
    
    }
    
    else if($taxableIncome > 204100 && $taxableIncome < 510300){
           $incTax = number_format((($taxableIncome - 204100) * 0.35) + 46628,2,'.');
    
    }
    
    else if($taxableIncome > 510300){
            $incTax = number_format((($taxableIncome - 510300) * 0.37) + 153798,2,'.');
            
    }
    
    else{
       $incTax = "N/A";
    
    }
    

    
    return $incTax;

}

function incomeTaxMarriedJointly($taxableIncome) {
    $incTax = 0.0;
    
     if($taxableIncome > 0 && $taxableIncome < 19400 ){
        $incTax = number_format((($taxableIncome - 0) * 0.10),2,'.');//Format number
        
    
    }
    
    else if($taxableIncome > 19400 && $taxableIncome < 78950){ //If its between these two numbers
        $incTax = number_format((($taxableIncome - 19400) * 0.12) + 1940,2,'.');
        
    
    }
    
    else if($taxableIncome > 78950 && $taxableIncome < 168400){
         $incTax = number_format((($taxableIncome - 78950) * 0.22) + 9086,2,'.');
    
    
    }
    
    else if($taxableIncome > 168400 && $taxableIncome < 321450){
         $incTax = number_format((($taxableIncome - 168400) * 0.24) + 28765,2,'.');
    
    }
    
    else if($taxableIncome > 321450 && $taxableIncome < 408200){
          $incTax = (($taxableIncome - 321450) * 0.32) + 65497;
    
    }
    
    else if($taxableIncome > 408200 && $taxableIncome < 612350){
           $incTax = number_format((($taxableIncome - 408200) * 0.35) + 93257,2,'.');
    
    }
    
    else if($taxableIncome > 612350){
            $incTax = number_format((($taxableIncome - 612350) * 0.37) + 164709,2,'.');
            
    }
    
    else{
       $incTax = "N/A"; //If number is invalid then its null and void
    
    }
    

    
    return $incTax;

}

function incomeTaxMarriedSeparately($taxableIncome) {
    $incTax = 0.0;
    
     if($taxableIncome > 0 && $taxableIncome < 9700){
        $incTax = number_format((($taxableIncome - 0) * 0.10),2,'.');
        
    
    }
    
    else if($taxableIncome > 9700 && $taxableIncome < 39475){
        $incTax = number_format((($taxableIncome - 9700) * 0.12) + 970,2,'.');
        
    
    }
    
    else if($taxableIncome > 39475 && $taxableIncome < 84200){
         $incTax = number_format((($taxableIncome - 39475) * 0.22) + 4543,2,'.');
    
    
    }
    
    else if($taxableIncome > 84200 && $taxableIncome < 160725){
         $incTax = number_format((($taxableIncome - 84200) * 0.24) + 14382.50,2,'.');
    
    }
    
    else if($taxableIncome > 160725 && $taxableIncome < 204100){
          $incTax = number_format((($taxableIncome - 160725) * 0.32) + 32748.50,2,'.');
    
    }
    
    else if($taxableIncome > 204100 && $taxableIncome < 306175){
           $incTax = number_format((($taxableIncome - 204100) * 0.35) + 46628.50,2,'.');
    
    }
    
    else if($taxableIncome > 306175){
            $incTax = number_format((($taxableIncome - 306175) * 0.37) + 82354.75,2,'.');
            
    }
    
    else{
       $incTax = "N/A";
    
    }
    

    
    return $incTax;

}

function incomeTaxHeadOfHousehold($taxableIncome) {
    $incTax = 0.0;
    
      if($taxableIncome > 0 && $taxableIncome < 13850){
        $incTax = number_format((($taxableIncome - 0) * 0.10),2,'.');
        
    
    }
    
    else if($taxableIncome > 13850 && $taxableIncome < 52850){
        $incTax = number_format((($taxableIncome - 13850) * 0.12) + 1385,2,'.');
        
    
    }
    
    else if($taxableIncome > 52850 && $taxableIncome < 84200){
         $incTax = number_format((($taxableIncome - 52850) * 0.22) + 6065,2,'.');
    
    
    }
    
    else if($taxableIncome > 84200 && $taxableIncome < 160700){
         $incTax = number_format((($taxableIncome - 84200) * 0.24) + 12962,2,'.');
    
    }
    
    else if($taxableIncome > 160725 && $taxableIncome < 204100){
          $incTax = number_format((($taxableIncome - 160700) * 0.32) + 31322,2,'.');
    
    }
    
    else if($taxableIncome > 204100 && $taxableIncome < 510300){
           $incTax = number_format((($taxableIncome - 204100) * 0.35) + 45210,2,'.');
    
    }
    
    else if($taxableIncome > 510300){
            $incTax = number_format((($taxableIncome - 510300) * 0.37) + 152380,2,'.');
            
    }
    
    else{
       $incTax = "N/A";
    
    }

    
    return $incTax;

}

 ?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>HW4 Part1 - Wilkerson</title>

  <link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css">

  <script src="//netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js"></script>
</head>
<body>

<div class="container">

    <h3>Income Tax Calculator</h3>

    <form class="form-horizontal" method="post">

        
        <div class="form-group">
            <label class="control-label col-sm-2" for="netIncome">Your Net Income:</label>
            <div class="col-sm-10">
            <input type="number" step="any" name="netIncome" placeholder="Taxable  Income" required autofocus>
            </div>
        </div>
        <div class="form-group"> 
            <div class="col-sm-offset-2 col-sm-10">
            <button type="submit" class="btn btn-primary">Submit</button>
            </div>
        </div>

    </form>

    <?php

        // Fill in the rest of the PHP code for form submission results

        if(isset($_POST['netIncome'])) {
            $value = $_POST['netIncome'];
              
            echo "With a net taxable income of $ ", number_format($value,2,'.'), "<br>"; //Format the number
            
            echo "Status", str_repeat('&nbsp;',5), "Tax", "<br>"; 

            echo 'Single: $ ', incomeTaxSingle($value), "<br>";
            
            echo 'Married Filing Jointly: $ ',incomeTaxMarriedJointly($value),"<br>";
            
            echo 'Married Filing Separately: $ ', incomeTaxMarriedSeparately($value),"<br>";
            
            echo 'Head of HouseHold: $ ', incomeTaxHeadOfHousehold($value),"<br>";



        }

    ?>

</div>

</body>
</html>