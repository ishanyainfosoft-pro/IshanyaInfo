import contactDetailsImg from "@assets/image_1773396456226.png";

const BRAND = {
  orangeDark: "#0d0800",
};

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 sm:py-28" style={{ background: BRAND.orangeDark }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
        <img
          src={contactDetailsImg}
          alt="Contact Details — Ishanya Infosoft"
          className="max-w-full rounded-2xl"
          style={{ maxWidth: 680 }}
        />
      </div>
    </section>
  );
}
