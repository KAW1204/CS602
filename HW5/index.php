<?php
require_once('database.php');



 
$query = 'SELECT * FROM sk_courses
                       ORDER BY courseID';
$statement = $db -> prepare($query);
$statement->execute();
$sk_courses = $statement->fetchAll();
$statement->closeCursor();

$query = 'SELECT * FROM sk_students
                       ORDER BY studentID';
$statement = $db->prepare($query);
$statement->execute();
$sk_students = $statement->fetchAll();
$statement->closeCursor();




?>

<!DOCTYPE html>

<html>

<!-- the head section -->
<head>
    <title>My Course Manager</title>
    <link rel="stylesheet" type="text/css" href="main.css" >
</head>

<!-- the body section -->
<body>
<header><h1>Course Manager</h1></header>
<main>
    <center><h1>Student List</h1></center>

    <aside>
        <!-- display a list of categories -->
        <h2>Courses</h2>
        <nav>
       <ul>
        
        <?php foreach ($sk_courses as $course):?>
       <li> <a href = "?course_id = <?php echo $course['courseID'];?>">
              <?php echo $course['courseID'];?>
             
       
       </a></li>
       
       <?php endforeach;?> 
        
        </ul>
        
            
        
        </nav>
        
       
        
               
    </aside>
    

    <section>
        <!-- display a table of Students -->
        <h2><?php echo $course["courseName"];?></h2>
        
        <table>
        
        
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>&nbsp;</th>
            </tr>
            
           
            
          <?php foreach ($sk_students as $student):?> 
            <tr>
         <td><?php echo $student['firstName'];?></td>
         <td><?php echo $student['lastName']?></td>
         <td><?php echo $student['email']?></td>
         
    <td><form action = "delete_student.php" method = "post">    <input type = "hidden" name ="student_ID" value="<?php echo $student['studentID']; ?>">
    <input type="submit" value="Delete">
                      
          </form></td>

            </tr>
            
            
            <?php endforeach;?> 
            
 

            
        </table>

        <p><a href="add_student_form.php">Add Student</a></p>

        <p><a href="course_list.php">List Courses</a></p>    

    </section>
</main>

<footer>
    <p>&copy; <?php echo date("Y"); ?> Suresh Kalathur</p>
</footer>
</body>
</html>

