import React, { FC, useCallback, useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "@/styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "@/hoc";
import { slideIn } from "@/utils/motion";
import SocialMedias from "./SocialMedias";
import Swal from "sweetalert2";
interface ContactFormProps {
  contact: Models.Contact;
}

const Contact: FC<ContactFormProps> = () => {
  const [form, setForm] = useState({} as Models.Contact);
  const [loading, setLoading] = useState<boolean>(false);
  const [sweetAlertProps, setSweetAlertProps] = useState({});
  const formRef = useRef<any>(null);

  const onChange = useCallback((e: any) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }, []);

  const onSubmit = useCallback(
    (e: any) => {
      e.preventDefault();
      setLoading(true);
      emailjs
        .send(
          "service_n3c4ya4",
          "template_254d07b",
          {
            from_name: form.name,
            to_name: "Pedro Vitor",
            from_email: form.email,
            to_email: "pedrovitorsf.contato@gmail.com",
            message: form.message,
          },
          "mLckYLAvNr-esqX7W"
        )
        .then(
          () => {
            setLoading(false);
            Swal.fire({
              icon: "success",
              title: "Obrigado!",
              text: "😁 Entrarei em contato com você em breve!",
              background: "#aaa6c3",
              confirmButtonColor: "#151030",
              denyButtonColor: "#151030",
              cancelButtonColor: "#151030",
            });
            setForm({
              name: "",
              email: "",
              message: "",
            } as Models.Contact);
          },
          (error: any) => {
            setLoading(false);
            Swal.fire({
              icon: "error",
              title: "Ops!",
              text: "😢 Algo deu errado, tente novamente.",
              background: "#aaa6c3",
              confirmButtonColor: "#151030",
              denyButtonColor: "#151030",
              cancelButtonColor: "#151030",
            });
            console.log(error.text);
          }
        );
    },
    [form]
  );

  return (
    <>
      <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
        >
          <p className={`${styles.sectionSubText}`}>Fale comigo</p>
          <h3 className={`${styles.sectionHeadText}`}>Contato.</h3>
          <SocialMedias />
          <form
            ref={formRef}
            onSubmit={onSubmit}
            className="mt-8 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Seu Nome</span>
              <input
                required
                type="text"
                name="name"
                value={form.name}
                onChange={onChange}
                placeholder="Qual o seu nome?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Seu E-mail</span>
              <input
                required
                type="email"
                name="email"
                value={form.email}
                onChange={onChange}
                placeholder="Qual o seu E-mail?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Sua Mensagem</span>
              <textarea
                required
                rows={5}
                name="message"
                value={form.message}
                onChange={onChange}
                placeholder="Escreva sua mensagem..."
                className="bg-tertiary py-4 px-6 placeholder:text-secondary rounded-lg outline-none border-none font-medium"
              />
            </label>
            <button
              type="submit"
              disabled={loading}
              className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl hover:brightness-[1.5] transition-all duration-200 ease-in-out"
            >
              {loading ? "Enviando..." : "Enviar E-mail"}
            </button>
          </form>
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          <EarthCanvas />
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");
