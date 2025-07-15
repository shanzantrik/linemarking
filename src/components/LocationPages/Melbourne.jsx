import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SafeIcon from '../common/SafeIcon';
import { FiMapPin, FiPhone, FiMail, FiCheckCircle, FiClock, FiTruck, FiShield } from 'react-icons/fi';

const Melbourne = () => {
  const [servicesRef, servicesInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [processRef, processInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [faqRef, faqInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [contactRef, contactInView] = useInView({ threshold: 0.1, triggerOnce: true });
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.2,
        duration: 0.5 
      } 
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  // FAQ data for schema and rendering
  const faqs = [
    {
      question: "What areas in Melbourne do you provide line marking services?",
      answer: "We provide comprehensive line marking services throughout all Melbourne suburbs, including CBD, Eastern, Western, Northern and Southern suburbs. Our mobile teams can quickly reach any location in the Greater Melbourne area to deliver professional line marking solutions for car parks, warehouses, factories, schools, and roads."
    },
    {
      question: "How long does car park line marking in Melbourne take to complete?",
      answer: "The time to complete car park line marking in Melbourne depends on the size and complexity of the project. For a standard-sized car park, we can typically complete the work in 1-2 days. Larger commercial projects may take 3-5 days. We work efficiently to minimize disruption to your business operations and can schedule work during off-hours or weekends if needed."
    },
    {
      question: "What types of paint do you use for line marking in Melbourne?",
      answer: "We use high-quality, Australian-standard compliant thermoplastic and water-based acrylic paints specifically formulated for Melbourne's climate conditions. Our thermoplastic markings offer superior durability for high-traffic areas, while our water-based solutions provide excellent visibility and weather resistance. All our materials are environmentally friendly and comply with Victorian safety regulations."
    },
    {
      question: "Do you offer emergency line marking services in Melbourne?",
      answer: "Yes, we provide emergency line marking services throughout Melbourne with rapid response times. Whether you need urgent repairs to damaged markings or fast implementation of new safety lines, our dedicated Melbourne teams are available for quick deployment. Contact our emergency line for immediate assistance with your urgent line marking needs."
    },
    {
      question: "How do Melbourne weather conditions affect line marking durability?",
      answer: "Melbourne's variable weather conditions can impact line marking durability, which is why we use specialized materials designed to withstand local climate challenges. Our thermoplastic markings resist Melbourne's UV exposure, frequent temperature changes, and periodic heavy rainfall. We also consider seasonal timing for application to ensure maximum longevity, typically achieving 3-7 years of durability depending on traffic levels and marking type."
    },
    {
      question: "What compliance standards do your Melbourne line marking services meet?",
      answer: "Our Melbourne line marking services comply with all Victorian and Australian standards, including AS 1742.2 (Manual of Uniform Traffic Control Devices), AS 2890.1-2004 (Parking facilities), and Melbourne City Council requirements. We also adhere to WorkSafe Victoria guidelines and the Building Code of Australia specifications. Our team stays updated with all local regulations to ensure your line markings are fully compliant."
    }
  ];

  // Services data
  const services = [
    {
      title: "Car Park Line Marking",
      description: "Professional car park line marking for shopping centers, commercial buildings, and residential complexes across Melbourne. Our precision marking ensures maximum space utilization and compliance with Australian standards.",
      icon: FiTruck,
      link: "/car-park-line-marking-melbourne"
    },
    {
      title: "Warehouse Line Marking",
      description: "Specialized warehouse line marking solutions for Melbourne businesses. We implement clear safety zones, workflow paths, and storage areas to optimize operations and meet workplace safety requirements.",
      icon: FiShield,
      link: "/warehouse-line-marking-melbourne"
    },
    {
      title: "Road Line Marking",
      description: "Expert road line marking services throughout Melbourne, including lane dividers, pedestrian crossings, and directional arrows. All work complies with VicRoads specifications and traffic management standards.",
      icon: FiMapPin,
      link: "/road-line-marking-melbourne"
    },
    {
      title: "Factory Line Marking",
      description: "Comprehensive factory line marking for Melbourne industrial facilities. Our services include safety markings, equipment boundaries, and operational zones designed to enhance workplace safety and efficiency.",
      icon: FiClock,
      link: "/factory-line-marking-melbourne"
    },
    {
      title: "School Line Marking",
      description: "Creative and functional school line marking for Melbourne educational institutions. We design and implement playground games, sports courts, and safety markings that enhance learning environments.",
      icon: FiCheckCircle,
      link: "/school-line-marking-melbourne"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* SEO Metadata - would be implemented in a real app using Helmet or similar */}
      <div className="hidden">
        <title>Professional Line Marking Services Melbourne | Free Quote</title>
        <meta name="description" content="Expert line marking services in Melbourne for car parks, warehouses, roads & factories. Local contractors, same-day service available. Get your free quote today!" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Line Marking Australia - Melbourne",
              "image": "https://linemarkingaustralia.com.au/images/melbourne-line-marking.jpg",
              "priceRange": "$$",
              "telephone": "0395551234",
              "email": "melbourne@linemarkingaustralia.com.au",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 Line Marking Way",
                "addressLocality": "Melbourne",
                "addressRegion": "VIC",
                "postalCode": "3000",
                "addressCountry": "AU"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "-37.8136",
                "longitude": "144.9631"
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "07:00",
                  "closes": "17:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Saturday",
                  "opens": "08:00",
                  "closes": "12:00"
                }
              ],
              "sameAs": [
                "https://www.facebook.com/LineMarkingMelbourne",
                "https://www.instagram.com/linemarkingmelbourne"
              ]
            }
          `}
        </script>
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                ${faqs.map(faq => `{
                  "@type": "Question",
                  "name": "${faq.question}",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "${faq.answer}"
                  }
                }`).join(',')}
              ]
            }
          `}
        </script>
      </div>

      {/* Hero Section with Melbourne-specific content */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-primary-600 to-primary-700 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="md:order-1"
            >
              <span className="inline-block px-3 py-1 text-xs font-semibold bg-white text-primary-600 rounded-full mb-3">Melbourne's Trusted Line Marking Specialists</span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Professional Line Marking Melbourne</h1>
              <p className="text-lg mb-8">
                Melbourne's premier line marking service with over 25 years of experience serving businesses, schools, and councils across Victoria. Our local team delivers precision line marking for car parks, warehouses, roads, factories, and sports courts throughout Melbourne and surrounding suburbs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="btn bg-white text-primary-700 hover:bg-primary-50 font-semibold px-6 py-3 rounded-lg transition-all inline-flex items-center justify-center">
                  <SafeIcon icon={FiPhone} className="mr-2" />
                  Get a Free Quote
                </a>
                <a href="#services" className="btn bg-transparent border-2 border-white hover:bg-white/10 font-semibold px-6 py-3 rounded-lg transition-all inline-flex items-center justify-center">
                  Explore Services
                </a>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:order-2"
            >
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Line marking work being completed at a Melbourne car park" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white p-6">
                  <div className="flex items-center gap-2 text-sm">
                    <SafeIcon icon={FiMapPin} />
                    <span>Melbourne, Victoria</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Trusted by section */}
        <div className="container mx-auto max-w-6xl mt-16">
          <p className="text-center text-white/80 mb-6">Trusted by Melbourne's leading businesses and organizations</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {["Melbourne City Council", "Chadstone Shopping Centre", "Melbourne University", "Victorian Schools"].map((client, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + (index * 0.1) }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center"
              >
                <p className="font-medium">{client}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Intro Section */}
      <section className="py-16 px-4 bg-neutral-50">
        <div className="container mx-auto max-w-4xl">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="prose prose-lg max-w-none"
          >
            <h2 className="text-3xl font-bold text-center mb-8 text-neutral-800">Melbourne's Expert Line Marking Specialists</h2>
            <p>
              Welcome to Line Marking Australia's Melbourne division, where we provide industry-leading line marking services tailored specifically for Melbourne's unique urban landscape and climate conditions. With decades of experience serving the Victorian market, our Melbourne team specializes in delivering precise, durable, and compliant line marking solutions for businesses, educational institutions, and public facilities throughout the Greater Melbourne area.
            </p>
            <p>
              From CBD car parks to suburban warehouses, Eastern suburbs schools to Western industrial complexes, our Melbourne line marking contractors bring local expertise and professional standards to every project. We understand Melbourne's specific requirements, weather challenges, and compliance regulations, ensuring your line marking project meets all Victorian standards while delivering exceptional quality and longevity.
            </p>
            <p>
              Our Melbourne operation is fully equipped with the latest line marking technology and environmentally friendly materials, allowing us to execute projects efficiently with minimal disruption. Whether you need emergency line marking services, scheduled maintenance, or comprehensive new installations, our Melbourne team is ready to deliver superior results on time and within budget.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Services Section */}
      <section id="services" ref={servicesRef} className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            initial="hidden"
            animate={servicesInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <span className="inline-block px-3 py-1 text-xs font-semibold bg-primary-100 text-primary-700 rounded-full mb-3">Our Expertise</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Line Marking Services in Melbourne</h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Discover our comprehensive range of professional line marking solutions tailored for Melbourne businesses, schools, and public facilities.
            </p>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            animate={servicesInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden group"
              >
                <div className="p-6">
                  <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center mb-6">
                    <SafeIcon icon={service.icon} className="text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary-600 transition-colors">{service.title}</h3>
                  <p className="text-neutral-600 mb-6">{service.description}</p>
                  <Link to={service.link} className="text-primary-600 font-medium flex items-center hover:text-primary-800 transition-colors">
                    Learn more
                    <SafeIcon icon={FiMapPin} className="ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Process Section */}
      <section id="process" ref={processRef} className="py-20 px-4 bg-neutral-50">
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            initial="hidden"
            animate={processInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <span className="inline-block px-3 py-1 text-xs font-semibold bg-primary-100 text-primary-700 rounded-full mb-3">How We Work</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Melbourne Line Marking Process</h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              We follow a structured, efficient process to deliver exceptional line marking results for Melbourne clients.
            </p>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            animate={processInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                step: "1",
                title: "Free Consultation",
                description: "Our Melbourne team provides an on-site assessment and detailed quote tailored to your specific requirements.",
                icon: FiPhone
              },
              {
                step: "2",
                title: "Project Planning",
                description: "We develop a comprehensive plan considering Melbourne weather conditions and minimizing disruption to your operations.",
                icon: FiCheckCircle
              },
              {
                step: "3",
                title: "Professional Execution",
                description: "Our skilled Melbourne contractors implement your line marking using premium materials and precise techniques.",
                icon: FiTruck
              },
              {
                step: "4",
                title: "Quality Assurance",
                description: "Final inspection ensures all work meets our high standards and complies with Victorian regulations.",
                icon: FiShield
              }
            ].map((process, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="bg-white rounded-xl shadow-md p-6 relative"
              >
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-primary-600 text-white rounded-lg flex items-center justify-center font-bold">
                  {process.step}
                </div>
                <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center mb-6 mt-2">
                  <SafeIcon icon={process.icon} className="text-2xl" />
                </div>
                <h3 className="text-xl font-bold mb-3">{process.title}</h3>
                <p className="text-neutral-600">{process.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Compliance & Experience */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-3 py-1 text-xs font-semibold bg-primary-100 text-primary-700 rounded-full mb-3">Melbourne Standards</span>
              <h2 className="text-3xl font-bold mb-6">Compliance & Experience</h2>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="mt-1 mr-4 text-primary-600">
                    <SafeIcon icon={FiCheckCircle} className="text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Victorian Regulatory Compliance</h3>
                    <p className="text-neutral-600">All line marking complies with VicRoads specifications, Melbourne City Council requirements, and Australian Standards AS 1742.2 and AS 2890.1-2004.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mt-1 mr-4 text-primary-600">
                    <SafeIcon icon={FiCheckCircle} className="text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">25+ Years Melbourne Experience</h3>
                    <p className="text-neutral-600">Our team brings over two decades of specialized experience in Melbourne's unique urban environments and weather conditions.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mt-1 mr-4 text-primary-600">
                    <SafeIcon icon={FiCheckCircle} className="text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Premium Materials Warranty</h3>
                    <p className="text-neutral-600">We offer up to 5-year warranties on our premium line marking services throughout Melbourne, ensuring lasting quality and value.</p>
                  </div>
                </div>
              </div>
              <Link to="/contact" className="inline-flex items-center bg-primary-600 text-white hover:bg-primary-700 font-semibold px-6 py-3 rounded-lg transition-all">
                <SafeIcon icon={FiPhone} className="mr-2" />
                Schedule a Consultation
              </Link>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative rounded-xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Professional line marking team working in Melbourne" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <p className="text-lg font-semibold">Certified Melbourne Line Marking Professionals</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-20 px-4 bg-neutral-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-xs font-semibold bg-primary-100 text-primary-700 rounded-full mb-3">Client Success</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">What Melbourne Clients Say</h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Hear from businesses and organizations throughout Melbourne who have experienced our professional line marking services.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "David Thompson",
                position: "Facility Manager, Chadstone Shopping Centre",
                testimonial: "Line Marking Australia delivered exceptional quality for our busy car park refresh. Their Melbourne team worked overnight to minimize disruption and completed the project ahead of schedule. The line markings are precise, vibrant, and have received positive feedback from our customers.",
                rating: 5
              },
              {
                name: "Sarah Williams",
                position: "Principal, Melbourne Primary School",
                testimonial: "Our school playground has been transformed by the creative line marking work. The team was professional, safety-conscious, and worked around our school hours. The children love their new activity areas, and the markings have proven durable through Melbourne's variable weather.",
                rating: 5
              },
              {
                name: "Michael Chen",
                position: "Operations Director, Eastern Distribution Center",
                testimonial: "We required specialized warehouse line marking that would improve safety and workflow efficiency. The Melbourne team provided excellent consultation and implemented a system that has measurably improved our operations. Their knowledge of compliance requirements was particularly valuable.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index, duration: 0.6 }}
                className="bg-white rounded-xl shadow-md p-6"
              >
                <div className="flex text-primary-500 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <SafeIcon key={i} icon={FiCheckCircle} className="mr-1" />
                  ))}
                </div>
                <p className="text-neutral-700 italic mb-6">"{testimonial.testimonial}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-primary-700 font-bold">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-neutral-500">{testimonial.position}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section id="faq" ref={faqRef} className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <motion.div 
            initial="hidden"
            animate={faqInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <span className="inline-block px-3 py-1 text-xs font-semibold bg-primary-100 text-primary-700 rounded-full mb-3">Questions Answered</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Frequently Asked Questions</h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Get answers to common questions about our Melbourne line marking services.
            </p>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            animate={faqInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="space-y-6"
          >
            {faqs.map((faq, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="bg-neutral-50 rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-3 text-neutral-800">{faq.question}</h3>
                <p className="text-neutral-600">{faq.answer}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Map Location Section */}
      <section className="py-20 px-4 bg-neutral-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-xs font-semibold bg-primary-100 text-primary-700 rounded-full mb-3">Our Coverage</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Melbourne Service Areas</h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              We provide professional line marking services throughout Greater Melbourne and surrounding suburbs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-4">Melbourne Regions We Serve</h3>
              <div className="grid grid-cols-2 gap-2 mb-6">
                {[
                  "Melbourne CBD", "Eastern Suburbs", "Western Suburbs", "Northern Suburbs", 
                  "Southern Suburbs", "Bayside", "Inner East", "Outer East"
                ].map((area, index) => (
                  <div key={index} className="flex items-center">
                    <SafeIcon icon={FiCheckCircle} className="mr-2 text-primary-500" />
                    <span>{area}</span>
                  </div>
                ))}
              </div>
              <div className="border-t border-neutral-200 pt-6">
                <h4 className="font-semibold mb-3">Contact Our Melbourne Office</h4>
                <div className="space-y-2 text-neutral-700">
                  <div className="flex items-center">
                    <SafeIcon icon={FiMapPin} className="mr-3 text-primary-600" />
                    <span>123 Line Marking Way, Melbourne VIC 3000</span>
                  </div>
                  <div className="flex items-center">
                    <SafeIcon icon={FiPhone} className="mr-3 text-primary-600" />
                    <span>03 9555 1234</span>
                  </div>
                  <div className="flex items-center">
                    <SafeIcon icon={FiMail} className="mr-3 text-primary-600" />
                    <span>melbourne@linemarkingaustralia.com.au</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-md h-[400px] bg-neutral-200 relative">
              {/* In a real implementation, this would be a Google Map */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <SafeIcon icon={FiMapPin} className="text-6xl text-primary-600 mb-4" />
                  <p className="text-lg font-semibold">Interactive Map</p>
                  <p className="text-sm">Melbourne Service Coverage</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact/Quote CTA Section */}
      <section id="contact" ref={contactRef} className="py-20 px-4 bg-primary-600 text-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            initial="hidden"
            animate={contactInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <span className="inline-block px-3 py-1 text-xs font-semibold bg-white text-primary-700 rounded-full mb-3">Contact Us</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Get Your Free Melbourne Line Marking Quote</h2>
            <p className="text-lg max-w-3xl mx-auto">
              Fill out the form below or call our Melbourne team directly for a prompt, no-obligation quote on your line marking project.
            </p>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            animate={contactInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="bg-white rounded-xl shadow-xl overflow-hidden"
          >
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12">
                <h3 className="text-2xl font-bold text-neutral-800 mb-6">Request a Quote</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">Full Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1">Phone Number</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        placeholder="Your phone"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="Your email"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-neutral-700 mb-1">Service Required</label>
                    <select 
                      id="service" 
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    >
                      <option value="">Select a service</option>
                      <option value="car-park">Car Park Line Marking</option>
                      <option value="warehouse">Warehouse Line Marking</option>
                      <option value="road">Road Line Marking</option>
                      <option value="factory">Factory Line Marking</option>
                      <option value="school">School Line Marking</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">Project Details</label>
                    <textarea 
                      id="message" 
                      rows="4" 
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="Tell us about your project in Melbourne"
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                  >
                    Submit Quote Request
                  </button>
                </form>
              </div>
              <div className="bg-neutral-100 p-8 md:p-12 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-neutral-800 mb-6">Why Choose Us in Melbourne?</h3>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start">
                      <div className="mt-1 mr-4 text-primary-600">
                        <SafeIcon icon={FiCheckCircle} className="text-xl" />
                      </div>
                      <div>
                        <p className="font-medium">Local Melbourne Expertise</p>
                        <p className="text-sm text-neutral-600">Our dedicated Melbourne team understands local requirements and conditions.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="mt-1 mr-4 text-primary-600">
                        <SafeIcon icon={FiCheckCircle} className="text-xl" />
                      </div>
                      <div>
                        <p className="font-medium">Premium Materials</p>
                        <p className="text-sm text-neutral-600">We use high-quality paints and materials designed for Melbourne's climate.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="mt-1 mr-4 text-primary-600">
                        <SafeIcon icon={FiCheckCircle} className="text-xl" />
                      </div>
                      <div>
                        <p className="font-medium">Fast Response Times</p>
                        <p className="text-sm text-neutral-600">Quick quotes and flexible scheduling for Melbourne businesses.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="mt-1 mr-4 text-primary-600">
                        <SafeIcon icon={FiCheckCircle} className="text-xl" />
                      </div>
                      <div>
                        <p className="font-medium">Compliance Guaranteed</p>
                        <p className="text-sm text-neutral-600">All work meets Victorian standards and regulations.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <p className="font-bold text-primary-600 mb-2">Emergency Line Marking?</p>
                  <p className="text-neutral-700 mb-4">We offer rapid response services throughout Melbourne.</p>
                  <a href="tel:0395551234" className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-800 transition-colors">
                    <SafeIcon icon={FiPhone} className="mr-2" />
                    Call 03 9555 1234
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Related Services / Internal Links */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold mb-8 text-neutral-800">Related Services in Melbourne</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link to="/car-park-line-marking-melbourne" className="group block bg-neutral-50 hover:bg-neutral-100 p-6 rounded-lg transition-colors">
              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary-600 transition-colors">Car Park Line Marking Melbourne</h3>
              <p className="text-neutral-600 text-sm">Professional car park marking services for Melbourne businesses and commercial properties.</p>
            </Link>
            <Link to="/warehouse-line-marking-melbourne" className="group block bg-neutral-50 hover:bg-neutral-100 p-6 rounded-lg transition-colors">
              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary-600 transition-colors">Warehouse Line Marking Melbourne</h3>
              <p className="text-neutral-600 text-sm">Specialized warehouse floor marking solutions for Melbourne industrial facilities.</p>
            </Link>
            <Link to="/road-line-marking-melbourne" className="group block bg-neutral-50 hover:bg-neutral-100 p-6 rounded-lg transition-colors">
              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary-600 transition-colors">Road Line Marking Melbourne</h3>
              <p className="text-neutral-600 text-sm">Expert road marking services compliant with VicRoads specifications for Melbourne streets.</p>
            </Link>
          </div>
          
          <div className="mt-8 pt-8 border-t border-neutral-200">
            <h2 className="text-2xl font-bold mb-8 text-neutral-800">Other Locations We Serve</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <Link to="/south-australia" className="group block bg-neutral-50 hover:bg-neutral-100 p-6 rounded-lg transition-colors">
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary-600 transition-colors">South Australia</h3>
                <p className="text-neutral-600 text-sm">Professional line marking services throughout South Australia.</p>
              </Link>
              <Link to="/adelaide" className="group block bg-neutral-50 hover:bg-neutral-100 p-6 rounded-lg transition-colors">
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary-600 transition-colors">Adelaide</h3>
                <p className="text-neutral-600 text-sm">Expert line marking solutions for businesses in Adelaide.</p>
              </Link>
              <Link to="/victoria" className="group block bg-neutral-50 hover:bg-neutral-100 p-6 rounded-lg transition-colors">
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary-600 transition-colors">Victoria</h3>
                <p className="text-neutral-600 text-sm">Comprehensive line marking services across Victoria state.</p>
              </Link>
              <Link to="/" className="group block bg-neutral-50 hover:bg-neutral-100 p-6 rounded-lg transition-colors">
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary-600 transition-colors">Australia-Wide</h3>
                <p className="text-neutral-600 text-sm">National line marking solutions for businesses across Australia.</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Melbourne;