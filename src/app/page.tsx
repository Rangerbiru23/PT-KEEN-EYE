'use client'

import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button')
    const mobileMenu = document.getElementById('mobile-menu')

    if (mobileMenuButton && mobileMenu) {
      mobileMenuButton.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden')
      })
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault()
        const href = (e.currentTarget as HTMLAnchorElement).getAttribute('href')
        if (href) {
          document.querySelector(href)?.scrollIntoView({
            behavior: 'smooth'
          })
        }
      })
    })

    // Form submission
    const contactForm = document.getElementById('contact-form') as HTMLFormElement
    if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault()
        alert('Terima kasih telah menghubungi kami. Kami akan segera menghubungi Anda kembali!')
        contactForm.reset()
      })
    }
  }, [])

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

        :root {
          --primary-color: #6366f1;
          --secondary-color: #ec4899;
          --accent-color: #f59e0b;
          --dark-color: #1f2937;
          --light-color: #f9fafb;
        }

        body {
          font-family: 'Inter', sans-serif;
          overflow-x: hidden;
          margin: 0;
          padding: 0;
        }

        .hero-bg {
          background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://ik.imagekit.io/xcl991/BG-Creative-1');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
        }

        .gradient-text {
          background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .btn-gradient {
          background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
          transition: all 0.3s ease;
        }

        .btn-gradient:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        }

        .card-hover {
          transition: all 0.3s ease;
        }

        .card-hover:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }

        .creative-bg {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }

        .text-shadow {
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        }

        .nav-link {
          position: relative;
          transition: color 0.3s ease;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -5px;
          left: 0;
          background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
          transition: width 0.3s ease;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .feature-icon {
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
          color: white;
          font-size: 24px;
          margin-bottom: 20px;
        }

        .testimonial-card {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }

        .creative-element {
          position: absolute;
          border-radius: 50%;
          filter: blur(40px);
          opacity: 0.4;
          z-index: -1;
        }

        .element-1 {
          width: 300px;
          height: 300px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          top: -150px;
          right: -100px;
        }

        .element-2 {
          width: 200px;
          height: 200px;
          background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
          bottom: -100px;
          left: -50px;
        }

        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }

        .float-animation {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>

      <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold gradient-text">PT KEEN EYE</h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="nav-link text-gray-700 hover:text-indigo-600">Beranda</a>
              <a href="#services" className="nav-link text-gray-700 hover:text-indigo-600">Layanan</a>
              <a href="#about" className="nav-link text-gray-700 hover:text-indigo-600">Tentang Kami</a>
              <a href="#portfolio" className="nav-link text-gray-700 hover:text-indigo-600">Portfolio</a>
              <a href="#contact" className="nav-link text-gray-700 hover:text-indigo-600">Kontak</a>
            </div>
            <div className="md:hidden">
              <button id="mobile-menu-button" className="text-gray-700 hover:text-indigo-600 focus:outline-none">
                <i className="fas fa-bars text-2xl"></i>
              </button>
            </div>
          </div>
          {/* Mobile Menu */}
          <div id="mobile-menu" className="hidden md:hidden mt-4 pb-4">
            <a href="#home" className="block py-2 text-gray-700 hover:text-indigo-600">Beranda</a>
            <a href="#services" className="block py-2 text-gray-700 hover:text-indigo-600">Layanan</a>
            <a href="#about" className="block py-2 text-gray-700 hover:text-indigo-600">Tentang Kami</a>
            <a href="#portfolio" className="block py-2 text-gray-700 hover:text-indigo-600">Portfolio</a>
            <a href="#contact" className="block py-2 text-gray-700 hover:text-indigo-600">Kontak</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-bg min-h-screen flex items-center justify-center text-white relative">
        <div className="creative-element element-1"></div>
        <div className="creative-element element-2"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-shadow float-animation">
            <span className="gradient-text">PT KEEN EYE</span>
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-shadow">Meta Ads & Creative Solutions</h2>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-shadow">
            Kami menghadirkan solusi periklanan digital yang kreatif dan efektif untuk bisnis Apartemen Hotel Anda
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#services" className="btn-gradient text-white font-bold py-3 px-8 rounded-full">
              Jelajahi Layanan Kami
            </a>
            <a href="#contact" className="bg-white text-indigo-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300">
              Hubungi Kami
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Layanan Kami</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Solusi periklanan Meta yang dirancang khusus untuk meningkatkan visibilitas dan booking Apartemen Hotel Anda
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 card-hover">
              <div className="feature-icon">
                <i className="fas fa-bullhorn"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4">Meta Ads Campaign</h3>
              <p className="text-gray-600 mb-4">
                Strategi iklan Meta yang tepat sasaran untuk meningkatkan awareness dan booking Apartemen Hotel Anda.
              </p>
              <a href="#" className="text-indigo-600 font-semibold hover:text-indigo-800 transition">
                Pelajari Lebih Lanjut <i className="fas fa-arrow-right ml-1"></i>
              </a>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 card-hover">
              <div className="feature-icon">
                <i className="fas fa-palette"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4">Creative Content</h3>
              <p className="text-gray-600 mb-4">
                Konten visual yang menarik dan profesional untuk mempromosikan fasilitas dan keunggulan Apartemen Hotel Anda.
              </p>
              <a href="#" className="text-indigo-600 font-semibold hover:text-indigo-800 transition">
                Pelajari Lebih Lanjut <i className="fas fa-arrow-right ml-1"></i>
              </a>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 card-hover">
              <div className="feature-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4">Performance Analytics</h3>
              <p className="text-gray-600 mb-4">
                Analisis mendalam tentang performa iklan untuk terus mengoptimalkan strategi periklanan Anda.
              </p>
              <a href="#" className="text-indigo-600 font-semibold hover:text-indigo-800 transition">
                Pelajari Lebih Lanjut <i className="fas fa-arrow-right ml-1"></i>
              </a>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 card-hover">
              <div className="feature-icon">
                <i className="fas fa-users"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4">Audience Targeting</h3>
              <p className="text-gray-600 mb-4">
                Segmentasi audiens yang presisi untuk menjangkau calon tamu yang paling relevan dengan Apartemen Hotel Anda.
              </p>
              <a href="#" className="text-indigo-600 font-semibold hover:text-indigo-800 transition">
                Pelajari Lebih Lanjut <i className="fas fa-arrow-right ml-1"></i>
              </a>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 card-hover">
              <div className="feature-icon">
                <i className="fas fa-mobile-alt"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4">Social Media Management</h3>
              <p className="text-gray-600 mb-4">
                Pengelolaan konten social media yang konsisten dan engaging untuk membangun komunitas loyal.
              </p>
              <a href="#" className="text-indigo-600 font-semibold hover:text-indigo-800 transition">
                Pelajari Lebih Lanjut <i className="fas fa-arrow-right ml-1"></i>
              </a>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 card-hover">
              <div className="feature-icon">
                <i className="fas fa-hotel"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4">Hotel Branding</h3>
              <p className="text-gray-600 mb-4">
                Strategi branding khusus untuk industri perhotelan yang membedakan Apartemen Hotel Anda dari kompetitor.
              </p>
              <a href="#" className="text-indigo-600 font-semibold hover:text-indigo-800 transition">
                Pelajari Lebih Lanjut <i className="fas fa-arrow-right ml-1"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 creative-bg text-white relative">
        <div className="creative-element element-1"></div>
        <div className="creative-element element-2"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-4xl font-bold mb-6">Tentang <span className="gradient-text">PT KEEN EYE</span></h2>
              <p className="text-lg mb-6">
                PT KEEN EYE adalah agensi kreatif yang berfokus pada solusi periklanan digital untuk industri perhotelan. Dengan pengalaman lebih dari 5 tahun, kami telah membantu berbagai Apartemen Hotel meningkatkan okupansi dan brand awareness melalui strategi Meta Ads yang efektif.
              </p>
              <p className="text-lg mb-6">
                Tim kami terdiri dari para ahli di bidang digital marketing, creative design, dan data analytics yang berdedikasi untuk menghasilkan kampanye iklan yang tidak hanya menarik perhatian tetapi juga memberikan ROI yang maksimal.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="text-center">
                  <h3 className="text-3xl font-bold">50+</h3>
                  <p>Klien Puas</p>
                </div>
                <div className="text-center">
                  <h3 className="text-3xl font-bold">200+</h3>
                  <p>Kampanye Sukses</p>
                </div>
                <div className="text-center">
                  <h3 className="text-3xl font-bold">5+</h3>
                  <p>Tahun Pengalaman</p>
                </div>
                <div className="text-center">
                  <h3 className="text-3xl font-bold">15+</h3>
                  <p>Tim Profesional</p>
                </div>
              </div>
              <a href="#contact" className="btn-gradient text-white font-bold py-3 px-8 rounded-full inline-block">
                Hubungi Kami
              </a>
            </div>
            <div className="md:w-1/2 md:pl-12">
              <img src="https://ik.imagekit.io/xcl991/BG-Creative-2" alt="PT KEEN EYE Team" className="rounded-lg shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Portfolio Kami</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hasil karya terbaik kami untuk berbagai klien di industri perhotelan
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden card-hover">
              <img src="https://picsum.photos/seed/hotel1/600/400.jpg" alt="Hotel Project 1" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Luxury Suites Campaign</h3>
                <p className="text-gray-600 mb-4">Kampanye Meta Ads untuk meningkatkan booking pada musim liburan.</p>
                <div className="flex justify-between items-center">
                  <span className="text-indigo-600 font-semibold">Meta Ads</span>
                  <a href="#" className="text-indigo-600 hover:text-indigo-800">
                    <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden card-hover">
              <img src="https://picsum.photos/seed/hotel2/600/400.jpg" alt="Hotel Project 2" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Beach Resort Rebranding</h3>
                <p className="text-gray-600 mb-4">Strategi branding ulang untuk resort pantai yang meningkatkan engagement 300%.</p>
                <div className="flex justify-between items-center">
                  <span className="text-indigo-600 font-semibold">Branding</span>
                  <a href="#" className="text-indigo-600 hover:text-indigo-800">
                    <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden card-hover">
              <img src="https://picsum.photos/seed/hotel3/600/400.jpg" alt="Hotel Project 3" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">City Hotel Social Media</h3>
                <p className="text-gray-600 mb-4">Manajemen social media yang meningkatkan followers 200% dalam 3 bulan.</p>
                <div className="flex justify-between items-center">
                  <span className="text-indigo-600 font-semibold">Social Media</span>
                  <a href="#" className="text-indigo-600 hover:text-indigo-800">
                    <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Apa Kata Klien Kami</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Testimoni dari klien yang telah puas dengan layanan kami
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="testimonial-card rounded-xl p-8 text-white">
              <div className="flex items-center mb-4">
                <img src="https://picsum.photos/seed/person1/100/100.jpg" alt="Client 1" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h4 className="font-bold">Ahmad Wijaya</h4>
                  <p className="text-sm opacity-75">Manager, Luxury Hotel</p>
                </div>
              </div>
              <p className="italic">
                &quot;PT KEEN EYE telah membantu kami meningkatkan okupansi hingga 40% dalam 6 bulan. Strategi Meta Ads mereka sangat efektif dan timnya sangat profesional.&quot;
              </p>
              <div className="flex mt-4">
                <i className="fas fa-star text-yellow-400"></i>
                <i className="fas fa-star text-yellow-400"></i>
                <i className="fas fa-star text-yellow-400"></i>
                <i className="fas fa-star text-yellow-400"></i>
                <i className="fas fa-star text-yellow-400"></i>
              </div>
            </div>
            <div className="testimonial-card rounded-xl p-8 text-white">
              <div className="flex items-center mb-4">
                <img src="https://picsum.photos/seed/person2/100/100.jpg" alt="Client 2" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h4 className="font-bold">Siti Nurhaliza</h4>
                  <p className="text-sm opacity-75">Owner, Beach Resort</p>
                </div>
              </div>
              <p className="italic">
                &quot;Konten kreatif yang dihasilkan PT KEEN EYE sangat menarik dan berhasil meningkatkan engagement media sosial kami secara signifikan. Sangat direkomendasikan!&quot;
              </p>
              <div className="flex mt-4">
                <i className="fas fa-star text-yellow-400"></i>
                <i className="fas fa-star text-yellow-400"></i>
                <i className="fas fa-star text-yellow-400"></i>
                <i className="fas fa-star text-yellow-400"></i>
                <i className="fas fa-star text-yellow-400"></i>
              </div>
            </div>
            <div className="testimonial-card rounded-xl p-8 text-white">
              <div className="flex items-center mb-4">
                <img src="https://picsum.photos/seed/person3/100/100.jpg" alt="Client 3" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h4 className="font-bold">Budi Santoso</h4>
                  <p className="text-sm opacity-75">Director, City Hotel Chain</p>
                </div>
              </div>
              <p className="italic">
                &quot;Analisis performa yang detail dari PT KEEN EYE membantu kami mengoptimalkan anggaran iklan dengan ROI yang jauh lebih baik. Hasilnya melampaui ekspektasi kami.&quot;
              </p>
              <div className="flex mt-4">
                <i className="fas fa-star text-yellow-400"></i>
                <i className="fas fa-star text-yellow-400"></i>
                <i className="fas fa-star text-yellow-400"></i>
                <i className="fas fa-star text-yellow-400"></i>
                <i className="fas fa-star text-yellow-400"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Hubungi Kami</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Siap untuk meningkatkan performa periklanan Apartemen Hotel Anda? Hubungi kami hari ini!
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-6">Kirim Pesan</h3>
                <form id="contact-form">
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Nama Lengkap</label>
                    <input type="text" id="name" name="name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500" required />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
                    <input type="email" id="email" name="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500" required />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">Nomor Telepon</label>
                    <input type="tel" id="phone" name="phone" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500" required />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="service" className="block text-gray-700 font-semibold mb-2">Layanan yang Dibutuhkan</label>
                    <select id="service" name="service" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500">
                      <option value="meta-ads">Meta Ads Campaign</option>
                      <option value="creative-content">Creative Content</option>
                      <option value="social-media">Social Media Management</option>
                      <option value="branding">Hotel Branding</option>
                      <option value="other">Lainnya</option>
                    </select>
                  </div>
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Pesan</label>
                    <textarea id="message" name="message" rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500" required></textarea>
                  </div>
                  <button type="submit" className="btn-gradient text-white font-bold py-3 px-8 rounded-full w-full">
                    Kirim Pesan
                  </button>
                </form>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                <h3 className="text-2xl font-bold mb-6">Informasi Kontak</h3>
                <div className="mb-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                      <i className="fas fa-map-marker-alt text-indigo-600"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold">Alamat</h4>
                      <p className="text-gray-600">DUSUN KUTA, DESA KUTA, PUJUT, LOMBOK TENGAH, NUSA TENGGARA BARAT</p>
                    </div>
                  </div>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                      <i className="fas fa-phone text-indigo-600"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold">Telepon</h4>
                      <p className="text-gray-600">082382466172</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                      <i className="fas fa-envelope text-indigo-600"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold">Email</h4>
                      <p className="text-gray-600">info@ptkeeneye.com</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-6">Jam Operasional</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold">Senin - Jumat</p>
                    <p className="text-gray-600">09:00 - 18:00</p>
                  </div>
                  <div>
                    <p className="font-semibold">Sabtu</p>
                    <p className="text-gray-600">10:00 - 16:00</p>
                  </div>
                  <div>
                    <p className="font-semibold">Minggu</p>
                    <p className="text-gray-600">Tutup</p>
                  </div>
                  <div>
                    <p className="font-semibold">Libur Nasional</p>
                    <p className="text-gray-600">Tutup</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 gradient-text">PT KEEN EYE</h3>
              <p className="text-gray-400 mb-4">
                Solusi periklanan Meta yang kreatif dan efektif untuk industri perhotelan.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <i className="fab fa-facebook-f text-xl"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <i className="fab fa-instagram text-xl"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <i className="fab fa-twitter text-xl"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <i className="fab fa-linkedin-in text-xl"></i>
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition">Meta Ads Campaign</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Creative Content</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Performance Analytics</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Social Media Management</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Perusahaan</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="text-gray-400 hover:text-white transition">Tentang Kami</a></li>
                <li><a href="#portfolio" className="text-gray-400 hover:text-white transition">Portfolio</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Tim Kami</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Karir</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="/privacy.html" className="text-gray-400 hover:text-white transition">Kebijakan Privasi</a></li>
                <li><a href="/terms.html" className="text-gray-400 hover:text-white transition">Syarat & Ketentuan</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Kebijakan Cookie</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">FAQ</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              &copy; 2023 PT KEEN EYE. Hak Cipta Dilindungi.
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
