document.addEventListener('DOMContentLoaded', function () {
    const postList = document.getElementById('post-list');
  
    const posts = [
      "📸 Sarah jalan-jalan ke pantai sore ini! Indah banget~",
      "🍰 Bikin kue bolu coklat bareng mama 💖",
      "🎨 Lukisan terbaru Sarah sudah jadi! Lihat hasilnya di Instagram.",
      "📚 Sarah lagi baca buku inspiratif tentang mimpi besar!"
    ];
  
    posts.forEach((post, index) => {
      const li = document.createElement('li');
      li.textContent = post;
      li.style.animationDelay = `${index * 0.2}s`;
      li.classList.add('fade-in');
      postList.appendChild(li);
    });
  });
  