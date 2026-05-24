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
    title: 'Becoming Someone I Was Not',
    slug: 'i-was-trying-to-be-someone',
    tagline: 'Tentang usaha menjadi versi lain demi diterima — sampai akhirnya sadar bahwa diri sendiri perlahan tertinggal di tengah jalan.',
    date: 'February 24, 2026',
    views: 50,
    author: 'Hymn',
    category: 'Love',
    color: 'from-violet-500/20 to-purple-900/20',
    relatedSlugs: ['merelakannya'],
    content: `Aku rasa yang paling pelan membunuh seseorang bukan selalu kehilangan. Kadang, yang lebih melelahkan adalah berusaha tetap disukai sampai lupa cara menjadi diri sendiri.

Awalnya nggak terasa besar. Cuma mulai menahan beberapa kalimat. Cuma mulai mikir dua kali sebelum membalas pesan. Cuma mulai menyembunyikan bagian yang dulu keluar begitu saja, karena takut terlihat terlalu berisik, terlalu butuh, terlalu peduli, atau terlalu mudah terbaca.

Lama-lama, yang disebut menyesuaikan diri berubah jadi kebiasaan untuk menghapus diri sendiri sedikit demi sedikit.

Aku pernah ada di titik itu. Menjadi lebih tenang dari biasanya. Lebih rapi dari biasanya. Lebih mudah mengalah dari biasanya. Bukan karena tiba-tiba dewasa, tapi karena takut kalau versi asliku datang terlalu penuh, seseorang akan pergi.

Lucunya, waktu itu semua terasa seperti usaha. Seperti bukti bahwa aku serius. Seperti cara paling aman untuk menjaga sesuatu yang tidak ingin hilang.

Padahal yang sedang hilang justru aku sendiri.

Aku mulai membaca diam seperti kode. Membaca perubahan kecil seperti peringatan. Satu balasan pendek bisa membuatku mengulang semua yang sudah kukatakan. Satu sikap dingin bisa membuatku bertanya-tanya bagian mana dari diriku yang harus kupotong lagi.

Dan semakin lama, aku makin ahli menjadi orang lain.

Ada rasa aneh ketika kamu sadar bahwa kamu masih punya wajah yang sama, tapi tidak lagi punya cara hadir yang sama. Kamu masih tertawa, tapi seperti sedang menyesuaikan volume. Kamu masih bicara, tapi selalu ada rem yang kamu tarik diam-diam. Kamu masih terlihat ada, tapi sebenarnya banyak bagian dari dirimu sudah kamu tinggal di belakang.

Yang paling sakit bukan saat semuanya selesai. Yang paling sakit adalah menyadari bahwa selama ini aku tidak benar-benar sedang dicintai sebagai diriku. Aku sedang berharap dicintai sebagai versi yang sudah kurevisi berkali-kali.

Dan versi itu melelahkan. Sangat melelahkan.

Sekarang aku paham, cinta yang membuat kita terus mengecil bukan tempat untuk pulang. Kalau harus menjadi orang lain hanya agar seseorang tetap tinggal, mungkin dari awal yang diterima memang bukan aku.

Mungkin yang paling perlu diselamatkan bukan hubungan itu. Tapi diriku sendiri, yang terlalu lama kubiarkan menunggu di luar pintu.`,
  },
  {
    id: '2',
    title: 'Letting Go Without Losing the Feeling',
    slug: 'merelakannya',
    tagline: 'Ada rasa yang tidak langsung hilang setelah dilepaskan. Kadang merelakan hanya berarti berhenti memaksa sesuatu yang terus melukai.',
    date: 'August 15, 2025',
    views: 41,
    author: 'Hymn',
    category: 'Personal',
    color: 'from-emerald-500/20 to-teal-900/20',
    relatedSlugs: ['i-was-trying-to-be-someone', 'cs-ive-always-had-vision-of-us-standing-like-this'],
    content: `Merelakan itu aneh. Orang-orang sering membicarakannya seperti sesuatu yang bersih. Seperti setelah kamu bilang ikhlas, semuanya langsung selesai. Padahal tidak begitu.

Kadang kamu sudah pergi, tapi masih hafal jalan pulangnya. Sudah diam, tapi masih tahu kalimat apa yang ingin kamu kirim. Sudah tidak mencari, tapi tetap berhenti sebentar ketika sesuatu mengingatkanmu padanya.

Aku pernah berpikir merelakan berarti perasaan itu harus hilang. Ternyata tidak. Ada rasa yang tetap tinggal, hanya tidak lagi kamu izinkan mengatur langkahmu.

Ada nama yang masih terasa berat meski tidak lagi kamu sebut. Ada kenangan yang tidak lagi kamu buka, tapi kamu tahu ia masih ada di dalam laci yang sama. Ada rindu yang tidak lagi kamu kirimkan ke siapa-siapa, hanya lewat sebentar di kepala lalu kamu biarkan pergi lagi.

Dan itu melelahkan, karena dunia tetap berjalan seolah tidak ada apa-apa. Orang-orang tetap tertawa. Hari tetap berganti. Pesan-pesan lain tetap masuk. Tapi ada bagian kecil di dalam diri yang seperti masih duduk di tempat terakhir semuanya terasa dekat.

Kamu mencoba baik-baik saja. Bukan karena benar-benar sudah sembuh, tapi karena tidak ada pilihan lain yang lebih masuk akal. Kamu belajar makan lagi. Tidur lagi. Menjawab orang lagi. Tertawa lagi, meski kadang setelahnya kamu merasa kosong tanpa alasan yang jelas.

Yang paling sulit adalah menerima bahwa seseorang bisa tetap berarti, bahkan ketika dia tidak lagi bisa kamu pertahankan.

Karena tidak semua yang dicintai harus dikejar sampai habis. Tidak semua yang dirindukan harus dipanggil kembali. Ada hal-hal yang memang harus dibiarkan menjadi bagian dari masa lalu, bukan karena sudah tidak berharga, tapi karena membawanya terus-menerus hanya membuat langkahmu semakin berat.

Merelakan bukan berarti menang. Bukan juga berarti kalah. Kadang merelakan cuma berarti kamu akhirnya berhenti berdiri di depan pintu yang tidak lagi dibuka dari dalam.

Perasaan itu mungkin belum sepenuhnya pergi. Tapi setidaknya kali ini, kamu memilih untuk tetap berjalan. Pelan, tidak gagah, tidak selalu kuat. Tapi berjalan.`,
  },
  {
    id: '3',
    title: 'A Vision of Us Standing Like This',
    slug: 'cs-ive-always-had-vision-of-us-standing-like-this',
    tagline: 'Tentang bayangan sederhana yang terasa nyata sejak awal — dua orang berdiri berdampingan, sebelum semuanya berubah menjadi sesuatu yang harus direlakan.',
    date: 'May 19, 2026',
    views: 0,
    author: 'Hymn',
    category: 'Personal',
    color: 'from-blue-500/20 to-indigo-900/20',
    relatedSlugs: ['i-was-trying-to-be-someone', 'merelakannya'],
    content: `Ada beberapa bayangan yang datang terlalu cepat. Bahkan sebelum semuanya jelas, sebelum ada nama untuk perasaan itu, sebelum kamu tahu harus berharap atau menahan diri.

Aku pernah punya bayangan seperti itu.

Sederhana saja. Tidak ada adegan besar. Tidak ada janji. Tidak ada musik dramatis seperti di film. Cuma aku dan dia, berdiri berdampingan, seolah dunia sedang memberi ruang sebentar untuk sesuatu yang akhirnya terasa benar.

Aneh, karena kadang hal yang belum terjadi justru bisa terasa paling nyata.

Aku tidak tahu kapan tepatnya bayangan itu mulai tinggal di kepala. Mungkin dari percakapan kecil. Mungkin dari cara dia hadir. Mungkin dari satu momen biasa yang entah kenapa terasa seperti tanda. Tapi sejak saat itu, ada bagian dari diriku yang diam-diam percaya bahwa suatu hari kami akan berdiri seperti itu.

Cs I've always had a vision of us standing like this.

Kalimat itu sederhana, tapi rasanya seperti membuka pintu ke ruangan yang sudah lama kututup. Karena yang kubayangkan bukan cuma dia. Aku membayangkan versi hidup yang lebih hangat. Versi diriku yang tidak perlu menjelaskan terlalu banyak. Versi kami yang berdiri bersebelahan tanpa canggung, tanpa takut, tanpa perlu berpura-pura tidak peduli.

Tapi bayangan bisa menjadi tempat yang berbahaya kalau terlalu lama ditinggali.

Pelan-pelan, aku mulai membentuk diri agar cocok dengan gambar itu. Aku mulai menahan beberapa bagian. Mengubah beberapa hal. Membuat diriku terlihat lebih pantas untuk berdiri di sebelahnya. Bukan karena dia memintanya, tapi karena aku terlalu takut kehilangan kemungkinan yang belum sempat menjadi nyata.

Dan saat semuanya tidak terjadi, yang patah bukan hanya perasaan. Yang patah adalah seluruh masa depan kecil yang sudah berkali-kali kubangun diam-diam.

Itu yang paling susah dijelaskan ke orang lain. Mereka mungkin melihatnya sebagai kehilangan seseorang. Padahal ada yang lebih sunyi dari itu: kehilangan kemungkinan. Kehilangan gambar yang tidak pernah benar-benar ada, tapi sudah cukup lama menemani sampai terasa seperti rumah.

Sekarang aku tidak tahu apakah bayangan itu harus kubenci. Mungkin tidak. Mungkin ia pernah jujur. Mungkin ia hanya menunjukkan bahwa aku juga ingin dicintai dengan tenang, tanpa harus sibuk membuktikan bahwa aku layak.

Mungkin visi itu bukan lagi tentang dia.

Mungkin itu cuma pengingat bahwa suatu hari, ketika aku berdiri di samping seseorang, aku ingin datang sebagai diriku sendiri. Bukan versi yang kupaksa agar cukup. Bukan seseorang yang kubuat demi diterima. Tapi aku, utuh, tanpa perlu ditinggalkan oleh diriku sendiri lebih dulu.`,
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
