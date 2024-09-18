// Optional interactive effects

// Add a smooth scroll effect to navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add hover effect on portfolio images
const gridItems = document.querySelectorAll('.grid-item img');

gridItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.transform = 'scale(1.1)';
        item.style.transition = 'transform 0.3s ease';
    });
    
    item.addEventListener('mouseout', () => {
        item.style.transform = 'scale(1)';
    });
});
