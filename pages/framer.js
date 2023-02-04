import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";

//begin animation after button clicked!
const framer1 = () => {
  const [active, setActive] = useState(false);

  const Variants = {
    active: { background: "#ff00b1", rotate: 90 },
    disabled: { background: "#0D00FF", rotate: 0 },
  };
  return (
    <div className="relative h-screen w-full bg-orange-300">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Est, odit molestias! Assumenda aliquid odit
        provident cupiditate? Laborum in officia similique,
        omnis dolor repellendus molestias porro!
        Perspiciatis ea asperiores porro mollitia? Esse ea
        et in molestias veritatis. Tempore placeat magni
        perspiciatis repellendus laborum nobis officiis
        delectus inventore rerum asperiores, animi similique
        maxime nihil! Veniam et iusto soluta excepturi
        quibusdam vero id! Tenetur dolores fugiat vero aut!
        Explicabo dolorem placeat iste optio accusamus quam
        reiciendis nihil id, ratione culpa dolore at
        debitis! Iste commodi aliquam dolores corrupti minus
        totam animi possimus qui. Id vel libero rem quos
        iste modi ea voluptatibus porro odio, animi
        doloribus accusantium delectus accusamus? Incidunt
        dolore eos soluta nostrum suscipit! Deleniti,
        molestiae totam ullam minima ipsam natus hic.
        Accusantium ex beatae harum iusto nihil accusamus
        libero fuga numquam eveniet? Quis ut sapiente facere
        quam eum consequuntur officia temporibus, in
        obcaecati placeat ratione maiores saepe ex tempora
        aperiam iusto. Commodi neque quia, maiores quasi,
        numquam aliquam aperiam minima ducimus
        necessitatibus repellendus obcaecati esse totam
        perferendis omnis labore saepe voluptate libero
        officiis. Nisi dolorum ea debitis vel, dolore iure
        incidunt. Reprehenderit, deleniti provident
        repellendus libero eligendi fuga, distinctio aliquam
        quod suscipit voluptas quibusdam nisi? Rerum
        quibusdam, cupiditate, quod, qui consequatur quo
        debitis necessitatibus dolor perspiciatis aperiam
        at! Sed, nostrum blanditiis? Delectus expedita ex
        maiores placeat asperiores animi minus ad molestias,
        voluptas tempore corporis unde a aut vero dolores,
        at dolor omnis nobis dignissimos nisi odit deserunt.
        Voluptatem maiores numquam reiciendis. Iure eius
        nesciunt quod odio ipsum perspiciatis, ad sed minus
        expedita, quae nihil a soluta nulla porro voluptas
        consequatur cupiditate ullam, quo id laboriosam
        repellendus dolor. Nostrum at vero esse! Odio
        provident, harum libero dolore culpa magni obcaecati
        officiis debitis quaerat cupiditate? Doloremque quia
        alias harum ut voluptatem ad, laboriosam nobis?
        Corporis hic consequuntur obcaecati, beatae cumque
        ex incidunt molestiae. Alias ea, omnis aperiam
        perspiciatis commodi soluta facere assumenda
        reiciendis ipsa eligendi placeat, est dolores
        possimus quae aliquam, illo dolore magnam enim
        voluptate vel aut fuga earum culpa! Voluptatem,
        officia? Animi culpa minima excepturi modi, nulla
        omnis, laborum architecto est assumenda itaque error
        rerum provident at velit ducimus et ex officia saepe
        cumque odit repudiandae, voluptates maxime aliquam
        temporibus? Culpa. Rem harum eos molestias commodi
        quisquam dicta neque consectetur sit laborum tempore
        sint quibusdam debitis, necessitatibus quam
        exercitationem veniam unde nobis inventore deserunt
        dolore? Cumque nobis voluptate velit tempora
        explicabo! Atque dolor, sed, soluta repellendus enim
        maxime quaerat, corporis sint debitis et voluptate
        doloremque accusantium tempora quasi pariatur.
        Repellat doloremque ipsam quo quod, maiores omnis
        totam hic iusto ex aspernatur? Aliquam at quam amet
        modi quo! Recusandae sed quas officia ad in
        molestias. Nemo fugiat, nostrum quaerat,
        voluptatibus officiis aliquam dicta adipisci
        repellat, cum odit at. Fugiat temporibus blanditiis
        ad. Corporis magni quia soluta commodi natus nulla
        dolorum omnis maiores, et quos ipsam nam nisi quis
        autem maxime iste mollitia similique accusamus
        exercitationem facilis fuga? Amet laudantium
        repellat libero omnis. Quos, ratione consequuntur
        harum excepturi commodi esse nihil ipsam velit
        repellendus suscipit sunt debitis quaerat deserunt
        et dolores eveniet beatae hic qui asperiores
        quibusdam libero porro dignissimos, explicabo modi!
        Corporis! Aspernatur in rem obcaecati voluptates
        nesciunt corporis architecto quidem odit laborum
        dignissimos tempora dolorum quis temporibus tempore
        praesentium totam ut optio animi quae, dolore, quia
        sunt mollitia cumque. Impedit, cumque. Eaque,
        mollitia autem inventore placeat obcaecati similique
        dolor ratione repudiandae eius. Animi autem, aut,
        pariatur saepe ipsa labore soluta ratione placeat
        doloribus quam sint consequuntur facilis! Excepturi
        ad aperiam provident. Eum cumque minus commodi
        mollitia assumenda! Non ipsam nemo pariatur ex
        dolore corrupti laudantium, optio, quasi sit laborum
        recusandae odio eius magnam sint omnis consectetur
        architecto fuga doloribus, voluptate rerum!
      </p>
      <motion.div
        variants={Variants}
        className={` absolute inset-0 flex justify-center items-center ${
          active ? "h-96" : "h-screen"
        }`}
        animate={active ? "active" : "disabled"}>
        <button
          className="bg-green-400"
          onClick={() => setActive(!active)}>
          Click me
        </button>
      </motion.div>
    </div>
  );
};

export default framer1;
