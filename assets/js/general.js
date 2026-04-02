document.addEventListener('DOMContentLoaded', function () {
  const track = document.querySelector('.market__logos-track')

  if (!track) return

  // Получаем все логотипы
  const logos = Array.from(track.children)
  const logoCount = logos.length
  const uniqueCount = 6 // количество уникальных логотипов

  // Если у нас только уникальные логотипы, дублируем их 3 раза
  if (logoCount === uniqueCount) {
    for (let i = 0; i < 3; i++) {
      logos.forEach(logo => {
        const clone = logo.cloneNode(true)
        track.appendChild(clone)
      })
    }
  }

  // Опционально: сброс позиции для идеального зацикливания
  track.addEventListener('animationiteration', () => {
    // Пустой обработчик, чтобы анимация не прерывалась
  })
})

// Дополнительно: пересчет при изменении размера окна
window.addEventListener('resize', () => {
  // Сбрасываем анимацию для пересчета
  const track = document.querySelector('.market__logos-track')
  if (track) {
    track.style.animation = 'none'
    track.offsetHeight // форсируем reflow
    track.style.animation = 'scroll 30s linear infinite'
  }
})

document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.querySelector('#mobile-menu')
  const mobileMenu = document.querySelector('.mobile__menu')
  const menuCloseButton = document.querySelector('.mobile__menu-close')
  const menuLinks = document.querySelectorAll('.mobile__menu-nav a')
  const body = document.body
  const html = document.documentElement

  if (menuButton && mobileMenu && menuCloseButton) {
    menuButton.addEventListener('click', () => {
      menuOpen()
    })

    menuCloseButton.addEventListener('click', () => {
      menuClose()
    })

    menuLinks.forEach(link => {
      link.addEventListener('click', () => {
        menuClose()
      })
    })

    // Закрытие меню при клике вне его области
    mobileMenu.addEventListener('click', event => {
      if (event.target === mobileMenu) {
        menuClose()
      }
    })

    function menuOpen() {
      mobileMenu.classList.add('visible')
      body.style.overflow = 'hidden' // Блокируем прокрутку страницы
      html.style.overflow = 'hidden' // Блокируем прокрутку страницы
    }

    function menuClose() {
      mobileMenu.classList.remove('visible')
      body.style.overflow = '' // Разблокируем прокрутку страницы
      html.style.overflow = '' // Разблокируем прокрутку страницы
    }
  }
})
