/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import Image from "next/image";
import { Tilt } from "react-tilt";

export const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <Image
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introdução</p>
        <h2 className={styles.sectionHeadText}>Sobre mim.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        🔭 Sou um desenvolvedor de software com experiência em TypeScript e
        JavaScript, React, React Native e Next.js, além de expertise em muitos
        outros frameworks. Aprendo rápido e colaboro de perto com os clientes
        para criar soluções eficientes, escaláveis e amigáveis ao usuário que
        resolvam problemas do mundo real.
        <br />
        <br />
        📖 Atualmente, estou cursando Sistemas de Informação na Universidade
        Federal de Goiás (UFG). Essa graduação tem proporcionado uma base sólida
        de conhecimentos teóricos e práticos, preparando-me para enfrentar os
        desafios do campo da tecnologia da informação. Estou aproveitando as
        oportunidades de aprendizado oferecidas pelo curso para me aprofundar em
        áreas como desenvolvimento de software, gerenciamento de banco de dados,
        engenharia de software e noções de empreendedorismo digital, regras de
        negócio, governança e mais.
        <br />
        <br />
        🤝🏽 Me considero uma pessoa com boas habilidades interpessoais,
        incluindo comunicação efetiva, trabalho em equipe e fácil de trabalhar
        junto.
        <br />
        <br />
        💡 Sou muito curioso e tenho grande interesse em aprender tecnologias e
        frameworks Mobile, especialmente aqueles relacionados ao ambiente Apple.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-20 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>

      <div className="mt-16 w-full flex justify-center items-center z-20">
        <a href="#work">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
