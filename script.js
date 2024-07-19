document.addEventListener('DOMContentLoaded', () => {
    const itemList = document.getElementById('item-list');
    const themeSelect = document.getElementById('theme-select');
    const listStyleSelect = document.getElementById('list-style-select');

    // Add 5 items to the list
    for (let i = 1; i <= 5; i++) {
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item';
        listItem.textContent = `Item ${i}`;
        itemList.appendChild(listItem);
    }

    // Load preferences from local storage
    const savedTheme = localStorage.getItem('theme');
    const savedListStyle = localStorage.getItem('listStyle');

    if (savedTheme) {
        document.body.className = savedTheme;
        themeSelect.value = savedTheme;
    }

    if (savedListStyle) {
        itemList.className = `list-group ${savedListStyle}`;
        listStyleSelect.value = savedListStyle;
    }

    // Event listener for theme change
    themeSelect.addEventListener('change', (event) => {
        const selectedTheme = event.target.value;
        document.body.className = selectedTheme;
        localStorage.setItem('theme', selectedTheme);
    });

    // Event listener for list style change
    listStyleSelect.addEventListener('change', (event) => {
        const selectedListStyle = event.target.value;
        itemList.className = `list-group ${selectedListStyle}`;
        localStorage.setItem('listStyle', selectedListStyle);
    });
});
