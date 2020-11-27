let selection = document.getElementById('selection');
    let destination = document.getElementById('destination');

    selection.addEventListener('change', e => {
        switch(e.target.value) {
            case 'loueur' : 
                destination.setAttribute("href","pages/loueurs.html");
            break;
            case 'adom' : 
                destination.href= "pages/adom-mecanique.html";
            break;
            case 'services' :
                destination.href= "pages/services.html";
            break;            
        }
    })
    console.log(selection)