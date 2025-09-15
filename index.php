<?php
/**
 * Theme Name: آریو تجهیز صنعت
 * Description: قالب اختصاصی شرکت آریو تجهیز صنعت - تامین کننده تجهیزات صنعتی
 * Version: 1.0.0
 * Author: شرکت آریو تجهیز صنعت
 */

get_header(); ?>

<!DOCTYPE html>
<html <?php language_attributes(); ?> dir="rtl">
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php wp_title('|', true, 'right'); bloginfo('name'); ?></title>
    <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/style.css">
    <link href="https://fonts.googleapis.com/css2?family=Vazir:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
    <!-- Navigation -->
    <nav class="navbar glass-card">
        <div class="nav-container">
            <div class="nav-logo">
                <div class="logo-3d">
                    <i class="fas fa-industry"></i>
                </div>
                <span>آریو تجهیز صنعت</span>
            </div>
            <div class="nav-menu" id="nav-menu">
                <a href="#home" class="nav-link active">خانه</a>
                <a href="#about" class="nav-link">درباره ما</a>
                <a href="#products" class="nav-link">محصولات</a>
                <a href="#services" class="nav-link">خدمات</a>
                <a href="#contact" class="nav-link">تماس</a>
            </div>
            <div class="hamburger" id="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </nav>

    <!-- Hero Section with Enhanced Professional Slider -->
    <section id="home" class="hero">
        <div class="hero-slider">
            <!-- Slide 1: Company Introduction -->
            <div class="slide active" style="background: linear-gradient(135deg, rgba(255, 179, 230, 0.3), rgba(179, 230, 255, 0.3));">
                <div class="slide-content">
                    <div class="floating-shapes">
                        <div class="shape-3d cube"></div>
                        <div class="shape-3d sphere"></div>
                        <div class="shape-3d pyramid"></div>
                    </div>
                    <div class="hero-badge">منتخب سال 1402</div>
                    <h1 class="hero-title">شرکت سهامی خاص آریو تجهیز صنعت</h1>
                    <p class="hero-subtitle">تامین کننده ابزار دقیق، تجهیزات مکانیک، الکتریک، الکترونیک</p>
                    <div class="hero-stats glass-card">
                        <div class="stat">
                            <span class="stat-number">1399</span>
                            <span class="stat-label">سال تأسیس</span>
                        </div>
                        <div class="stat">
                            <span class="stat-number">500+</span>
                            <span class="stat-label">پروژه موفق</span>
                        </div>
                        <div class="stat">
                            <span class="stat-number">50+</span>
                            <span class="stat-label">شرکت همکار</span>
                        </div>
                    </div>
                    <div class="hero-buttons">
                        <button class="cta-btn primary">مشاهده محصولات</button>
                        <button class="cta-btn secondary">درخواست مشاوره</button>
                    </div>
                </div>
            </div>
            
            <!-- Slide 2: Partnerships -->
            <div class="slide" style="background: linear-gradient(135deg, rgba(179, 255, 179, 0.3), rgba(255, 204, 179, 0.3));">
                <div class="slide-content">
                    <div class="floating-shapes">
                        <div class="shape-3d gear rotating"></div>
                        <div class="shape-3d cylinder"></div>
                        <div class="shape-3d hexagon"></div>
                    </div>
                    <div class="hero-badge">شرکای تجاری</div>
                    <h1 class="hero-title">همکاری با بزرگترین شرکت‌های کشور</h1>
                    <p class="hero-subtitle">افتخار همکاری با فولاد زرند ایرانیان، فولاد سیرجان، شرکت ذغالسنگ و ملی صنایع مس ایران</p>
                    <div class="partner-logos glass-card">
                        <div class="partner-item">
                            <i class="fas fa-industry"></i>
                            <span>فولاد زرند ایرانیان</span>
                        </div>
                        <div class="partner-item">
                            <i class="fas fa-fire"></i>
                            <span>فولاد سیرجان</span>
                        </div>
                        <div class="partner-item">
                            <i class="fas fa-mountain"></i>
                            <span>شرکت ذغالسنگ</span>
                        </div>
                        <div class="partner-item">
                            <i class="fas fa-gem"></i>
                            <span>ملی صنایع مس ایران</span>
                        </div>
                    </div>
                    <div class="hero-buttons">
                        <button class="cta-btn primary">درباره ما</button>
                        <button class="cta-btn secondary">نمونه پروژه‌ها</button>
                    </div>
                </div>
            </div>
            
            <!-- Slide 3: Services -->
            <div class="slide" style="background: linear-gradient(135deg, rgba(255, 230, 179, 0.3), rgba(204, 179, 255, 0.3));">
                <div class="slide-content">
                    <div class="floating-shapes">
                        <div class="shape-3d torus"></div>
                        <div class="shape-3d octagon"></div>
                        <div class="shape-3d diamond"></div>
                    </div>
                    <div class="hero-badge">خدمات کامل</div>
                    <h1 class="hero-title">خدمات تخصصی و جامع</h1>
                    <p class="hero-subtitle">از طراحی تا اجرا، از واردات تا خدمات پس از فروش، همه در یک مکان</p>
                    <div class="services-preview glass-card">
                        <div class="service-item">
                            <i class="fas fa-cogs"></i>
                            <span>طراحی و مهندسی</span>
                        </div>
                        <div class="service-item">
                            <i class="fas fa-shipping-fast"></i>
                            <span>واردات و صادرات</span>
                        </div>
                        <div class="service-item">
                            <i class="fas fa-tools"></i>
                            <span>نصب و راه‌اندازی</span>
                        </div>
                        <div class="service-item">
                            <i class="fas fa-headset"></i>
                            <span>پشتیبانی 24/7</span>
                        </div>
                    </div>
                    <div class="hero-buttons">
                        <button class="cta-btn primary">تماس با ما</button>
                        <button class="cta-btn secondary">مشاهده خدمات</button>
                    </div>
                </div>
            </div>

            <!-- Slide 4: Quality & Certifications -->
            <div class="slide" style="background: linear-gradient(135deg, rgba(179, 255, 230, 0.3), rgba(230, 179, 255, 0.3));">
                <div class="slide-content">
                    <div class="floating-shapes">
                        <div class="shape-3d star"></div>
                        <div class="shape-3d prism"></div>
                        <div class="shape-3d crystal"></div>
                    </div>
                    <div class="hero-badge">کیفیت برتر</div>
                    <h1 class="hero-title">استانداردهای بین‌المللی کیفیت</h1>
                    <p class="hero-subtitle">تمامی محصولات ما دارای گواهینامه‌های معتبر بین‌المللی و ضمانت کیفیت</p>
                    <div class="quality-features glass-card">
                        <div class="quality-item">
                            <i class="fas fa-certificate"></i>
                            <span>گواهینامه ISO 9001</span>
                        </div>
                        <div class="quality-item">
                            <i class="fas fa-shield-check"></i>
                            <span>ضمانت معتبر</span>
                        </div>
                        <div class="quality-item">
                            <i class="fas fa-award"></i>
                            <span>کیفیت اروپایی</span>
                        </div>
                        <div class="quality-item">
                            <i class="fas fa-handshake"></i>
                            <span>خدمات پس از فروش</span>
                        </div>
                    </div>
                    <div class="hero-buttons">
                        <button class="cta-btn primary">گواهینامه‌ها</button>
                        <button class="cta-btn secondary">درخواست نمونه</button>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Enhanced Slider Controls -->
        <div class="slider-nav">
            <button class="slider-btn prev-btn" onclick="previousSlide()" aria-label="اسلاید قبلی">
                <i class="fas fa-chevron-right"></i>
            </button>
            <button class="slider-btn next-btn" onclick="nextSlide()" aria-label="اسلاید بعدی">
                <i class="fas fa-chevron-left"></i>
            </button>
        </div>
        
        <div class="slider-dots">
            <span class="dot active" onclick="currentSlide(1)" data-slide="1"></span>
            <span class="dot" onclick="currentSlide(2)" data-slide="2"></span>
            <span class="dot" onclick="currentSlide(3)" data-slide="3"></span>
            <span class="dot" onclick="currentSlide(4)" data-slide="4"></span>
        </div>
        
        <!-- Slider Progress Bar -->
        <div class="slider-progress">
            <div class="progress-bar"></div>
        </div>
    </section>

    <!-- About Section -->
    <section id="about" class="about">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">درباره شرکت آریو تجهیز صنعت</h2>
                <p class="section-subtitle">تخصص، تجربه و اعتماد در خدمت صنعت کشور</p>
            </div>
            
            <div class="about-content">
                <div class="about-text glass-card">
                    <p>
                        شرکت آریوتجهیز صنعت در سال 1399 با کادری مجرب و جوان به صورت تخصصی در زمینه کلیه امور بازرگانی اعم از خرید و فروش، واردات و صادرات کلیه کالاهای مجاز بازرگانی و انتقال تکنولوژی از خارج به داخل کشور، ترخیص کالا از گمرک داخلی و بین المللی، گشایش اعتبارات بانکی به صورت ارزی و ریالی از کلیه بانک‌ها، موسسات داخلی و خارجی، اخذ و اعطای نمایندگی های مجاز بازرگانی و برگزاری و شرکت در نمایشگاهای داخلی و خارجی، شرکت در کلیه مناقصات پیمانها و مزایدات دولتی و خصوصی اعم از داخلی و خارجی، طراحی، محاسبه، تهیه و تامین، ساخت و اجرا و خدمات فنی، مشاوره و نظارت بر کلیه کارهای ساختمانی، صنعتی، تاسیساتی، تاسیسات برقی، مکانیکی، ابزار دقیق و تجهیزاتی اعم از ابنیه، راه و باند و راه آهن، فرودگاه، خطوط انتقال، سدسازی، آبخیز داری، عملیات خاکی، سازه های فولادی و صنعتی، پروژه های نفت و گاز و پتروشیمی، سازه های بتنی سنگین، نقشه برداری و آزمایشگاه خاک و بتن، کانال، پل، تونل و اسکله، تاسیسات بندری، آب و فاضلاب، خطوط لوله گازرسانی و افزودنی های بتنی و صنعتی، تولید مصالح ساختمانی، ساخت قطعات پیش ساخته، کنترل پروژه و برنامه ریزی، مدیریت پیمان، تهیه، حمل و نصب و تعمیر و نگهداری کلیه تجهیزات مکانیکا و الکتریکا و ماشین آلات ساختمانی و صنعتی، حمل و نقل درون شهری، تهیه و تعمیرات سخت افزاری و نرم افزاری رایانه ای فعالیت خود را آغاز کرد.
                    </p>
                    <div class="company-detailed-info glass-card">
                        <h4>حوزه فعالیت‌های تخصصی شرکت:</h4>
                        <div class="activity-sectors">
                            <div class="sector">
                                <h5><i class="fas fa-industry"></i> صنایع نفت، گاز و پتروشیمی</h5>
                                <ul>
                                    <li>طراحی و اجرای خطوط لوله</li>
                                    <li>تجهیزات پالایشگاهی</li>
                                    <li>سیستم‌های کنترل فرآیند</li>
                                </ul>
                            </div>
                            <div class="sector">
                                <h5><i class="fas fa-building"></i> صنایع فولاد و معدن</h5>
                                <ul>
                                    <li>تجهیزات کوره‌های صنعتی</li>
                                    <li>سیستم‌های حمل مواد</li>
                                    <li>ابزارهای استخراج</li>
                                </ul>
                            </div>
                            <div class="sector">
                                <h5><i class="fas fa-bolt"></i> صنایع برق و انرژی</h5>
                                <ul>
                                    <li>تجهیزات نیروگاهی</li>
                                    <li>خطوط انتقال</li>
                                    <li>سیستم‌های کنترل توان</li>
                                </ul>
                            </div>
                            <div class="sector">
                                <h5><i class="fas fa-tint"></i> صنایع آب و فاضلاب</h5>
                                <ul>
                                    <li>تصفیه خانه‌های آب</li>
                                    <li>سیستم‌های پمپاژ</li>
                                    <li>ابزار اندازه‌گیری کیفیت</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="about-features">
                        <div class="feature-item">
                            <i class="fas fa-award"></i>
                            <span>تجربه بیش از 4 سال</span>
                        </div>
                        <div class="feature-item">
                            <i class="fas fa-users"></i>
                            <span>تیم متخصص و با تجربه</span>
                        </div>
                        <div class="feature-item">
                            <i class="fas fa-globe"></i>
                            <span>شبکه بین‌المللی تأمین</span>
                        </div>
                        <div class="feature-item">
                            <i class="fas fa-certificate"></i>
                            <span>کیفیت تضمین شده</span>
                        </div>
                    </div>
                </div>
                
                <div class="services-grid">
                    <div class="service-card glass-card">
                        <div class="service-icon">
                            <i class="fas fa-cogs"></i>
                        </div>
                        <h3>تجهیزات مکانیکی</h3>
                        <p>بیرینگ‌ها، پمپ‌های هیدرولیک، جک‌های هیدرولیکی، مبدل‌های حرارتی و کوپلینگ‌ها</p>
                    </div>
                    
                    <div class="service-card glass-card">
                        <div class="service-icon">
                            <i class="fas fa-bolt"></i>
                        </div>
                        <h3>تجهیزات برقی</h3>
                        <p>الکترو موتورها، کنتاکتورها، کارت‌های الکترونیکی، ویبرومتر و سنسورها</p>
                    </div>
                    
                    <div class="service-card glass-card">
                        <div class="service-icon">
                            <i class="fas fa-ruler-combined"></i>
                        </div>
                        <h3>ابزار دقیق</h3>
                        <p>حرارت‌سنج‌ها، فشارسنج‌ها، سطح‌سنج‌ها، شیرهای کنترلی و ترانسمیترها</p>
                    </div>
                    
                    <div class="service-card glass-card">
                        <div class="service-icon">
                            <i class="fas fa-flask"></i>
                        </div>
                        <h3>تجهیزات آزمایشگاهی</h3>
                        <p>اسپکتروفتومتر، کدورت‌سنج، BOD متر، راکتور COD، pH متر و EC متر</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Products Section -->
    <section id="products" class="products">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">محصولات ما</h2>
                <p class="section-subtitle">محصولات تخصصی مطابق با رزومه شرکت</p>
            </div>
            
            <!-- Product Filters -->
            <div class="product-filters">
                <button class="filter-btn active" data-filter="all">همه محصولات</button>
                <button class="filter-btn" data-filter="mechanical">تجهیزات مکانیکی</button>
                <button class="filter-btn" data-filter="electrical">تجهیزات برقی</button>
                <button class="filter-btn" data-filter="instruments">ابزار دقیق</button>
                <button class="filter-btn" data-filter="laboratory">تجهیزات آزمایشگاهی</button>
            </div>
            
            <!-- Products Grid - فقط محصولات ذکر شده در رزومه شرکت -->
            <div class="products-grid" id="products-grid">
                <!-- تجهیزات مکانیکی -->
                <div class="product-card glass-card" data-category="mechanical">
                    <div class="product-image">
                        <i class="fas fa-circle-dot"></i>
                    </div>
                    <h3>بیرینگ های غلتکی</h3>
                    <p>تامین و تعمیر انواع بیرینگ های صنعتی</p>
                    <div class="product-features">
                        <span>کیفیت برتر</span>
                        <span>گارانتی معتبر</span>
                    </div>
                    <button class="product-btn">جزئیات محصول</button>
                </div>
                
                <div class="product-card glass-card" data-category="mechanical">
                    <div class="product-image">
                        <i class="fas fa-tint"></i>
                    </div>
                    <h3>پمپ های هیدرولیک</h3>
                    <p>پمپ های هیدرولیک و لوازم یدکی</p>
                    <div class="product-features">
                        <span>فشار بالا</span>
                        <span>دوام عالی</span>
                    </div>
                    <button class="product-btn">جزئیات محصول</button>
                </div>
                
                <div class="product-card glass-card" data-category="mechanical">
                    <div class="product-image">
                        <i class="fas fa-cog"></i>
                    </div>
                    <h3>موتورهای هیدرولیک</h3>
                    <p>موتورهای هیدرولیک و قطعات جانبی</p>
                    <div class="product-features">
                        <span>راندمان بالا</span>
                        <span>کم صدا</span>
                    </div>
                    <button class="product-btn">جزئیات محصول</button>
                </div>
                
                <div class="product-card glass-card" data-category="mechanical">
                    <div class="product-image">
                        <i class="fas fa-fan"></i>
                    </div>
                    <h3>فن های صنعتی</h3>
                    <p>انواع فن های صنعتی و تهویه</p>
                    <div class="product-features">
                        <span>کارآیی بالا</span>
                        <span>مقاوم</span>
                    </div>
                    <button class="product-btn">جزئیات محصول</button>
                </div>
                
                <div class="product-card glass-card" data-category="mechanical">
                    <div class="product-image">
                        <i class="fas fa-arrows-alt-v"></i>
                    </div>
                    <h3>جک های هیدرولیک</h3>
                    <p>جک های هیدرولیک و لوازم یدکی</p>
                    <div class="product-features">
                        <span>ظرفیت بالا</span>
                        <span>ایمنی بالا</span>
                    </div>
                    <button class="product-btn">جزئیات محصول</button>
                </div>
                
                <div class="product-card glass-card" data-category="mechanical">
                    <div class="product-image">
                        <i class="fas fa-link"></i>
                    </div>
                    <h3>کوپلینگ های هیدرولیک</h3>
                    <p>کوپلینگ ها و اتصالات هیدرولیک</p>
                    <div class="product-features">
                        <span>آب‌بندی عالی</span>
                        <span>مقاوم در برابر فشار</span>
                    </div>
                    <button class="product-btn">جزئیات محصول</button>
                </div>
                
                <div class="product-card glass-card" data-category="mechanical">
                    <div class="product-image">
                        <i class="fas fa-thermometer-half"></i>
                    </div>
                    <h3>مبدل های حرارتی</h3>
                    <p>مبدل های حرارتی تیوب و پلیت</p>
                    <div class="product-features">
                        <span>بازده حرارتی بالا</span>
                        <span>مقاوم به خورندگی</span>
                    </div>
                    <button class="product-btn">جزئیات محصول</button>
                </div>
                
                <div class="product-card glass-card" data-category="mechanical">
                    <div class="product-image">
                        <i class="fas fa-filter"></i>
                    </div>
                    <h3>فیلترهای هیدرولیک</h3>
                    <p>فیلترهای صنعتی و تعویضی</p>
                    <div class="product-features">
                        <span>فیلتراسیون دقیق</span>
                        <span>عمر مفید بالا</span>
                    </div>
                    <button class="product-btn">جزئیات محصول</button>
                </div>
                
                <!-- تجهیزات برقی -->
                <div class="product-card glass-card" data-category="electrical">
                    <div class="product-image">
                        <i class="fas fa-plug"></i>
                    </div>
                    <h3>الکترو موتورها</h3>
                    <p>انواع الکترو موتورهای صنعتی</p>
                    <div class="product-features">
                        <span>راندمان بالا</span>
                        <span>کم مصرف</span>
                    </div>
                    <button class="product-btn">جزئیات محصول</button>
                </div>
                
                <div class="product-card glass-card" data-category="electrical">
                    <div class="product-image">
                        <i class="fas fa-power-off"></i>
                    </div>
                    <h3>کنتاکتورها</h3>
                    <p>کنتاکتورهای برقی و تجهیزات کنترل</p>
                    <div class="product-features">
                        <span>قابلیت اطمینان بالا</span>
                        <span>عمر طولانی</span>
                    </div>
                    <button class="product-btn">جزئیات محصول</button>
                </div>
                
                <div class="product-card glass-card" data-category="electrical">
                    <div class="product-image">
                        <i class="fas fa-microchip"></i>
                    </div>
                    <h3>کارت های الکترونیکی</h3>
                    <p>کارت‌های الکترونیکی و مدارات کنترل</p>
                    <div class="product-features">
                        <span>تکنولوژی روز</span>
                        <span>دقت بالا</span>
                    </div>
                    <button class="product-btn">جزئیات محصول</button>
                </div>
                
                <div class="product-card glass-card" data-category="electrical">
                    <div class="product-image">
                        <i class="fas fa-wave-square"></i>
                    </div>
                    <h3>ویبرومتر</h3>
                    <p>دستگاه‌های اندازه‌گیری ارتعاش</p>
                    <div class="product-features">
                        <span>دقت اندازه‌گیری بالا</span>
                        <span>قابل حمل</span>
                    </div>
                    <button class="product-btn">جزئیات محصول</button>
                </div>
                
                <div class="product-card glass-card" data-category="electrical">
                    <div class="product-image">
                        <i class="fas fa-satellite-dish"></i>
                    </div>
                    <h3>سنسورها</h3>
                    <p>انواع سنسورهای دما، فشار، جریان</p>
                    <div class="product-features">
                        <span>حساسیت بالا</span>
                        <span>مقاوم در محیط</span>
                    </div>
                    <button class="product-btn">جزئیات محصول</button>
                </div>
                
                <!-- ابزار دقیق -->
                <div class="product-card glass-card" data-category="instruments">
                    <div class="product-image">
                        <i class="fas fa-thermometer"></i>
                    </div>
                    <h3>حرارت‌سنج‌ها</h3>
                    <p>دماسنج‌های دقیق برای کاربردهای صنعتی</p>
                    <div class="product-features">
                        <span>دقت ±0.1°C</span>
                        <span>محدوده وسیع</span>
                    </div>
                    <button class="product-btn">جزئیات محصول</button>
                </div>
                
                <div class="product-card glass-card" data-category="instruments">
                    <div class="product-image">
                        <i class="fas fa-tachometer-alt"></i>
                    </div>
                    <h3>فشارسنج‌ها</h3>
                    <p>گیج فشار دیجیتال و آنالوگ</p>
                    <div class="product-features">
                        <span>دقت 0.1%</span>
                        <span>مقاوم شوک</span>
                    </div>
                    <button class="product-btn">جزئیات محصول</button>
                </div>
                
                <div class="product-card glass-card" data-category="instruments">
                    <div class="product-image">
                        <i class="fas fa-ruler-vertical"></i>
                    </div>
                    <h3>سطح‌سنج‌ها</h3>
                    <p>اندازه‌گیری سطح مایعات و مواد جامد</p>
                    <div class="product-features">
                        <span>اندازه‌گیری از راه دور</span>
                        <span>بدون تماس</span>
                    </div>
                    <button class="product-btn">جزئیات محصول</button>
                </div>
                
                <div class="product-card glass-card" data-category="instruments">
                    <div class="product-image">
                        <i class="fas fa-wrench"></i>
                    </div>
                    <h3>شیرهای کنترلی</h3>
                    <p>شیرهای کنترل جریان و فشار</p>
                    <div class="product-features">
                        <span>کنترل دقیق</span>
                        <span>عمر بالا</span>
                    </div>
                    <button class="product-btn">جزئیات محصول</button>
                </div>
                
                <div class="product-card glass-card" data-category="instruments">
                    <div class="product-image">
                        <i class="fas fa-broadcast-tower"></i>
                    </div>
                    <h3>ترانسمیترها</h3>
                    <p>ترانسمیترهای اندازه‌گیری و کنترل</p>
                    <div class="product-features">
                        <span>سیگنال پایدار</span>
                        <span>دقت بالا</span>
                    </div>
                    <button class="product-btn">جزئیات محصول</button>
                </div>
                
                <!-- تجهیزات آزمایشگاهی -->
                <div class="product-card glass-card" data-category="laboratory">
                    <div class="product-image">
                        <i class="fas fa-eye"></i>
                    </div>
                    <h3>اسپکتروفتومتر</h3>
                    <p>تجزیه طیفی مواد با دقت بالا</p>
                    <div class="product-features">
                        <span>UV-VIS</span>
                        <span>دقت طیفی بالا</span>
                    </div>
                    <button class="product-btn">جزئیات محصول</button>
                </div>
                
                <div class="product-card glass-card" data-category="laboratory">
                    <div class="product-image">
                        <i class="fas fa-vial"></i>
                    </div>
                    <h3>کدورت‌سنج</h3>
                    <p>اندازه‌گیری کدورت آب و مایعات</p>
                    <div class="product-features">
                        <span>استاندارد ISO</span>
                        <span>کالیبراسیون آسان</span>
                    </div>
                    <button class="product-btn">جزئیات محصول</button>
                </div>
                
                <div class="product-card glass-card" data-category="laboratory">
                    <div class="product-image">
                        <i class="fas fa-flask-vial"></i>
                    </div>
                    <h3>BOD متر</h3>
                    <p>اندازه‌گیری نیاز بیوشیمیایی اکسیژن</p>
                    <div class="product-features">
                        <span>5 روزه</span>
                        <span>دقت تحلیلی</span>
                    </div>
                    <button class="product-btn">جزئیات محصول</button>
                </div>
                
                <div class="product-card glass-card" data-category="laboratory">
                    <div class="product-image">
                        <i class="fas fa-atom"></i>
                    </div>
                    <h3>راکتور COD</h3>
                    <p>هضم نمونه برای تعیین COD</p>
                    <div class="product-features">
                        <span>دمای ثابت</span>
                        <span>کنترل زمان</span>
                    </div>
                    <button class="product-btn">جزئیات محصول</button>
                </div>
                
                <div class="product-card glass-card" data-category="laboratory">
                    <div class="product-image">
                        <i class="fas fa-balance-scale"></i>
                    </div>
                    <h3>pH متر</h3>
                    <p>اندازه‌گیری دقیق pH و ORP</p>
                    <div class="product-features">
                        <span>کالیبراسیون خودکار</span>
                        <span>دقت ±0.01</span>
                    </div>
                    <button class="product-btn">جزئیات محصول</button>
                </div>
                
                <div class="product-card glass-card" data-category="laboratory">
                    <div class="product-image">
                        <i class="fas fa-bolt"></i>
                    </div>
                    <h3>EC متر</h3>
                    <p>هدایت الکتریکی و TDS</p>
                    <div class="product-features">
                        <span>جبران دما</span>
                        <span>محدوده وسیع</span>
                    </div>
                    <button class="product-btn">جزئیات محصول</button>
                </div>
            </div>
        </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="services">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">خدمات ما</h2>
                <p class="section-subtitle">خدمات کامل و تخصصی</p>
            </div>
            
            <div class="services-detailed">
                <div class="service-detail glass-card">
                    <div class="service-header">
                        <i class="fas fa-tools"></i>
                        <h3>نصب، راه‌اندازی، تعمیرات و نگهداری</h3>
                    </div>
                    <p>نصب و راه‌اندازی تجهیزات، تعمیرات و نگهداری کلیه تجهیزات مکانیکا و الکتریکا و ماشین آلات ساختمانی و صنعتی</p>
                </div>
                
                <div class="service-detail glass-card">
                    <div class="service-header">
                        <i class="fas fa-shipping-fast"></i>
                        <h3>واردات و صادرات</h3>
                    </div>
                    <p>واردات و صادرات کلیه کالاهای مجاز بازرگانی و انتقال تکنولوژی از خارج به داخل کشور، ترخیص کالا از گمرک</p>
                </div>
                
                <div class="service-detail glass-card">
                    <div class="service-header">
                        <i class="fas fa-drafting-compass"></i>
                        <h3>طراحی و مهندسی</h3>
                    </div>
                    <p>طراحی، محاسبه، تهیه و تامین، ساخت و اجرا و خدمات فنی، مشاوره و نظارت بر کلیه کارهای ساختمانی و صنعتی</p>
                </div>
                
                <div class="service-detail glass-card">
                    <div class="service-header">
                        <i class="fas fa-gavel"></i>
                        <h3>مناقصات و پیمان‌ها</h3>
                    </div>
                    <p>شرکت در کلیه مناقصات پیمانها و مزایدات دولتی و خصوصی، کنترل پروژه و برنامه ریزی، مدیریت پیمان</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="contact">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">تماس با ما</h2>
                <p class="section-subtitle">آماده ارائه خدمات به شما هستیم</p>
            </div>
            
            <div class="contact-content">
                <div class="contact-form glass-card">
                    <h3>درخواست مشاوره رایگان</h3>
                    <form>
                        <div class="form-group">
                            <input type="text" placeholder="نام و نام خانوادگی" required>
                        </div>
                        <div class="form-group">
                            <input type="email" placeholder="ایمیل" required>
                        </div>
                        <div class="form-group">
                            <input type="tel" placeholder="شماره تلفن" required>
                        </div>
                        <div class="form-group">
                            <select>
                                <option>نوع محصول مورد نیاز</option>
                                <option>تجهیزات مکانیکی</option>
                                <option>تجهیزات برقی</option>
                                <option>ابزار دقیق</option>
                                <option>تجهیزات آزمایشگاهی</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <textarea placeholder="توضیحات پروژه شما" rows="4"></textarea>
                        </div>
                        <button type="submit" class="submit-btn">ارسال درخواست</button>
                    </form>
                </div>
                
                <div class="contact-info glass-card">
                    <h3>اطلاعات تماس</h3>
                    <div class="info-item">
                        <i class="fas fa-phone"></i>
                        <div>
                            <h4>تلفن تماس</h4>
                            <p>091061618593<br>0343247652-03432476351</p>
                        </div>
                    </div>
                    
                    <div class="info-item">
                        <i class="fas fa-fax"></i>
                        <div>
                            <h4>فکس</h4>
                            <p>03432473605</p>
                        </div>
                    </div>
                    
                    <div class="info-item">
                        <i class="fas fa-envelope"></i>
                        <div>
                            <h4>ایمیل</h4>
                            <p>info@ariotajhizsanat.ir<br>ario.tajhizsanat@gmail.com</p>
                        </div>
                    </div>
                    
                    <div class="info-item">
                        <i class="fas fa-map-marker-alt"></i>
                        <div>
                            <h4>آدرس</h4>
                            <p>کرمان، خیابان امام جمعه، خیابان نامدار محمدی غربی، پلاک 58</p>
                        </div>
                    </div>
                    
                    <div class="info-item">
                        <i class="fas fa-globe"></i>
                        <div>
                            <h4>وبسایت</h4>
                            <p>ariotajhizsanat.ir</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h4>شرکت آریو تجهیز صنعت</h4>
                    <p>تامین کننده ابزار دقیق، تجهیزات مکانیک، الکتریک، الکترونیک</p>
                    <div class="social-links">
                        <a href="#"><i class="fab fa-telegram"></i></a>
                        <a href="#"><i class="fab fa-whatsapp"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        <a href="#"><i class="fab fa-linkedin"></i></a>
                    </div>
                </div>
                
                <div class="footer-section">
                    <h4>خدمات</h4>
                    <ul>
                        <li><a href="#">واردات و صادرات</a></li>
                        <li><a href="#">طراحی و مهندسی</a></li>
                        <li><a href="#">نصب و راه‌اندازی</a></li>
                        <li><a href="#">پشتیبانی فنی</a></li>
                    </ul>
                </div>
                
                <div class="footer-section">
                    <h4>محصولات</h4>
                    <ul>
                        <li><a href="#">تجهیزات مکانیکی</a></li>
                        <li><a href="#">تجهیزات برقی</a></li>
                        <li><a href="#">ابزار دقیق</a></li>
                        <li><a href="#">تجهیزات آزمایشگاهی</a></li>
                    </ul>
                </div>
                
                <div class="footer-section">
                    <h4>تماس با ما</h4>
                    <p>کرمان، خیابان امام جمعه، خیابان نامدار محمدی غربی، پلاک 58</p>
                    <p>تلفن: 091061618593</p>
                    <p>ایمیل: info@ariotajhizsanat.ir</p>
                </div>
            </div>
            
            <div class="footer-bottom">
                <p>&copy; 1402 شرکت آریو تجهیز صنعت. تمامی حقوق محفوظ است.</p>
            </div>
        </div>
    </footer>

    <!-- Back to Top Button -->
    <button class="back-to-top" id="back-to-top">
        <i class="fas fa-chevron-up"></i>
    </button>

    <script src="<?php echo get_template_directory_uri(); ?>/script.js"></script>
    <?php wp_footer(); ?>
</body>
</html>

<?php get_footer(); ?>