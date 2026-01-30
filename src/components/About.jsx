import { motion } from 'framer-motion'
import { User, MapPin, Calendar, Mail } from 'lucide-react'

const About = () => {
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
            Hakkımda
          </h1>
          <p className="text-lg text-gray-600">
            Profesyonel yolculuğum ve kişisel hikayem
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
              <div className="w-48 h-48 mx-auto mb-6 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center">
                <User className="w-24 h-24 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                [İsminiz Soyadınız]
              </h2>
              <p className="text-gray-600 mb-4">
                [Unvanınız / Pozisyonunuz]
              </p>
              
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-center justify-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>[Şehir, Ülke]</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>[Doğum Tarihi]</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>[email@example.com]</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Biography */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Biyografim
              </h3>
              
              <div className="prose prose-lg text-gray-600 space-y-4">
                <p>
                  Merhaba! Ben [İsminiz], [alanınız] konusunda uzmanlaşmış bir profesyonelim. 
                  [X] yıldan fazla deneyimle, [sektörünüz] alanında çeşitli projelerde yer aldım 
                  ve başarılı sonuçlar elde ettim.
                </p>
                
                <p>
                  Kariyerime [başlangıç hikayeniz] ile başladım. Bu süreçte [önemli deneyimleriniz] 
                  edindim ve [başarılarınız] elde ettim. Özellikle [uzmanlık alanlarınız] konularında 
                  derinlemesine bilgi sahibiyim.
                </p>
                
                <p>
                  Günümüzde [mevcut durumunuz] olarak çalışıyorum ve [hedefleriniz] üzerine 
                  odaklanıyorum. Sürekli öğrenme ve gelişim ilkesiyle hareket ederek, 
                  [gelecek planlarınız] hedefliyorum.
                </p>
                
                <p>
                  İş hayatının dışında [hobileriniz] ile ilgileniyorum ve [kişisel özellikleriniz]. 
                  Ekip çalışmasına yatkın, problem çözme odaklı ve yaratıcı çözümler üretmeyi 
                  seven biriyim.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">[X]+</div>
                  <div className="text-sm text-gray-600">Yıl Deneyim</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">[X]+</div>
                  <div className="text-sm text-gray-600">Proje</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">[X]+</div>
                  <div className="text-sm text-gray-600">Müşteri</div>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <div className="text-2xl font-bold text-orange-600">[X]+</div>
                  <div className="text-sm text-gray-600">Sertifika</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default About

