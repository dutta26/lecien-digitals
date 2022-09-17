
// const homeId = document.getElementById('home-id-li')
const aboutId = document.getElementById('about-id-li')
const serviceId = document.getElementById('service-id-li')
const testimonalId = document.getElementById('testimonal-id-li')


const serviceSectionId = document.getElementById('service-id');

// homeId.addEventListener('click' , ()=>{
//     e.preventDefault();
//     const homeSectionId = document.getElementById('main-id');
//     homeSectionId.scrollIntoView({
//         behavior:"smooth"
//     })
// })


serviceId.addEventListener('click' , (e)=>{
    e.preventDefault();
   
    serviceSectionId.scrollIntoView({
        behavior:"smooth"
    })
})


testimonalId.addEventListener('click' , (e)=>{
    e.preventDefault();
    const testimonalSectionId = document.getElementById('testimonals-id');
    testimonalSectionId.scrollIntoView({
        behavior:"smooth"
    })
})


aboutId.addEventListener('click' , (e)=>{
    e.preventDefault();
    const aboutSectionId = document.getElementById('about-id');
    aboutSectionId.scrollIntoView({
        behavior:"smooth"
    })
})

const sidebarContainer = document.querySelector('.sidebar-container')

const sidebarBtn = document.getElementById('sidebar-hamburger-btn')
sidebarBtn.addEventListener('click' , ()=>{
   sidebarContainer.classList.remove('hide-items')
})



// cross btn
const crossBtn = document.getElementById('cross-btn-id')
crossBtn.addEventListener('click' , ()=>{
  sidebarContainer.classList.add('hide-items')
})


// sidebar btn working 
// const homeSidebarId = document.getElementById('home-id-sidebar-li')
const aboutSidebarId = document.getElementById('about-id-sidebar-li')
const serviceSidebarId = document.getElementById('service-id-sidebar-li')
const testimonalSidebarId = document.getElementById('testimonal-id-sidebar-li')


// homeSidebarId.addEventListener('click' , (e)=>{
//     e.preventDefault();
//     const homeSectionId = document.getElementById('main-id');
//     homeSectionId.scrollIntoView({
//         behavior:"smooth"
//     })
//     sidebarContainer.classList.add('hide-items')
    
// })


serviceSidebarId.addEventListener('click' , (e)=>{
    e.preventDefault();
   
    serviceSectionId.scrollIntoView({
        behavior:"smooth"
    })
    sidebarContainer.classList.add('hide-items')
})


testimonalSidebarId.addEventListener('click' , (e)=>{
    e.preventDefault();
    const testimonalSectionId = document.getElementById('testimonals-id');
    testimonalSectionId.scrollIntoView({
        behavior:"smooth"
    })
    sidebarContainer.classList.add('hide-items')
})


aboutSidebarId.addEventListener('click' , (e)=>{
    e.preventDefault();
    const aboutSectionId = document.getElementById('about-id');
    aboutSectionId.scrollIntoView({
        behavior:"smooth"
    })
    sidebarContainer.classList.add('hide-items')
})


const mainContactBtn = document.getElementById('main-button-contact-id')
mainContactBtn.addEventListener('click' , (e)=>{
    e.preventDefault();
    const contactSectionId = document.getElementById('contact-id');
    contactSectionId.scrollIntoView({
        behavior:"smooth"
    })
   
})


const mainServiceBtn = document.getElementById('main-button-service-id')
mainServiceBtn.addEventListener('click' , (e)=>{
    e.preventDefault();
   
    serviceSectionId.scrollIntoView({
        behavior:"smooth"
    })
    
   
})