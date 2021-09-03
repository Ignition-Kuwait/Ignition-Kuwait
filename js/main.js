const sidebarButton = document.getElementById('sidebarButton')

sidebarButton.addEventListener('click', event => {
  document.body.classList.toggle('show-sidebar')
})

const mainWrapper = document.querySelector('main.page-content .wrapper')
const sections = {
  home: document.getElementById('home'),
  about: document.getElementById('about'),
  mission: document.getElementById('mission'),
  contact: document.getElementById('contact')
}

document.querySelectorAll('.top-header > a:first-child, .top-header .nav-link, .sidebar .nav-link').forEach(section => {
  section.addEventListener('click', event => {
    console.log(event.currentTarget)
    const target = event.currentTarget.getAttribute('href')?.replace('/#', '')
    if (!sections[target]) { return }
    event.preventDefault()
    const scrollAmount = sections[target].offsetTop
    mainWrapper.scrollTo({
      top: scrollAmount,
      left: 0,
      behavior: 'smooth'
    })
  })
})

