<?php
require_once('database.php');

// Delete the student from the database



// Get the student form data
$student_first = filter_input(INPUT_POST, 'student_ID', FILTER_VALIDATE_INT);


// DELETE the student from the database
if ($student_first != false) {
    $query = 'DELETE FROM sk_students
              WHERE studentID  = :student_first';
    $statement = $db->prepare($query);
    $statement->bindValue(':student_first', $student_first);
    $success = $statement->execute();
    $statement->closeCursor();
}


    
    
    // Display the Student List page
    include('index.php');




