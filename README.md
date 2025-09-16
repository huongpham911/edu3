# SMAN 3 Lawe Sigala-gala Website

Website resmi SMA Negeri 3 Lawe Sigala-gala yang dibuat dengan React.js.

## Fitur

- **Home/Hero Section**: Slider gambar dengan informasi sekolah
- **About**: Profil sekolah, visi, misi, dan fasilitas
- **Posts**: Berita dan kegiatan terbaru
- **Contact**: Informasi kontak dan lokasi sekolah
- **Responsive Design**: Optimized untuk desktop dan mobile

## Teknologi

- React.js 19
- CSS3 dengan responsive design
- Nginx untuk production
- Docker untuk deployment

## Development

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build untuk production
npm run build
```

Website akan berjalan di http://localhost:3000

## Docker Deployment

### Build Docker Image

```bash
docker build -t sman3-website .
```

### Run Container

```bash
docker run -p 80:80 sman3-website
```

## Deploy ke Dokploy

1. Push code ke GitHub repository: https://github.com/huongpham911/edu3.git
2. Di Dokploy dashboard, buat new application
3. Connect dengan GitHub repository
4. Set build context ke root directory
5. Dockerfile sẽ automatically được detect
6. Deploy

## Struktur Project

```
src/
├── components/
│   ├── Header.js & Header.css
│   ├── Hero.js & Hero.css
│   ├── About.js & About.css
│   ├── Posts.js & Posts.css
│   ├── Contact.js & Contact.css
│   └── Footer.js & Footer.css
├── App.js
└── App.css

public/
└── image/           # Folder chứa hình ảnh
```

## Informasi Sekolah

- **Nama**: SMAN 3 Lawe Sigala-gala
- **Alamat**: 8W3H+4G, Pardomuan II, Kec. Babul Makmur, Kabupaten Aceh Tenggara, Aceh 24673
- **Website**: smanegeri3lawesigalagala.my.id
- **Email**: admin@smanegeri3lawesigalagala.my.id

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
