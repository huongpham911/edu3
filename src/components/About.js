import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-header">
          <h2 className="section-title">Tentang SMAN 3 Lawe Sigala-gala</h2>
          <p className="section-subtitle">Membangun Generasi Unggul dan Berkarakter</p>
        </div>

        <div className="about-content">
          <div className="about-info">
            <div className="info-item">
              <div className="info-icon">🏫</div>
              <div className="info-details">
                <h3>Profil Sekolah</h3>
                <p>
                  SMA Negeri 3 Lawe Sigala-gala adalah institusi pendidikan menengah atas yang berkomitmen 
                  memberikan pendidikan berkualitas tinggi. Kami mengutamakan pembentukan karakter siswa 
                  yang berakhlak mulia, cerdas, dan siap menghadapi tantangan masa depan.
                </p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">📍</div>
              <div className="info-details">
                <h3>Alamat Sekolah</h3>
                <p>
                  <strong>Alamat Lengkap:</strong><br />
                  8W3H+4G, Pardomuan II, Kec. Babul Makmur<br />
                  Kabupaten Aceh Tenggara, Aceh 24673<br />
                  Indonesia
                </p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">🎯</div>
              <div className="info-details">
                <h3>Visi</h3>
                <p>
                  Menjadi sekolah unggul yang menghasilkan lulusan berkualitas, berkarakter, 
                  dan berdaya saing tinggi dalam menghadapi tantangan global.
                </p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">🚀</div>
              <div className="info-details">
                <h3>Misi</h3>
                <ul>
                  <li>Menyelenggarakan pendidikan yang berkualitas dan berkarakter</li>
                  <li>Mengembangkan potensi siswa melalui pembelajaran aktif dan inovatif</li>
                  <li>Membangun lingkungan sekolah yang kondusif untuk belajar</li>
                  <li>Meningkatkan kompetensi tenaga pendidik dan kependidikan</li>
                  <li>Menjalin kerjasama dengan berbagai pihak untuk kemajuan sekolah</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="about-stats">
            <div className="stat-card">
              <div className="stat-number">500+</div>
              <div className="stat-label">Siswa Aktif</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">45+</div>
              <div className="stat-label">Tenaga Pengajar</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">20+</div>
              <div className="stat-label">Program Unggulan</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">95%</div>
              <div className="stat-label">Tingkat Kelulusan</div>
            </div>
          </div>
        </div>

        <div className="facilities">
          <h3 className="facilities-title">Fasilitas Sekolah</h3>
          <div className="facilities-grid">
            <div className="facility-item">
              <div className="facility-icon">📚</div>
              <h4>Perpustakaan</h4>
              <p>Perpustakaan modern dengan koleksi buku lengkap dan akses digital</p>
            </div>
            <div className="facility-item">
              <div className="facility-icon">🔬</div>
              <h4>Laboratorium</h4>
              <p>Lab IPA, Komputer, dan Bahasa dengan peralatan modern</p>
            </div>
            <div className="facility-item">
              <div className="facility-icon">🏃‍♂️</div>
              <h4>Lapangan Olahraga</h4>
              <p>Lapangan basket, voli, dan badminton untuk kegiatan olahraga</p>
            </div>
            <div className="facility-item">
              <div className="facility-icon">🖥️</div>
              <h4>Ruang Multimedia</h4>
              <p>Ruangan dengan teknologi audio visual untuk pembelajaran interaktif</p>
            </div>
            <div className="facility-item">
              <div className="facility-icon">🍽️</div>
              <h4>Kantin Sekolah</h4>
              <p>Kantin bersih dengan menu makanan sehat dan bergizi</p>
            </div>
            <div className="facility-item">
              <div className="facility-icon">🚌</div>
              <h4>Transportasi</h4>
              <p>Akses transportasi mudah dengan lokasi strategis</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
