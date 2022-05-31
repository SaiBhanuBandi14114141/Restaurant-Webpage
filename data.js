let submit=document.getElementById("submit");
submit.addEventListener("click",function()
{
    let name=document.getElementById("name").value;
    let date=document.getElementById("date").value;
    let time=document.getElementById("time").value;
    let peoplecount=document.getElementById("peoplecount").value;
    let email=document.getElementById("email").value;

    if(name=='' || date=='' || time=='' || peoplecount<1 || email=='') 
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
            email:email,
            date: date,
            time:time,
            peoplecount:peoplecount
        }
        
        if(dataObj.length>0)
        {
            for(let i=0;i<dataObj.length;i++)
            {
                if(dataObj[i]['email']==email || dataObj[i]['date']==date || dataObj[i]['time']==time)
                {
                    return alert('Dear Customer you have already reserved the table with the email : '+email);
                }
            }
        }

        dataObj.push(myObj);
        localStorage.setItem("data", JSON.stringify(dataObj));
        return alert(name+' Reserved Successfully');
    }
    
})




