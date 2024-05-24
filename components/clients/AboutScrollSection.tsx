import { Container } from '@/components/Container';
import { MissionRounded } from '@/components/icons/MissionRounded';

type AboutScrollSectionProps = {
  mission: {
    title: string;
    description: string;
  };
  vision: {
    title: string;
    description: string;
  };
  values: {
    title: string;
    description: string;
    guarantees: string;
    items: {
      [key: string]: {
        title: string;
      };
    };
  };
};
export function AboutScrollSection({
  mission,
  vision,
  values,
}: AboutScrollSectionProps) {
  return (
    <Container className="mt-32 scroll-smooth">
      <div className="flex gap-8 ">
        <div className="text-center relative">
          <MissionRounded className="w-24 h-auto" />
          <div className="top-12 left-10 absolute">
            <h3 className="font-light text-2xl leading-relaxed">
              {mission.title}
            </h3>
          </div>
        </div>
        <p className="font-light leading-9 text-lg mt-24">
          {mission.description}
        </p>
      </div>
      <div className="flex gap-8 mt-48">
        <div className="text-center relative">
          <MissionRounded className="w-24 h-auto" />
          <div className="top-12 left-10 absolute">
            <h3 className="font-light text-2xl leading-relaxed">
              {vision.title}
            </h3>
          </div>
        </div>
        <p className="font-light leading-9 text-lg mt-24">
          {vision.description}
        </p>
      </div>
      <div className="flex gap-8 mt-48">
        <div className="text-center relative">
          <MissionRounded className="w-24 h-auto" />
          <div className="top-14 left-4 absolute">
            <h3 className="font-light text-2xl w-24 leading-relaxed">
              {values.title}
            </h3>
          </div>
        </div>
        <p className="font-light leading-9 text-lg mt-24">
          {values.description} <br />
          <span>{values.guarantees}</span>{' '}
          <span className="font-semibold">SIGMA</span>
          <br />
          {Object.values(values.items).map((item) => {
            return (
              <span key={item.title}>
                <span className="font-semibold">{item.title[0]}</span>
                {item.title.substring(1)} <br />
              </span>
            );
          })}
        </p>
      </div>
    </Container>
  );
}
