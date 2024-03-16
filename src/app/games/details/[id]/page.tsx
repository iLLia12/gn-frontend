import Image from "next/image";
import { useRouter } from "next/router";

const GameShow = () => {
  return (
    <div className="px-20">
      <div className="flex justify-between">
        <div className="text-sm w-1/2	pr-10">
          Broforce is a side-scrolling run-and-gun platform video game developed
          by Free Lives and published by Devolver Digital. The game has the
          player as one of several "bros", based on popular culture action movie
          icons (for example, John Rambo and Ellen Ripley - "bro" treated as a
          gender neutral term), rescuing other "bros" through
          highly-destructible environments. Development began in April 2012 as a
          game jam entry and continued with developer and popular support,
          existing as an Early Access game. The game was released on 15 October
          2015 for Microsoft Windows and OS X, and a Linux port followed two
          days later. A PlayStation 4 version was released on 1 March 2016 and a
          Nintendo Switch port was released on 6 September 2018. It was later
          released for Xbox One on 8 August 2023. The player-character is a bro,
          a hypermasculine action hero-style commando, who fights terrorists and
          rescues his bro teammates and prisoners of war from captivity. The
          game's destructible environments wear away with the player's gunfire.
          The levels end when the player defeats a devil boss, hoists an
          American flag, and leaves via helicopter while the scenery explodes.
          The Broforce includes dozens of characters, and the player earns more
          as they rescue a certain number of prisoners of war. These Broforce
          characters, under direction of "Nelson Brodela", are parodies of
          mostly fictional action heroes, including John Rambo, Die Hard's John
          McClane, Chuck Norris, Mr. T, Alien's Ellen Ripley, and Terminator's
          T-800; they are often named by adding the word "bro" to the original
          name in some manner (e.g., Rambro, the Brominator). The player does
          not have control on which Broforce character they will start the level
          with, and each time that character dies or a prisoner of war is
          rescued, they will be switched to a different Broforce character. Each
          character has unique attacks and moves based on the fictional hero;
          for example, Ripley's character has a flamethrower special ability,
          while the Indiana Jones-based character primarily uses a whip.
        </div>
        <div className="w-1/2	">
          <Image
            src="/assets/images/broforce/broforce-3.webp"
            width={800}
            height={800}
            alt="Picture of the author"
          />
        </div>
      </div>
      <div className="pt-10 grid grid-rows-2 grid-cols-3 gap-2">
        <div>
          <Image
            src="/assets/images/broforce/broforce-1.jpeg"
            width={500}
            height={300}
            alt="Picture of the author"
          />
        </div>
        <div>
          <Image
            src="/assets/images/broforce/broforce-2.webp"
            width={500}
            height={300}
            alt="Picture of the author"
          />
        </div>
        <div>
          <Image
            src="/assets/images/broforce/broforce.jpg"
            width={500}
            height={300}
            alt="Picture of the author"
          />
        </div>
        <div className="">
          <Image
            src="/assets/images/broforce/broforce-4.jpeg"
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </div>
        <div>
          <Image
            src="/assets/images/broforce/broforce-5.jpg"
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </div>
        <div>
          <Image
            src="/assets/images/broforce/broforce-6.jpg"
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </div>
        <div className="row-span-2">
          <Image
            src="/assets/images/broforce/broforce-7.jpg"
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </div>
        <div className="row-span-2">
          <Image
            src="/assets/images/broforce/broforce-10.jpeg"
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </div>
        <div className="row-span-2">
          <Image
            src="/assets/images/broforce/broforce-11.jpeg"
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </div>
        <div>
          <Image
            src="/assets/images/broforce/broforce-9.jpeg"
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </div>
        <div>
          <Image
            src="/assets/images/broforce/broforce-8.png"
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </div>
      </div>
    </div>
  );
};

export default GameShow;
