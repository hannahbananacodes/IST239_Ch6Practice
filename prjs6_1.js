let msg = "hi";
let city = window.prompt("What is the name of your city?");

if (city)
    {
        switch (city) 
            {
                case "San Diego" :
                    msg = "We can have items delivered to you tomorrow.";
                    break;
                case "Los Angeles" :
                    msg = "We can have items delivered to you in 2 days.";
                    break;
                case "Honolulu" :
                    msg = "We can have items delivered to you in 1 week.";
                    break;
                default :
                    msg = "Sorry, we do not deliver to your city yet.";
            }
    } 
else
    {
        msg = "no city entered";
            
    }
    document.write(msg);