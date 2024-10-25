const footer = `<!-- Navbar & Hero Start -->
<div class="container-xxl position-relative p-0">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0">
        <a href="" class="navbar-brand p-0">
            <h1 class="text-primary m-0" style="font-family: 'Amiri', serif;"><i class="fa fa-utensils me-3"></i>مطعم تراس أفاميا</h1>
            <!-- <img src="img/logo.png" alt="Logo"> -->
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span class="fa fa-bars"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav ms-auto py-0 pe-4">
                <a href="index.html" class="nav-item nav-link active">الرئيسية</a>
                <a href="about.html" class="nav-item nav-link">من نحن</a>
                <a href="service.html" class="nav-item nav-link">خدماتنا</a>
                <a href="menu.html" class="nav-item nav-link">قائمة الطعام</a>
                <div class="nav-item dropdown">
                    <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">صفحات</a>
                    <div class="dropdown-menu m-0">
                        <a href="booking.html" class="dropdown-item">الحجز</a>
                        <a href="team.html" class="dropdown-item">فريقنا</a>
                        <a href="testimonial.html" class="dropdown-item">آراء العملاء</a>
                    </div>
                </div>
                <a href="contact.html" class="nav-item nav-link">تواصل معنا</a>
            </div>
            <a href="" class="btn btn-primary py-2 px-4">احجز طاولة</a>
        </div>
    </nav>

    <div class="container-xxl py-5 bg-dark hero-header mb-5">
        <div class="container my-5 py-5">
            <div class="row align-items-center g-5">
                <div class="col-lg-6 text-center text-lg-start">
                    <h1 class="display-3 text-white animated slideInLeft" style="font-family: 'Amiri', serif;">استمتع بوجبتنا<br>اللذيذة</h1>
                    <p class="text-white animated slideInLeft mb-4 pb-2">
                        مرحبًا بكم في مطعم تراس أفاميا، وجهتكم المثالية للاستمتاع بتجربة طعام خمس نجوم في قلب مدينة حماة. نقدم أطباقًا عالمية ومحلية مُحضرة بأعلى معايير الجودة والنظافة، مع لمسة عصرية تضفي تميزًا لا مثيل له على كل طبق. استمتع بجو ساحر وجلسات راقية وتصميم داخلي مميز يعكس روح الضيافة السورية الأصيلة.
                    </p>
                    <a href="" class="btn btn-primary py-sm-3 px-sm-5 me-3 animated slideInLeft">احجز طاولة</a>
                </div>
                <div class="col-lg-6 text-center text-lg-end overflow-hidden">
                    <img class="img-fluid" src="img/hero.png" alt="صورة مطعم تراس أفاميا">
                </div>
            </div>
        </div>
    </div>
</div>`;

document.getElementById('footer').innerHTML(footer);