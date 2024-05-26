import Image from "next/image";

export default function SeccionMapa() {
  return (
    <div className="pt-20 pt-18 pb-20 bg-[#F9F9E0]">
      <div className="pl-2 pr-2">
        <div className="pl-14 pr-14 flex items-center justify-between px-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6569.0318287359605!2d-58.41396720642092!3d-34.59111349999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca9b22a5084d%3A0x138d2b0cdf189a0f!2sSweetly!5e0!3m2!1sen!2sar!4v1716028510593!5m2!1sen!2sar"
            width="600"
            height="450"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="">
            <h1 className="text-[#6F6891] text-6xl font-bold pb-12">
              Donde Estamos?
            </h1>
            <p className="text-[#6F6891] text-5xl font-bold">
              Encontrá tu sucursal mas cercana
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
