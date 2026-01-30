import { motion } from 'framer-motion'
import { Award, Calendar, ExternalLink, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      name: "AWS Certified Solutions Architect",
      organization: "Amazon Web Services",
      date: "2023",
      description: "Bulut mimarisi ve AWS hizmetleri konusunda uzmanlaşma sertifikası",
      level: "Professional",
      credentialId: "AWS-SAA-123456",
      verifyUrl: "#"
    },
    {
      id: 2,
      name: "Google Cloud Professional",
      organization: "Google Cloud",
      date: "2023",
      description: "Google Cloud Platform üzerinde profesyonel seviye yetkinlik",
      level: "Professional",
      credentialId: "GCP-PRO-789012",
      verifyUrl: "#"
    },
    {
      id: 3,
      name: "Microsoft Azure Fundamentals",
      organization: "Microsoft",
      date: "2022",
      description: "Azure bulut hizmetleri temel bilgileri ve uygulamaları",
      level: "Fundamentals",
      credentialId: "AZ-900-345678",
      verifyUrl: "#"
    },
    {
      id: 4,
      name: "Certified Kubernetes Administrator",
      organization: "Cloud Native Computing Foundation",
      date: "2022",
      description: "Kubernetes cluster yönetimi ve orkestrasyon uzmanlaşması",
      level: "Professional",
      credentialId: "CKA-901234",
      verifyUrl: "#"
    },
    {
      id: 5,
      name: "React Developer Certification",
      organization: "Meta",
      date: "2021",
      description: "React framework ile modern web uygulaması geliştirme",
      level: "Professional",
      credentialId: "META-REACT-567890",
      verifyUrl: "#"
    },
    {
      id: 6,
      name: "Scrum Master Certification",
      organization: "Scrum Alliance",
      date: "2021",
      description: "Agile metodolojiler ve Scrum framework yönetimi",
      level: "Certified",
      credentialId: "CSM-123789",
      verifyUrl: "#"
    }
  ]

  const getLevelColor = (level) => {
    switch (level) {
      case 'Professional':
        return 'bg-purple-100 text-purple-800'
      case 'Fundamentals':
        return 'bg-blue-100 text-blue-800'
      case 'Certified':
        return 'bg-green-100 text-green-800'
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
            Sertifikalarım
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Profesyonel gelişimim sürecinde elde ettiğim sertifikalar ve başarılarım
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg border border-gray-200/50 overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getLevelColor(cert.level)}`}>
                    {cert.level}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {cert.name}
                </h3>
                
                <p className="text-blue-600 font-medium mb-3">
                  {cert.organization}
                </p>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {cert.description}
                </p>

                {/* Footer */}
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{cert.date}</span>
                  </div>
                  
                  <div className="text-xs text-gray-400">
                    Credential ID: {cert.credentialId}
                  </div>
                  
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full group-hover:bg-blue-50 group-hover:border-blue-200"
                    onClick={() => window.open(cert.verifyUrl, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Doğrula
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8"
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Sertifika İstatistikleri
            </h2>
            <p className="text-gray-600">
              Sürekli öğrenme ve gelişim yolculuğum
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <Star className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-1">6</div>
              <div className="text-sm text-gray-600">Toplam Sertifika</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-purple-600 mb-1">4</div>
              <div className="text-sm text-gray-600">Professional Seviye</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-green-600 mb-1">2023</div>
              <div className="text-sm text-gray-600">Son Sertifika</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <ExternalLink className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-orange-600 mb-1">100%</div>
              <div className="text-sm text-gray-600">Doğrulanabilir</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Certificates

