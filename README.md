# ContactFormResponseApi

An API with database for this <a href = "https://lawal-create.github.io/FrontEnd_IQUBE_TASK/">website</a>


## BASE URL
https://contactformresponseapi.herokuapp.com/


## API ENDPOINTS

### ADD NEW USER RESPONSE
<pre>
    POST     BASE_URL/ 
</pre>

Data should be in the request body.   
Use FORM-URL-ENCODED for the data.

SAMPLE REQUEST BODY
<pre>
    {
        "inquiry": "0",
        "Firstname": "Hakeem",
        "Lastname": "Lawal",
        "EmailAddress": "lawizyhal@gmail.com",
        "PhoneNumber":"08059634077",
        "Message": "Login complaints from customers" 
    }
</pre>

If successful you receive a response
<pre>
    Your response has been saved. Thank you for your time
</pre>

### GET USER RESPONSES
<pre>
    GET     BASE_URL/ 
</pre>

QUERY PARAMETERS
<ul>
    <li>
        Firstname: Used to filter the users based on firstName. IT IS CASE SENSITIVE
    </li>
     <li>
        Lastname: Used to filter the users based on lastName. IT IS CASE SENSITIVE
    </li>
     <li>
        EmailAddress: Used to filter the users based on email. IT IS CASE SENSITIVE
    </li>
    <li>
        PhoneNumber: Used to filter the users based on phoneNumber. IT IS CASE SENSITIVE
    </li>
</ul>

Sample Request
<pre>
    GET BASE_URL/?Firstname=Hakeem&Lastname=Lawal
</pre>