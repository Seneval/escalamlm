import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex flex-col items-center bg-gray-50">
      {/* HERO SECTION */}
      <section className="w-full bg-gradient-to-br from-blue-600 to-blue-400 text-white py-24 px-4 text-center">
        <h1
          className="text-5xl sm:text-6xl lg:text-8xl font-extrabold mb-6 drop-shadow-lg transition-transform duration-500 hover:scale-105 bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent animate-fade-in"
          style={{ lineHeight: 1.1 }}
        >
          Transforma tu Negocio<br className="hidden md:inline block md:hidden" /> con Marketing de Redes
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl mb-10 max-w-3xl mx-auto font-medium text-white/95 leading-relaxed animate-fade-in-slow">
          Te ayudamos a convertir tu empresa de venta directa en un sistema de afiliados moderno, escalable y rentable.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-white text-blue-600 font-bold py-4 px-10 rounded-full shadow-lg hover:bg-blue-100 transition text-xl animate-fade-in-slow"
        >
          Solicita tu Diagnóstico Gratuito
        </Link>
      </section>

      {/* ABOUT SECTION */}
      <section className="w-full max-w-5xl py-16 px-4 text-center">
        <h2 className="text-3xl font-bold mb-4 text-blue-700">¿Quiénes Somos?</h2>
        <p className="text-lg text-gray-700 mb-6">
          En EscalaMLM somos expertos en consultoría para negocios que desean evolucionar hacia un modelo de marketing de redes o sistema de afiliados. Nuestro equipo combina experiencia en ventas, liderazgo, compensaciones y marketing digital para ofrecerte un acompañamiento integral.
        </p>
      </section>

      {/* SERVICES SECTION */}
      <section className="w-full bg-white py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-blue-700">¿Qué Hacemos?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-blue-50 p-6 rounded-lg shadow hover:shadow-lg transition">
            <Image src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80" alt="Plan de compensación" width={400} height={250} className="w-full h-40 object-cover rounded mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-blue-800">Diseño de Plan de Compensación</h3>
            <p>Desarrollamos hasta 8 formas de ganar: bonos por nivel, inscripción, liderazgo y más, adaptados a tu industria.</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg shadow hover:shadow-lg transition">
            <Image src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80" alt="Materiales" width={400} height={250} className="w-full h-40 object-cover rounded mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-blue-800">Desarrollo de Materiales</h3>
            <p>Materiales de capacitación, presentaciones y recursos digitales para tus asociados y líderes.</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg shadow hover:shadow-lg transition">
            <Image src="https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80" alt="Capacitación" width={400} height={250} className="w-full h-40 object-cover rounded mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-blue-800">Capacitación y Liderazgo</h3>
            <p>Te ayudamos a reclutar, capacitar y convertir a tus primeros asociados en líderes de alto impacto.</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg shadow hover:shadow-lg transition">
            <Image src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=400&q=80" alt="Escalabilidad" width={400} height={250} className="w-full h-40 object-cover rounded mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-blue-800">Planificación de Escalabilidad</h3>
            <p>Diseñamos un sistema que crece contigo, asegurando sostenibilidad y éxito a largo plazo.</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg shadow hover:shadow-lg transition">
            <Image src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=400&q=80" alt="Marketing" width={400} height={250} className="w-full h-40 object-cover rounded mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-blue-800">Soporte de Marketing</h3>
            <p>Estrategias de marketing digital y tradicional para atraer clientes y asociados a tu red.</p>
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="w-full max-w-6xl py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-blue-700">¿Cómo Trabajamos?</h2>
        <ol className="flex flex-col md:flex-row md:justify-between gap-8">
          <li className="flex-1 bg-white p-6 rounded-lg shadow text-center">
            <span className="text-4xl font-bold text-blue-500 mb-2 block">1</span>
            <h4 className="font-semibold mb-2">Diagnóstico Gratuito</h4>
            <p>Analizamos la viabilidad de transformar tu negocio a un sistema de afiliados.</p>
          </li>
          <li className="flex-1 bg-white p-6 rounded-lg shadow text-center">
            <span className="text-4xl font-bold text-blue-500 mb-2 block">2</span>
            <h4 className="font-semibold mb-2">Plan Personalizado</h4>
            <p>Desarrollamos un plan de compensación y materiales a la medida.</p>
          </li>
          <li className="flex-1 bg-white p-6 rounded-lg shadow text-center">
            <span className="text-4xl font-bold text-blue-500 mb-2 block">3</span>
            <h4 className="font-semibold mb-2">Implementación y Soporte</h4>
            <p>Te acompañamos en la implementación y crecimiento de tu red.</p>
          </li>
        </ol>
      </section>

      {/* SUCCESS CASES SECTION */}
      <section className="w-full bg-blue-50 py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-blue-700">Casos de Éxito</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold text-lg mb-2 text-blue-800">Zapaterías Pache</h3>
            <p className="mb-2">Incremento de ventas en un 500% en tan solo 3 meses después de implementar nuestro sistema de afiliados.</p>
            <p className="text-sm text-gray-500">- Director Comercial</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold text-lg mb-2 text-blue-800">Classic Cosmetics</h3>
            <p className="mb-2">Más de 10,000 consultores afiliados en su red después de rediseñar su plan de compensación.</p>
            <p className="text-sm text-gray-500">- Directora de Marketing</p>
          </div>
        </div>
      </section>

      {/* FOUNDER SECTION */}
      <section className="w-full max-w-4xl py-16 px-4 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6 text-blue-700">Nuestra Trayectoria</h2>
        <div className="bg-white p-8 rounded-lg shadow">
          <p className="text-lg">
            Nuestra fundadora tiene más de 20 años de experiencia en MLM, trabajando tanto dentro del equipo directivo como afiliada líder, llegando hasta los rangos más altos. Se capacitó personalmente con Mary Kay Ash, fundadora de la empresa Mary Kay.
          </p>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="w-full max-w-4xl py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-blue-700">Preguntas Frecuentes</h2>
        <div className="space-y-6">
          <div className="bg-white p-4 rounded-lg shadow">
            <h4 className="font-semibold mb-2">¿Qué tipo de negocios pueden beneficiarse?</h4>
            <p>Empresas de venta directa de cualquier industria: zapatos, cosméticos, suplementos, servicios, etc.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h4 className="font-semibold mb-2">¿Cuánto tiempo toma la transformación?</h4>
            <p>El proceso depende del tamaño y necesidades de tu empresa, pero normalmente entre 4 y 12 semanas.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h4 className="font-semibold mb-2">¿Puedo solicitar solo el diagnóstico?</h4>
            <p>Sí, el diagnóstico es gratuito y sin compromiso.</p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="w-full bg-gradient-to-br from-blue-600 to-blue-400 text-white py-16 px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">¿Listo para escalar tu negocio?</h2>
        <p className="text-xl mb-8">Solicita tu diagnóstico gratuito y descubre cómo podemos ayudarte a crecer con un sistema de afiliados.</p>
        <Link href="/contact" className="inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-blue-100 transition">
          Solicitar Diagnóstico
        </Link>
      </section>
    </main>
  );
}
