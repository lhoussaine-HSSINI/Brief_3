function Envoyer() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var objet = document.getElementById("objet").value;
    var message = document.getElementById("message").value;
    var resulta = " prénom et nom : " + name + " \n email :  " + email + "\n objet :" + objet + " \n message :" + message;
    alert(resulta);
}