// Initialisation des graphiques
document.addEventListener('DOMContentLoaded', function() {
    // Graphique de répartition des dépenses
    const expensesCtx = document.getElementById('expensesChart').getContext('2d');
    const expensesChart = new Chart(expensesCtx, {
        type: 'doughnut',
        data: {
            labels: ['Alimentaire', 'Transport', 'Loisirs', 'Autres'],
            datasets: [{
                data: [45, 20, 15, 20],
                backgroundColor: [
                    '#4e73df',
                    '#1cc88a',
                    '#f6c23e',
                    '#e74a3b'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });

    // Graphique d'évolution mensuelle
    const monthlyCtx = document.getElementById('monthlyChart').getContext('2d');
    const monthlyChart = new Chart(monthlyCtx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Fév', 'Mar'],
            datasets: [{
                label: 'Dépenses',
                data: [1420, 1480, 1350],
                borderColor: '#4e73df',
                backgroundColor: 'rgba(78, 115, 223, 0.1)',
                borderWidth: 2,
                fill: true,
                tension: 0.3
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: false,
                    min: 1000,
                    max: 1600
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });

    // Simulation d'ajout de dépense
    const addExpenseBtn = document.querySelector('.btn-primary');
    if (addExpenseBtn) {
        addExpenseBtn.addEventListener('click', function() {
            // Simuler l'ouverture d'un modal
            alert('Cette fonctionnalité sera disponible dans la version complète. Dans ce prototype, vous pouvez explorer l\'interface et visualiser les données d\'exemple.');
        });
    }

    // Simulation de scan de ticket
    const scanBtn = document.querySelectorAll('.btn-outline-primary')[0];
    if (scanBtn) {
        scanBtn.addEventListener('click', function() {
            alert('Cette fonctionnalité permettra de scanner des tickets de caisse, avec possibilité de fractionner les longs tickets en plusieurs photos. Dans la version complète, la reconnaissance OCR extraira automatiquement les produits et les prix.');
        });
    }

    // Simulation de création de liste de courses
    const listBtn = document.querySelectorAll('.btn-outline-primary')[1];
    if (listBtn) {
        listBtn.addEventListener('click', function() {
            alert('Cette fonctionnalité permettra de créer des listes de courses intelligentes basées sur vos habitudes d\'achat. Le système vous alertera également des promotions en cours dans vos magasins préférés.');
        });
    }

    // Simulation de mise à jour de l'application
    // Ajouter un bouton de mise à jour dans le menu déroulant
    const dropdownMenu = document.querySelector('.dropdown-menu');
    if (dropdownMenu) {
        const updateItem = document.createElement('li');
        updateItem.innerHTML = '<a class="dropdown-item" href="#"><i class="bi bi-arrow-clockwise"></i> Vérifier les mises à jour</a>';
        
        // Insérer avant le dernier élément (Déconnexion)
        dropdownMenu.insertBefore(updateItem, dropdownMenu.lastElementChild.previousElementSibling);
        
        // Ajouter un événement au clic
        updateItem.querySelector('a').addEventListener('click', function(e) {
            e.preventDefault();
            alert('Le système de mise à jour permettra d\'intégrer de nouvelles fonctionnalités tout en préservant vos données et conversations. Vous pourrez facilement adapter l\'application aux changements comme une nouvelle monnaie ou intégrer de nouvelles technologies d\'IA.');
        });
    }

    // Ajouter un onglet Catalogue dans la navigation (s'il n'existe pas déjà)
    const navItems = document.querySelectorAll('.navbar-nav .nav-item');
    let catalogueExists = false;
    
    navItems.forEach(item => {
        if (item.textContent.includes('Catalogues')) {
            catalogueExists = true;
        }
    });
    
    if (!catalogueExists) {
        const navbarNav = document.querySelector('.navbar-nav');
        const catalogueItem = document.createElement('li');
        catalogueItem.className = 'nav-item';
        catalogueItem.innerHTML = '<a class="nav-link" href="#"><i class="bi bi-book"></i> Catalogues</a>';
        
        // Ajouter avant le dernier élément de navigation
        navbarNav.insertBefore(catalogueItem, navbarNav.lastElementChild);
        
        // Ajouter un événement au clic
        catalogueItem.querySelector('a').addEventListener('click', function(e) {
            e.preventDefault();
            alert('L\'onglet Catalogue vous permettra d\'analyser les prix, de récupérer les catalogues promotionnels sur internet ou de les télécharger depuis votre appareil. Vous pourrez ainsi comparer facilement les prix entre différentes enseignes.');
        });
    }
});
