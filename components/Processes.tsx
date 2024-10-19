import clsx from "clsx";
import { Container } from "./Container";

export interface Process {
  title: string;
  descriptions: any;
}

export default function Processes({title, processes}: {title: string, processes: any}) {

  return (
    <Container className="mt-32 mb-16">
        <h2 className="relative text-xl font-semibold text-center mb-32 before:absolute before:left-[calc(50%-12rem)] before:-top-7 before:h-24 before:w-96 before:inset-0 before:-z-10 before:bg-[radial-gradient(ellipse_at_center,_var(--color-primary)_0%,_transparent_90%)] before:opacity-10">
          {title}
        </h2>
        <div className="flex flex-col w-full">
          {processes.map((item: Process, index: number) => {
            return (
              <div
                className={clsx(
                  "flex space-x-8 sm:w-1/3 mt-16 sm:mt-0 mx-10",
                  index % 2 === 0 ? "self-start" : "self-end"
                )}
                key={index}
              >
                <span className="relative text-4xl text-slate-300 before:absolute before:-left-16 before:-top-10 before:h-36 before:w-36 before:inset-0 before:-z-10 before:bg-[radial-gradient(circle_at_center,_var(--color-primary)_0%,_transparent_90%)] before:opacity-10">{index + 1}</span>
                <div className="">
                  <h3 className="mb-4 pb-5 text-xl font-semibold text-slate-900 border-b border-slate-800">
                    {item.title}
                  </h3>
                  {Object.values(item.descriptions).map((value, index) => (
                    <p key={index} className="leading-8 mb-5">
                      {value as string}
                    </p>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
  )
}