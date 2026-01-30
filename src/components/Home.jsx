import { Link } from 'react-router-dom'
import { ArrowRight, Star, Award, BookOpen, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

const Home = () => {
  const features = [
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Sertifikalar',
      description: 'Profesyonel sertifikalarım ve başarılarım',
      link: '/sertifikalar'
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: 'Eğitim',
      description: 'Akademik geçmişim ve eğitim yolculuğum',
      link: '/egitim'
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: 'Yetenekler',
      description: 'Teknik ve sosyal becerilerim',
      link: '/yetenekler'
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: 'Danışmanlık',
      description: 'Profesyonel danışmanlık hizmetlerim',
      link: '/danismanlik'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Merhaba, Ben{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  [İsminiz]
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Profesyonel deneyimim ve yeteneklerimle size değer katmaya hazırım.
                Benimle tanışın ve birlikte çalışalım.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                <Link to="/hakkinda">
                  Hakkımda Daha Fazla
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/iletisim">
                  İletişime Geç
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Keşfetmeye Başlayın
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Profesyonel yolculuğum, yeteneklerim ve deneyimlerim hakkında daha fazla bilgi edinin.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              >
                <Link
                  to={feature.link}
                  className="block p-6 bg-white rounded-xl shadow-sm border border-gray-200/50 hover:shadow-md hover:border-blue-200 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Birlikte Çalışmaya Hazır mısınız?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Projelerinizde size yardımcı olmak ve değer katmak için buradayım.
              Hemen iletişime geçin ve konuşalım.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                <Link to="/danismanlik">
                  Danışmanlık Al
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/iletisim">
                  İletişim Bilgileri
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home

