import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    alert('Pesan Anda telah terkirim! Terima kasih.');
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-header">
          <h2 className="section-title">Hubungi Kami</h2>
          <p className="section-subtitle">
            Kami siap membantu Anda. Jangan ragu untuk menghubungi kami kapan saja.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">📍</div>
              <h3>Alamat</h3>
              <p>
                8W3H+4G, Pardomuan II<br />
                Kec. Babul Makmur<br />
                Kabupaten Aceh Tenggara<br />
                Aceh 24673, Indonesia
              </p>
            </div>

            <div className="info-card">
              <div className="info-icon">🌐</div>
              <h3>Website</h3>
              <p>
                <a href="https://smanegeri3lawesigalagala.my.id" target="_blank" rel="noopener noreferrer">
                  smanegeri3lawesigalagala.my.id
                </a>
              </p>
            </div>

            <div className="info-card">
              <div className="info-icon">📧</div>
              <h3>Email</h3>
              <p>
                <a href="mailto:admin@smanegeri3lawesigalagala.my.id">
                  admin@smanegeri3lawesigalagala.my.id
                </a>
              </p>
            </div>

            <div className="info-card">
              <div className="info-icon">🕒</div>
              <h3>Jam Operasional</h3>
              <p>
                Senin - Jumat: 07:00 - 16:00 WIB<br />
                Sabtu: 07:00 - 12:00 WIB<br />
                Minggu: Tutup
              </p>
            </div>
          </div>

          <div className="contact-form-section">
            <div className="form-container">
              <h3>Kirim Pesan</h3>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Nama Lengkap *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Masukkan nama lengkap Anda"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="Masukkan email Anda"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subjek *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    placeholder="Subjek pesan Anda"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Pesan *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    placeholder="Tulis pesan Anda di sini..."
                    rows="6"
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn">
                  Kirim Pesan
                  <span className="btn-icon">📨</span>
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="map-section">
          <h3 className="map-title">Lokasi Sekolah</h3>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127445.35982102353!2d97.8489838!3d3.3028404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30309bb9aeca23fb%3A0x1b1e8d2c42c7528d!2sSMA%20NEGERI%203%20LAWE%20SIGALA-GALA!5e0!3m2!1sen!2sid!4v1641879012345!5m2!1sen!2sid"
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: '10px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi SMAN 3 Lawe Sigala-gala"
            ></iframe>
            <div className="map-overlay">
              <a
                href="https://www.google.com/maps/place/SMA+NEGERI+3+LAWE+SIGALA-GALA/@3.3028404,97.9289838,17z/data=!4m6!3m5!1s0x30309bb9aeca23fb:0x1b1e8d2c42c7528d!8m2!3d3.3027976!4d97.9288872!16s%2Fg%2F11s0wk79h0?authuser=0&hl=id&entry=ttu&g_ep=EgoyMDI1MDkxMC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="map-link"
              >
                Lihat di Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
