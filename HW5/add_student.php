<?php
    
    require_once('database.php');

// Get the student form data
$username = filter_input(INPUT_POST, 'first_name');
$password = filter_input(INPUT_POST, 'last_name');
$email = filter_input(INPUT_POST, 'email');



// Add the student to the database  
if ($student_first == null || $student_last == null || $email == null) {
    $error = "First, email or last name null.";
    include('error.php');
} 

else if(is_numeric($student_first) === true || is_numeric($student_last) === true){
    $error =  "Invalid first and last name (only characters)";
    include('error.php'); 
}

else {
    require_once('database.php');
    
    // Add the student to the database
    $query = 'INSERT INTO sk_students
                 (firstName, lastName, email, courseID)
              VALUES
                 (:student_first, :student_last, :email, :course_id)';
    $statement = $db->prepare($query);
    $statement->bindValue(':student_first', $student_first);
    $statement->bindValue(':student_last', $student_last);
    $statement->bindValue(':email', $email);
    $statement->bindValue(':course_id', $course_id);
    $statement->execute();
    $statement->closeCursor();



    // Display the Student List page
    include('index.php');
}

?>