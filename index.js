var button3=document.getElementById("button3");
var bg1=document.getElementsByClassName("bg-modal")[0];
var sub=document.getElementById("submit");
var table=document.getElementsByClassName("table")[0];
var num=0;
button3.addEventListener("click", function()
{
    bg1.style.display= "flex";
})
document.getElementsByClassName("close")[0].addEventListener("click",function()
{
bg1.style.display="none";
})
function Hide_form ()
{
bg1.style.display="none";
document.getElementById("fname").value=''; 
document.getElementById("lname").value=''; 
document.getElementById("ename").value='';
document.getElementById("Department").value='';
document.getElementById("email").value='';
document.getElementById("myDate").value='';
}
function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("customers").deleteRow(i);
  }
function insert_form_data() 
{
    var table = document.getElementById("customers").getElementsByTagName('tbody')[0];;
    var a=document.getElementById("fname").value;
    var b=document.getElementById("lname").value;
    var c=document.getElementById("ename").value;
    var d=document.getElementById("Department").value;
    var e=document.getElementById("email").value;
    var f=document.getElementById("myDate").value;
    if(a!=""&&b!=""&&c!=""&&d!=""&&e!=""&&f!="")
    {
    var row = table.insertRow(-1);
    row.id=num++;
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
  
    cell1.innerHTML = document.getElementById("fname").value;
    cell2.innerHTML = document.getElementById("lname").value;
    cell3.innerHTML = document.getElementById("ename").value;
    cell4.innerHTML = document.getElementById("Department").value;
    cell5.innerHTML = document.getElementById("email").value;
    cell6.innerHTML = document.getElementById("myDate").value;
    cell7.innerHTML = '<button id="X" onclick="deleteRow(this)">X</button>';
      Hide_form();
    }
}