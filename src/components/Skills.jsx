import { motion } from 'framer-motion'
import { Code, Database, Cloud, Smartphone, Users, Lightbulb, Target, MessageSquare } from 'lucide-react'
import { Progress } from '@/components/ui/progress'

const Skills = () => {
  const technicalSkills = [
    {
      category: "Frontend Geliştirme",
      icon: <Code className="w-6 h-6" />,
      skills: [
        { name: "React.js", level: 95, color: "bg-blue-500" },
        { name: "JavaScript/TypeScript", level: 90, color: "bg-yellow-500" },
        { name: "HTML/CSS", level: 95, color: "bg-orange-500" },
        { name: "Vue.js", level: 80, color: "bg-green-500" },
        { name: "Next.js", level: 85, color: "bg-gray-800" }
      ]
    },
    {
      category: "Backend Geliştirme",
      icon: <Database className="w-6 h-6" />,
      skills: [
        { name: "Node.js", level: 90, color: "bg-green-600" },
        { name: "Python", level: 85, color: "bg-blue-600" },
        { name: "Java", level: 80, color: "bg-red-600" },
        { name: "PostgreSQL", level: 85, color: "bg-blue-700" },
        { name: "MongoDB", level: 80, color: "bg-green-700" }
      ]
    },
    {
      category: "Bulut Teknolojileri",
      icon: <Cloud className="w-6 h-6" />,
      skills: [
        { name: "AWS", level: 90, color: "bg-orange-600" },
        { name: "Google Cloud", level: 85, color: "bg-blue-500" },
        { name: "Docker", level: 85, color: "bg-blue-600" },
        { name: "Kubernetes", level: 80, color: "bg-purple-600" },
        { name: "Terraform", level: 75, color: "bg-purple-700" }
      ]
    },
    {
      category: "Mobil Geliştirme",
      icon: <Smartphone className="w-6 h-6" />,
      skills: [
        { name: "React Native", level: 85, color: "bg-blue-500" },
        { name: "Flutter", level: 80, color: "bg-blue-400" },
        { name: "iOS (Swift)", level: 75, color: "bg-gray-700" },
        { name: "Android (Kotlin)", level: 75, color: "bg-green-600" }
      ]
    }
  ]

  const softSkills = [
    {
      name: "Takım Çalışması",
      icon: <Users className="w-8 h-8" />,
      level: 95,
      description: "Çok disiplinli takımlarda etkili işbirliği"
    },
    {
      name: "Problem Çözme",
      icon: <Lightbulb className="w-8 h-8" />,
      level: 90,
      description: "Karmaşık problemlere yaratıcı çözümler"
    },
    {
      name: "Proje Yönetimi",
      icon: <Target className="w-8 h-8" />,
      level: 85,
      description: "Agile metodolojiler ve zaman yönetimi"
    },
    {
      name: "İletişim",
      icon: <MessageSquare className="w-8 h-8" />,
      level: 90,
      description: "Teknik ve teknik olmayan kitlelerle etkili iletişim"
    }
  ]

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
            Yeteneklerim
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Teknik uzmanlıklarım ve sosyal becerilerim ile projelerinize değer katıyorum
          </p>
        </motion.div>

        {/* Technical Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Teknik Yetenekler
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {technicalSkills.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + categoryIndex * 0.1 }}
                className="bg-white rounded-xl shadow-lg border border-gray-200/50 p-6"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white mr-4">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {category.category}
                  </h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.6 + categoryIndex * 0.1 + skillIndex * 0.05 }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700">
                          {skill.name}
                        </span>
                        <span className="text-sm text-gray-500">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <motion.div
                          className={`h-2 rounded-full ${skill.color}`}
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.8 + categoryIndex * 0.1 + skillIndex * 0.05 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Sosyal Beceriler
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {softSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                className="bg-white rounded-xl shadow-lg border border-gray-200/50 p-6 text-center hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {skill.name}
                </h3>
                
                <p className="text-sm text-gray-600 mb-4">
                  {skill.description}
                </p>
                
                <div className="relative">
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                    <motion.div
                      className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 1.2 + index * 0.1 }}
                    />
                  </div>
                  <span className="text-sm font-medium text-gray-700">
                    {skill.level}%
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8"
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Yetenek Özeti
            </h2>
            <p className="text-gray-600">
              Sürekli gelişen becerilerim ve uzmanlık alanlarım
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-1">15+</div>
              <div className="text-sm text-gray-600">Programlama Dili</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-1">50+</div>
              <div className="text-sm text-gray-600">Teknoloji & Framework</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-1">5+</div>
              <div className="text-sm text-gray-600">Yıl Deneyim</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-1">100+</div>
              <div className="text-sm text-gray-600">Tamamlanan Proje</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Skills

