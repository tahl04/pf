
const sections = document.querySelectorAll('.main section');
const menus = document.querySelectorAll("ol > li > a")

console.log(sections);
//스크롤 위치에 따라 해당하는 menu의 색깔과 마커가 달라짐
//The color and marker of the corresponding menu change according to the scroll position

window.addEventListener("scroll",()=>{
    //현재 영역의 id값
    //id of the current section
    let current=""

    sections.forEach(section=>{
        //각 section의 top 위치(절대적 위치)
        // The top of each section (absolute)
        const sectionTop = window.scrollY + section.getBoundingClientRect().top-500;

        //누적된 스크롤이 section의 top위치에 도달했거나 section의 안에 위치할 경우
        //When the accumulated scroll reaches the top of the section or is located inside the section
        if(window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
        menus.forEach((menu, keys)=>{
            menu.classList.remove("active");
            const href = menu.getAttribute("href").substring(1);
            if(href === current) {
                if(current === "about-me"){
                    document.querySelector('.pageName').innerHTML = "about me";
                }else{
                    document.querySelector('.pageName').innerHTML = current;
                }
                document.querySelector('.pageNum').innerText = keys+1;
                //현재 있는 영역의 id와 메뉴의 링크주소가 일치할때
                //When the Id of the current section matches the href of the menu
                menu.classList.add("active");
            }
        })
    })
})

const scrollElements = document.querySelectorAll(".scrolls");
    const elementInView = (el) => {   
    const elementTop = el.getBoundingClientRect().top+300;
    return (
        elementTop <= (window.innerHeight || document.documentElement.clientHeight) / 1
    );
    };
    const elementOutofView = (el) => {
    const elementTop = el.getBoundingClientRect().top+300;
    return (
        elementTop > (window.innerHeight || document.documentElement.clientHeight)
    );
    };
    const hideScrollElement = (select) => {
    select.classList.remove("scrolled");
    };
    const displayScrollElement = (select) => {
    select.classList.add("scrolled");
    };
    const handleScrollAnimation = () => {
    scrollElements.forEach((obj) => {
        if (elementInView(obj, 1.25)) {
        displayScrollElement(obj);
        } else if (elementOutofView(obj)) {
        hideScrollElement(obj)
        }
    })
    }
    window.addEventListener("scroll", () => { 
        handleScrollAnimation();
    });