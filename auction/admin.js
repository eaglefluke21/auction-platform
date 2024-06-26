document.addEventListener('DOMContentLoaded', function() {

    const token = localStorage.getItem('token');

    const tokenParts = token.split('.');
  
    const decodedPayload = JSON.parse(atob(tokenParts[1]));
  
    const userEmail = decodedPayload.emailId;
  
    console.log(userEmail);
  
    if (token) {
        
        console.log('Token exists:', token);
  
    } else {
        
        console.log('Token does not exist');
    }
       
  
    const logout = document.getElementById('logoutbtn');
  
    logout.addEventListener('click', () =>{
  
     const token = localStorage.removeItem('token');
  
     if (token == null) {
  
      console.log('Token removed. User Logged out',token);
  
      window.location.href=`account.html`;
  
     }
  
     
  
    })
  





   
    const addItem = document.getElementById('addItem');
    if (addItem) {
        addItem.addEventListener('click', additem);
    }
});



///////////////////////////////  alert message //////////////////////////////////////////////////////////
const messageBox = document.getElementById("messageBox");
const messageText = document.getElementById("messageText");
const alertText = document.getElementById("alertmessageText");
const messageContent = document.getElementById("messageContent");


function displayMessageBox(message,colorClass,removeExisting = false){
    alertText.classList.remove('hidden');
    messageBox.classList.remove('flex');
    messageText.textContent = message;

    if(removeExisting){

        messageContent.className = `p-4 mb-4 text-sm rounded-lg ${colorClass}`;    }

    messageBox.style.display = "block";

    setTimeout(function() {
        messageBox.style.display = "none";
    }, 2000); 
}




// Assuming backend is hosted locally on port 3000
const backendBaseUrl = '';

function additem() {
    const itemName = document.getElementById("itemName").value;
    const itemImage = document.getElementById("itemImage").files[0];
    const itemDescription = document.getElementById("itemDescription").value;

    const itemData = new FormData();
    itemData.append("itemName", itemName);
    itemData.append("itemImage", itemImage);
    itemData.append("itemDescription", itemDescription);

    // Send data to backend
    fetch(`${backendBaseUrl}/admin/additem`, {
        method: 'POST',
        body: itemData
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('Item added successfully:', data);
        displayMessageBox("Item added Successfuly", "bg-green-50 text-green-800",true);

        
    })
    .catch(error => {
        console.error('There was a problem adding the item:', error);
        // Handle errors
        displayMessageBox("Unable to add Item");
    });


};











document.getElementById("toggle").addEventListener("click", function () {
    const nav = document.getElementById("nav");
    nav.classList.toggle("-translate-x-full");
  });

  document.getElementById("Items").addEventListener("click", function () {
    const nav = document.getElementById("dropdown");
    nav.classList.toggle("hidden");
  });