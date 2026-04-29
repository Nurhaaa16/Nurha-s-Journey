// Menambahkan offset pada smooth scroll agar judul tidak tertutup oleh navigasi
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 80, // 80px adalah perkiraan tinggi navigasi
            behavior: 'smooth'
        });
    });
});
