console.log("script running...")
document.querySelector(".cross").style.display = 'none';
document.querySelector(".hamburger").addEventListener("click", () => {
    document.querySelector('.sidebar').classList.toggle('sidebarGO');
    if (document.querySelector('.sidebar').classList.contains('sidebarGO')){
        document.querySelector(".ham").style.display = 'inline'
        document.querySelector(".cross").style.display = 'none'
    }

else{
    document.querySelector(".ham").style.display = 'inline'
    setTimeout(() =>{
        document.querySelector(".cross").style.display = 'none'
    }, 300);
}
})