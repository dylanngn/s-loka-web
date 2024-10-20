import { Container } from "./Container";
import { Quote } from "./icons/Quote";
import Image from "next/image";
import maleImg from "@/images/avatars/male.png";
import femaleImg from "@/images/avatars/female.jpg";
import clsx from "clsx";

export type Testimonial = {
  name: string;
  gender: string;
  position: string;
  message: string;
};

export default function MasonryTestimonials({
  title,
  description,
  testimonials,
}: {
  title: string;
  description: string;
  testimonials: [Testimonial];
}) {
  return (
    <>
      <Container className="text-center mt-32">
        <h2 className="text-xl maw font-semibold text-slate-900">{title}</h2>
        <p className="text-lg mt-12 font-light mb-28 text-center">
          {description}
        </p>
      </Container>
      
      <div className="flex flex-col flex-wrap gap-16 mx-auto mb-20 py-5 px-10 max-h-[1800px] w-fit max-w-full overflow-x-auto">
        {testimonials.map(({ name, gender, position, message }, index) => (
          <div
            key={index}
            className={clsx("relative rounded-2xl shadow-[0_4px_25px_0_#0000001A] pt-9 pb-6 px-12 w-[300px]", 
              "before:absolute before:inset-0 before:-z-10 before:bg-[radial-gradient(ellipse_at_center,_var(--color-primary)_0%,_transparent_60%)] before:opacity-20",
              index === 0 && "mt-16", index === 8 && "mt-16"
            )}
          >
            <Quote className="absolute top-5 left-5 w-10 text-[#D9D9D980]" />
            <div className="flex justify-center items-center mx-auto mb-3 p-1 h-16 w-16 rounded-full border border-blue-700 overflow-hidden">
              <Image
                className={clsx("", gender === "male" && "scale-150")}
                alt="avatar"
                src={gender === "female" ? femaleImg : maleImg}
              />
            </div>
            <p className="mb-3 text-center font-semibold">{name}</p>
            <p className="mb-8 text-center font-semibold text-blue-800">{position}</p>
            <p className="text-start font-light">{message}</p>
          </div>
        ))}
      </div>
    </>
  );
}
