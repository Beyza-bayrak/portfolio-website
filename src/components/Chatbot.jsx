import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, Bot, User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Merhaba! Size nasıl yardımcı olabilirim?",
      sender: 'bot',
      timestamp: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const getBotResponse = (userMessage) => {
    const message = userMessage.toLowerCase()
    
    // Danışmanlık ile ilgili sorular
    if (message.includes('danışmanlık') || message.includes('danismanlik')) {
      return "Danışmanlık almak için lütfen 'Danışmanlık' sekmesindeki formu doldurun, en kısa sürede sizinle iletişime geçelim. 😊"
    }
    
    // İletişim ile ilgili sorular
    if (message.includes('iletişim') || message.includes('iletisim') || message.includes('telefon') || message.includes('email') || message.includes('mail')) {
      return "İletişim bilgilerim için 'İletişim' bölümünü ziyaret edebilirsiniz. E-posta: ornek@email.com, Telefon: +90 555 123 45 67"
    }
    
    // Sertifikalar ile ilgili sorular
    if (message.includes('sertifika') || message.includes('belge')) {
      return "Sertifikalarım hakkında detaylı bilgi için 'Sertifikalar' bölümünü inceleyebilirsiniz. AWS, Google Cloud, Microsoft Azure gibi birçok alanda sertifikalarım bulunuyor."
    }
    
    // Eğitim ile ilgili sorular
    if (message.includes('eğitim') || message.includes('egitim') || message.includes('okul') || message.includes('üniversite')) {
      return "Eğitim geçmişim hakkında bilgi almak için 'Eğitim' bölümünü ziyaret edebilirsiniz. Yüksek lisans dahil olmak üzere detaylı akademik geçmişimi görebilirsiniz."
    }
    
    // Yetenekler ile ilgili sorular
    if (message.includes('yetenek') || message.includes('beceri') || message.includes('skill') || message.includes('teknoloji')) {
      return "Teknik ve sosyal becerilerim hakkında detaylı bilgi için 'Yetenekler' bölümünü inceleyebilirsiniz. Frontend, backend, bulut teknolojileri ve daha fazlası!"
    }
    
    // İlgi alanları ile ilgili sorular
    if (message.includes('hobi') || message.includes('ilgi') || message.includes('boş zaman')) {
      return "İlgi alanlarım ve hobilerim hakkında bilgi almak için 'İlgi Alanları' bölümünü ziyaret edebilirsiniz. Fotoğrafçılık, müzik, seyahat ve daha fazlası!"
    }
    
    // Hakkında ile ilgili sorular
    if (message.includes('hakkında') || message.includes('kim') || message.includes('tanı')) {
      return "Benim hakkımda daha fazla bilgi edinmek için 'Hakkında' bölümünü ziyaret edebilirsiniz. Profesyonel yolculuğum ve kişisel hikayemi orada bulabilirsiniz."
    }
    
    // Proje ile ilgili sorular
    if (message.includes('proje') || message.includes('çalışma') || message.includes('iş')) {
      return "Projelerinizde size yardımcı olmaktan mutluluk duyarım! Detaylı görüşme için 'Danışmanlık' bölümünden benimle iletişime geçebilirsiniz."
    }
    
    // Selamlama
    if (message.includes('merhaba') || message.includes('selam') || message.includes('hello') || message.includes('hi')) {
      return "Merhaba! Hoş geldiniz. Size nasıl yardımcı olabilirim? Web sitemizdeki bölümler hakkında sorular sorabilir veya danışmanlık hizmeti hakkında bilgi alabilirsiniz."
    }
    
    // Teşekkür
    if (message.includes('teşekkür') || message.includes('tesekkur') || message.includes('sağol') || message.includes('thanks')) {
      return "Rica ederim! Başka sorularınız varsa çekinmeden sorabilirsiniz. Size yardımcı olmaktan mutluluk duyuyorum. 😊"
    }
    
    // Varsayılan yanıt
    return "Üzgünüm, bu soruyu cevaplayamıyorum. Lütfen başka bir şey sormayı deneyin. Web sitemizdeki bölümler (Hakkında, Sertifikalar, Eğitim, Yetenekler, İlgi Alanları, İletişim, Danışmanlık) hakkında sorular sorabilirsiniz."
  }

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsTyping(true)

    // Simulate typing delay
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: getBotResponse(inputValue),
        sender: 'bot',
        timestamp: new Date()
      }
      
      setMessages(prev => [...prev, botResponse])
      setIsTyping(false)
    }, 1000 + Math.random() * 1000) // Random delay between 1-2 seconds
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage()
    }
  }

  const formatTime = (date) => {
    return date.toLocaleTimeString('tr-TR', { 
      hour: '2-digit', 
      minute: '2-digit' 
    })
  }

  return (
    <>
      {/* Chat Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3, delay: 1 }}
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <MessageCircle className="w-6 h-6 text-white" />
          )}
        </Button>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 w-80 h-96 bg-white rounded-xl shadow-2xl border border-gray-200/50 z-50 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <Bot className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Asistan</h3>
                    <p className="text-xs opacity-90">Online</p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-white/20 p-1"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex items-start space-x-2 max-w-[80%] ${message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                      message.sender === 'user' 
                        ? 'bg-blue-500' 
                        : 'bg-gradient-to-r from-blue-500 to-purple-600'
                    }`}>
                      {message.sender === 'user' ? (
                        <User className="w-3 h-3 text-white" />
                      ) : (
                        <Bot className="w-3 h-3 text-white" />
                      )}
                    </div>
                    <div className={`rounded-lg p-3 ${
                      message.sender === 'user'
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-100 text-gray-900'
                    }`}>
                      <p className="text-sm">{message.text}</p>
                      <p className={`text-xs mt-1 ${
                        message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'
                      }`}>
                        {formatTime(message.timestamp)}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {/* Typing Indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="flex items-start space-x-2">
                    <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      <Bot className="w-3 h-3 text-white" />
                    </div>
                    <div className="bg-gray-100 rounded-lg p-3">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-gray-200">
              <div className="flex space-x-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Mesajınızı yazın..."
                  className="flex-1"
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim()}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Chatbot

