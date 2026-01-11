'use client'

import { useEffect } from 'react'
import Script from 'next/script'

declare global {
  interface Window {
    Cal: any
    Swiper: any
    $: any
  }
}

export default function Home() {
   const color = '#A9F27A';
  useEffect(() => {
    // Sticky Navbar - wait for jQuery to be available
    const initStickyNav = () => {
      if (typeof window !== 'undefined' && window.$) {
        const windows = window.$(window)
        const stick = window.$('.navbar')
        
        const handleScroll = () => {
          const scroll = windows.scrollTop()
          if (scroll < 450) {
            stick.removeClass('sticky')
          } else {
            stick.addClass('sticky')
          }
        }

        windows.on('scroll', handleScroll)

        return () => {
          windows.off('scroll', handleScroll)
        }
      }
    }

    // Check if jQuery is already loaded
    if (typeof window !== 'undefined' && window.$) {
      return initStickyNav()
    }

    // Wait for jQuery to load
    const checkJQuery = setInterval(() => {
      if (typeof window !== 'undefined' && window.$) {
        clearInterval(checkJQuery)
        initStickyNav()
      }
    }, 100)

    return () => {
      clearInterval(checkJQuery)
    }
  }, [])

  useEffect(() => {
    // Get the current year
    const yearElement = document.getElementById('year')
    if (yearElement) {
      const currentYear = new Date().getFullYear()
      yearElement.textContent = currentYear.toString()
    }
  }, [])

  useEffect(() => {
    // Swiper Carousel - wait for Swiper to be available
    let swiperInstance: any = null

    const initSwiper = () => {
      if (typeof window !== 'undefined' && window.Swiper) {
        const testimonialsSlider = {
          slidesPerView: 'auto' as const,
          spaceBetween: 30,
          grabCursor: true,
          enabled: true,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        }
        swiperInstance = new window.Swiper(
          '.testimonials-slider-active',
          testimonialsSlider
        )
      }
    }

    // Check if Swiper is already loaded
    if (typeof window !== 'undefined' && window.Swiper) {
      initSwiper()
    } else {
      // Wait for Swiper to load
      const checkSwiper = setInterval(() => {
        if (typeof window !== 'undefined' && window.Swiper) {
          clearInterval(checkSwiper)
          initSwiper()
        }
      }, 100)

      return () => {
        clearInterval(checkSwiper)
        if (swiperInstance && swiperInstance.destroy) {
          swiperInstance.destroy()
        }
      }
    }

    return () => {
      if (swiperInstance && swiperInstance.destroy) {
        swiperInstance.destroy()
      }
    }
  }, [])


  return (
    <>
      <section id="top" className="hero-section">
        <div data-animation="default" data-collapse="medium" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" className="navbar w-nav">
          <div className="navbar-wrapper">
            <a href="#" className="logo w-nav-brand"><img src="/images/Logo.svg" loading="lazy" alt="Wegems Logo" /></a>
            <div className="navbar-right">
              <nav role="navigation" className="nav-menu w-nav-menu">
                <div className="nav-left">
                  <a href="#services" className="nav-link w-nav-link">Services</a>
                  <a href="#works" className="nav-link w-nav-link">Works</a>
                  <a href="#why-us" className="nav-link w-nav-link">Why us</a>
                </div>
                <div className="right-nav lg-none">
                  <a href="#" className="navbar-button w-inline-block">
                    <div>Get Started 👋</div>
                  </a>
                </div>
              </nav>
              <div className="right-nav md-none">
                <a href="#lets-get-started" className="navbar-button w-inline-block">
                  <div>Schedule a free call 👋</div>
                </a>
              </div>
            </div>
            <div className="menu-button w-nav-button">
              <div className="icon w-icon-nav-menu"></div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="hero-wrapper">
            <div data-w-id="1d1adf0d-4094-ccbb-9618-99e02fba1fd7" style={{ opacity: 0 }} className="hero-content-wrap">
              <div className="hero-top">
                <div className="hero-heading-wrap">
                  <h1>We build websites that convert leads</h1>
                </div>
                <div className="hero-top-text">
                  We design, develop and deliver awesome Webflow websites that
                  helps you to start, grow & scale your business.
                </div>
              </div>
              <div className="get-started-button-wrap">
                <a href="#lets-get-started" className="primary w-inline-block">
                  <div>Let's build your website now</div>
                </a>
                <div className="hero-bottom-text body-sm">
                  We won't stop working on your design until you're 100% happy!
                </div>
              </div>
            </div>
            <div className="hero-logos-wrap">
              <h5>
                <strong>Join the growing list of clients we've helped and
                  counting…</strong>
              </h5>
              <div data-w-id="1d1adf0d-4094-ccbb-9618-99e02fba1feb" style={{ opacity: 0 }} className="hero-logos opacity-80">
                <img src="/images/Hackages.svg" loading="lazy" alt="Hackages" className="company-logo" />
                <img src="/images/Techlingo.svg" loading="lazy" alt="Techlingo" className="company-logo" />
                <img src="/images/Creme.svg" loading="lazy" alt="Creme Digital" className="company-logo" />
                <img src="/images/Kickbath.svg" loading="lazy" alt="" className="company-logo" />
                <img src="/images/Brave.svg" loading="lazy" alt="" className="company-logo" />
                <img src="/images/fasset.svg" loading="lazy" width="131" alt="" className="company-logo fasset" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="works" className="section-padding">
        <div className="w-layout-blockcontainer container w-container">
          <div className="section-title">
            <h2>Our Featured Projects</h2>
            <div>
              With years of experience, we've delivered diverse projects
              worldwide, from custom sites to complex Webflow builds. Explore our
              portfolio to see our work and expertise
            </div>
          </div>
          <div className="projects-wrapper">
            <div className="single-project">
              <div className="project-thumb">
                <img src="/images/Project-01.webp" loading="lazy" sizes="(max-width: 479px) 100vw, (max-width: 767px) 95vw, (max-width: 991px) 96vw, (max-width: 1439px) 45vw, 555px" srcSet="/images/Project-01-p-500.webp 500w, /images/Project-01-p-800.webp 800w, /images/Project-01-p-1080.webp 1080w, /images/Project-01.webp 1160w" alt="" />
              </div>
              <div className="project-content-wrap">
                <a href="https://www.creme.digital/" target="_blank" rel="noopener noreferrer" className="project-link w-inline-block">
                  <h3>Creme Digital</h3>
                </a>
                <div>
                  Creme, a successful no-code agency that raised millions,
                  partnered with us to build their website on Webflow. We've
                  delivered multiple sites for them.
                </div>
                <div className="project-tags">
                  <div className="project-tag">Webflow Development</div>
                  <div className="project-tag">Support</div>
                </div>
              </div>
            </div>
            <div className="single-project">
              <div className="project-thumb">
                <img src="/images/Project-2.webp" loading="lazy" sizes="(max-width: 479px) 100vw, (max-width: 767px) 95vw, (max-width: 991px) 96vw, (max-width: 1439px) 45vw, 555px" srcSet="/images/Project-2-p-500.webp 500w, /images/Project-2-p-800.webp 800w, /images/Project-2-p-1080.webp 1080w, /images/Project-2-p-1600.webp 1600w, /images/Project-2-p-2000.webp 2000w, /images/Project-2.webp 2400w" alt="" />
              </div>
              <div className="project-content-wrap">
                <a href="https://www.hackages.io/" target="_blank" rel="noopener noreferrer" className="project-link w-inline-block">
                  <h3>Hackages</h3>
                </a>
                <div>
                  Hackages partnered with us for design, development, and
                  continuous support. We've ensured their website is always at its
                  best.
                </div>
                <div className="project-tags">
                  <div className="project-tag">Design</div>
                  <div className="project-tag">Webflow Development</div>
                  <div className="project-tag">Support</div>
                </div>
              </div>
            </div>
            <div className="single-project">
              <div className="project-thumb">
                <img src="/images/Project-3.webp" loading="lazy" sizes="(max-width: 479px) 100vw, (max-width: 767px) 95vw, (max-width: 991px) 96vw, (max-width: 1439px) 45vw, 555px" srcSet="/images/Project-3-p-500.webp 500w, /images/Project-3-p-800.webp 800w, /images/Project-3-p-1080.webp 1080w, /images/Project-3-p-1600.webp 1600w, /images/Project-3-p-2000.webp 2000w, /images/Project-3.webp 2320w" alt="" />
              </div>
              <div className="project-content-wrap">
                <h3>Eewoo</h3>
                <div>
                  We developed Eewoo's website on Webflow, delivering a sleek and
                  responsive platform that aligns with their brand.
                </div>
                <div className="project-tags">
                  <div className="project-tag">Webflow Development</div>
                  <div className="project-tag">Support</div>
                </div>
              </div>
            </div>
            <div className="single-project">
              <div className="project-thumb">
                <img src="/images/Project-4.webp" loading="lazy" sizes="(max-width: 479px) 100vw, (max-width: 767px) 95vw, (max-width: 991px) 96vw, (max-width: 1439px) 45vw, 555px" srcSet="/images/Project-4-p-500.webp 500w, /images/Project-4-p-800.webp 800w, /images/Project-4-p-1080.webp 1080w, /images/Project-4-p-1600.webp 1600w, /images/Project-4-p-2000.webp 2000w, /images/Project-4.webp 2320w" alt="" />
              </div>
              <div className="project-content-wrap">
                <a href="https://islamic.fasset.io/" target="_blank" rel="noopener noreferrer" className="project-link w-inline-block">
                  <h3>Fasset Islamic</h3>
                </a>
                <div>
                  We built Fasset Islamic's website on Webflow, creating a
                  professional and functional site that meets their unique needs.
                </div>
                <div className="project-tags">
                  <div className="project-tag">Webflow Development</div>
                  <div className="project-tag">Support</div>
                </div>
              </div>
            </div>
          </div>
          <div className="get-started-button-wrap">
            <a href="#lets-get-started" className="primary w-inline-block">
              <div>Let's build your website now</div>
            </a>
          </div>
        </div>
      </section>
      <section id="services" className="services-section section-padding spt-0">
        <div className="container">
          <div className="services-grid">
            <div className="services-section-title">
              <h2>Solutions that fit  your vision</h2>
              <div>
                We offer everything you need to thrive online. Explore our
                services and see how we can help you achieve your goals.
              </div>
            </div>
            <div className="services-wrapper">
              <div className="service-item">
                <h3>Website Design</h3>
                <div>
                  Get a custom website that's visually stunning and highly
                  functional, tailored to reflect your brand and drive engagement.
                </div>
              </div>
              <div className="service-item">
                <h3>Website Revamp</h3>
                <div>
                  Refresh your outdated site with a modern design and improved
                  user experience to better align with your brand's goals.
                </div>
              </div>
              <div className="service-item">
                <h3>Webflow development</h3>
                <div>
                  Leverage Webflow to create a responsive, scalable website that's
                  easy to manage and optimized for search engines.
                </div>
              </div>
              <div className="service-item">
                <h3>Website migration</h3>
                <div>
                  Seamlessly migrate your website with minimal downtime, ensuring
                  your data, SEO, and user experience stay intact.
                </div>
              </div>
              <div className="service-item">
                <h3>Template customization</h3>
                <div>
                  Customize a pre-built template to match your brand's look and
                  functionality, saving time while achieving a unique design.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="testimonial-section section-padding">
        <div className="container">
          <div className="section-title">
            <h2>What our clients are saying</h2>
            <div>
              Hear directly from the people who trust us with their digital
              presence. Our clients' success stories speak volumes.
            </div>
          </div>
          <div className="testimonials-wrapper testimonials-slider-active">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="testimonial-item">
                  <div>
                    "Wegems built our website perfectly on webflow. He took our
                    designs and implemented the functionality in a smooth and
                    streamlined way. They were very easy to work with and
                    responsive throughout the entire project. We would definitely
                    work with them again in the future!"
                  </div>
                  <div className="testimonial-footer">
                    <div className="testimonial-user">
                      <div className="testimonial-user-content">
                        <div className="testimonial-user-name">Danielle Joseph</div>
                        <div className="testimonial-user-title">
                          Founder, Function Creative Co.
                        </div>
                      </div>
                    </div>
                    <div className="testimonial-stars">
                      <img src="/images/star2.svg" loading="lazy" alt="" />
                      <img src="/images/star2.svg" loading="lazy" alt="" />
                      <img src="/images/star2.svg" loading="lazy" alt="" />
                      <img src="/images/star2.svg" loading="lazy" alt="" />
                      <img src="/images/star2.svg" loading="lazy" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="testimonial-item">
                  <div>
                    "Wegems has been great at effectively and quickly developing
                    high quality Webflow sites."
                  </div>
                  <div className="testimonial-footer">
                    <div className="testimonial-user">
                      <img src="/images/jacob.png" loading="lazy" alt="" className="testimonial-image" />
                      <div className="testimonial-user-content">
                        <div className="testimonial-user-name">Jacob Klug</div>
                        <div className="testimonial-user-title">
                          CEO, Creme Digital
                        </div>
                      </div>
                    </div>
                    <div className="testimonial-stars">
                      <img src="/images/star2.svg" loading="lazy" alt="" />
                      <img src="/images/star2.svg" loading="lazy" alt="" />
                      <img src="/images/star2.svg" loading="lazy" alt="" />
                      <img src="/images/star2.svg" loading="lazy" alt="" />
                      <img src="/images/star2.svg" loading="lazy" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="testimonial-item">
                  <div>
                    "Special shoutout to Wegems for helping me migrate my site to
                    Webflow. Highly recommended to check them out and his
                    services."
                  </div>
                  <div className="testimonial-footer">
                    <div className="testimonial-user">
                      <img src="/images/rahat.png" loading="lazy" alt="" className="testimonial-image" />
                      <div className="testimonial-user-content">
                        <div className="testimonial-user-name">Muhammad Rahat</div>
                        <div className="testimonial-user-title">
                          Founder, Roast my app
                        </div>
                      </div>
                    </div>
                    <div className="testimonial-stars">
                      <img src="/images/star2.svg" loading="lazy" alt="" />
                      <img src="/images/star2.svg" loading="lazy" alt="" />
                      <img src="/images/star2.svg" loading="lazy" alt="" />
                      <img src="/images/star2.svg" loading="lazy" alt="" />
                      <img src="/images/star2.svg" loading="lazy" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="testimonial-item">
                  <div>
                    "I worked closely with Wegems on Webflow projects—an
                    outstanding experience. Their expertise and dedication set
                    them apart."
                  </div>
                  <div className="testimonial-footer">
                    <div className="testimonial-user">
                      <img src="/images/nasim.png" loading="lazy" alt="" className="testimonial-image" />
                      <div className="testimonial-user-content">
                        <div className="testimonial-user-name">Nasim</div>
                        <div className="testimonial-user-title">
                          Founder, Artiflow Creative Co.
                        </div>
                      </div>
                    </div>
                    <div className="testimonial-stars">
                      <img src="/images/star2.svg" loading="lazy" alt="" />
                      <img src="/images/star2.svg" loading="lazy" alt="" />
                      <img src="/images/star2.svg" loading="lazy" alt="" />
                      <img src="/images/star2.svg" loading="lazy" alt="" />
                      <img src="/images/star2.svg" loading="lazy" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-nav">
              <div className="swiper-button-prev">
                <img src="/images/Arrow-left.svg" loading="lazy" alt="" />
              </div>
              <div className="swiper-button-next">
                <img src="/images/Arrow-right.svg" loading="lazy" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="why-us" className="why-us-section section-padding">
        <div className="container">
          <div className="section-title">
            <h2>Why we're the right choice</h2>
            <div>
              Our expertise, creativity, and commitment to your success set us
              apart. Let us bring your vision to life.
            </div>
          </div>
          <div className="why-us-wrapper">
            <div className="why-us-item">
              <div className="why-us-icon">
                <img src="/images/exchange-alt.svg" loading="lazy" alt="" />
              </div>
              <div className="why-us-item-content">
                <h4>Fast turnaround</h4>
                <div>
                  Delivering high-quality work quickly to keep your projects on
                  schedule.
                </div>
              </div>
            </div>
            <div className="why-us-item">
              <div className="why-us-icon">
                <img src="/images/exchange-alt-1.svg" loading="lazy" alt="" />
              </div>
              <div className="why-us-item-content">
                <h4>Easy communication</h4>
                <div>
                  Clear, responsive communication at every stage of your project.
                </div>
              </div>
            </div>
            <div className="why-us-item">
              <div className="why-us-icon">
                <img src="/images/exchange-alt-2.svg" loading="lazy" alt="" />
              </div>
              <div className="why-us-item-content">
                <h4>Top-notch quality</h4>
                <div>
                  Top-tier design and development that meet your standards.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="footer-section">
        <div className="container">
          <div className="footer-content-wrapper">
            <h2 className="opacity-70">Interested?</h2>
            <h2>Let's get your project started.</h2>
            <div id="lets-get-started" className="cal-wrapper">
              <div className="w-embed w-script">
                {/* Cal inline embed code begins */}
                <div style={{ width: '100%', height: '100%', overflow: 'scroll' }} id="my-cal-inline"></div>

                                    <Script id="cal-com-embed" strategy="afterInteractive">
                        {`
                    (function (C, A, L) {
                        let p = function (a, ar) { a.q.push(ar); };
                        let d = C.document;
                        C.Cal = C.Cal || function () {
                        let cal = C.Cal;
                        let ar = arguments;
                        if (!cal.loaded) {
                            cal.ns = {};
                            cal.q = cal.q || [];
                            d.head.appendChild(d.createElement('script')).src = A;
                            cal.loaded = true;
                        }
                        if (ar[0] === L) {
                            const api = function () { p(api, arguments); };
                            const namespace = ar[1];
                            api.q = api.q || [];
                            if (typeof namespace === 'string') {
                            cal.ns[namespace] = cal.ns[namespace] || api;
                            p(cal.ns[namespace], ar);
                            p(cal, ['initNamespace', namespace]);
                            } else p(cal, ar);
                            return;
                        }
                        p(cal, ar);
                        };
                    })(window, 'https://app.cal.com/embed/embed.js', 'init');

                    Cal('init', '30min', { origin: 'https://cal.com' });

                    Cal.ns['30min']('inline', {
                        elementOrSelector: '#my-cal-inline',
                        
                        // I UPDATED THIS LINK BASED ON YOUR NEW SCREENSHOT:
                        calLink: 'clarity-call-with-adil/30min', 
                        
                        layout: 'month_view',
                    });

                    Cal.ns['30min']('ui', {
                        theme: 'light',
                        styles: { branding: { brandColor: '${color}' } },
                        hideEventTypeDetails: false,
                        layout: 'month_view',

                        
                    });
                `}
                    </Script>

                {/* <Script id="cal-com-embed" strategy="afterInteractive">
                  {`
                    (function (C, A, L) {
                      let p = function (a, ar) {
                        a.q.push(ar);
                      };
                      let d = C.document;
                      C.Cal =
                        C.Cal ||
                        function () {
                          let cal = C.Cal;
                          let ar = arguments;
                          if (!cal.loaded) {
                            cal.ns = {};
                            cal.q = cal.q || [];
                            d.head.appendChild(d.createElement('script')).src = A;
                            cal.loaded = true;
                          }
                          if (ar[0] === L) {
                            const api = function () {
                              p(api, arguments);
                            };
                            const namespace = ar[1];
                            api.q = api.q || [];
                            if (typeof namespace === 'string') {
                              cal.ns[namespace] = cal.ns[namespace] || api;
                              p(cal.ns[namespace], ar);
                              p(cal, ['initNamespace', namespace]);
                            } else p(cal, ar);
                            return;
                          }
                          p(cal, ar);
                        };
                    })(window, 'https://app.cal.com/embed/embed.js', 'init');
                    Cal('init', '30min', { origin: 'https://cal.com' });
                    Cal.ns['30min']('inline', {
                      elementOrSelector: '#my-cal-inline',
                      calLink: 'wegems/30min',
                      layout: 'month_view',
                    });
                    Cal.ns['30min']('ui', {
                      theme: 'light',
                      styles: { branding: { brandColor: '#002E22' } },
                      hideEventTypeDetails: false,
                      layout: 'month_view',
                    });
                  `}
                </Script> */}
                {/* Cal inline embed code ends */}
              </div>
            </div>
          </div>
        </div>
        <div className="footer-underline"></div>
        <div className="container">
          <div className="footer-copywriting-wrapper">
            <div className="footer-copy-left">
              <img src="/images/Logo.svg" loading="lazy" alt="Wegems Logo" />
              <div>
                Your business is ready to make waves, and we're here to help.
                Transform bold ideas into a powerful online presence.
              </div>
            </div>
            <div className="footer-links">
              <a href="#top" className="footer-link">Home</a>
              <a href="#works" className="footer-link">Works</a>
              <a href="#services" className="footer-link">Services</a>
              <a href="#why-us" className="footer-link">Why us</a>
            </div>
            <div className="footer-links">
              <a href="https://dribbble.com/aminulhchy" target="_blank" rel="noopener noreferrer" className="footer-link">Dribbble</a>
              <a href="https://webflow.com/@aminulhchy" target="_blank" rel="noopener noreferrer" className="footer-link">Webflow</a>
              <a href="https://www.linkedin.com/company/wegems/" target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn</a>
              <a href="https://www.instagram.com/wegemsagency" className="footer-link">Instagram</a>
            </div>
          </div>
          <div className="copyright-text">
            © <span id="year"></span> Wegems Agency. All Rights Reserved.
          </div>
        </div>
      </section>
    </>
  )
}

