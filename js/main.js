const sidebarButton = document.getElementById('sidebarButton')

sidebarButton.addEventListener('click', event => {
    document.body.classList.toggle('show-sidebar')
})