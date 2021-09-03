// const sidebarButton = document.getElementById('sidebarButton')

// sidebarButton.addEventListener('click', event => {
//   document.body.classList.toggle('show-sidebar')
// })

const mainWrapper = document.querySelector('main.page-content .wrapper')
const sections = {
  about: document.getElementById('about'),
  mission: document.getElementById('mission'),
  contact: document.getElementById('contact')
}


// TODO: Add sidebar links.
document.querySelectorAll('.top-header .nav-link').forEach(section => {
  section.addEventListener('click', event => {
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

