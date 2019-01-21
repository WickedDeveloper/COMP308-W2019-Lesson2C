    // IIFE -- Immediately Invoked Function Expression
   (function() {
       function Start () {
        
        let student: objects.Student;
    
        student = new objects.Student(20, "David", "D123456789");
        student.saysHello();
        student.studies();
       }

       window.addEventListener("load", Start);
   })();