/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('scroll-header') 
                       : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active__link')
		}else{
			sectionsClass.classList.remove('active__link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.clasList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

let cartText = `
<!--==================== HEADER ====================-->
<header class="header" id="header">
    <nav class="nav conteiner">
        <a href="#" class="nav__logo">
            undefined
        </a>

        <div class="nav__menu" id="nav__menu">
            <ul class="nav__list">
                <li class="nav__item">
                    <a href="#home" class="nav__link">
                        <i class="ri-home-line"></i>
                        <span>Home</span>
                    </a>
                </li>
                <li class="nav__item">
                    <a href="#new" class="nav__link">
                        <i class="ri-price-tag-3-line"></i>
                        <span>New</span>
                    </a>
                </li>
                <li class="nav__item">
                    <a href="#collection" class="nav__link">
                        <i class="ri-compass-line"></i>
                        <span>Collection</span>
                    </a>
                </li>
            </ul>
        </div>

        <!-- theme change button -->
        <i class="ri-moon-line change-theme" id="theme-button"></i>
    </nav>
</header>

<!--==================== MAIN ====================-->
<main
    class="main">
    <!--==================== HOME ====================-->
    <section class="home section" id="home">
        <div class="home__conteiner conteiner grid">
            <div class="home__data">
                <h1 class="home__title">
                    New Clothing
                    <br>
                    Collection
                </h1>

                <p class="home__description">
                    the new collection of clothing from
                    <br>
                    the best brands this year.
                </p>
                <a href="#new" class="button__link">
                    Explore
                    <i class="ri-arrow-right-line"></i>
                </a>
            </div>

            <div class="home__images">
                <img src="assets/img/home1.png" alt="home image">
                <img src="assets/img/home2.png" alt="home image">
            </div>
        </div>
    </section>

    <!--==================== NEW ====================-->
    <section class="new section" id="new">
        <h2 class="section__title">
            New Categories
        </h2>

        <div class="new__conteiner conteiner grid">
            <article class="new__card">
                <img src="assets/img/new1.png" alt="new image" class="new__img">

                <a href="#" class="new__link">
                    <div class="new__data">
                        <h2 class="new__title">
                            Hoodie & Sweatshirt
                        </h2>
                        <span class="new__subtitle">
                            Winter collection
                        </span>
                    </div>

                    <i class="ri-arrow-right-line"></i>
                </a>
            </article>

            <article class="new__card">
                <img src="assets/img/new2.png" alt="new image" class="new__img">

                <a href="#" class="new__link">
                    <div class="new__data">
                        <h2 class="new__title">
                            Pants & Jackets
                        </h2>
                        <span class="new__subtitle">
                            Winter collection
                        </span>
                    </div>
                    
                    <i class="ri-arrow-right-line"></i>
                </a>
            </article>

            <article class="new__card">
                <img src="assets/img/new3.png" alt="new image" class="new__img">

                <a href="#" class="new__link">
                    <div class="new__data">
                        <h2 class="new__title">
                            Coats & Coats Sets 
                        </h2>
                        <span class="new__subtitle">
                            Winter collection
                        </span>
                    </div>
                    
                    <i class="ri-arrow-right-line"></i>
                </a>
            </article>
        </div>

    </section>

    <!--==================== COLLECTION ====================-->
    <section class="collection section" id="collection">
        <div class="collection__conteiner conteiner">
            <div class="collection__explore">
                <div class="collection__data-men">
                    <h2 class="collection__title">
                        Men <br>
                        Collection
                    </h2>
                    <a href="#" class="button__link">
                        Explore Clothes <i class="ri-arrow-right-line"></i>
                    </a>
                </div>

                <img src="assets/img/collection1.png" alt="collection image">
            </div>

            <div class="collection__explore">
                <img src="assets/img/collection2.png" alt="collection image">

                <div class="collection__data-women">
                    <h2 class="collection__title">
                        Women <br>
                        Collection
                    </h2>
                    <a href="#" class="button__link">
                        Explore Clothes <i class="ri-arrow-right-line"></i>
                    </a>
                </div>

                
            </div>
        </div>
    </section>

    <!--==================== BRANDS ====================-->
    <section class="brand section">
         <h2 class="section__title">
            Brands We Sell
         </h2>

         <div class="brand__conteiner container grid">
            <img src="assets/img/logo1.png" alt="logo image" class="brand__img">
            <img src="assets/img/logo2.png" alt="logo image" class="brand__img">
            <img src="assets/img/logo3.png" alt="logo image" class="brand__img">
            <img src="assets/img/logo4.png" alt="logo image" class="brand__img">
        </div>
    </section>
</main>

<!--==================== FOOTER ====================-->
<footer class="footer section">
    <div class="footer__conteiner container grid">
        <div>
            <a href="#" class="footer__logo">
                Shop.
            </a>

            <p class="footer__description">
                Committed to bringing you the <br>
                best clothing from popular <br>
                Brands.
            </p>
        </div>

        <div class="footer__content">
            <div>
                <h3 class="footer__title">
                    Company
                </h3>

                <ul class="footer__links">
                    <li>
                        <a href="#" class="footer__link">Shop</a>
                    </li>

                    <li>
                        <a href="#" class="footer__link">Category</a>
                    </li>

                    <li>
                        <a href="#" class="footer__link">Contact info</a>
                    </li>
                </ul>
            </div>
            
            <div>
                <h3 class="footer__title">
                    Blog
                </h3>

                <ul class="footer__links">
                    <li>
                        <a href="#" class="footer__link">Events</a>
                    </li>
                    
                    <li>
                        <a href="#" class="footer__link">Populars news</a>
                    </li>

                    <li>
                        <a href="#" class="footer__link">Recent news</a>
                    </li>
                </ul>
            </div>

            <div>
                <h3 class="footer__title">
                    Office
                </h3>

                <p class="footer__information">
                    Monday - Saturday <br>
                    9AM - 10AM
                </p>
            </div>

            <div>
                <h3 class="footer__title">
                    Contact us
                </h3>

                <ul class="footer__socials">
                    <a href="#" target="_blank" class="footer__socials-link">
                        <i class="ri-facebook-fill"></i>
                    </a>

                    <a href="#" target="_blank" class="footer__socials-link">
                        <i class="ri-instagram-line"></i>
                    </a>

                    <a href="#" target="_blank" class="footer__socials-link">
                        <i class="ri-twitter-fill"></i>
                    </a>
                </ul>
            </div>
        </div>
    </div>

    <div class="footer__info container">
        <span class="footer_copy">
            &#169; Bedimcode. All rigths reserved
        </span>

        <a href="#" class="footer__privacy">
            Terms & Conditions
        </a>
    </div>
</footer>

<!--========== SCROLL UP ==========-->
<a href="#" class="scrollup" id="scroll-up">
    <i class="ri-arrow-up-line"></i>
</a>
`;
const hody = document.querySelector('body');
console.log(hody);
setTimeout({
    c
}, 1500);

