// ***
// affiche le compte a rebours dans la div identifiée par idContener
// ***
function countdown(idContener) {
   
    var compteur=document.getElementById(idContener);
    var result='';

    s=duree;
    m=0;h=0;d=0;

    if(s<0) {
        compteur.innerHTML="tirage en cours";
    } 
    else {

        // compte a rebours
        if(s>59) {
            m=Math.floor(s/60);
            s=s-m*60;
        }

        if(m>59) {
            h=Math.floor(m/60);
            m=m-h*60;
        }

        if(h>23) {
            d=Math.floor(h/24);
            h=h-d*24;
        }

        if(s<10) {
            s="0"+s;
        }

        if(m<10) {
            m="0"+m;
        }

        if(h<10) {
            h="0"+h;
        }

        // mise en forme de l'affichage
        if (d<1) {
            result += 'prochain tirage dans '+h+':'+m+':'+s;    // moins de 24h avant tirage
        } else if(d>1) {
            result += d+" jours avant le prochain tirage";      // j-n avant tirage
        } else {
            result += d+" jour avant le prochain tirage";       // j-1 avant tirage
        }

        // affichage du countdown
        compteur.innerHTML=result;

    }

    duree=duree-1;                                                  // on décrémente duree d'une seconde
    window.setTimeout("countdown_mock('"+idContener+"');",999);     // exécution récursive de countdonw() toutes les 999ms
}

// ***
// calcule la durée en secondes entre la date/heure courante et le prochain tirage
// var jeu = loto | euml
// ***
function getDuree(jeu) {
    
    var current_date = new Date();               
    var current_day = current_date.getDay();
    var current_hour = current_date.getHours();
    
    var next_draw_day;
    var next_draw_date = new Date();

    // *** on détermine le jour du prochain tirage
    // *** LOTO
    if (jeu == 'loto') {

        if ((current_day < 1) || (current_day == 1 && current_hour <= 20)) {
            next_draw_day = 1;
        } else if ((current_day < 3) || (current_day == 3 && current_hour <= 20)) {
            next_draw_day = 3;
        } else if ((current_day < 6) || (current_day == 6 && current_hour <= 20)) {
            next_draw_day = 6;
        }
    }

    // *** on détermine le jour du prochain tirage
    // *** EUML
    if (jeu == 'euml') {

        if ((current_day < 2) || (current_day == 2 && current_hour <= 20)) {
            next_draw_day = 2;
        } else if ((current_day < 5) || (current_day == 5 && current_hour <= 20)) {
            next_draw_day = 5;
        } 
    }


    // on calcule la date du prochain tirage 
    next_draw_date.setDate(current_date.getDate() + (next_draw_day - current_day));
    next_draw_date.setHours(20);
    next_draw_date.setMinutes(00);
    next_draw_date.setSeconds(00);

    // on retourne la durée secondes
    return ((next_draw_date-current_date)/1000);
}






// ***
// MOCK
// ***
function countdown_mock(idContener) {
   
    var compteur=document.getElementById(idContener);
    var result='';

    s=duree;
    m=0;h=0;d=0;

    if(s<0) {
        compteur.innerHTML="tirage en cours";
    } 
    else {

        // compte a rebours
        if(s>59) {
            m=Math.floor(s/60);
            s=s-m*60;
        }

        if(m>59) {
            h=Math.floor(m/60);
            m=m-h*60;
        }

        if(h>23) {
            d=Math.floor(h/24);
            h=h-d*24;
        }

        if(s<10) {
            s="0"+s;
        }

        if(m<10) {
            m="0"+m;
        }

        if(h<10) {
            h="0"+h;
        }

        // mise en forme de l'affichage
        if (d<1) {
            result += 'prochain tirage dans '+h+':'+m+':'+s;    // moins de 24h avant tirage
        } else if(d>1) {
            result += d+" jours avant le prochain tirage";      // j-n avant tirage
        } else {
            result += d+" jour avant le prochain tirage";       // j-1 avant tirage
        }

        // affichage du countdown
        compteur.innerHTML=result;

    }

    duree=duree-1;                                                  // on décrémente duree d'une seconde
    window.setTimeout("countdown_mock('"+idContener+"');",999);     // exécution récursive de countdonw() toutes les 999ms
}