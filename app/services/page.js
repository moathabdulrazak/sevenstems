"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function Services() {

  const services = [
    {
      title: 'Weddings',
      subtitle: 'Bespoke Floral Design',
      description: 'From intimate ceremonies to grand celebrations, we create floral narratives that reflect your unique love story. Every bloom is carefully selected to harmonize with your vision.',
      features: [
        'Personal consultation & mood board creation',
        'Bridal bouquets & boutonnieres',
        'Ceremony installations',
        'Reception centerpieces & arrangements',
        'Venue transformation'
      ],
      image: 'https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?w=800&h=600&fit=crop'
    },
    {
      title: 'Events',
      subtitle: 'Luxury Event Floristry',
      description: 'Transform your event into an unforgettable experience with our avant-garde floral designs. We specialize in creating immersive environments that captivate and inspire.',
      features: [
        'Corporate events & galas',
        'Product launches',
        'Fashion shows',
        'Private parties',
        'Charity benefits'
      ],
      image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&h=600&fit=crop'
    },
    {
      title: 'Installations',
      subtitle: 'Architectural Florals',
      description: 'Push the boundaries of traditional floristry with our large-scale installations. We create living art that transforms spaces and creates memorable moments.',
      features: [
        'Hotel & restaurant installations',
        'Retail displays',
        'Gallery exhibitions',
        'Seasonal installations',
        'Custom sculptures'
      ],
      image: 'https://images.unsplash.com/photo-1544550581-1bcabf842b77?w=800&h=600&fit=crop'
    }
  ];


  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1920&h=1080&fit=crop"
            alt="Luxury floral services"
            fill
            className="object-cover brightness-50"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60" />
        </div>
        
        <motion.div
          className="relative z-10 text-center text-white px-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-7xl mb-6 font-light drop-shadow-lg">Our Services</h1>
          <p className="text-xl font-sans font-light max-w-2xl mx-auto drop-shadow-md">
            Luxury floral design with an avant-garde lens
          </p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 md:grid-cols-2 gap-12 mb-24 items-center ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <h2 className="text-4xl mb-2">
                  {service.title}
                </h2>
                <p className="text-rose-400 font-sans text-sm uppercase tracking-wider mb-6">
                  {service.subtitle}
                </p>
                <p className="text-lg font-sans font-light mb-8 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-amber-400 mr-3">✿</span>
                      <span className="font-sans font-light">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div
                className={`relative h-[500px] overflow-hidden ${
                  index % 2 === 1 ? 'md:order-1' : ''
                }`}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  unoptimized
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-6 md:px-12 bg-stone-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl text-center mb-16">Our Process</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultation', desc: 'Understanding your vision and creating a mood board' },
              { step: '02', title: 'Design', desc: 'Crafting a bespoke proposal tailored to your needs' },
              { step: '03', title: 'Creation', desc: 'Bringing your floral dreams to life with precision' },
              { step: '04', title: 'Installation', desc: 'Seamless setup and styling at your venue' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl text-rose-400 mb-4">{item.step}</div>
                <h3 className="text-xl mb-2">{item.title}</h3>
                <p className="font-sans font-light text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl mb-6">Let's Create Together</h2>
          <p className="text-xl font-sans font-light text-gray-500 mb-8">
            Ready to transform your vision into a floral masterpiece?
          </p>
          <Link href="/contact">
            <motion.div
              className="inline-block px-8 py-4 bg-black text-white font-sans text-sm font-medium tracking-wider uppercase rounded-none hover:bg-gray-800 transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Begin Your Journey
            </motion.div>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}