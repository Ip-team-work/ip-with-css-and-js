const navbarToggle = navbar.querySelector("#navbar-toggle");
const navbarMenu = document.querySelector("#navbar-menu");
const navbarLinksContainer = navbarMenu.querySelector(".navbar-links");
let isNavbarExpanded = navbarToggle.getAttribute("aria-expanded") === "true";

const toggleNavbarVisibility = () => {
  isNavbarExpanded = !isNavbarExpanded;
  navbarToggle.setAttribute("aria-expanded", isNavbarExpanded);
};

navbarToggle.addEventListener("click", toggleNavbarVisibility);

navbarLinksContainer.addEventListener("click", (e) => e.stopPropagation());
navbarMenu.addEventListener("click", toggleNavbarVisibility);

var hotelname="";
var hotelloc="";

function Room(hname, location, price, type, wifi, breakfast, gym, swimming_pool,free_laundary, photo){
    this.hname = hname;
    this.location = location;
    this.price = price;
    this.type = type;
    this.cin = new Array(new Date());
    this.cout = new Array(new Date());
    this.wifi = false;
    this.breakfast = false;
    this.gym = false;
    this.swimming_pool = false;
    this.free_laundary = false;
    this.file = "";
    this.istaken = function(cin, cout){
        var temp=false;
        for(var i=0; i<cin.length; i++){
            if(this.cin[i].gettime() <= cin.gettime() && this.cout[i].gettime() >= cin.gettime()){
                temp=true;
                break;
            } 
        }
        if(temp==false){
            this.cin.push(cin);
            this.cout.push(cout);

         }
         else{
             console.log("taken");
         }
         return temp;
    }
    
}
    var rooms=[];
function Hotel(hname, hloc, hemail, htel){
    this.hname=hname;
    this.hloc=hloc;
    this.hemail=hemail;
    this.htel=htel;

}
var hotels=[];
function Admin(aname, hname, email, passw){
    this.aName = aname;
    this.hName = hname;
    this.email = email;
    this.passw = passw;
    this.loggedIn = false;
    this.hBranch="";//what if one admin with multiple hotels??
}

function Customer(fname, lname, email, passw){
    this.fName = fname;
    this.lName = lname;
    this.email = email;
    this.passw = passw;
    this.loggedIn = false;
}

var admins=[];

if(JSON.parse(window.localStorage.getItem("admins")) !== null)
	customers = JSON.parse(window.localStorage.getItem("admins"))

var customers = []

if(JSON.parse(window.localStorage.getItem("customers")) !== null)
	customers = JSON.parse(window.localStorage.getItem("customers"))

customers.push(new Customer("bewuketu", "lake", "bewuketulake1212@gmail.com", "1"))

admins.push(new Admin("bisrat", "mekonenn", "bimaker@checko.com", "6"))

function saveCustomer(){
    var fname=document.getElementById("first_name").value;
    var lname=document.getElementById("last_name").value;
    var email=document.getElementById("new_mail").value;
    var passw=document.getElementById("new_pass").value;
    var cpassw=document.getElementById("confirm_pass").value;

    if(isSignUpValid(email, passw, cpassw))
    {
        customers.push(new Customer(fname, lname, email, passw));
	    window.localStorage.setItem("customers", JSON.stringify(customers));
    }
    else
        document.getElementById("userSignUp").addEventListener("click", function(event){
            event.preventDefault()
        });
}

function saveAdmin(){
    var aName=document.getElementById("admin_name").value;
    var hName=document.getElementById("tour_name").value;
    var email=document.getElementById("new_mail").value;
    var passw=document.getElementById("new_pass").value;
    var cpassw=document.getElementById("confirm_pass").value;

    if(isNewAdminValid(email, passw, cpassw))
    {
        admins.push(new Admin(aName, hName, email, passw));
	    window.localStorage.setItem("admins", JSON.stringify(admins));
    }

    else
        document.getElementById("adminSignUp").addEventListener("click", function(event){
            event.preventDefault()
        });
}

var regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

function isSignUpValid(email, pass, cpass){
    //also confirm the structure of email using regex
    var emailLabel = document.getElementById("email")
	var passLabel = document.getElementById("pass")

	if(regEmail.test(email) === false)
		{
            emailLabel.style.outline = "none"
            emailLabel.style.border = "1px solid red"
			emailLabel.setAttribute("placehoder","Enter a valid email")    
			return false;
		}

    for(var i=0; i<customers.length; i++){
        if(email === customers[i].email){
            emailLabel.style.outline = "none"
            emailLabel.style.border = "1px solid red"
			emailLabel.setAttribute("placehoder","This email is already registered")   
            return false 
        }
    }

	return (pass === cpass)
}

