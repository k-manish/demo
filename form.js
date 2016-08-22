function myfunction()
                {
                    var fname=document.getElementById("fname").value;
                    var mname=document.getElementById("mname").value;
                    var lname=document.getElementById("lname").value;
                    var addinfo=document.getElementById("addrinfo").value;
                    var gender=document.getElementById("gender").value;
                    var mail=document.getElementById("mail").value;
                    var mobile = document.getElementById("num").value;
                    var fullname=fname+" "+mname+" "+lname;
                    
                    if(fname===null || fname==="")
                    {
                        window.alert("fill your first name");
                    }
                    if(!(/[0-9]{10}/.test(mobile)))
                    {
                        window.alert("please enter correct mobile number!!");
                    }
                    
                    
                    document.getElementById("fdiv").style.display="none";
                    document.getElementById("sdiv").style.display="block";
                    
                    document.getElementById("p1").innerHTML=fullname;
                    document.getElementById("p2").innerHTML=addinfo;
                    document.getElementById("p3").innerHTML=gender;
                    document.getElementById("p4").innerHTML=mail;
                    document.getElementById("p5").innerHTML=mobile;

                   /* var c10=document.getElementById("education").row[0].cells;
                       //for(var i=0;i<3;i++)
                        //{
                            document.getElementById(fname).value=c10[0];
                            document.getElementById(mname).value=c10[1];
                            document.getElementById(lname).value=c10[2];
                        //} */
                }
                
                function changebackground()
                {
                    document.getElementById("DemoReg").style.backgroundColor="red";
                }