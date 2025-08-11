var i;
var h = i+1;
var users = [];
function addUser(){

    var id =prompt("enter  id  of user " +h);
    var name = prompt("enter the name of user "+h);
    var balance =prompt("enter  the balance of user " +h);
    users.push({ id, name, balance });
}

function editUserBalanceById(){

    var id =prompt("what is the id of user that you want to change his balance");
    var user = users.find(user => user.id === id);
     var newBalance = prompt("Enter New Balance");
    if (user) { // if user had a value it will be true
        user.balance = newBalance;
    }
    else
    {
        alert("the id not found");
    }


    
}

    function deleteUserById() {

    var id =prompt("what is the id  of user you want to delete")
    var index = users.findIndex(user => user.id === id);
    if (index !== -1) {
        users.splice(index, 1);
    } 
}


var count =prompt("how many users you ");
for (var i = 0; i < count; i++) {
    addUser();
}
editUserBalanceById();
deleteUserById();

console.log(users);