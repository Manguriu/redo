'use client'

import React from "react"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Phone } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"

const contactInfo = [
  { icon: Mail, text: "brianmiruri983@gmail.com", href: "mailto:brianmiruri983@gmail.com" },
  { icon: Phone, text: "+254743807662", href: "tel:+254743807662" },
  { icon: Github, text: "Github", href: "https://github.com/Manguriu" },
  { icon: Linkedin, text: "LinkedIn", href: "https://www.linkedin.com/in/brian-manguriu-3b0b07207/" },
]

const ContactCard = ({ icon: Icon, text, href }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <Card className="bg-gray-800 border-gray-700">
      <CardContent className="flex items-center p-4 space-x-4">
        <Icon className="h-6 w-6 text-cyan-400" />
        <a href={href} target="_blank" rel="noopener noreferrer" className="text-white hover:text-cyan-400 transition-colors">
          {text}
        </a>
      </CardContent>
    </Card>
  </motion.div>
)

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-center mb-12 text-cyan-400">Get in Touch</h1>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">Contact Information</h2>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <ContactCard key={index} {...info} />
              ))}
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input placeholder="Your Name" className="bg-gray-700 text-white border-gray-600" />
              <Input placeholder="Your Email" type="email" className="bg-gray-700 text-white border-gray-600" />
              <Textarea placeholder="Your Message" className="bg-gray-700 text-white border-gray-600" rows={4} />
              <Button type="submit"  variant="outline" className="w-full">Send Message</Button>
            </form>
          </div>
        </div>
        
        <div className="text-center text-gray-400">
          <p>I'm always open to new opportunities and collaborations.</p>
          <p>Let's create something amazing together!</p>
        </div>
      </motion.div>
    </div>
  )
}

