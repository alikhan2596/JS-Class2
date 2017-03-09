var name = prompt("Enter Your Name");
var marks_eng = +prompt("Enter Your English Marks");
var marks_Chem = +prompt("Enter Your Chemistry Marks");
var marks_phy = +prompt("Enter Your Physics Marks");
var marks_maths = +prompt("Enter Your Mathematics Marks");
var sum = (marks_eng + marks_Chem + marks_phy + marks_maths);
var percent = (sum/400)*100;
if(percent < 50)
{
    alert("Sorry, You're fail " +name+ " Your percentage is: " +percent+ "%");
}
else if(percent>40 && percent<60)
{
    alert("You're an Average student " +name+ " Your percentage is: " +percent+ "%");
}
else if(percent>60 && percent<80)
{
    alert("You're Good student "+name+ " Your percentage is: "+percent+ "%");
}
else if(percent>80 && percent<100)
{
    alert("You're an Brilliant student "+name+ " Your percentage is: "+percent+ "%");
}