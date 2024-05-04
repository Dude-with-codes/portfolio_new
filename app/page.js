import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-[90dvh] space-y-10">
      <div>
        <Image
          src={"/images/sami avatar.png"}
          alt="Sami Profile Picture"
          width={120}
          height={120}
        ></Image>
        <h3 className="text-xl font-bold">Hi, I am Sami 🙌</h3>
      </div>
      <h1 className="text-4xl font-black text-center leading-relaxed">
        Game Developer, Game Designer, <br />{" "}
        <span className="font-serif text-green-500">Visionary</span>
      </h1>
      <p className="w-[500px] leading-relaxed">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
        facilis, dolorem vero reprehenderit mollitia asperiores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, perferendis?
      </p>
      <div className="space-x-4">
        <button className="font-semibold bg-black text-white uppercase text-sm rounded-full px-10 py-4">
          Connect with me
        </button>
        <button className="font-semibold bg-white text-black uppercase text-sm rounded-full px-6 py-4">
          My Resume
        </button>
      </div>
    </main>
  );
}
