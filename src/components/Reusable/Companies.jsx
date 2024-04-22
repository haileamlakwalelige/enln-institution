import {
    FigmaLogoIcon,
    FramerLogoIcon,
    SketchLogoIcon,
    TwitterLogoIcon,
    GitHubLogoIcon,
    VercelLogoIcon,
    NotionLogoIcon,
    DiscordLogoIcon,
    InstagramLogoIcon,
    LinkedInLogoIcon,
  } from "@radix-ui/react-icons";
  
  const LOGOS = [
    <FigmaLogoIcon
      key={1}
      width={24}
      height={24}
      className="h-52 w-52 text-secondary"
    />,
    <FramerLogoIcon
      key={2}
      width={24}
      height={24}
      className="h-52 w-52 text-secondary"
    />,
    <SketchLogoIcon
      key={3}
      width={24}
      height={24}
      className=" h-52 w-52 text-secondary"
    />,
    <TwitterLogoIcon
      key={4}
      width={24}
      height={24}
      className="h-52 w-52 text-secondary"
    />,
    <GitHubLogoIcon
      key={5}
      width={24}
      height={24}
      className="h-52 w-52 text-secondary"
    />,
    <VercelLogoIcon
      key={6}
      width={24}
      height={24}
      className="h-52 w-52 text-secondary"
    />,
    <NotionLogoIcon
      key={7}
      width={24}
      height={24}
      className="h-52 w-52 text-secondary"
    />,
    <DiscordLogoIcon
      key={8}
      width={24}
      height={24}
      className="h-52 w-52 text-secondary"
    />,
    <InstagramLogoIcon
      key={9}
      width={24}
      height={24}
      className="h-52 w-52 text-secondary"
    />,
    <LinkedInLogoIcon
      key={10}
      width={24}
      height={24}
      className="h-52 w-52 text-secondary"
    />,
  ];
  
  const Companies = () => {
    return (
      <div className="relative m-auto grid w-full grid-cols-3 overflow-hidden bg-white before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100 after:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] after:content-['']">
        <div className="absolute z-10 mx-auto flex h-full w-full items-center justify-center bg-secondary bg-opacity-20">
          <p className="herotext text-center dark:font-bold dark:text-primary hidden lg:block">
            Companies we&apos;ve taught
          </p>
          <p className="phoneherotext text-center dark:font-bold dark:text-primary lg:hidden">
            Companies we&apos;ve taught
          </p>
        </div>
        <div className="flex w-[calc(250px*10)] animate-infinite-slider">
          {LOGOS.map((logo, index) => (
            <div
              className="slide mx-10 flex w-[125px] flex-wrap items-center justify-center"
              key={index}
            >
              {logo}
            </div>
          ))}
          {LOGOS.map((logo, index) => (
            <div
              className="slide flex w-[125px] items-center justify-center"
              key={index}
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Companies;
  