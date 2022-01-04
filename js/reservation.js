function fonction_type() {
    var x = document.getElementById("mySelect_du_véhicule").selectedIndex;
    var t = document.getElementsByTagName("option")[x].value;
    var vitesse = document.getElementById("vitesse");
    if (t == "moto") {
        vitesse.style.display = "none";
        document.getElementById("diesel").style.display = "none";
        document.getElementById("hybride").style.display = "none";
        document.getElementById("electrique").style.display = "block";
        document.getElementById("essence").style.display = "block";
    } else if (t == "citadine") {
        vitesse.style.display = "block";
        document.getElementById("Automatique").style.display = "none";
        document.getElementById("diesel").style.display = "block";
        document.getElementById("hybride").style.display = "block";
        document.getElementById("electrique").style.display = "block";
        document.getElementById("essence").style.display = "block";
        document.getElementById("Manuelle").style.display = "block";
    } else if (t == "compact") {
        vitesse.style.display = "block";
        document.getElementById("Automatique").style.display = "none";
        document.getElementById("electrique").style.display = "none";
        document.getElementById("Manuelle").style.display = "block";
        document.getElementById("essence").style.display = "block";
        document.getElementById("diesel").style.display = "block";
        document.getElementById("hybride").style.display = "block";
    } else if (t == "berline") {
        vitesse.style.display = "block";
        document.getElementById("Manuelle").style.display = "none";
        document.getElementById("Automatique").style.display = "block";
        document.getElementById("electrique").style.display = "none";
        document.getElementById("essence").style.display = "block";
        document.getElementById("diesel").style.display = "block";
        document.getElementById("hybride").style.display = "block";
    } else if (t == "utilitaire") {
        vitesse.style.display = "block";
        document.getElementById("Automatique").style.display = "none";
        document.getElementById("electrique").style.display = "none";
        document.getElementById("Manuelle").style.display = "block";
        document.getElementById("diesel").style.display = "block";
        document.getElementById("essence").style.display = "none";
        document.getElementById("hybride").style.display = "none";
    } else if (t == "engin") {
        vitesse.style.display = "block";
        document.getElementById("Automatique").style.display = "none";
        document.getElementById("electrique").style.display = "none";
        document.getElementById("Manuelle").style.display = "block";
        document.getElementById("essence").style.display = "block";
        document.getElementById("diesel").style.display = "block";
        document.getElementById("hybride").style.display = "none";
    } else if (t == "camion") {
        vitesse.style.display = "block";
        document.getElementById("Automatique").style.display = "block";
        document.getElementById("electrique").style.display = "none";
        document.getElementById("Manuelle").style.display = "none";
        document.getElementById("essence").style.display = "none";
        document.getElementById("diesel").style.display = "block";
        document.getElementById("hybride").style.display = "none";
    } else {
        vitesse.style.display = "block";
        document.getElementById("Automatique").style.display = "block";
        document.getElementById("electrique").style.display = "block";
        document.getElementById("Manuelle").style.display = "block";
        document.getElementById("essence").style.display = "block";
        document.getElementById("diesel").style.display = "block";
        document.getElementById("hybride").style.display = "block";
    }
}

document.getElementById("calcul").addEventListener("click", (e) => {
    e.preventDefault();
    calcul_prix();

});


function calcul_prix() {
    var type_véhicule = document.getElementById("mySelect_du_véhicule").value;
    var days = document.getElementById("days").value;
    var type_carburant = document.getElementById("mySelect_du_carburant").value;
    var type_vitesse = document.getElementById("mySelect_à_vitesse").value;
    var prix = 0;

    if (type_véhicule == "moto") {
        if (type_carburant == "essence") {
            prix += days * 10 * 1.14;
        } else if (type_carburant == "electrique") {
            prix += days * 10 * 1.05;
        }
    } else if (type_véhicule == "compact" && type_vitesse == "manuelle") {
        if (type_carburant == "hybride") {
            prix += days * 14 * 1.09;
        } else if (type_carburant == "essence") {
            prix += days * 14 * 1.14;
        } else if (type_carburant == "diesel") {
            prix += days * 14 * 1.21;
        }
    } else if (type_véhicule == "citadine" && type_vitesse == "manuelle") {
        if (type_carburant == "hybride") {
            prix += days * 12 * 1.09;
        } else if (type_carburant == "essence") {
            prix += days * 12 * 1.14;
        } else if (type_carburant == "diesel") {
            prix += days * 12 * 1.21;
        } else if (type_carburant == "electrique") {
            prix += days * 12 * 1.05;
        }
    } else if (type_véhicule == "utilitaire" && type_vitesse == "manuelle") {
        if (type_carburant == "diesel") {
            prix += days * 16 * 1.21;
        }
    } else if (type_véhicule == "camion" && type_vitesse == "automatique") {
        if (type_carburant == "diesel") {
            prix += days * 250 * 1.4;
        }
    } else if (type_véhicule == "engin" && type_vitesse == "manuelle") {
        if (type_carburant == "diesel") {
            prix += days * 900 * 1.21;
        } else if (type_carburant == "essence") {
            prix += days * 900 * 1.14;
        }
    } else if (type_véhicule == "berline" && type_vitesse == "automatique") {
        if (type_carburant == "hybride") {
            prix += days * 20 * 1.28;
        } else if (type_carburant == "essence") {
            prix += days * 20 * 1.33;
        } else if (type_carburant == "diesel") {
            prix += days * 20 * 1.4;
        }
    }
    document.getElementById("section-reservation").style.display = "none";
    document.getElementById("p_1").innerHTML = "   Type du Véhicule  :   " + type_véhicule;
    document.getElementById("p_2").innerHTML = "   Carburant  :   " + type_carburant;
    document.getElementById("p_3").innerHTML = "   Durée de Réservation (en jours)  :   " + days + "J";
    document.getElementById("p_4").innerHTML = "   le prix  :   £  " + prix;
    document.getElementById("p_5").innerHTML = " MERCI POUR VOTRE MESSAGE.  ";
}