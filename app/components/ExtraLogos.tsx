import Image from "next/image";

const ExtraLogos = () => {
  const logos = [
    { _id: 2001, title: "Forbes", logo: "/forbes.svg" },
    { _id: 2002, title: "TechCrunch", logo: "/techcrunch.svg" },
    { _id: 2003, title: "Wired", logo: "/wired.svg" },
    { _id: 2004, title: "CNN", logo: "/cnn.svg" },
    { _id: 2005, title: "BBC", logo: "/bbc.svg" },
    { _id: 2006, title: "CBS", logo: "/cbs.svg" },
    { _id: 2007, title: "Fast Company", logo: "/fast-company.svg" },
    { _id: 2008, title: "HuffPost", logo: "/huffpost.svg" },
  ];
  return (
    <div className="relative mt-4 lg:col-span-7 lg:mt-0 xl:col-span-6">
      <p className="text-center text-sm font-semibold text-gray-900 lg:text-left">
        As featured in
      </p>
      <ul
        role="list"
        className="mx-auto mt-8 flex max-w-xl flex-wrap justify-center gap-x-10 gap-y-8 lg:mx-0 lg:justify-start"
      >
        {logos.map(({ title, logo }) => (
          <li key={title}>
            <Image src={logo} alt={title} className="h-8" unoptimized  width={90} height={8}/>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExtraLogos;
