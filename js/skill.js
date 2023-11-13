
const skillIcon1 = document.querySelector('.skill-icon1');
const skillIcon2 = document.querySelector('.skill-icon2');
const elsai = document.querySelectorAll('.des > li > h2');
const elvai = document.querySelectorAll('.dev > li > h2');

elsai.forEach((obj, key) => {
    obj.addEventListener('mouseover', function(){
        skillIcon1.src = `./img/skill/des${key+1}.png`;
        skillIcon1.style.right = '20%';
    });
    obj.addEventListener('mouseout', function(){
        skillIcon1.style.right = 'calc(-100vh - 1000px)';
    });
});
elvai.forEach((obj, key) => {
    obj.addEventListener('mouseover', function(){
        skillIcon2.src = `./img/skill/dev${key+1}.png`;
        skillIcon2.style.right = '20%';
    });
    obj.addEventListener('mouseout', function(){
        skillIcon2.style.right = 'calc(-100vh - 1000px)';
    });
});

const ulBtn = document.querySelectorAll(".btn-ul");
const des = document.querySelector(".des");
const dev = document.querySelector(".dev");

ulBtn.forEach((obj, key) => {
    obj.addEventListener('click', function(){
        des.classList.remove("empty");
        dev.classList.remove("empty");
        if(key === 0){
            ulBtn[1].classList.remove("active");
            des.style.display = 'block';
            dev.style.display = 'none';
        }else{
            ulBtn[0].classList.remove("active");
            dev.style.display = 'block';
            des.style.display = 'none';
        }
        obj.classList.add("active");
    });
});