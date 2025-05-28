// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile menu toggle
const mobileMenuToggle = document.createElement('div');
mobileMenuToggle.className = 'mobile-menu-toggle';
mobileMenuToggle.innerHTML = '<i class="fas fa-bars"></i>';
document.querySelector('header .container').appendChild(mobileMenuToggle);

const nav = document.querySelector('header nav');
mobileMenuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
    mobileMenuToggle.innerHTML = nav.classList.contains('active') 
        ? '<i class="fas fa-times"></i>' 
        : '<i class="fas fa-bars"></i>';
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Contact form handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Here you would typically send the form data to a server
        // For this example, we'll just show a success message
        
        this.style.display = 'none';
        document.getElementById('formSuccess').style.display = 'block';
        
        // Reset form after 3 seconds
        setTimeout(() => {
            this.style.display = 'block';
            document.getElementById('formSuccess').style.display = 'none';
            this.reset();
        }, 3000);
    });
}

// Portfolio filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

if (filterButtons.length > 0 && portfolioItems.length > 0) {
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            const filterValue = button.getAttribute('data-filter');
            
            portfolioItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category').includes(filterValue)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
}

// Portfolio modal
const portfolioLinks = document.querySelectorAll('.portfolio-link');
const projectModal = document.querySelector('.project-modal');
const closeModal = document.querySelector('.close-modal');

if (portfolioLinks.length > 0 && projectModal) {
    portfolioLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // In a real implementation, you would fetch project details here
            // For this example, we'll use placeholder data
            
            const projectTitle = e.target.closest('.portfolio-overlay').querySelector('h3').textContent;
            const projectDescription = "This is a detailed description of the project. It would include information about the technologies used, challenges faced, and solutions implemented. In a real implementation, this data would come from a database or JSON file.";
            
            document.querySelector('.modal-title').textContent = projectTitle;
            document.querySelector('.modal-image').src = e.target.closest('.portfolio-item').querySelector('img').src;
            document.querySelector('.modal-description').textContent = projectDescription;
            
            // Clear existing technologies
            const techList = document.querySelector('.tech-list');
            techList.innerHTML = '';
            
            // Add technologies (in a real app, these would come from data)
            const technologies = ['JavaScript', 'HTML/CSS', 'Python', 'Flask', 'MySQL'];
            technologies.forEach(tech => {
                const li = document.createElement('li');
                li.textContent = tech;
                techList.appendChild(li);
            });
            
            projectModal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    });
    
    closeModal.addEventListener('click', () => {
        projectModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    window.addEventListener('click', (e) => {
        if (e.target === projectModal) {
            projectModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
}
