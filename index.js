const ShareButton = document.querySelector('#share_Image');

const shareBox = document.querySelector('#Share_Box');


ShareButton.addEventListener('click', () => {
    shareBox.classList.toggle('hidden');
});
