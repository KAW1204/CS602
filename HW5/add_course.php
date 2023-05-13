<?php
    
    require_once('database.php');

// Get the student form data
$course_id = filter_input(INPUT_POST, 'course_id');
$course_name = filter_input(INPUT_POST, 'course_name');



// Add the student to the database  
if ($course_id == null || $course_name == null) {
    $error = "First or last name null."; //Print error message
    include('error.php');
} 

else if(is_int($course_name)){
    
    include('error.php');
}


else {
    try {
    require_once('database.php');
    
   
        
   
    
    // Add the product to the database
    $query = 'INSERT INTO sk_courses 
                 (courseID, courseName)
              VALUES
                 (:course_id, :course_name)';
    $statement = $db->prepare($query);
    $statement->bindValue(':course_id', $course_id);
    $statement->bindValue(':course_name', $course_name);
    
    $statement->execute();
    $statement->closeCursor();
    
   
    

    // Display the Student List page
    
    }
    
    catch (Exception $e) {
        $error = "duplicate data. Please try again!";
        include('error.php');
    }
    include('index.php');
}

?>