const sidebarButton = document.getElementById('sidebarButton')

sidebarButton.addEventListener('click', event => {
  document.body.classList.toggle('show-sidebar')
})

const mainWrapper = document.querySelector('main.page-content .wrapper')
const sections = {
  home: document.getElementById('home'),
  about: document.getElementById('about'),
  mission: document.getElementById('mission'),
  gallery: document.getElementById('gallery'),
  contact: document.getElementById('contact')
}

document.querySelectorAll('a[href^="/#"]').forEach(section => {
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

const principals = [
  document.querySelector('#mission .col:nth-child(1)'),
  document.querySelector('#mission .col:nth-child(2)'),
  document.querySelector('#mission .col:nth-child(3)'),
]
const closingSummary = document.querySelector('#mission .row>.fade')

principals.forEach(principal => {
  principal.addEventListener('click', event => {
    principal.querySelector('.fade')?.classList.toggle('show')
    const showSummary = principals.every(principal => principal.querySelector('.fade')?.classList.contains('show'))
    if (showSummary) setTimeout(() => { closingSummary.classList.add('show') }, 250)
    else closingSummary.classList.remove('show')
  })
})