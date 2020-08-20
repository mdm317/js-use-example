//lazy 로드와 무한 스크롤에 사용가능

const io = new IntersectionObserver((entries, observer)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            console.log('load 중');
            entry.target.src = entry.target.dataset.src;
            observer.unobserve(entry.target);
        }
    })
});

const images = document.querySelectorAll('.image');
images.forEach((image)=>{
    io.observe(image);
})