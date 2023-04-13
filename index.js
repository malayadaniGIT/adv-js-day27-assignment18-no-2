function addData(){
    const student = {
        first_name : "",
        last_Name : "",
        Age : "",
        skills : "",
        country:""
      }
      student.first_name=document.getElementById("first").value;
      student.last_Name=document.getElementById("last").value;
      student.Age=document.getElementById("age").value;
      student.skills=document.getElementById("skill").value;
      student.country=document.getElementById("country").value;
      localStorage.setItem("FIRST NAME", (student.first_name));
      localStorage.setItem("LAST NAME", (student.last_Name));
      localStorage.setItem("AGE", (student.Age));
      localStorage.setItem("SKILL", (student.skills));
      localStorage.setItem("COUNTRY", (student.country));
}