import Navigation from "@/components/Navigation";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col space-y-10 relative min-h-full">
      <Navigation />
      <div className="flex flex-col max-w-screen-lg mx-auto space-y-20">
        <div className="flex flex-col text-center justify-center items-center">
          <span className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            SERVIAM
          </span>
          <span className="mt-6 text-lg max-w-prose text-muted-foreground">
            Wysoka jakość, rzetelne podejście do obowiązków oraz terminowość to
            znaki szczególne naszej firmy. Dzięki profesjonalnym maszynom
            budowlanym i wykwalifikowanej kadrze pracowników możemy wykonywać
            nawet najtrudniejsze zadania.
          </span>
          <Link
            href="/contact"
            className={cn("mt-4 gap-1", buttonVariants({ variant: "default" }))}
          >
            Skontakuj się z nami <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="flex justify-evenly items-center gap-6">
          <Image
            className="rounded"
            src="/koparka.jpg"
            alt="koparka"
            width="450"
            height="450"
          />
          <span className="text-gray-900 text-justify text-lg">
            Firma „Serviam” sp. z o.o. swoją działalność rozpoczęła w roku 2008
            kontynuując dotychczasową działalność Przedsiębiorstwa Produkcyjno
            Usługowego „Budromel” Spółka z o.o. w zakresie branży budowlanej,
            prowadzonej przez tę Spółkę od roku 1989.
          </span>
        </div>
        <div className="flex flex-col justify-center items-center space-y-10">
          <span className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Nasi partnerzy
          </span>
          <div className="flex justify-between w-full items-center">
            <Link
              href={
                "https://www.gov.pl/web/gddkia/generalna-dyrekcja-drog-krajowych-i-autostrad"
              }
            >
              <Image src="/gddkia.png" alt="gddkia" width={200} height={100} />
            </Link>
            <Link href="https://www.skanska.pl/">
              <Image
                src="/skanska.png"
                alt="skanska"
                width={200}
                height={100}
              />
            </Link>
            <Link href="https://www.mosty-lodz.pl/">
              <Image
                src="/mostylodz.png"
                alt="mostylodz"
                width={200}
                height={100}
              />
            </Link>
            <Link href="https://www.strabag.pl/">
              <Image
                src="/strabag.jpg"
                alt="strabag"
                width={200}
                height={100}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
