
const tablinks = document.getElementsByClassName('tab-links');
const tabcontents = document.getElementsByClassName('tab-contents');

function openTab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove('active-link')
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove('active-tab')
    }
    event.currentTarget.classList.add('active-link');
    document.getElementById(tabname).classList.add('active-tab');
}

const sidemenu = document.getElementById('sideMenu');

function openMenu(){
    sidemenu.style.right = "0";
}

function closeMenu(){
    sidemenu.style.right = "-200px";
}

function toggleContent() {
    const moreContent = document.querySelector('.more-content');
    const buttonText = document.getElementById('read-more-btn');
  
    if (moreContent.style.display === 'none') {
      moreContent.style.display = 'block';
      buttonText.innerHTML = 'Read Less';
    } else {
      moreContent.style.display = 'none';
      buttonText.innerHTML = 'Read More';
    }
  }
  