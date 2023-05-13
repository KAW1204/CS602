<?php
require_once('database.php');


@$lookup = $_GET["course"]; //Get the course parameter
@$action = $_GET["action"]; //Get the action parameter

if($action == 'courses' && $lookup == null ){ //If no courses
    $query = "SELECT * FROM sk_courses ORDER BY courseID";
    $statement = $db->prepare($query);
    $statement->execute();
    $sk_students = $statement->fetchAll();
    $statement->closeCursor();
    echo json_encode($sk_students);
    
    
}

else if($action == 'students' && $lookup == null ){
    $query = "SELECT * FROM sk_students ORDER BY studentID";
    $statement = $db->prepare($query);
    $statement->execute();
    $sk_students = $statement->fetchAll();
    $statement->closeCursor();
    echo json_encode();  
}


else if($action == 'students'){
    $query = "SELECT * FROM sk_students WHERE courseID = '$lookup'"; //If action equals students
    $statement = $db->prepare($query);
    $statement->execute();
    $sk_students = $statement->fetchAll(); //Fetch all the data
    $statement->closeCursor();
    echo json_encode($sk_students);    
}
else if($action == 'courses'){
    $query = "SELECT * FROM sk_courses ORDER BY courseID";
    $statement = $db->prepare($query);
    $statement->execute();
    $sk_students = $statement->fetchAll();
    $statement->closeCursor();
    echo json_encode($sk_students);  //Convert data to json 
}

else{
    echo "invalid parameters";
}














?>





   