import styles from "../main.module.css";
import Feedback from "../componentsCourse/feedback/feedback";
import Footer from "../componentsCourse/footer/footer";
import Header from "../componentsCourse/header/header";
import OnlineLearningAndCost from "../generalReactPage/onlineLearningAndCost/onlineLearningAndCost";
import MainCardPython from "./mainCardPython/mainCardPython";
import ModuleProjectPython from "./moduleProjects/moduleProject";
import SoftwareStack from "./softwareStackPython/softwareStackPython";
const mainMenuItems = [
  { name: "Практические навыки", link: "#softwareStack" },
  { name: "Программа курса", link: "#moduleProject" },
  { name: "Отзывы", link: "#feedback" },
  { name: "Цены", link: "#onlineLearningAndCost" },
  { name: "Формат обучения", link: "#onlineLearningAndCost" },
];
export default function AppPythonPage() {
  return (
    <div className={styles.wrapper}>
      <Header menuItems={mainMenuItems} />
      <MainCardPython />
      <SoftwareStack />
      <ModuleProjectPython />
      <OnlineLearningAndCost />
      <Feedback />
      <Footer navbar={mainMenuItems} />
    </div>
  );
}
