let photos = document.querySelectorAll('.openingPhoto');

function sizes(){
    let width = window.innerWidth;
    let height = window.innerHeight;
    let logo = document.getElementById('logo');
    let logosz = 800;

    let email = document.getElementById('email');

    let textContent = document.getElementById('textContent');
    if (width > 900){
        logo.style.transform = "rotate(0deg)";
        logo.style.width = logosz + "px";
        let amtLeft = (width - logosz) / 2;
        logo.style.left = (amtLeft/width)*100 + "%";

        email.style.top = 300 + "px";
        email.style.left = 0;
        email.style.fontSize = "16pt";

        textContent.style.left = (((amtLeft+475)/width)*100) + "%";
        textContent.style.width = 32 + "%";
        textContent.style.top = 35 + "%";
        textContent.style.height = 65 + "%";
        textContent.style.padding = 0;

        photos.forEach(function(photo){
            photo.classList.add('wide');
        });
    } else {
        logo.style.transform = "rotate(-90deg)";
        logo.style.width = height + "px";
        logo.style.left = -350 + "px";

        email.style.top = 20 + "px";
        email.style.left = height - 210 + "px";
        email.style.fontSize = "12pt"

        textContent.style.height = (height - 40) + "px";
        textContent.style.top = 0;
        textContent.style.width = (width - logo.offsetHeight - 40) + "px";
        textContent.style.left = logo.offsetHeight + "px";
        textContent.style.padding = 10 + "px";
        photos.forEach(function(photo){
            photo.classList.add('long');
        })
        }
}


function photoShow(){
    sizes();
    let i = 0;

    photos.forEach(function(photo){
        setTimeout(function(){
            photo.style.opacity = 1;
        }, 5000 + 5000 * i);
        i += 1;
    })
    setTimeout(function(){
        document.getElementById('openingPhotos').style.opacity = 0;
        let after = document.querySelectorAll('.afterOpen');
        document.getElementsByTagName('body')[0].style.backgroundColor = 'var(--maingray)';
        after.forEach(function(el){
            el.style.opacity = 1;
        });
    }, 25000);

}

// maincontent bg color is what changes post all the photos;

//make logo size responsive to the size of the page; check page size when you get there; 