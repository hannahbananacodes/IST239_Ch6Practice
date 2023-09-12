let msg = "hi";
let city = window.prompt("What is the name of your city?");
let items = 0; 

if (city)
    {
        switch (city) 
            {
                case "San Diego" :
                    msg = "We can have items delivered to you tomorrow.";
                    items = 10;
                    break;
                case "Los Angeles" :
                    msg = "We can have items delivered to you in 2 days.";
                    items = 5;
                    break;
                case "Honolulu" :
                    items = 2
                    msg = "We can have items delivered to you in 1 week.";
                    break;
                default :
                    msg = "Sorry, we do not deliver to your city yet.";
                    items = 0;
            }
    } 
else
    {
        msg = "no city entered";
    }

document.write(msg);
if (items > 0) 
    {
        document.write("<p>We can deliver up to " + items + " to your city.</p>");
        document.write("<p>Print this out, write your item numbers below, and mail it to us to order.</p>");
        for (let i = 1; i < (items + 1); i++) 
            {
                document.write("<p>" + i + ". ________________</p>");
            }
    }
else 
    {
        document.write("<p>we cannot deliver to you at this time.</p>")
    }
