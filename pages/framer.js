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
    <motion.div
      variants={Variants}
      animate={active ? "active" : "disabled"}
      onClick={() => setActive(!active)}>
      Click me
    </motion.div>
  );
};

export default framer1;
