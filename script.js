function switchTab(tab) {
    // Remove active class from all tabs and buttons
    const tabContents = document.querySelectorAll('.tab-content');
    const tabButtons = document.querySelectorAll('.tab-btn');
    
    tabContents.forEach(content => {
        content.classList.remove('active');
    });
    
    tabButtons.forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Add active class to selected tab and button
    document.getElementById(tab).classList.add('active');
    document.querySelector(`[data-tab="${tab}"]`).classList.add('active');
}