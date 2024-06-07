import Image from "next/image";

export default function SeccionMapa() {
  return (
    <div className="lg:pt-20 pt-0 pb-20 bg-[#F9F9E0]">
      <div className="pl-2 pr-2">
        <div className="flex flex-col lg:flex-row items-center justify-between px-1 lg:px-12 space-y-8 lg:space-y-0 lg:space-x-8">
          <div className="order-2 lg:order-1 w-full lg:w-auto">
            <div className="hidden lg:block w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6569.0318287359605!2d-58.41396720642092!3d-34.59111349999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca9b22a5084d%3A0x138d2b0cdf189a0f!2sSweetly!5e0!3m2!1sen!2sar!4v1716028510593!5m2!1sen!2sar"
                width="700"
                height="550"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: 0 }}
              ></iframe>
            </div>
            <div className="block lg:hidden w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6569.0318287359605!2d-58.41396720642092!3d-34.59111349999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca9b22a5084d%3A0x138d2b0cdf189a0f!2sSweetly!5e0!3m2!1sen!2sar!4v1716028510593!5m2!1sen!2sar"
                width="100%"
                height="450"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: 0 }}
              ></iframe>
            </div>
          </div>
          <div className="order-1 lg:order-2 w-full lg:w-auto text-center lg:text-left">
            <h1 className="text-[#6F6891] text-2xl lg:text-6xl font-bold pb-4 lg:pb-12">
              ¿Dónde Estamos?
            </h1>
            <p className="text-[#6F6891] text-2xl lg:text-5xl font-bold pb-12">
              Encontrá tu sucursal más cercana
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
