import React from "react";
import { useDarkMode } from "../store/theme";
import { Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";

function Icon({ id, open }) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={5}
        stroke="currentColor"
        className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
      </svg>
    );
  }

const Mision = () => {
    const { toggleDarkMode, darkMode } = useDarkMode();
    const [open, setOpen] = React.useState(0);

    const handleOpen = (value: React.SetStateAction<number>) => setOpen(open === value ? 0 : value);

    return (
        <>

        <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>        
        <AccordionHeader onClick={() => handleOpen(1)} className={`mt-0.5 text-lg font-bold text-center ${darkMode.valueOf() ? 'text-white' : 'text-gray-900'} text-5xl justify-center`} >Mision</AccordionHeader>
        <AccordionBody>
        
            <div className={`flex items-center justify-center ${darkMode.valueOf() ? 'dark' : ''}`}>
                <div className="container p-4">
                    <article className={`rounded-xl ${darkMode.valueOf() ? 'bg-gray-900' : 'bg-gradient-to-r from-green-300 via-blue-500 to-purple-600'} p-0.5 flex items-center justify-center`}>
                        <div className={`rounded-[10px] ${darkMode.valueOf() ? 'bg-gray-900' : 'bg-white'} p-4 !pt-5 sm:p-6`}>

                            <p className={`text-xl ${darkMode.valueOf() ? 'text-gray-300' : 'text-gray-900'}`} style={{ textAlign: 'center' }}>
                                La  misión  de  MX  DISCOVERY  es  ser  un  espacio  cultural  comprometido  con  la  preservación,  exhibición  y  promoción  del  patrimonio  artístico  y  cultural,  tanto  nacional  como internacional en el cual todo el público pueda ir a visitarlo gracias a los accesibles precios  con  los  que  contamos.  Nuestra  misión  es  brindar  a  los  visitantes  experiencias  enriquecedoras y educativas a través de exposiciones de alta calidad.

                            </p>
                        </div>
                    </article>
                </div>
            </div>
            </AccordionBody>
      </Accordion>


      <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>        
        <AccordionHeader onClick={() => handleOpen(2)} className={`mt-0.5 text-lg font-bold text-center ${darkMode.valueOf() ? 'text-white' : 'text-gray-900'} text-5xl justify-center`} >Visión</AccordionHeader>
        <AccordionBody>

            {/* Asegúrate de cambiar el código para la sección de Visión de manera similar */}
            <div className={`flex items-center justify-center ${darkMode.valueOf() ? 'dark' : ''}`}>
                <div className="container p-4">
                    <article className={`rounded-xl ${darkMode.valueOf() ? 'bg-gray-900' : 'bg-gradient-to-r from-green-300 via-blue-500 to-purple-600'} p-0.5 flex items-center justify-center`}>
                        <div className={`w-full rounded-[10px] ${darkMode.valueOf() ? 'bg-gray-900' : 'bg-white'} p-4 !pt-5 sm:p-6`}>

                            <p className={`text-xl ${darkMode.valueOf() ? 'text-gray-300' : 'text-gray-900'}`} style={{ textAlign: 'center' }}>
                                La visión de MX Discovery es ser un faro de cultura y conocimiento, un lugar donde las obras  de  arte  cobren  vida  y  las  historias  detrás  de  ellas  se  cuenten  con  pasión.  Nuestra  misión se resume en:
                                
                                <br /><br />
                                <p style={{ textAlign: 'center' }}> 1.- Preservar y Celebrar el Arte: Nuestro objetivo principal es preservar y celebrar el arte  en  todas  sus  formas,  desde  las  antiguas  reliquias  hasta  las  expresiones  artísticas más contemporáneas.</p>
                                <br /><br />
                                <p style={{ textAlign: 'center' }}> 2.- Ofrecer Experiencias Enriquecedoras: Buscamos proporcionar experiencias enriquecedoras  y educativas  para  nuestros  visitantes, inspirándolos  a explorar, aprender y apreciar el arte y la cultura.</p>
                            </p>
                        </div>
                    </article>
                </div>
            </div>
        </AccordionBody>
      </Accordion>
            <br /><br />
        </>
    );
};

export default Mision;