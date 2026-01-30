import { motion } from 'framer-motion'
import { 
  Camera, 
  Music, 
  BookOpen, 
  Plane, 
  Gamepad2, 
  Palette, 
  Mountain, 
  Coffee,
  Code2,
  Dumbbell,
  Film,
  Guitar
} from 'lucide-react'

const Interests = () => {
  const interests = [
    {
      id: 1,
      name: "Fotoğrafçılık",
      icon: <Camera className="w-8 h-8" />,
      description: "Doğa ve şehir fotoğrafçılığı, portre çekimleri",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      level: "İleri"
    },
    {
      id: 2,
      name: "Müzik",
      icon: <Music className="w-8 h-8" />,
      description: "Gitar çalma, müzik prodüksiyonu ve kompozisyon",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      level: "Orta"
    },
    {
      id: 3,
      name: "Kitap Okuma",
      icon: <BookOpen className="w-8 h-8" />,
      description: "Bilim kurgu, teknoloji ve kişisel gelişim kitapları",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      level: "İleri"
    },
    {
      id: 4,
      name: "Seyahat",
      icon: <Plane className="w-8 h-8" />,
      description: "Yeni kültürler keşfetme ve macera sporları",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      level: "Tutkulu"
    },
    {
      id: 5,
      name: "Oyun Geliştirme",
      icon: <Gamepad2 className="w-8 h-8" />,
      description: "Indie oyun projleri ve game jam etkinlikleri",
      color: "from-indigo-500 to-purple-500",
      bgColor: "bg-indigo-50",
      level: "Orta"
    },
    {
      id: 6,
      name: "Dijital Sanat",
      icon: <Palette className="w-8 h-8" />,
      description: "UI/UX tasarım, digital illustration ve 3D modelleme",
      color: "from-pink-500 to-rose-500",
      bgColor: "bg-pink-50",
      level: "İleri"
    },
    {
      id: 7,
      name: "Dağcılık",
      icon: <Mountain className="w-8 h-8" />,
      description: "Trekking, kamp ve doğa sporları",
      color: "from-teal-500 to-green-500",
      bgColor: "bg-teal-50",
      level: "Orta"
    },
    {
      id: 8,
      name: "Kahve Kültürü",
      icon: <Coffee className="w-8 h-8" />,
      description: "Specialty coffee, brewing teknikleri ve latte art",
      color: "from-amber-500 to-orange-500",
      bgColor: "bg-amber-50",
      level: "İleri"
    },
    {
      id: 9,
      name: "Open Source",
      icon: <Code2 className="w-8 h-8" />,
      description: "Açık kaynak projelere katkı ve topluluk çalışmaları",
      color: "from-gray-600 to-gray-800",
      bgColor: "bg-gray-50",
      level: "İleri"
    },
    {
      id: 10,
      name: "Fitness",
      icon: <Dumbbell className="w-8 h-8" />,
      description: "Ağırlık antrenmanı, koşu ve yoga",
      color: "from-red-500 to-pink-500",
      bgColor: "bg-red-50",
      level: "Orta"
    },
    {
      id: 11,
      name: "Sinema",
      icon: <Film className="w-8 h-8" />,
      description: "Film analizi, yönetmenlik teknikleri ve senaryo yazımı",
      color: "from-violet-500 to-purple-500",
      bgColor: "bg-violet-50",
      level: "İleri"
    },
    {
      id: 12,
      name: "Müzik Aleti",
      icon: <Guitar className="w-8 h-8" />,
      description: "Gitar, piyano ve elektronik müzik prodüksiyonu",
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-50",
      level: "Orta"
    }
  ]

  const getLevelColor = (level) => {
    switch (level) {
      case 'Tutkulu':
        return 'bg-red-100 text-red-800'
      case 'İleri':
        return 'bg-green-100 text-green-800'
      case 'Orta':
        return 'bg-blue-100 text-blue-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="min-h-screen pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            İlgi Alanlarım
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            İş hayatının dışında tutkuyla ilgilendiğim hobiler ve aktiviteler
          </p>
        </motion.div>

        {/* Interests Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {interests.map((interest, index) => (
            <motion.div
              key={interest.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`${interest.bgColor} rounded-xl p-6 hover:shadow-lg transition-all duration-300 group cursor-pointer border border-gray-200/50`}
            >
              <div className="text-center">
                <div className={`w-16 h-16 bg-gradient-to-r ${interest.color} rounded-full flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {interest.icon}
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {interest.name}
                </h3>
                
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                  {interest.description}
                </p>
                
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getLevelColor(interest.level)}`}>
                  {interest.level}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Categories Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8"
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              İlgi Alanı Kategorileri
            </h2>
            <p className="text-gray-600">
              Hobilerimin farklı kategorilerdeki dağılımı
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <Palette className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-blue-600 mb-1">4</div>
              <div className="text-sm text-gray-600">Yaratıcı Sanatlar</div>
            </div>
            
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <Mountain className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-green-600 mb-1">3</div>
              <div className="text-sm text-gray-600">Açık Hava Aktiviteleri</div>
            </div>
            
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-purple-600 mb-1">3</div>
              <div className="text-sm text-gray-600">Teknoloji & Geliştirme</div>
            </div>
            
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-orange-600 mb-1">2</div>
              <div className="text-sm text-gray-600">Kültür & Eğlence</div>
            </div>
          </div>
        </motion.div>

        {/* Personal Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200/50 p-8 max-w-3xl mx-auto">
            <div className="text-4xl text-gray-300 mb-4">"</div>
            <p className="text-lg text-gray-700 italic mb-4">
              Hayat sadece çalışmaktan ibaret değil. Tutkularımızı takip etmek, 
              yeni şeyler öğrenmek ve farklı deneyimler yaşamak bizi daha yaratıcı 
              ve dengeli bireyler haline getirir. Her hobi, profesyonel hayatımıza 
              da farklı bir perspektif katıyor.
            </p>
            <div className="text-4xl text-gray-300 mb-4">"</div>
            <p className="text-sm text-gray-500">
              - Kişisel Felsefem
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Interests

