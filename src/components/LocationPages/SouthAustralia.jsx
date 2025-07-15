import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SafeIcon from '../common/SafeIcon';
import { FiMapPin, FiPhone, FiMail, FiCheckCircle, FiClock, FiTruck, FiShield } from 'react-icons/fi';

const SouthAustralia = () => {
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
      question: "What regions in South Australia do you provide line marking services?",
      answer: "We provide comprehensive line marking services throughout all of South Australia, including Adelaide metropolitan area, Barossa Valley, Fleurieu Peninsula, Yorke Peninsula, Eyre Peninsula, and the South East regions. Our mobile teams are strategically positioned to efficiently reach any location in South Australia to deliver professional line marking solutions for car parks, warehouses, factories, schools, and roads."
    },
    {
      question: "How does South Australia's climate affect line marking durability?",
      answer: "South Australia's climate, characterized by hot, dry summers and mild winters, requires specialized line marking materials. We use UV-resistant thermoplastic and water-based acrylic paints specifically formulated for South Australian conditions. Our materials are selected to withstand the intense summer heat that can reach over 40°C in many parts of the state, as well as the occasional heavy rainfall. This specialized approach ensures our line markings maintain their visibility and durability for 3-7 years, depending on traffic volume and surface type."
    },
    {
      question: "Do you offer emergency line marking services in South Australia?",
      answer: "Yes, we provide emergency line marking services throughout South Australia with rapid response times. Our strategically located teams in Adelaide and regional centers can quickly deploy to address urgent line marking needs, whether for safety compliance, facility reopenings, or critical infrastructure requirements. Contact our South Australian emergency line for immediate assistance with your urgent line marking projects."
    },
    {
      question: "What compliance standards do your South Australian line marking services meet?",
      answer: "Our South Australian line marking services comply with all state and national standards, including Australian Standards AS 1742.2 (Manual of Uniform Traffic Control Devices), AS 2890.1-2004 (Parking facilities), and Department of Infrastructure and Transport South Australia requirements. We also adhere to SafeWork SA guidelines and the Building Code of Australia specifications. Our team maintains current knowledge of all South Australian regulations to ensure your line markings are fully compliant."
    },
    {
      question: "How do you minimize disruption during line marking projects in South Australia?",
      answer: "We understand the importance of minimizing disruption to your South Australian business or facility. Our approach includes flexible scheduling options including weekends and after-hours work, efficient project planning tailored to your operational needs, rapid-dry paint technologies that allow quick reopening of marked areas, and strategic sectioning of large areas to maintain partial access throughout the project. We coordinate closely with your team to develop a plan that minimizes impact on your daily operations."
    },
    {
      question: "What types of surfaces can you apply line marking to in South Australia?",
      answer: "Our South Australian line marking services can be applied to virtually any surface type found throughout the state. We regularly work with asphalt, concrete, bitumen, epoxy floors, timber sports courts, synthetic surfaces, gravel/compacted surfaces (using specialized methods), and paved areas. Each surface type requires specific preparation techniques and paint formulations, which our South Australian teams are thoroughly trained to assess and implement for optimal adhesion and longevity."
    }
  ];

  // Services data
  const services = [
    {
      title: "Car Park Line Marking",
      description: "Professional car park line marking for shopping centers, commercial buildings, and residential complexes across South Australia. Our precision marking ensures maximum space utilization and compliance with Australian standards.",
      icon: FiTruck,
      link: "/car-park-line-marking-south-australia"
    },
    {
      title: "Warehouse Line Marking",
      description: "Specialized warehouse line marking solutions for South Australian businesses. We implement clear safety zones, workflow paths, and storage areas to optimize operations and meet workplace safety requirements.",
      icon: FiShield,
      link: "/warehouse-line-marking-south-australia"
    },
    {
      title: "Road Line Marking",
      description: "Expert road line marking services throughout South Australia, including lane dividers, pedestrian crossings, and directional arrows. All work complies with Department of Infrastructure and Transport specifications.",
      icon: FiMapPin,
      link: "/road-line-marking-south-australia"
    },
    {
      title: "Factory Line Marking",
      description: "Comprehensive factory line marking for South Australian industrial facilities. Our services include safety markings, equipment boundaries, and operational zones designed to enhance workplace safety and efficiency.",
      icon: FiClock,
      link: "/factory-line-marking-south-australia"
    },
    {
      title: "School Line Marking",
      description: "Creative and functional school line marking for South Australian educational institutions. We design and implement playground games, sports courts, and safety markings that enhance learning environments.",
      icon: FiCheckCircle,
      link: "/school-line-marking-south-australia"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* SEO Metadata - would be implemented in a real app using Helmet or similar */}
      <div className="hidden">
        <title>Professional Line Marking Services South Australia | Free Quote</title>
        <meta name="description" content="Expert line marking services across South Australia for car parks, warehouses, roads & factories. Local contractors, competitive rates. Get your free quote today!" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Line Marking Australia - South Australia",
              "image": "https://linemarkingaustralia.com.au/images/south-australia-line-marking.jpg",
              "priceRange": "$$",
              "telephone": "0882221234",
              "email": "sa@linemarkingaustralia.com.au",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "456 Line Marking Avenue",
                "addressLocality": "Adelaide",
                "addressRegion": "SA",
                "postalCode": "5000",
                "addressCountry": "AU"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "-34.9285",
                "longitude": "138.6007"
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
                "https://www.facebook.com/LineMarkingSouthAustralia",
                "https://www.instagram.com/linemarkingsa"
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

      {/* Hero Section with South Australia-specific content */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-primary-600 to-primary-700 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="md:order-1"
            >
              <span className="inline-block px-3 py-1 text-xs font-semibold bg-white text-primary-600 rounded-full mb-3">South Australia's Premier Line Marking Specialists</span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Professional Line Marking South Australia</h1>
              <p className="text-lg mb-8">
                South Australia's trusted line marking service with over 25 years of experience serving businesses, schools, and councils across the state. Our local team delivers precision line marking for car parks, warehouses, roads, factories, and sports courts throughout Adelaide and regional SA.
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
                  src="https://images.unsplash.com/photo-1525095182007-3818aa8bbe37?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Line marking work being completed in South Australia" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white p-6">
                  <div className="flex items-center gap-2 text-sm">
                    <SafeIcon icon={FiMapPin} />
                    <span>South Australia</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Trusted by section */}
        <div className="container mx-auto max-w-6xl mt-16">
          <p className="text-center text-white/80 mb-6">Trusted by South Australia's leading businesses and organizations</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {["South Australia Government", "Adelaide CBD Council", "Barossa Valley Wineries", "South Australian Education Department"].map((client, index) => (
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
            <h2 className="text-3xl font-bold text-center mb-8 text-neutral-800">South Australia's Expert Line Marking Specialists</h2>
            <p>
              Welcome to Line Marking Australia's South Australian division, where we provide industry-leading line marking services tailored specifically for South Australia's diverse landscapes and climate conditions. With decades of experience serving the South Australian market, our team specializes in delivering precise, durable, and compliant line marking solutions for businesses, educational institutions, and public facilities throughout Adelaide and regional South Australia.
            </p>
            <p>
              From Adelaide CBD car parks to Barossa Valley wineries, coastal tourism facilities to outback mining operations, our South Australian line marking contractors bring local expertise and professional standards to every project. We understand South Australia's specific requirements, weather challenges, and compliance regulations, ensuring your line marking project meets all state standards while delivering exceptional quality and longevity.
            </p>
            <p>
              Our South Australian operation is fully equipped with the latest line marking technology and environmentally friendly materials, allowing us to execute projects efficiently with minimal disruption. Whether you need emergency line marking services, scheduled maintenance, or comprehensive new installations, our South Australian team is ready to deliver superior results on time and within budget across this vast and diverse state.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Line Marking Services in South Australia</h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Discover our comprehensive range of professional line marking solutions tailored for South Australian businesses, schools, and public facilities.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our South Australian Line Marking Process</h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              We follow a structured, efficient process to deliver exceptional line marking results for clients throughout South Australia.
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
                description: "Our South Australian team provides an on-site assessment and detailed quote tailored to your specific requirements.",
                icon: FiPhone
              },
              {
                step: "2",
                title: "Project Planning",
                description: "We develop a comprehensive plan considering South Australia's unique conditions and minimizing disruption to your operations.",
                icon: FiCheckCircle
              },
              {
                step: "3",
                title: "Professional Execution",
                description: "Our skilled South Australian contractors implement your line marking using premium materials and precise techniques.",
                icon: FiTruck
              },
              {
                step: "4",
                title: "Quality Assurance",
                description: "Final inspection ensures all work meets our high standards and complies with South Australian regulations.",
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
              <span className="inline-block px-3 py-1 text-xs font-semibold bg-primary-100 text-primary-700 rounded-full mb-3">South Australian Standards</span>
              <h2 className="text-3xl font-bold mb-6">Compliance & Experience</h2>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="mt-1 mr-4 text-primary-600">
                    <SafeIcon icon={FiCheckCircle} className="text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">South Australian Regulatory Compliance</h3>
                    <p className="text-neutral-600">All line marking complies with Department of Infrastructure and Transport specifications, Adelaide City Council requirements, and Australian Standards AS 1742.2 and AS 2890.1-2004.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mt-1 mr-4 text-primary-600">
                    <SafeIcon icon={FiCheckCircle} className="text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">25+ Years South Australian Experience</h3>
                    <p className="text-neutral-600">Our team brings over two decades of specialized experience in South Australia's diverse environments, from coastal to outback conditions.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mt-1 mr-4 text-primary-600">
                    <SafeIcon icon={FiCheckCircle} className="text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Premium Materials Warranty</h3>
                    <p className="text-neutral-600">We offer up to 5-year warranties on our premium line marking services throughout South Australia, ensuring lasting quality and value.</p>
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
                  src="https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Professional line marking team working in South Australia" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <p className="text-lg font-semibold">Certified South Australian Line Marking Professionals</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">What South Australian Clients Say</h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Hear from businesses and organizations throughout South Australia who have experienced our professional line marking services.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Robert Johnson",
                position: "Facilities Manager, Adelaide Central Market",
                testimonial: "Line Marking Australia transformed our busy car park with minimal disruption to our daily operations. Their South Australian team worked efficiently during off-hours and delivered exceptional quality markings that have withstood heavy traffic and our variable climate conditions.",
                rating: 5
              },
              {
                name: "Emma Parker",
                position: "Director, Barossa Valley Winery",
                testimonial: "We needed specialized line marking for our visitor parking areas that would complement our heritage property while meeting safety standards. The attention to detail and willingness to adapt to our unique requirements was impressive. Highly recommended for any South Australian business.",
                rating: 5
              },
              {
                name: "James Wilson",
                position: "Safety Manager, Port Adelaide Distribution Center",
                testimonial: "Safety is our priority, and the warehouse line marking implemented by this team has significantly improved our operational workflow and reduced incidents. Their knowledge of South Australian workplace safety regulations ensured we achieved full compliance while maximizing efficiency.",
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
              Get answers to common questions about our South Australian line marking services.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">South Australia Service Areas</h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              We provide professional line marking services throughout South Australia, from metropolitan Adelaide to regional communities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-4">South Australian Regions We Serve</h3>
              <div className="grid grid-cols-2 gap-2 mb-6">
                {[
                  "Adelaide Metropolitan", "Barossa Valley", "Fleurieu Peninsula", "Yorke Peninsula", 
                  "Eyre Peninsula", "Murray River", "South East Region", "Mid North"
                ].map((area, index) => (
                  <div key={index} className="flex items-center">
                    <SafeIcon icon={FiCheckCircle} className="mr-2 text-primary-500" />
                    <span>{area}</span>
                  </div>
                ))}
              </div>
              <div className="border-t border-neutral-200 pt-6">
                <h4 className="font-semibold mb-3">Contact Our South Australian Office</h4>
                <div className="space-y-2 text-neutral-700">
                  <div className="flex items-center">
                    <SafeIcon icon={FiMapPin} className="mr-3 text-primary-600" />
                    <span>456 Line Marking Avenue, Adelaide SA 5000</span>
                  </div>
                  <div className="flex items-center">
                    <SafeIcon icon={FiPhone} className="mr-3 text-primary-600" />
                    <span>08 8222 1234</span>
                  </div>
                  <div className="flex items-center">
                    <SafeIcon icon={FiMail} className="mr-3 text-primary-600" />
                    <span>sa@linemarkingaustralia.com.au</span>
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
                  <p className="text-sm">South Australia Service Coverage</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Get Your Free South Australian Line Marking Quote</h2>
            <p className="text-lg max-w-3xl mx-auto">
              Fill out the form below or call our South Australian team directly for a prompt, no-obligation quote on your line marking project.
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
                      placeholder="Tell us about your project in South Australia"
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
                  <h3 className="text-2xl font-bold text-neutral-800 mb-6">Why Choose Us in South Australia?</h3>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start">
                      <div className="mt-1 mr-4 text-primary-600">
                        <SafeIcon icon={FiCheckCircle} className="text-xl" />
                      </div>
                      <div>
                        <p className="font-medium">Local South Australian Expertise</p>
                        <p className="text-sm text-neutral-600">Our dedicated South Australian team understands local requirements and conditions.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="mt-1 mr-4 text-primary-600">
                        <SafeIcon icon={FiCheckCircle} className="text-xl" />
                      </div>
                      <div>
                        <p className="font-medium">Premium Materials</p>
                        <p className="text-sm text-neutral-600">We use high-quality paints and materials designed for South Australia's climate.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="mt-1 mr-4 text-primary-600">
                        <SafeIcon icon={FiCheckCircle} className="text-xl" />
                      </div>
                      <div>
                        <p className="font-medium">Statewide Coverage</p>
                        <p className="text-sm text-neutral-600">Comprehensive service throughout metropolitan and regional South Australia.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="mt-1 mr-4 text-primary-600">
                        <SafeIcon icon={FiCheckCircle} className="text-xl" />
                      </div>
                      <div>
                        <p className="font-medium">Compliance Guaranteed</p>
                        <p className="text-sm text-neutral-600">All work meets South Australian standards and regulations.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <p className="font-bold text-primary-600 mb-2">Emergency Line Marking?</p>
                  <p className="text-neutral-700 mb-4">We offer rapid response services throughout South Australia.</p>
                  <a href="tel:0882221234" className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-800 transition-colors">
                    <SafeIcon icon={FiPhone} className="mr-2" />
                    Call 08 8222 1234
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
          <h2 className="text-2xl font-bold mb-8 text-neutral-800">Related Services in South Australia</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link to="/car-park-line-marking-south-australia" className="group block bg-neutral-50 hover:bg-neutral-100 p-6 rounded-lg transition-colors">
              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary-600 transition-colors">Car Park Line Marking South Australia</h3>
              <p className="text-neutral-600 text-sm">Professional car park marking services for South Australian businesses and commercial properties.</p>
            </Link>
            <Link to="/warehouse-line-marking-south-australia" className="group block bg-neutral-50 hover:bg-neutral-100 p-6 rounded-lg transition-colors">
              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary-600 transition-colors">Warehouse Line Marking South Australia</h3>
              <p className="text-neutral-600 text-sm">Specialized warehouse floor marking solutions for South Australian industrial facilities.</p>
            </Link>
            <Link to="/road-line-marking-south-australia" className="group block bg-neutral-50 hover:bg-neutral-100 p-6 rounded-lg transition-colors">
              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary-600 transition-colors">Road Line Marking South Australia</h3>
              <p className="text-neutral-600 text-sm">Expert road marking services compliant with Department of Infrastructure and Transport specifications.</p>
            </Link>
          </div>
          
          <div className="mt-8 pt-8 border-t border-neutral-200">
            <h2 className="text-2xl font-bold mb-8 text-neutral-800">Other Locations We Serve</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <Link to="/adelaide" className="group block bg-neutral-50 hover:bg-neutral-100 p-6 rounded-lg transition-colors">
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary-600 transition-colors">Adelaide</h3>
                <p className="text-neutral-600 text-sm">Expert line marking solutions for businesses in Adelaide.</p>
              </Link>
              <Link to="/melbourne" className="group block bg-neutral-50 hover:bg-neutral-100 p-6 rounded-lg transition-colors">
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary-600 transition-colors">Melbourne</h3>
                <p className="text-neutral-600 text-sm">Professional line marking services throughout Melbourne.</p>
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

export default SouthAustralia;