import clsx from "clsx";
import { Container } from "./Container";

export interface Process {
  title: string;
  descriptions: any;
}

export default function Processes({title, processes}: {title: string, processes: any}) {

  return (
    <Container className="mt-32 mb-16">
        <h2 className="text-2xl font-semibold text-center mb-32">
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
                <span className="text-4xl text-slate-300">{index + 1}</span>
                <div className="">
                  <h3 className="mb-4 pb-5 text-2xl font-semibold text-slate-900 border-b border-slate-800">
                    {item.title}
                  </h3>
                  {Object.values(item.descriptions).map((value, index) => (
                    <p key={index} className="text-lg leading-8 mb-5">
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