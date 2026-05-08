import { MapPinIcon } from "@heroicons/react/20/solid";
import { Button } from "../components/Button";
import Titlebar from "../components/section-content/Titlebar";
import { InputField } from "../components/textfield/InputField";
import { FiLink2 } from "react-icons/fi";
import { CiShare2 } from "react-icons/ci";
import { MdQrCode2 } from "react-icons/md";
import { RiMvAiLine } from "react-icons/ri";

const Contact = () => {
  return (
    <div className="py-20">
      <div className="flex gap-10 max-w-5xl mx-auto ">
        <section className="w-1/2 space-y-8">
          <Titlebar
            title="Contact Me"
            content="Get in Touch"
            description="Have a project in mind or just want to chat about frontend architecture? I'm always open to discussing new opportunities and technical challenges."
          />

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="bg-neutral hover:bg-secondary p-4 rounded-xl text-black hover:text-natural">
                <RiMvAiLine className="w-6 h-6 " />
              </div>

              <div>
                <p className="text-primary text-sm">Email</p>
                <p className="text-primary font-medium text-sm">
                  yunikashakya082@gmail.com
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-neutral hover:bg-secondary p-4 rounded-xl text-black hover:text-natural">
                <MapPinIcon className="w-6 h-6 " />
              </div>

              <div>
                <p className="text-primary text-sm">Location</p>
                <p className="text-primary font-medium text-sm">
                  Kathmandu, Nepal
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {/* Social / Links */}
            <div className="flex gap-4 pt-4">
              <button className="border-2 border-neutral p-3 rounded-lg hover:bg-neutral transition">
                <FiLink2 className="w-5 h-5" />
              </button>

              <button className="border-2 border-neutral p-3 rounded-lg hover:bg-neutral transition">
                <CiShare2 className="w-5 h-5" />
              </button>

              <button className="border-2 border-neutral p-3 rounded-lg hover:bg-neutral transition">
                <MdQrCode2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>

        <section className="w-1/2">
          <div className="p-8 space-y-6 border border-neutral rounded-2xl bg-natural">
            <InputField label="Full Name" placeholder="Enter your fullname" />
            <InputField label="Email" placeholder="Enter your email" />
            <InputField label="Subject" placeholder="Enter you subject" />
            <InputField
              as="textarea"
              label="Message"
              placeholder="Enter your message"
            />

            <Button>Send Message</Button>

            <hr className="text-neutral" />
            <p className="text-sm text-primary text-center">
              Typically responds within 24 hours.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
