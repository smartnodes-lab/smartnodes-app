import { motion } from "framer-motion";

const TextAnimation = () => {
    return (
        <motion.div>
            <motion.span
                initial={{opacity: 0}}
                animate={{opacity: 1}}
            >Hello World</motion.span>
        </motion.div>
    )
}

export default TextAnimation;