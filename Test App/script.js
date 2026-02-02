const carData = [
    { id: 1, name: "Tourbillon Legacy", cat: "motorsport", price: "$4.6M", img: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=800" },
    { id: 2, name: "Nebula E-GTR", cat: "electric", price: "$2.1M", img: "https://images.unsplash.com/photo-1554744512-d6c603f27c54?auto=format&fit=crop&w=800" },
    { id: 3, name: "Phantom V16", cat: "sport", price: "$1.8M", img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800" },
    { id: 4, name: "Zenith RS", cat: "motorsport", price: "$3.4M", img: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=800" },
    { id: 5, name: "Monolith GT", cat: "sport", price: "$980K", img: "https://images.unsplash.com/photo-1617788131775-ceb2027fd12c?auto=format&fit=crop&w=800" },
    { id: 6, name: "Volt Apex S", cat: "electric", price: "$1.2M", img: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=800" },
    { id: 7, name: "Black Label GTR", cat: "motorsport", price: "$5.8M", img: "https://images.unsplash.com/photo-1603584173870-7f300f2e030c?auto=format&fit=crop&w=800" },
    { id: 8, name: "Legacy V12", cat: "sport", price: "$2.9M", img: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=800" },
    { name: "Apex Roadster", fuel: "gas", price: 115000, hp: 720, img: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=800" },
    { name: "Zenith Coupe", fuel: "electric", price: 89000, hp: 580, img: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=800" },
    { name: "Horizon 4x4", fuel: "gas", price: 68000, hp: 400, img: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800" }
];

function initGallery(filter = 'all') {
    const container = document.getElementById('car-container');
    container.innerHTML = '';
    
    const displayList = filter === 'all' ? carData : carData.filter(car => car.cat === filter);

    displayList.forEach(car => {
        const card = `
            <div class="car-card">
                <div class="car-img" style="background-image: url('${car.img}')"></div>
                <div class="car-info">
                    <h3>${car.name}</h3>
                    <p class="car-price">${car.price}</p>
                </div>
            </div>
        `;
        container.innerHTML += card;
    });
}

// Event Listeners for Filters
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        document.querySelector('.filter-btn.active').classList.remove('active');
        e.target.classList.add('active');
        initGallery(e.target.dataset.filter);
    });
});

document.addEventListener('DOMContentLoaded', () => initGallery());
const filterButtons = document.querySelectorAll('.filter-btn');

filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(b => b.classList.remove('active'));
        // Add to clicked button
        btn.classList.add('active');
        
        // Trigger your inventory filter logic
        const filterValue = btn.getAttribute('data-filter');
        // updateInventory(filterValue); // Assuming you pass the category here
    });
});
