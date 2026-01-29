import Image from "next/image";

export default function Home() {
  return (
    <div className="w-screen min-h-screen item-center justify-center flex flex-col">

      <div className="text-center p-4 bg-white text-black font-bold text 2x1 rounded-xl">

        Loja Esport

      </div>




      <div className="flex bg-gray-100 p-4 space-x-4  mt-4 rounded-xl">

        <div className="border-black-350 text-center text-black  bg-gray-300 p- 4 w- 1/2 m-auto  rounded-xl">
          <Image
            src="/chevroletcorvette62v8lt2gasolinastingrayconversivelautomatico-wmimagem12280913868.jpg"
            alt="Corvette"
            width={470}
            height={470}
            className="m-auto"
          />
          <h1>Chevrolet Corvette</h1>
          <h2 className="text-bold text-black-400"> R$ 1.030.000 </h2>
          <h3>Ano =
            2022/2023</h3>
        </div>




        <div className="border-gray-350 text-center text-black  bg-gray-300 p- 4 w- 1/2 m-auto  rounded-xl">
          <Image
            src="/porsche-taycan-turbo-s-eletrico-wmimagem11212887035.jpg"
            alt="Porsche Taycan"
            width={500}
            height={500}
            className="m-auto"
          />
          <h1>Porsche Taycan</h1>
          <h2 className="text-bold text-black-400"> R$ 610.000 </h2>
          <h3>Ano = 2021/2021 </h3>
        </div>


          <div className="border-gray-350 text-center text-black  bg-gray-300 p- 4 w- 1/2 m-auto  rounded-xl">
            <Image
              src="/audia314tfsiflexsedanprestigeplustiptronic-wmimagem19041461132.jpg"
              alt="Audi A3"
              width={500}
              height={500}
              className="m-auto"
            />
            <h1>Audi A3</h1>
            <h2 className="text-bold text-black-400"> R$ 103.000 </h2>
            <h3>Ano = 2019/2019 </h3>
          </div>
     </div>







        <div className="flex bg-gray-100 p-4 space-x-4  mt-4 rounded-xl">

          <div className="border-gray-350 text-center text-black  bg-gray-300 p- 4 w- 1/2 m-auto  rounded-xl">
            <Image
              src="/porsche-718-4.0-h6-gasolina-boxster-gts-pdk-wmimagem12503229446.jpg"
              alt="Porsche 718"
              width={470}
              height={470}
              className="m-auto"
            />
            <h1>Porsche 718</h1>
            <h2 className="text-bold text-black-400"> R$ 719.890 </h2>
            <h3>Ano = 2024/2025 </h3>
          </div>




          <div className="border-black-350 text-center text-black  bg-gray-300 p- 4 w- 1/2 m-auto  rounded-xl">
            <Image
              src="/volkswagenjetta20350tsigasolinaglidsg-wmimagem14592123331.jpg"
              alt="Volkswagen Jetta"
              width={500}
              height={500}
              className="m-auto"
            />
            <h1>Volkswagen Jetta</h1>
            <h2 className="text-bold text-black-400"> R$ 158.990 </h2>
            <h3>Ano = 2020/2020</h3>
          </div>


          <div className="border-black-350 text-center text-black  bg-gray-300 p- 4 w- 1/2 m-auto  rounded-xl">
            <Image
              src="/ford-mustang-5.0-v8-tivct-gasolina-mach-1-selectshift-wmimagem19413255326.jpg"
              alt="Ford Mustang"
              width={500}
              height={500}
              className="m-auto"
            />
            <h1>Ford Mustang</h1>
            <h2 className="text-bold text-black-400"> R$ 450.000 </h2>
            <h3>Ano = 2021/2021</h3>
          </div>
        </div>
    </div>
  );


}
