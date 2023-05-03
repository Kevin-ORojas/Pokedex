import React from "react";

const Footer = () => {
  return (
    <section className="relative">
      <footer className="flex gap-2 p-2 justify-center">
        <a
          className="text-4xl"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/NozoDev"
        >
          <i className="bx bxl-github text-black hover:bg-red-700 rounded-full "></i>
        </a>
        <a
          className="text-4xl"
          target="_blank" // permite abrir en nueva pestaña
          rel="noopener noreferrer" //evita malwares maliciosos al abrir ventanas
          href="https://www.linkedin.com/in/kevin-oswaldo-rojas-velandia-73a343241/"
        >
          <i className="bx bxl-linkedin text-black hover:bg-red-700 rounded-full "></i>
        </a>
        <a
          className="text-4xl"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/kevinrojasxd/"
        >
          <i className="bx bxl-instagram text-black hover:bg-red-700 rounded-full"></i>
        </a>
      </footer>

      <span className="text-black text-sm font-semibold  flex items-center justify-center">
        © Todos los derechos reservados 2023{" "}
      </span>
      <div className="h-20 bg-red-600"></div>

      <div className="h-14 bg-black"></div>

      <div
        className='h-20 aspect-square rounded-full bg-white border-[8px] border-black absolute bottom-0 left-1/2 -translate-x-1/2 after:content-[""] after:h-12
         after:aspect-square after:rounded-full after:bg-gray-700  after:absolute after:border-[7px] after:border-black after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2'
      ></div>
    </section>
  );
};

export default Footer;
