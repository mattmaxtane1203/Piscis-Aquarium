function hamburgerActive(){
    const button = document.getElementById('arrow');
    const sidebar = document.getElementById('sidebar');
    button.classList.toggle('is-active');
    console.log(sidebar.style.display);
    if(sidebar.style.display == 'none' || sidebar.style.display == ''){
        sidebar.style.display = 'flex';
    } else{
        sidebar.style.display = 'none';
    }
}

function closeSidebar(){
    const sidebar = document.getElementById('sidebar');
    sidebar.style.display = 'none';
}

window.onresize = closeSidebar;

