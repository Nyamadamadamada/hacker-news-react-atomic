import { ReactNode } from "react";
import Header3 from "../atom/Header3";

interface Props {
  title: string;
  children: ReactNode;
}

const Section = ({ title, children }: Props) => {
  return (
    <section className="container mx-auto mt-10">
      <Header3
        label={title}
        style="text-center text-white text-3xl font-bold"
      />
      {children}
    </section>
  );
};

export default Section;
