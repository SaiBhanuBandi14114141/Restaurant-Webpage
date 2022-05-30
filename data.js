let submit=document.getElementById("submit");
submit.addEventListener("click",function(e)
{
    let name=document.getElementById("name").value;
    let date=document.getElementById("date").value;
    let time=document.getElementById("time").value;
    let peoplecount=document.getElementById("peoplecount").value;

    if(name=='' || date=='' || time=='' || peoplecount<1) 
    {
        return alert("please add all values.....")
    }
    else
    {
        let data = localStorage.getItem("data");
        if (data == null) 
        {
            dataObj = [];
        }
        else 
        {
            dataObj = JSON.parse(data);
        }
        let myObj = 
        {
            name: name,
            date: date,
            time:time,
            peoplecount:peoplecount
        }
        dataObj.push(myObj);
        localStorage.setItem("data", JSON.stringify(dataObj));
    }
    alert(name+" Reserved Successfully!!!!!!!")
})




