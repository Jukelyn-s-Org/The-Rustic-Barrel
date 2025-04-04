import Navbar from "@/src/components/navbar";
import { Clock } from "lucide-react";
import { Phone } from "lucide-react";
import { MailPlus } from "lucide-react";
import { SiInstagram } from "@icons-pack/react-simple-icons";
import { SiFacebook } from "@icons-pack/react-simple-icons";
import type { CSSProperties } from "react";

export default function ContactPage() {
  const iframeStyle: CSSProperties = {
    border: "0",
  };

  return (
    <main className="min-h-screen bg-amber-50">
      <Navbar />
      <div className="container mx-auto py-12">
        <h1 className="text-4xl font-bold text-center mb-8 text-amber-900">
          Contact Us
        </h1>
        <p className="text-xl text-center mb-12 text-amber-800">
          We&apos;d love to hear from you! Whether you have a question,
          feedback, or just want to say hello, feel free to reach out. Our team
          is here to help!
        </p>

        <div className="bg-amber-100 p-8 rounded-lg shadow-lg mb-6 flex items-start justify-between">
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-6 text-amber-900">
                Our Location
              </h2>
              <p className="text-amber-800 font-semibold mb-3">
                Come find us at:
              </p>
              <p className="text-amber-800">
                805 N Person St, Raleigh, NC 27604
              </p>
            </div>
            <div className="mb-6">
              <h2 className="text-amber-800 text-l font-semibold mb-3 flex items-center">
                <Clock className="mr-3" /> We&apos;re open from:
              </h2>
              <ul className="text-amber-900 space-y-2">
                <li>Monday - Friday: 4:00 PM - 2:00 AM</li>
                <li>Saturday & Sunday: 2:00 PM - 2:00 AM</li>
              </ul>
            </div>
            <div className="mb-6">
              <div className="text-amber-800 text-l font-semibold flex items-center">
                <Phone className="mr-3" />
                <p className="mr-2">Phone:</p>
                <p className="text-amber-800">
                  <a href="tel:+19199775952">(919) 977-5952</a>
                </p>
              </div>
            </div>
            <div className="mb-6">
              <div className="text-amber-800 text-l font-semibold mb-3 flex items-center">
                <MailPlus className="mr-3" />
                <p className="mr-2">Email:</p>
                <p>info@personstreetbar.com</p>
              </div>
            </div>
            <div className="mb-6">
              <div className="text-amber-800 text-l font-semibold mb-3 flex items-center">
                <SiInstagram className="mr-2" />
                <p className="mr-2">@personstreetbar</p>
              </div>
            </div>
            <div className="mb-6">
              <div className="text-amber-800 text-l font-semibold mb-3 flex items-center">
                <SiFacebook className="mr-2" />
                <p className="mr-2">@personstreetbar</p>
              </div>
            </div>
          </div>
          <div className="rounded-md overflow-hidden flex-shrink-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3236.3842768687477!2d-78.63717652379341!3d35.79049837255225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89ac5f407bd89e8b%3A0xa8fc15287aafbd34!2sPerson%20Street%20Bar!5e0!3m2!1sen!2sus!4v1743790997864!5m2!1sen!2sus"
              width="600"
              height="450"
              style={iframeStyle}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>{" "}
          </div>
        </div>
      </div>
    </main>
  );
}
