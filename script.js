const shareBtn =  document.querySelector('.share-btn')
const shareBox = document.querySelector('.share-box')

const showShareBox = () => {
    shareBox.classList.toggle('active')
}

shareBtn.addEventListener('click', showShareBox)