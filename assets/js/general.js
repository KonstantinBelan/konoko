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
