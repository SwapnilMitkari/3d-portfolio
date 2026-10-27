import { useState } from "react";

import { profile, stats } from "../data";
import PaymentFlow from "./PaymentFlow";

const PHOTO = "/swapnil-web.jpg";

const Hero = () => {
  const [photoMissing, setPhotoMissing] = useState(false);

  return (
    <section id="home" className="mx-auto grid max-w-6xl items-center gap-14 px-6 pb-24 pt-10 sm:px-10 md:grid-cols-[1.25fr_1fr] md:pt-16">
      <div>
        <h1 className="animate-fade-up font-display text-4xl font-semibold leading-[1.2] sm:text-5xl lg:text-6xl">
          I'm {profile.firstName}, a Product Manager in <span className="text-pink">digital payments</span> and banking.
        </h1>

        <p className="animate-fade-up mt-8 text-lg text-muted [animation-delay:150ms]">
          Previously at <span className="font-medium text-pink">RBL Bank</span>, Grad2Live and Zenex Partners.
        </p>

        <PaymentFlow />

        <dl className="animate-fade-up mt-12 grid grid-cols-2 gap-x-6 gap-y-8 [animation-delay:300ms]">
          {stats.map((stat) => (
            <div key={stat.label}>
              <dt className="sr-only">{stat.label}</dt>
              <dd className="font-display text-3xl font-semibold text-pink">{stat.value}</dd>
              <p className="mt-1 text-sm leading-snug text-muted">{stat.label}</p>
            </div>
          ))}
        </dl>
      </div>

      <div className="animate-fade-up relative mx-auto w-full max-w-sm [animation-delay:200ms]">
        <div className="absolute -left-4 -top-4 h-full w-full rounded-2xl bg-gradient-to-br from-pink to-purple" />
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-line">
          {photoMissing ? (
            <div className="flex h-full items-center justify-center font-display text-6xl font-semibold text-muted">SM</div>
          ) : (
            <img src={PHOTO} alt={profile.name} onError={() => setPhotoMissing(true)} className="h-full w-full object-cover grayscale" />
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
