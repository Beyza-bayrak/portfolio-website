import { motion } from 'framer-motion'
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react'

const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: "Yüksek Lisans",
      field: "Bilgisayar Mühendisliği",
      school: "İstanbul Teknik Üniversitesi",
      location: "İstanbul, Türkiye",
      startDate: "2020",
      endDate: "2022",
      gpa: "3.8/4.0",
      description: "Yapay zeka ve makine öğrenmesi alanında uzmanlaşma. Tez konusu: 'Derin Öğrenme ile Görüntü İşleme Uygulamaları'",
      achievements: [
        "Yüksek Onur Derecesi ile mezuniyet",
        "En İyi Tez Ödülü",
        "Araştırma Asistanlığı"
      ],
      courses: [
        "Makine Öğrenmesi",
        "Derin Öğrenme",
        "Bilgisayar Görüşü",
        "Doğal Dil İşleme"
      ]
    },
    {
      id: 2,
      degree: "Lisans",
      field: "Bilgisayar Mühendisliği",
      school: "Boğaziçi Üniversitesi",
      location: "İstanbul, Türkiye",
      startDate: "2016",
      endDate: "2020",
      gpa: "3.6/4.0",
      description: "Yazılım geliştirme, algoritma tasarımı ve sistem analizi konularında kapsamlı eğitim",
      achievements: [
        "Dekan Listesi (3 dönem)",
        "ACM Programlama Yarışması 2. Sıra",
        "Mezuniyet Projesi Ödülü"
      ],
      courses: [
        "Veri Yapıları ve Algoritmalar",
        "Yazılım Mühendisliği",
        "Veritabanı Sistemleri",
        "Web Programlama"
      ]
    },
    {
      id: 3,
      degree: "Lise",
      field: "Fen Bilimleri",
      school: "Galatasaray Lisesi",
      location: "İstanbul, Türkiye",
      startDate: "2012",
      endDate: "2016",
      gpa: "95/100",
      description: "Matematik ve fen bilimleri ağırlıklı eğitim programı",
      achievements: [
        "Okul Birincisi",
        "TÜBİTAK Bilim Olimpiyatları Altın Madalya",
        "Matematik Olimpiyatları Bölge Birincisi"
      ],
      courses: [
        "İleri Matematik",
        "Fizik",
        "Kimya",
        "Bilgisayar Programlama"
      ]
    }
  ]

  return (
    <div className="min-h-screen pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Eğitim Geçmişim
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Akademik yolculuğum ve eğitim hayatımda elde ettiğim başarılar
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600"></div>

          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative mb-12 last:mb-0"
            >
              {/* Timeline Dot */}
              <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-white shadow-lg"></div>

              {/* Content Card */}
              <div className="ml-20 bg-white rounded-xl shadow-lg border border-gray-200/50 overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="p-6">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div className="flex items-center space-x-3 mb-2 md:mb-0">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                        <GraduationCap className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">
                          {edu.degree} - {edu.field}
                        </h3>
                        <p className="text-blue-600 font-medium">{edu.school}</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-col space-y-1 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{edu.startDate} - {edu.endDate}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* GPA */}
                  <div className="mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                      <Award className="w-4 h-4 mr-1" />
                      GPA: {edu.gpa}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 mb-6">
                    {edu.description}
                  </p>

                  {/* Achievements and Courses */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Achievements */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                        <Award className="w-5 h-5 mr-2 text-yellow-500" />
                        Başarılar
                      </h4>
                      <ul className="space-y-2">
                        {edu.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start">
                            <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-sm text-gray-600">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Key Courses */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                        <BookOpen className="w-5 h-5 mr-2 text-blue-500" />
                        Önemli Dersler
                      </h4>
                      <ul className="space-y-2">
                        {edu.courses.map((course, idx) => (
                          <li key={idx} className="flex items-start">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-sm text-gray-600">{course}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8"
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Eğitim Özeti
            </h2>
            <p className="text-gray-600">
              Akademik yolculuğumun öne çıkan noktaları
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-1">3</div>
              <div className="text-sm text-gray-600">Derece</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-purple-600 mb-1">3.7</div>
              <div className="text-sm text-gray-600">Ortalama GPA</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-green-600 mb-1">10</div>
              <div className="text-sm text-gray-600">Yıl Eğitim</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-orange-600 mb-1">2022</div>
              <div className="text-sm text-gray-600">Son Mezuniyet</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Education

