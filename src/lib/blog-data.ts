export interface BlogPost {
  id: string
  title: string
  slug: string
  tagline: string
  date: string
  views: number
  author: string
  category: string
  color: string
  content: string
  relatedSlugs?: string[]
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'I Was Trying to Be Someone',
    slug: 'i-was-trying-to-be-someone',
    tagline: 'Sebuah upaya panjang untuk menjadi seseorang yang berbeda demi diterima — hingga menyadari bahwa diri yang asli sudah lama hilang di tengah jalan.',
    date: 'February 24, 2026',
    views: 50,
    author: 'Hymn',
    category: 'Love',
    color: 'from-violet-500/20 to-purple-900/20',
    relatedSlugs: ['merelakannya'],
    content: `Pernah nggak kamu sadar bahwa kamu sedang berpura-pura menjadi seseorang yang bukan dirimu sendiri? Bukan di depan orang banyak, bukan di panggung — tapi di depan seseorang yang kamu harap bisa menerima kamu apa adanya.

Kamu mulai mengubah cara bicaramu. Cara bersikap. Cara mengekspresikan rasa. Bukan karena dia memintanya, tapi karena kamu takut. Takut kalau menjadi dirimu sendiri tidak cukup. Takut kalau versi aslimu terlalu banyak, terlalu berlebihan, atau justru terlalu sedikit.

Jadi kamu berubah. Pelan-pelan. Tanpa kamu sadari, kamu mulai menjadi seseorang yang kamu pikir lebih layak untuk diterima.

Dan lelahnya bukan seperti kelelahan setelah berlari. Ini lelah yang berbeda — lelah yang datang setiap pagi bahkan sebelum harimu dimulai. Karena setiap hari, kamu bangun dan langsung memakai topeng yang kamu bikin sendiri, dengan tanganmu sendiri.

Kamu membaca setiap isyaratnya, setiap diamnya, setiap reaksi kecilnya — dan kamu jadikan itu panduan untuk terus memodifikasi dirimu. Semakin keras kamu berusaha, semakin kamu tidak mengenali bayangan dirimu sendiri.

Kamu berdiri di depan cermin dan yang kamu lihat bukan kamu. Itu seseorang yang kamu rekayasa dengan hati-hati agar bisa pas di ruang yang dia sediakan. Dan di suatu titik, kamu mulai lupa rasa aslimu sendiri. Cara tertawamu yang sebenarnya. Hal-hal yang sungguh-sungguh kamu sukai sebelum kamu mulai menyesuaikan segalanya.

Kamu pikir itu bentuk usaha. Bahwa rela berubah berarti kamu sungguh-sungguh. Tapi yang sebenarnya terjadi adalah kamu sedang melarikan diri dari dirimu sendiri, dengan dia sebagai alasannya.

Dan ketika semuanya berakhir, kamu sadar — orang yang ada di sana selama ini bukan kamu yang asli. Yang diperjuangkan, yang dipertahankan, yang dimodifikasi terus-menerus — itu bukan kamu.

Sekarang kamu tahu: yang layak hadir di sisimu adalah seseorang yang membuat kamu merasa aman untuk berdiri — apa adanya, tanpa perlu mengecil, tanpa perlu berpura-pura.`,
  },
  {
    id: '2',
    title: 'Merelakannya?',
    slug: 'merelakannya',
    tagline: 'Ada hal-hal yang memang harus dilepaskan — bukan karena tidak mampu memegang, melainkan karena mempertahankannya hanya akan mengikis lebih dalam.',
    date: 'August 15, 2025',
    views: 41,
    author: 'Hymn',
    category: 'Personal',
    color: 'from-emerald-500/20 to-teal-900/20',
    relatedSlugs: ['i-was-trying-to-be-someone', 'cs-ive-always-had-vision-of-us-standing-like-this'],
    content: `Merelakan seseorang yang kamu cintai adalah proses panjang yang perlahan mengikis bahagia dalam dirimu. Bukan karena perasaanmu kurang kuat, tapi karena semesta seolah tak pernah berpihak. Kamu pernah berdoa dengan air mata yang jatuh diam-diam di malam hari. Kamu pernah berharap setiap harimu hanya tentang dia.

Namun pada akhirnya, kamu harus sadar bahwa tidak semua rasa layak diperjuangkan sampai habis-habisan. Kamu mulai belajar menerima, walau hatimu menolak. Kamu mulai berjalan menjauh, walau jiwamu ingin tetap tinggal. Kamu mulai belajar tersenyum di tengah luka yang tak pernah bisa kamu sembuhkan sendiri.

Setiap hari kamu berpura-pura tidak apa-apa, walau di dalam kepalamu namanya masih berisik. Suaranya masih terngiang, senyumnya masih kamu ingat dengan jelas. Kamu mencoba menghapus kenangan, tapi kenangan tak bisa kamu buang begitu saja.

Kamu mencoba mencintai orang lain, tapi tak ada yang mampu menggantikan tempatnya. Kamu mencoba membenci, tapi hatimu tetap lembut jika bicara tentang dia. Dan di antara semua itu, kamu tetap menyimpan rasa dalam diam, dalam jarak, dalam rindu yang tak bisa kamu tunjukkan.

Kamu belajar mengikhlaskan tanpa menghapus rasa. Belajar menerima tanpa benar-benar rela. Belajar berjalan sendiri tanpa arah yang jelas. Dan mungkin inilah bentuk paling sunyi dari sebuah perasaan: ketika kamu harus melepaskan seseorang yang kamu tahu adalah satu-satunya yang ingin kamu genggam selamanya.

Kamu tetap berdoa agar dia bahagia, walau bukan denganmu. Kamu tetap berharap dia baik-baik saja, meski kamu sendiri tidak pernah benar-benar baik sejak kehilangan dia. Dan akhirnya kamu sadar, merelakan bukan soal berhenti merasa — tapi soal keberanian untuk melepaskan saat tetap bersamanya hanya membuatmu terluka lebih dalam setiap harinya.`,
  },
  {
    id: '3',
    title: "cs i've always had vision of us standing like this",
    slug: 'cs-ive-always-had-vision-of-us-standing-like-this',
    tagline: 'Sebuah bayangan yang terbentuk sejak awal — tentang kita yang berdiri berdampingan dengan jujur, yang tak pernah sempat menjadi nyata.',
    date: 'May 19, 2026',
    views: 0,
    author: 'Hymn',
    category: 'Personal',
    color: 'from-blue-500/20 to-indigo-900/20',
    relatedSlugs: ['i-was-trying-to-be-someone', 'merelakannya'],
    content: `Kamu pernah punya bayangan itu, kan? Sesuatu yang muncul diam-diam, bahkan sebelum kamu sadar sedang merasakannya. Bukan sesuatu yang besar atau dramatis — hanya sebuah gambar sederhana. Tentang kamu dan dia. Berdiri berdampingan. Di suatu tempat yang tidak pernah kamu namai, tapi selalu terasa nyata di kepalamu.

Bayangan itu hadir sebelum kalian benar-benar menjadi apa-apa. Sebelum kamu sadar bahwa kamu sedang jatuh. Ia masuk diam-diam, seperti seseorang yang sudah ada di dalam rumah sebelum kamu sempat membuka pintunya.

Cs I've always had a vision of us standing like this.

Dan rasanya waktu itu — menyenangkan sekaligus menakutkan. Kamu tidak tahu apakah itu nyata atau hanya kepalamu yang sedang terlalu kreatif. Kamu tidak tahu apakah dia juga melihat hal yang sama, atau hanya kamu yang diam-diam sedang membangun gedung di atas tanah kosong.

Tapi bayangan itu tidak pernah pergi. Justru semakin tajam seiring waktu.

Sayangnya, semakin jelas gambar itu di kepalamu, semakin kamu mulai kehilangan dirimu sendiri di dalamnya. Tanpa sadar, kamu mulai menyesuaikan segalanya — cara bicaramu, cara bersikap, cara kamu hadir — supaya terasa pas di sebelahnya. Supaya kamu layak masuk ke dalam gambar yang sudah kamu susun sendiri itu.

Dan ketika semuanya berakhir, kamu baru menyadari: visi yang selama ini kamu pegang tidak pernah benar-benar terjadi. Bukan karena kalian tidak punya waktu. Tapi karena orang yang berdiri di sebelahnya selama ini bukan kamu yang sebenarnya.

Itu yang paling sulit untuk direlakan — bukan dia, bukan kenangan tentang kalian. Tapi gambar itu. Bayangan tentang dua orang yang berdiri berdampingan dengan jujur, tanpa rekayasa, tanpa topeng yang dipakai demi diterima.

Visi itu masih ada di kepalamu. Mungkin selamanya. Tapi sekarang kamu tahu: ia bukan tentang dia dan kamu yang kemarin. Mungkin ia adalah petunjuk tentang seperti apa kamu harus berdiri — untuk dirimu sendiri, terlebih dahulu — sebelum bisa berdiri jujur di sebelah siapa pun.`,
  },
]

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug)
}

export function getRelatedPosts(post: BlogPost): BlogPost[] {
  if (!post.relatedSlugs) return []
  return post.relatedSlugs
    .map((s) => getPostBySlug(s))
    .filter(Boolean) as BlogPost[]
}