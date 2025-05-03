import React from 'react';

const ServicesPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Nuestros Servicios</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">Diseño de Plan de Compensación</h2>
          <p>Desarrollamos un plan de compensación atractivo y sostenible, incluyendo hasta 8 formas de ganar (bonos por subir de nivel, bono por inscribir, etc.) adaptado a tu negocio de venta directa (zapatos, cosméticos, suplementos, etc.).</p>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">Desarrollo de Materiales</h2>
          <p>Creamos materiales de apoyo efectivos para tus vendedores y líderes, facilitando la comprensión del sistema de marketing de redes y los productos/servicios.</p>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">Adquisición y Capacitación de Asociados</h2>
          <p>Te guiamos en las estrategias para atraer a tus primeros asociados y los capacitamos para que se conviertan en líderes dentro de tu sistema de afiliados.</p>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">Planificación de Escalabilidad</h2>
          <p>Diseñamos un plan que asegura que tu negocio de marketing de redes pueda crecer de manera sostenible y eficiente a largo plazo.</p>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">Soporte de Marketing</h2>
          <p>Ofrecemos asesoría y herramientas de marketing para promocionar tu nuevo sistema de afiliados y atraer tanto a clientes como a nuevos asociados.</p>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
