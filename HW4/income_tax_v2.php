<?php

define('TAX_RATES',
  array(
    'Single' => array(
      'Rates' => array(10,12,22,24,32,35,37),
      'Ranges' => array(0,9700,39475,84200,160725,204100,510300),
      'MinTax' => array(0, 970,4543,14382,32748,46628,153798)
      ),
    'Married_Jointly' => array(
      'Rates' => array(10,12,22,24,32,35,37),
      'Ranges' => array(0,19400,78950,168400,321450,408200,612350),
      'MinTax' => array(0, 1940,9086,28765,65497,93257,164709)
      ),
    'Married_Separately' => array(
      'Rates' => array(10,12,22,24,32,35,37),
      'Ranges' => array(0,9700,39475,84200,160725,204100,306175),
      'MinTax' => array(0, 970,4543,14382.50,32748.50,46628.50,82354.75)
      ),
    'Head_Household' => array(
      'Rates' => array(10,12,22,24,32,35,37),
      'Ranges' => array(0,13850,52850,84200,160700,204100,510300),
      'MinTax' => array(0, 1385,6065,12962,31322,45210,152380)
      )
    )
);

// Fill in the code for the following function

function incomeTax($taxableIncome, $status) {
    
    $incTax = 0.0;
    $count = 0.0;
    
    foreach (TAX_RATES[$status]['Ranges'] as $data){ //Loop the data in ranges
        
        if($taxableIncome >= $data){
            $count = $count + 1; //To keep count of the index
        }
           
        else{
            break; //Once the index data is greater than the input daa break and take index
        }
            }
            
            if($count < 0){
                return "Not a valid number"; //If count is negative then error  
            }
            
            else if($taxableIncome < 0){
                return "Not a valid number"; //if number is negative then error
            }
            
            $count = $count - 1; //The count is inflated by one,therefore, must subtract by one to compensate
            
            
            
            $rate = TAX_RATES[$status]['Rates'][$count]; //Access Rates array
            $min = TAX_RATES[$status]['MinTax'][$count]; //Access MinTax array
            $range = TAX_RATES[$status]['Ranges'][$count];
            
            
            $incTax = number_format((($taxableIncome - $range) * ($rate/100) + $min),2,'.'); //set the formatted data after calculations
            
            
            
            
        
        
        
        
       
    
    
    
    

    
    return $incTax;
}



?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>HW4 Part2 - Wilkerson</title>

  <link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css">

  <script src="//netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js"></script>
</head>

<body>

<div class="container">

    <h3>Income Tax Calculator</h3>

    <form action = "insert.php" method = "post">
First Name:
<input type = "text" name = "firstName">
<br/>

Last Name:
<input type = "text" name = "lastName">
<br/>

<input type = "submit" name = "submit"
        value = "Submit">

</form>

   
       
</div>

</body>
</html>