// Footer.js (Componente de pie de página)
import React from 'react';
import './App.css';

const Footer = () => {
    const tablaStyles = {
        backgroundColor: '#FFFFFF',
       
        // padding: '20px', Espaciado interno
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', // Sombra para el efecto de elevación
        //margin: 'auto',  Para centrar horizontalmente
        width: '100%', // Anchura máxima para el contenido de la tabla
        padding: '20px', // Espaciado interno
        marginTop: '2%',
        margindown: '2%',
        textAlign: 'center',
        color: '#000000',
        fontSize: '1.2vh'
      };
      const p= {
        marginBottom: '0.1vh' // Reducir el margen inferior del elemento
      };
  return (
    <div style={tablaStyles}>
    <footer>
      
    <p>Los precios y promociones mostrados en esta página online son exclusivos y estos pueden diferir de los precios y promociones de sucursal.</p>
    <p style={p}> © Diaserch 2023 [Instituto Politecnico Nacional]. </p>
      <p style={p}>ESCOM IPN, Unidad Profesional Adolfo López Mateos, Av. Juan de Dios Bátiz, Nueva Industrial Vallejo, Gustavo A. Madero, 07320 Ciudad de México, CDMX</p>
      <p style={p}>contacto.diaserch@gmail.com</p>
       {/*Otras informaciones opcionales */}
    </footer>
    </div>
  );
};

export default Footer;
