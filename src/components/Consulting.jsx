import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Users, 
  Lightbulb, 
  Target, 
  TrendingUp, 
  Send, 
  CheckCircle, 
  AlertCircle,
  Clock,
  Star,
  Award
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

const Consulting = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const services = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Teknoloji Danışmanlığı",
      description: "Modern teknolojiler, yazılım mimarisi ve dijital dönüşüm süreçlerinde rehberlik",
      features: ["Teknoloji Seçimi", "Sistem Mimarisi", "Performans Optimizasyonu"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Proje Yönetimi",
      description: "Agile metodolojiler ve proje yönetimi süreçlerinde uzman danışmanlık",
      features: ["Scrum/Kanban", "Takım Yönetimi", "Süreç Optimizasyonu"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Strateji Geliştirme",
      description: "İş stratejileri, dijital pazarlama ve büyüme planları oluşturma",
      features: ["İş Analizi", "Pazar Araştırması", "Büyüme Stratejileri"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Performans İyileştirme",
      description: "Mevcut sistemlerin analizi ve performans artırıcı çözümler",
      features: ["Sistem Analizi", "Optimizasyon", "Verimlilik Artırma"],
      color: "from-orange-500 to-red-500"
    }
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch('/api/consulting', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', phone: '', subject: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
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
            Danışmanlık Hizmetleri
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Deneyimim ve uzmanlığımla projelerinizde size rehberlik ediyorum. 
            Teknolojiden stratejiye, birçok alanda profesyonel danışmanlık hizmeti sunuyorum.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg border border-gray-200/50 p-6 hover:shadow-xl transition-all duration-300 group"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-4">
                {service.description}
              </p>
              
              <div className="space-y-2">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Consulting Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Danışmanlık Talebi
            </h2>
            
            <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg border border-gray-200/50 p-6">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Ad Soyad *
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Adınız ve soyadınız"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    E-posta *
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="ornek@email.com"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Telefon *
                  </label>
                  <Input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    placeholder="+90 555 123 45 67"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Danışılmak İstenen Konu *
                  </label>
                  <Textarea
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    placeholder="Hangi konularda danışmanlık almak istiyorsunuz? Projeniz hakkında detayları paylaşın..."
                    rows={6}
                    className="w-full"
                  />
                </div>

                {/* Submit Status */}
                {submitStatus && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-lg flex items-center ${
                      submitStatus === 'success' 
                        ? 'bg-green-50 text-green-800 border border-green-200' 
                        : 'bg-red-50 text-red-800 border border-red-200'
                    }`}
                  >
                    {submitStatus === 'success' ? (
                      <CheckCircle className="w-5 h-5 mr-2" />
                    ) : (
                      <AlertCircle className="w-5 h-5 mr-2" />
                    )}
                    <span>
                      {submitStatus === 'success' 
                        ? 'Danışmanlık talebiniz alındı! 24 saat içinde sizinle iletişime geçeceğim.' 
                        : 'Talep gönderilirken bir hata oluştu. Lütfen tekrar deneyin.'}
                    </span>
                  </motion.div>
                )}

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Gönderiliyor...
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <Send className="w-4 h-4 mr-2" />
                      Danışmanlık Talebi Gönder
                    </div>
                  )}
                </Button>
              </div>
            </form>
          </motion.div>

          {/* Info Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold text-gray-900">
              Neden Benimle Çalışmalısınız?
            </h2>

            {/* Benefits */}
            <div className="space-y-4">
              <div className="flex items-start p-4 bg-blue-50 rounded-lg">
                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center text-white mr-4 flex-shrink-0">
                  <Star className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">5+ Yıl Deneyim</h3>
                  <p className="text-sm text-gray-600">
                    Çeşitli sektörlerde edindiğim deneyimle size en uygun çözümleri sunuyorum.
                  </p>
                </div>
              </div>

              <div className="flex items-start p-4 bg-green-50 rounded-lg">
                <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center text-white mr-4 flex-shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Kanıtlanmış Başarı</h3>
                  <p className="text-sm text-gray-600">
                    50+ başarılı proje ve %95 müşteri memnuniyeti oranı.
                  </p>
                </div>
              </div>

              <div className="flex items-start p-4 bg-purple-50 rounded-lg">
                <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center text-white mr-4 flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Hızlı Yanıt</h3>
                  <p className="text-sm text-gray-600">
                    24 saat içinde geri dönüş ve esnek çalışma saatleri.
                  </p>
                </div>
              </div>
            </div>

            {/* Process */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Danışmanlık Süreci
              </h3>
              
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold mr-3">
                    1
                  </div>
                  <span className="text-sm text-gray-700">İhtiyaç analizi ve proje değerlendirmesi</span>
                </div>
                
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold mr-3">
                    2
                  </div>
                  <span className="text-sm text-gray-700">Özelleştirilmiş çözüm önerisi sunumu</span>
                </div>
                
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold mr-3">
                    3
                  </div>
                  <span className="text-sm text-gray-700">Uygulama planı ve takip süreci</span>
                </div>
                
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold mr-3">
                    4
                  </div>
                  <span className="text-sm text-gray-700">Sonuç değerlendirmesi ve optimizasyon</span>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200/50 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Hızlı İletişim
              </h3>
              
              <div className="space-y-3 text-sm text-gray-600">
                <div>
                  <strong>E-posta:</strong> ornek@email.com
                </div>
                <div>
                  <strong>Telefon:</strong> +90 555 123 45 67
                </div>
                <div>
                  <strong>Yanıt Süresi:</strong> 24 saat içinde
                </div>
                <div>
                  <strong>Çalışma Saatleri:</strong> Pazartesi-Cuma 09:00-18:00
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Consulting

