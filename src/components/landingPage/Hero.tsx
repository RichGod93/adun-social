import Logo from "./Logo";
import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
    return (
        <div
            className="h-screen flex flex-col"

        >
            <div className="self-start pt-3 lg:pt-5"><Logo /></div>
            <div className="flex flex-1 items-center justify-center">
                <motion.div className="space-y-1 flex flex-col items-center"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        default: {
                            duration: 0.3,
                            ease: [0, 0.71, 0.2, 1.01]
                        },
                        scale: {
                            type: "spring",
                            damping: 5,
                            stiffness: 100,
                            restDelta: 0.001
                        }
                    }}
                >
                    <div>
                        <p className="font-semibold text-xs md:lg:text-sm text-center primary-text-color uppercase">
                            24 hour access
                        </p>
                        <p className="font-extrabold md:lg:text-7xl text-center primary-text-color uppercase">
                            stay updated<br />share your thoughts
                        </p>

                    </div>
                    <div>
                        <p className="text-center">
                            Change the way you utilize your time and the internet with this <br /> easy-to-use social network.
                        </p>
                    </div>

                    {/* Button */}
                    <Link href="#">
                        <motion.button
                            className="primary-bg-color dark:secondary-bg-color secondary-text-color dark:primary-text-color text-xs mt-2 py-3 px-4 rounded-sm flex items-center justify-between uppercase"
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                            Get Started
                        </motion.button>
                    </Link>

                </motion.div>
            </div>

        </div>
    );
};

export default Hero;