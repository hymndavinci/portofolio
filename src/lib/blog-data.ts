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
    content: `Ada fase ketika kamu tidak benar-benar berubah karena ingin tumbuh, tapi karena takut tidak cukup untuk seseorang.

Awalnya kecil. Kamu mulai menahan cara bicaramu. Menyusun ulang sikapmu. Menimbang setiap pesan sebelum dikirim. Bukan karena dia meminta, tapi karena kamu mulai percaya bahwa versi asli dirimu mungkin terlalu banyak, terlalu berantakan, atau tidak cukup layak untuk diterima.

Lalu pelan-pelan, kamu menjadi seseorang yang terasa aman untuk ditampilkan. Lebih rapi. Lebih tenang. Lebih sesuai dengan bentuk yang kamu kira dia inginkan.

Masalahnya, berpura-pura tidak selalu terasa seperti kebohongan. Kadang ia terasa seperti usaha. Seperti pengorbanan. Seperti bukti bahwa kamu serius menjaga sesuatu yang kamu anggap penting.

Padahal di saat yang sama, kamu sedang menjauh dari dirimu sendiri.

Kamu membaca setiap diamnya. Setiap perubahan nada. Setiap respons yang sedikit berbeda. Semua itu kamu jadikan petunjuk untuk terus memperbaiki versi buatanmu. Semakin keras kamu berusaha terlihat layak, semakin asing kamu pada bayanganmu sendiri.

Di depan cermin, kamu masih mengenali wajahmu. Tapi tidak lagi mengenali caramu hadir. Tidak lagi mengenali tawa yang dulu keluar tanpa dipikirkan. Tidak lagi mengenali hal-hal kecil yang pernah kamu suka sebelum semuanya kamu sesuaikan demi seseorang.

Dan ketika semuanya selesai, bagian paling menyakitkan bukan hanya kehilangan dia. Tapi menyadari bahwa orang yang selama ini kamu perjuangkan untuk diterima bukanlah kamu yang sebenarnya.

Kamu pernah mengira berubah demi seseorang adalah bentuk cinta. Sekarang kamu tahu, cinta yang sehat tidak meminta kamu menghilang dari dirimu sendiri.

Yang layak tinggal adalah seseorang yang membuatmu merasa cukup untuk hadir apa adanya — tanpa perlu mengecil, tanpa perlu memakai topeng, tanpa perlu menjadi orang lain hanya agar tidak ditinggalkan.`,
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
    content: `Merelakan seseorang tidak selalu berarti perasaanmu selesai. Kadang yang selesai hanya keberanianmu untuk terus memaksa keadaan.

Kamu masih mengingat banyak hal. Cara dia bicara. Cara dia diam. Hal-hal kecil yang seharusnya biasa saja, tapi tetap punya tempat sendiri di kepala. Kamu mencoba terlihat baik-baik saja, meski ada bagian dari dirimu yang masih tertinggal di waktu yang sama.

Dulu kamu mungkin pernah berharap terlalu jauh. Membayangkan hari-hari yang lebih tenang. Membayangkan semuanya bisa berjalan seperti yang kamu mau. Kamu pernah berdoa diam-diam, menyimpan harap yang tidak selalu bisa kamu jelaskan ke siapa pun.

Tapi hidup tidak selalu bergerak mengikuti rasa yang paling besar.

Pada akhirnya, kamu mulai mengerti bahwa tidak semua yang kamu cintai harus kamu pertahankan sampai hancur. Tidak semua yang pernah terasa tepat akan tetap menjadi tempat pulang. Ada hal-hal yang perlu dilepaskan bukan karena rasanya hilang, tapi karena menggenggamnya hanya membuat luka semakin dalam.

Merelakan bukan proses yang rapi. Ada hari ketika kamu merasa sudah baik-baik saja. Ada hari ketika satu hal kecil bisa membuat semuanya kembali terasa dekat. Kamu tidak benar-benar lupa. Kamu hanya belajar untuk tidak lagi tinggal di sana.

Dan mungkin itu bagian tersulitnya: menerima bahwa kamu masih peduli, tapi tidak lagi bisa menjadikannya alasan untuk kembali.

Kamu tetap berharap dia bahagia. Tetap berharap dia baik-baik saja. Tapi untuk pertama kalinya, kamu juga mulai mengizinkan dirimu sendiri untuk tidak terus menunggu di tempat yang sama.

Merelakan bukan tentang berhenti merasa. Merelakan adalah keberanian untuk berjalan, bahkan ketika sebagian kecil dari hatimu masih menoleh ke belakang.`,
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
    content: `Pernah ada bayangan yang muncul bahkan sebelum kamu sempat menyebutnya harapan.

Bukan sesuatu yang besar. Bukan adegan yang dramatis. Hanya gambar sederhana tentang kamu dan dia yang berdiri berdampingan. Di tempat yang tidak jelas namanya, tapi terasa sangat nyata di kepala.

Bayangan itu datang diam-diam. Sebelum semuanya punya bentuk. Sebelum kamu tahu apakah perasaanmu akan tumbuh atau hanya lewat sebentar. Ia hadir seperti sesuatu yang sudah lebih dulu menunggu, lalu perlahan membuatmu percaya bahwa mungkin, suatu hari, gambar itu bisa benar-benar terjadi.

Cs I've always had a vision of us standing like this.

Kalimat itu terdengar sederhana, tapi beratnya tidak sesederhana itu. Karena yang kamu lihat bukan hanya seseorang. Kamu melihat kemungkinan. Melihat versi hidup yang terasa lebih hangat. Melihat dirimu berdiri di sebelahnya tanpa perlu menjelaskan terlalu banyak.

Tapi semakin lama kamu memegang bayangan itu, semakin kamu mulai membentuk dirimu agar muat di dalamnya. Kamu menyesuaikan cara bicara. Cara hadir. Cara menahan rasa. Semua dilakukan agar kamu tetap punya tempat di gambar yang kamu bangun sendiri.

Lalu ketika semuanya tidak menjadi nyata, kamu sadar bahwa yang paling sulit dilepas bukan hanya orangnya. Bukan hanya kenangannya. Tapi versi masa depan yang sudah berkali-kali kamu putar di kepala.

Itu yang membuatnya berat: kamu tidak hanya kehilangan seseorang. Kamu juga kehilangan kemungkinan.

Namun sekarang kamu mulai paham, bayangan itu mungkin tidak sepenuhnya sia-sia. Ia menunjukkan sesuatu yang pernah kamu inginkan dengan jujur. Ia mengingatkan bahwa suatu hari kamu ingin berdiri di samping seseorang tanpa topeng, tanpa rekayasa, tanpa harus menghilangkan bagian asli dari dirimu.

Mungkin visi itu bukan tentang dia lagi. Mungkin ia adalah pengingat tentang cara kamu ingin dicintai, dan cara kamu harus belajar berdiri untuk dirimu sendiri terlebih dahulu.`,
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
