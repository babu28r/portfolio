const header=document.querySelector("header");
window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",window.scrollY>0);
})
let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navlist.classList.toggle('active');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navlist.classList.remove('active');
};

const sr = ScrollReveal ({
	distance: '45px',
	duration: 2700,
	reset: true
})

sr.reveal('.home-text',{delay:350, origin:'left'})
sr.reveal('.home-img',{delay:350, origin:'right'})

sr.reveal('.sub-service,.about,.portfolio,.service,.cta,.contact',{delay:200, origin:'bottom'});

// Clickable certification card preview (modal)
document.querySelectorAll('.certification-content .row').forEach(card => {
    card.addEventListener('click', () => {
        const src = card.dataset.image;
        if (!src) return;
        const modal = document.getElementById('certificate-modal');
        const modalImage = document.getElementById('modal-image');
        modalImage.src = src;
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    });
});

const closeButton = document.querySelector('.close');
if (closeButton) {
    closeButton.addEventListener('click', () => {
        const modal = document.getElementById('certificate-modal');
        modal.style.display = 'none';
        document.body.style.overflow = '';
    });
}

const backdrop = document.getElementById('certificate-modal');
if (backdrop) {
    backdrop.addEventListener('click', (event) => {
        if (event.target === backdrop) {
            backdrop.style.display = 'none';
            document.body.style.overflow = '';
        }
    });
}

// Optional key close support
window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        const modal = document.getElementById('certificate-modal');
        if (modal && modal.style.display === 'flex') {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        }
    }
});
