"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

const contactDetails = [
  {
    icon: MapPin,
    title: "Office Address",
    content: "Julphar Towers, Al Hisn Rd, Dafan Al Nakheel, Ras Al Khaimah,\nUnited Arab Emirates",
  },
  {
    icon: Phone,
    title: "Phone",
    content: "+971 50 374 5208",
  },
  {
    icon: Mail,
    title: "Email",
    content: "admin@mec-uae.com",
  },
  {
    icon: Clock,
    title: "Working Hours",
    content: "Monday - Saturday\n8:30 AM - 5:30 PM",
  },
]

export function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
    >
      <h2 className="text-2xl font-bold text-foreground mb-6">Contact Information</h2>

      <div className="space-y-6 mb-10">
        {contactDetails.map((detail) => (
          <div key={detail.title} className="flex gap-4">
            <div className="flex-shrink-0 h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
              <detail.icon className="h-5 w-5 text-accent" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">{detail.title}</h3>
              <p className="text-muted-foreground whitespace-pre-line">{detail.content}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="aspect-[4/3] rounded-xl overflow-hidden border border-border">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5556.939864009031!2d55.95621277684424!3d25.79152087733322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef676caf1a11b73%3A0xba7f4e8e25ac41aa!2sJulphar%20Towers%20-%20Al%20Hisn%20Rd%20-%20Dafan%20Al%20Nakheel%20-%20Ras%20Al%20Khaimah%20-%20United%20Arab%20Emirates!5e1!3m2!1sen!2suk!4v1783185691870!5m2!1sen!2suk"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="MEC Office Location"
        />
      </div>
    </motion.div>
  )
}
