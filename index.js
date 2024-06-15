const previousButton=document.getElementById('previous');
const nextButton=document.getElementById('next');
const page1Button=document.getElementById('page1');
const page2Button=document.getElementById('page2');
const page3Button=document.getElementById('page3');
const articleUno=document.getElementById('article1');
const articleDuo=document.getElementById('article2');
const articleTri=document.getElementById('article3');
let currentPage=1;
function setArticle(page){
    if(page===1){
        articleUno.style.display='flex';
        articleDuo.style.display='none';
        articleTri.style.display='none';
    };
    if (page===2){
        articleUno.style.display='none';
        articleDuo.style.display='flex';
        articleTri.style.display='none';
    };
    if(page===3){
        articleUno.style.display='none';
        articleDuo.style.display='none';
        articleTri.style.display='flex';
    };
};
function setPageButton(nr){
    if(nr===1){
        page1Button.innerHTML='<ion-icon name="radio-button-on-outline">';
        page2Button.innerHTML='<ion-icon name="radio-button-off-outline">';
        page3Button.innerHTML='<ion-icon name="radio-button-off-outline">';
    };
    if(nr===2){
        page1Button.innerHTML='<ion-icon name="radio-button-off-outline">';
        page2Button.innerHTML='<ion-icon name="radio-button-on-outline">';
        page3Button.innerHTML='<ion-icon name="radio-button-off-outline">';
    };
    if(nr===3){
        page1Button.innerHTML='<ion-icon name="radio-button-off-outline">';
        page2Button.innerHTML='<ion-icon name="radio-button-off-outline">';
        page3Button.innerHTML='<ion-icon name="radio-button-on-outline">';
    };
}
const handlePrevious=()=>{
    /*if(currentPage===2){
        currentPage--;
        articleUno.style.display='flex';
        articleDuo.style.display='none';
        page1Button.innerHTML='<ion-icon name="radio-button-on-outline">';
        page2Button.innerHTML='<ion-icon name="radio-button-off-outline">';
    };
    if(currentPage===3){
        currentPage--;
        articleDuo.style.display='flex';
        articleTri.style.display='none';
        page2Button.innerHTML='<ion-icon name="radio-button-on-outline">';
        page3Button.innerHTML='<ion-icon name="radio-button-off-outline">';
    };*/
    if(currentPage>1){
        currentPage--;
        setArticle(currentPage);
        setPageButton(currentPage);
        console.log('prev');
    };
};
const handleNext=()=>{
    /*if(currentPage===2){
        currentPage++;
        articleDuo.style.display='none';
        articleTri.style.display='flex';
        page2Button.innerHTML='<ion-icon name="radio-button-off-outline">';
        page3Button.innerHTML='<ion-icon name="radio-button-on-outline">';
    };
    if(currentPage===1){
        currentPage++;
        articleUno.style.display='none';
        articleDuo.style.display='flex';
        page1Button.innerHTML='<ion-icon name="radio-button-off-outline">';
        page2Button.innerHTML='<ion-icon name="radio-button-on-outline">';
    };*/
    if(currentPage<3){
        currentPage++;
        setArticle(currentPage);
        setPageButton(currentPage);
        console.log('next');
    }
};
const handlePage1=()=>{
    if(currentPage!==1){
        articleUno.style.display='flex';
        articleDuo.style.display='none';
        articleTri.style.display='none';
        currentPage=1;

    };
};

previousButton.addEventListener('click',handlePrevious);
nextButton.addEventListener('click',handleNext);
page1Button.addEventListener('click',()=>{
    if(currentPage!==1){
        currentPage=1;
        setArticle(currentPage);
        setPageButton(currentPage);
    };
});
page2Button.addEventListener('click',()=>{
    if(currentPage!==2){
        currentPage=2;
        setArticle(currentPage);
        setPageButton(currentPage);
    };
});
page3Button.addEventListener('click',()=>{
    if(currentPage!==3){
        currentPage=3;
        setArticle(currentPage);
        setPageButton(currentPage);
    };
});