import { ClassType, SelectedPage } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import ClassItem from "./ClassItem";

const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur animi, ipsam molestias id consequuntur fugit vero suscipit? Beatae odio amet nobis tenetur libero totam atque quo possimus molestiae enim itaque est voluptates accusamus ipsa repudiandae commodi aliquam, perspiciatis eaque praesentium, ex numquam fuga. Aperiam est, laudantium dolor consequatur possimus culpa.",
    image: image1,
  },
  {
    name: "Yoga Classes",
    image: image2,
  },
  {
    name: "Ab Core Classes",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur animi, ipsam molestias id consequuntur fugit vero suscipit? Beatae odio amet nobis tenetur libero totam atque quo possimus molestiae enim itaque est voluptates accusamus ipsa repudiandae commodi aliquam, perspiciatis eaque praesentium, ex numquam fuga. Aperiam est, laudantium dolor consequatur possimus culpa.",
    image: image3,
  },
  {
    name: "Adventure Classes",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur animi, ipsam molestias id consequuntur fugit vero suscipit? Beatae odio amet nobis tenetur libero totam atque quo possimus molestiae enim itaque est voluptates accusamus ipsa repudiandae commodi aliquam, perspiciatis eaque praesentium, ex numquam fuga. Aperiam est, laudantium dolor consequatur possimus culpa.",
    image: image4,
  },
  {
    name: "Fitness Classes",
    image: image5,
  },
  {
    name: "Training Classes",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur animi, ipsam molestias id consequuntur fugit vero suscipit? Beatae odio amet nobis tenetur libero totam atque quo possimus molestiae enim itaque est voluptates accusamus ipsa repudiandae commodi aliquam, perspiciatis eaque praesentium, ex numquam fuga. Aperiam est, laudantium dolor consequatur possimus culpa.",
    image: image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

export default function OurClasses({ setSelectedPage }: Props) {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="mx-auto w-5/6"
        >
          <div className="md:w-3/5">
            <HText>OUR CLASSES</HText>
            <p className="py-5">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni
              excepturi temporibus atque obcaecati rerum beatae cum soluta
              pariatur nihil, distinctio, fuga tempore veritatis unde aliquam.
              Voluptas dolorem nisi sint sed omnis tempora totam quae labore,
              perferendis eius provident eaque inventore vero iste repudiandae
              in enim ex, at saepe praesentium voluptates?
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden ">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <ClassItem
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
}
