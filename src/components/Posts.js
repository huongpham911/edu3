import React from 'react';
import './Posts.css';

const Posts = () => {
  const posts = [
    {
      id: 1,
      title: "Penerimaan Siswa Baru 2025/2026",
      excerpt: "Hallo calon siswa baru SMA Negeri 3 Lawe Sigala-gala, lihat hari ini kakak kelas kalian sedang belajar di lapangan sekolah, jadi kita gak melulu belajar di kelas ya, jadi tunggu apalagi, ayok bergabung di sekolah SMA Negeri 3 Lawe Sigala-gala tahun 2025/2026. Bapak tunggu kalian ya 👍👍👍",
      date: "15 September 2024",
      category: "Penerimaan Siswa",
image: "/images/post1.jpg"
    },
    {
      id: 2,
      title: "Kegiatan Praktikum Laboratorium",
      excerpt: "Hallo calon siswa baru SMA Negeri 3 Lawe Sigala-gala, kalau kamu suka praktikum kayak gini, jangan ragu bergabung di sekolah kita ya, bapak tunggu kamu menjadi siswa bapak paling keren 👍👍👍",
      date: "12 September 2024",
      category: "Kegiatan Akademik",
image: "/images/post2.jpg"
    },
    {
      id: 3,
      title: "Pelatihan Guru MGMP Kurikulum Muatan Lokal",
      excerpt: "Pelatihan guru MGMP mata pelajaran [Biologi, Kimia, Geografi] tentang penerapan buku suplemen kurikulum muatan lokal lingkungan ekosistem leuser jenjang SMA se-Aceh. Bekerjasama dengan yayasan www.haka.go.id dan dihadiri 23 kabupaten kota provinsi aceh. Terimakasih bapak kadis pendidikan aceh Marthunis Muhammad dan rombongan kacabdin aceh tenggara Jufri RM dan jajarannya, kepala sekolah Tanwir Dan Auliya turut mendampingi kegiatan. Kesempatan yang luar biasa ini sangat memberikan makna bahwa pendidikan turut menjaga dan melestarikan kawasan ekosistem leuser.",
      date: "10 September 2024",
      category: "Pengembangan SDM",
image: "/images/post3.jpg"
    }
  ];


  return (
    <section id="posts" className="posts">
      <div className="container">
        <div className="posts-header">
          <h2 className="section-title">Berita & Kegiatan Terbaru</h2>
          <p className="section-subtitle">Ikuti perkembangan dan kegiatan terbaru SMAN 3 Lawe Sigala-gala</p>
        </div>

        <div className="posts-grid">
          {posts.map(post => (
            <article key={post.id} className="post-card">
              <div className="post-image">
                <img src={post.image} alt={post.title} />
                <div className="post-category">{post.category}</div>
              </div>
              
              <div className="post-content">
                <div className="post-meta">
                  <span className="post-date">📅 {post.date}</span>
                </div>
                
                <h3 className="post-title">{post.title}</h3>
                
                <p className="post-excerpt">
                  {post.excerpt.length > 200 
                    ? `${post.excerpt.substring(0, 200)}...` 
                    : post.excerpt
                  }
                </p>
                
                <div className="post-footer">
                  <button className="read-more-btn">
                    Baca Selengkapnya
                    <span className="arrow">→</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="posts-actions">
          <button className="load-more-btn">
            Lihat Berita Lainnya
          </button>
        </div>

        <div className="announcement">
          <div className="announcement-content">
            <div className="announcement-icon">📢</div>
            <div className="announcement-text">
              <h3>Pengumuman Penting</h3>
              <p>Pendaftaran siswa baru tahun ajaran 2025/2026 telah dibuka! Daftar sekarang dan bergabunglah dengan keluarga besar SMAN 3 Lawe Sigala-gala.</p>
            </div>
            <div className="announcement-action">
              <a href="#contact" className="announcement-btn">Info Pendaftaran</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Posts;