function isNewAdminValid(email, pass, cpass){
    //also confirm the structure of email using regex
    var aNameLabel=document.getElementById("admin_name");
    var hNameLabel=document.getElementById("tour_name");
    var emailLabel=document.getElementById("new_mail");
    var passwLabel=document.getElementById("new_pass");
    var cpasswLabel=document.getElementById("confirm_pass");

    if(aNameLabel.value == null | aNameLabel.value == "")
        aNameLabel.style.outline = "none"
        aNameLabel.style.border = "1px solid red"
        aNameLabel.setAttribute("placehoder","Field required")

    if(hNameLabel.value == null | hNameLabel.value == "")
        hNameLabel.style.outline = "none"
        hNameLabel.style.border = "1px solid red"
        hNameLabel.setAttribute("placehoder","Field required")

    if(emailLabel.value == null | emailLabel.value == "")
        emailLabel.style.outline = "none"
        emailLabel.style.border = "1px solid red"
        emailLabel.setAttribute("placehoder","Field required")

    if(passwLabel.value == null | passwLabel.value == "" | passwLabel.value.length>16 | passwLabel.value.length<8)
        passwLabel.style.outline = "none"
        passwLabel.style.border = "1px solid red"
        passwLabel.setAttribute("placehoder","Field required")

    if(cpasswLabel.value == null | cpasswLabel.value == "")
        cpasswLabel.style.outline = "none"
        cpasswLabel.style.border = "1px solid red"
        cpasswLabel.setAttribute("placehoder","Field required")

	if(regEmail.test(email) === false)
		{
            emailLabel.style.outline = "none"
            emailLabel.style.border = "1px solid red"
			emailLabel.setAttribute("placehoder","Enter a valid email")
			return false;
		}

    for(var i=0; i<admins.length; i++){
        if(email === admins[i].email){
            emailLabel.style.outline = "none"
            emailLabel.style.border = "1px solid red"
			emailLabel.setAttribute("placehoder","This email is already registered")
            return false;
        }
    }

	if(pass != cpass)
        return false
    else
        passwLabel.style.outline = "none"
        passwLabel.style.border = "1px solid red"
        passwLabel.setAttribute("placehoder","Passwords do not match")

        cpasswLabel.style.outline = "none"
        cpasswLabel.style.border = "1px solid red"
        cpasswLabel.setAttribute("placehoder","Passwords do not match")


}

document.getElementById("signInSubmit").addEventListener("click", function(event){
    if(!(isSignInValid()))
        event.preventDefault()
  });

document.getElementById("adminSignIn").addEventListener("click", function(event){
    if(!(isAdminValid()))
        event.preventDefault()
});

function isAdminValid(){
	var emailLabel = document.getElementById("email")
	var passLabel = document.getElementById("pass")

    email = emailLabel.value;
    pass = passLabel.value;

	if(regEmail.test(email) === false)
		{
            emailLabel.style.outline = "none"
            emailLabel.style.border = "1px solid red"
        
			alert("Enter valid email")
			return false;
		}
    
    for(var i=0; i<customers.length; i++){
        if(email === customers[i].email){
        {
            if(checkPass(admins[i].passw, pass))
                return true
        }
        }
    }
    emailLabel.style.outline = "none"
    emailLabel.style.border = "1px solid red"

    passLabel.style.outline = "none"
    passLabel.style.border = "1px solid red"
    
    return false
}

function isSignInValid(){
	var emailLabel = document.getElementById("email")
	var passLabel = document.getElementById("pass")

    email = emailLabel.value;
    pass = passLabel.value;

	if(regEmail.test(email) === false)
		{
            emailLabel.style.outline = "none"
            emailLabel.style.border = "1px solid red"
        
			alert("Enter valid email")
			return false;
		}

    for(var i=0; i<customers.length; i++){
        if(email === customers[i].email){
        {
            if(checkPass(customers[i].passw, pass))
                return true
        }
        }
    }
    emailLabel.style.outline = "none"
    emailLabel.style.border = "1px solid red"

    passLabel.style.outline = "none"
    passLabel.style.border = "1px solid red"
    
    return false
}

function isPassValid(pass, cPass){
    return pass === cPass
}

function checkPass(input, pass){
	return input == pass
}