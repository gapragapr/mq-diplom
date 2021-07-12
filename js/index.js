function openFeedback(open = true) {
    const feedbackpopup = document.getElementById('feedback-popup');
    feedbackpopup.style.display = open ? 'flex' : 'none';
}

function openHamburger(open = true) {
    const hamburgermenu = document.getElementById('hamburger');
    hamburgermenu.style.right = open ? '0' : '-100%'
}
