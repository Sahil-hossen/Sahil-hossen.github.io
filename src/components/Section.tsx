import type { ReactNode } from "react";
import { useReveal } from "../hooks/useReveal";

type Props = {
  id: string;
  kicker: string;
  title: string;
  children: ReactNode;
};

export default function Section({ id, kicker, title, children }: Props) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <section className="section" id={id}>
      <div className="container">
        <div ref={ref} className={`reveal ${visible ? "is-visible" : ""}`}>
          <div className="section-head">
            <span className="section-kicker">{kicker}</span>
            <h2 className="section-title">{title}</h2>
          </div>
          {children}
        </div>
      </div>
    </section>
  );
}
