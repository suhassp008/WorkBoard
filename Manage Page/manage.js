const courseShow = document.querySelector('.course-body');
const manageShow = document.querySelector('.manage-body');


const courseBtn = document.querySelector('.course-btn');
const manageBtn = document.querySelector('.order-btn');

courseBtn.onclick = ()=>{
    courseBtn.classList.add('selected');
    manageBtn.classList.remove('selected');

    courseShow.style.display = "block";
    manageShow.style.display = "none";
}

manageBtn.onclick = ()=>{
    courseBtn.classList.remove('selected');
    manageBtn.classList.add('selected');

    courseShow.style.display = "none";
    manageShow.style.display = "block";
}