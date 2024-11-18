document.addEventListener('DOMContentLoaded', function() {
    const wishlist = document.getElementById('wishlist');
    const addButton = document.getElementById('addWishItem');
    
    // Load saved wishlist items
    const savedItems = JSON.parse(localStorage.getItem('wishlistItems') || '[]');
    savedItems.forEach(item => addWishlistItem(item));

    addButton.addEventListener('click', () => {
        addWishlistItem('');
        saveWishlist();
    });

    function addWishlistItem(value = '') {
        const li = document.createElement('li');
        const input = document.createElement('input');
        input.type = 'text';
        input.value = value;
        input.placeholder = 'Enter wishlist item';
        
        input.addEventListener('change', saveWishlist);
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                addWishlistItem('');
            }
        });

        li.appendChild(input);
        wishlist.appendChild(li);
    }

    function saveWishlist() {
        const items = Array.from(wishlist.querySelectorAll('input')).map(input => input.value);
        localStorage.setItem('wishlistItems', JSON.stringify(items));
    }
});