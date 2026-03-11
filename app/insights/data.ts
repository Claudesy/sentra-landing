export interface Article {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  category: string;
  content: string;
}

export const articles: Article[] = [
  {
    slug: "ai-diagnosis-klinis-indonesia",
    title: "Bagaimana AI Mengubah Diagnosis Klinis di Indonesia",
    description:
      "Indonesia menghadapi krisis misdiagnosis yang berdampak pada jutaan pasien setiap tahun. Teknologi AI kini hadir sebagai solusi nyata — bukan hype.",
    date: "2026-03-01",
    readTime: "6 menit",
    category: "Clinical AI",
    content: `
Lebih dari 4.100 kematian ibu terjadi setiap tahun di Indonesia — sebagian besar dapat dicegah dengan diagnosis yang tepat dan cepat. Di balik angka ini terdapat sistem kesehatan yang bekerja keras di tengah keterbatasan: tenaga medis yang kelelahan, data pasien yang terfragmentasi, dan keterlambatan keputusan klinis yang menjadi perbedaan antara hidup dan mati.

## Masalah Inti: Keterlambatan Keputusan

Dokter di Puskesmas dan IGD menghadapi tekanan luar biasa setiap hari. Dalam 15 menit konsultasi, mereka harus memproses anamnesis, pemeriksaan fisik, hasil lab, riwayat medis, dan membuat keputusan terapi. Beban kognitif ini — terutama di akhir shift panjang — adalah akar dari sebagian besar kesalahan klinis.

## AI sebagai Co-Pilot Klinis

Sentra AI tidak menggantikan dokter. Ia bekerja sebagai co-pilot — memproses data pasien secara real-time dan menyajikan rekomendasi berbasis bukti dalam hitungan detik. Tujuh protokol klinis Sentra mencakup:

- **Sintesis NLP** — memahami narasi anamnesis dalam Bahasa Indonesia
- **Algoritma Bayesian** — menghitung probabilitas diagnosis berdasarkan tanda dan gejala
- **Analisis Trajektori** — memantau tren kondisi pasien dari waktu ke waktu
- **OCR Medis** — membaca dan mengintegrasikan hasil lab secara otomatis
- **Panduan Farmasi** — rekomendasi terapi berbasis drug-drug interaction database
- **Otomasi Rujukan** — identifikasi kebutuhan rujukan berdasarkan severity scoring
- **Pemodelan Prognosis** — estimasi outcome klinis untuk perencanaan terapi

## Hasil Nyata di Pilot Sites

Di RSIA Melinda DHAI, Kediri, implementasi Sentra menunjukkan:
- **40%** penurunan tingkat misdiagnosis
- **3×** lebih cepat pengambilan keputusan klinis
- **97,2%** akurasi triase emergensi

Ini bukan angka dari lab riset — ini dari lingkungan klinis nyata dengan pasien nyata.

## Jalan ke Depan

Adopsi AI di healthcare Indonesia tidak perlu dimulai dari rumah sakit tersier. Justru Puskesmas — ujung tombak pelayanan primer — yang paling membutuhkan dan paling bisa terdampak. Teknologi yang tepat, dengan antarmuka yang dirancang untuk dokter (bukan insinyur), dapat mengubah kualitas layanan kesehatan primer Indonesia secara fundamental.
    `.trim(),
  },
  {
    slug: "clinical-decision-support-vs-emr",
    title: "Clinical Decision Support vs EMR Tradisional: Apa Bedanya?",
    description:
      "EMR menyimpan data. CDS menganalisis dan merekomendasikan tindakan. Memahami perbedaan ini krusial untuk memilih teknologi yang tepat untuk fasilitas kesehatan Anda.",
    date: "2026-02-15",
    readTime: "5 menit",
    category: "Healthcare Technology",
    content: `
Banyak fasilitas kesehatan di Indonesia sudah memiliki sistem EMR (Electronic Medical Record). Lalu mengapa mereka masih membutuhkan Clinical Decision Support? Jawabannya ada pada perbedaan fundamental antara *menyimpan* dan *menganalisis*.

## EMR: Laci Digital

EMR adalah evolusi dari rekam medis kertas menjadi format digital. Fungsi utamanya adalah menyimpan, mengorganisir, dan mengakses data pasien. EMR yang baik memastikan data tidak hilang, dapat ditelusuri, dan mudah diakses oleh tim yang berwenang.

Namun EMR memiliki keterbatasan inheren: ia pasif. EMR tidak tahu bahwa kombinasi gejala yang baru saja diinput menunjukkan tanda-tanda sepsis. EMR tidak memperingatkan dokter bahwa dua obat yang diresepkan berinteraksi berbahaya. EMR tidak menghitung probabilitas diagnosis diferensial.

## CDS: Otak Analitik di Atas Data

Clinical Decision Support Systems (CDSS) seperti Sentra AI beroperasi di lapisan di atas data. Ia membaca apa yang diinput ke EMR — atau langsung dari anamnesis dokter — dan melakukan analisis real-time.

| Aspek | EMR | CDS (Sentra) |
|-------|-----|------|
| Fungsi utama | Menyimpan data | Menganalisis & merekomendasikan |
| Mode kerja | Pasif | Aktif/real-time |
| Output | Data tersimpan | Rekomendasi klinis |
| Nilai tambah | Aksesibilitas data | Kualitas keputusan |

## Mengapa Keduanya Dibutuhkan

EMR dan CDS bukan kompetitor — mereka komplementer. EMR menyediakan fondasi data; CDS mengubah data menjadi intelligence yang actionable. Sentra AI dapat diintegrasikan dengan sistem EMR yang sudah ada, atau berjalan secara standalone untuk fasilitas yang belum memiliki EMR.

Investasi pada CDS adalah investasi pada kualitas keputusan klinis — dan pada akhirnya, pada keselamatan pasien.
    `.trim(),
  },
  {
    slug: "keselamatan-pasien-era-digital-health",
    title: "Keselamatan Pasien di Era Digital Health Indonesia",
    description:
      "Transformasi digital healthcare Indonesia berjalan cepat. Namun kecepatan tanpa framework keselamatan yang tepat dapat menciptakan risiko baru. Bagaimana Sentra menjawab tantangan ini.",
    date: "2026-02-01",
    readTime: "7 menit",
    category: "Patient Safety",
    content: `
Digital health di Indonesia sedang mengalami akselerasi yang belum pernah terjadi sebelumnya. Dari telemedicine hingga AI diagnostik, teknologi baru bermunculan hampir setiap bulan. Namun di tengah euforia inovasi ini, satu pertanyaan sering terabaikan: apakah digitalisasi ini benar-benar meningkatkan keselamatan pasien, atau sekadar memindahkan risiko dari kertas ke layar?

## Tiga Pilar Keselamatan Klinis Digital

**1. Akuntabilitas Berbasis Bukti**

Setiap keputusan klinis yang didukung AI harus terdokumentasi dan dapat diaudit. Sentra menerapkan audit trail immutable dengan retensi 10 tahun — setiap rekomendasi sistem tercatat bersama konteks klinis saat itu, memungkinkan review retrospektif yang akurat.

**2. Transparansi Algoritma**

Dokter harus memahami *mengapa* sistem AI merekomendasikan sesuatu, bukan hanya *apa* yang direkomendasikan. Sentra menyajikan reasoning klinis yang dapat dibaca oleh dokter — bukan black box.

**3. Human-in-the-Loop yang Nyata**

AI yang baik tahu batasnya. Sentra dirancang dengan "Safety Gates" — titik-titik di mana sistem secara eksplisit meminta konfirmasi dokter sebelum melanjutkan, terutama untuk keputusan dengan dampak tinggi.

## Pelajaran dari 140+ Kasus Malpraktik

Dr. Ferdi Iskandar, pendiri Sentra, menganalisis lebih dari 140 kasus malpraktik medis di Indonesia antara 2020-2025. Pola yang muncul konsisten:

- **62%** kasus melibatkan keterlambatan diagnosis
- **28%** berkaitan dengan kurangnya dokumentasi yang akurat
- **18%** terkait drug interaction yang tidak terdeteksi

Sentra dirancang secara spesifik untuk menutup ketiga celah ini.

## Keselamatan sebagai Arsitektur, Bukan Fitur

Pendekatan Sentra menempatkan keselamatan sebagai constraint engineering fundamental, bukan tambahan kepatuhan. Ini berarti setiap fitur yang dikembangkan harus melewati safety review, setiap data yang diproses mengikuti protokol Zero PHI in Logs, dan setiap output sistem dilabeli dengan tingkat kepercayaan yang transparan.

Digitalisasi healthcare yang benar bukan hanya soal efisiensi — tapi soal membangun sistem yang gagal dengan aman ketika berhadapan dengan edge cases yang tak terduga.
    `.trim(),
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("id-ID", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
