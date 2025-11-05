let cartCount = 0;

// Add a visual Cart Counter Badge (optional)
const cartCounterBadge = document.createElement('div');
cartCounterBadge.id = "cartCounterBadge";
cartCounterBadge.style.position = 'fixed';
cartCounterBadge.style.top = "24px";
cartCounterBadge.style.right = "24px";
cartCounterBadge.style.background = "#171a29";
cartCounterBadge.style.color = "#fff";
cartCounterBadge.style.padding = "8px 14px";
cartCounterBadge.style.borderRadius = "20px";
cartCounterBadge.style.fontWeight = "bold";
cartCounterBadge.style.zIndex = "999";
cartCounterBadge.style.boxShadow = "0 2px 8px rgba(0,0,0,0.12)";
cartCounterBadge.style.display = "none";
document.body.appendChild(cartCounterBadge);

// Add-to-cart logic
document.querySelectorAll('.add-cart-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const productName = btn.parentElement.querySelector('h3').textContent;
        fetch('http://localhost:5000/add-to-cart', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    productName
                })
            })
            .then(response => response.json())
            .then(data => {
                alert(data.message);
            })
            .catch(err => {
                alert('Failed connecting to backend');
            });
    });
});


// Dropdown menu logic for mobile/touch: toggle menu on click
document.querySelectorAll('.dropdown > a').forEach(dropLink => {
    dropLink.addEventListener('click', (e) => {
        if (window.innerWidth < 600) { // Only for mobile view
            e.preventDefault();
            let ddContent = dropLink.parentElement.querySelector('.dropdown-content');
            if (ddContent) {
                ddContent.style.opacity = ddContent.style.opacity === "1" ? "0" : "1";
                ddContent.style.pointerEvents = ddContent.style.pointerEvents === "auto" ? "none" : "auto";
            }
        }
    });
});

// Smooth scroll to category section
document.querySelectorAll('.dropdown-content a').forEach(ddItem => {
    ddItem.addEventListener('click', function(e) {
        const hash = this.getAttribute('href');
        const target = document.querySelector(hash);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});