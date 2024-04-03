import OnlineLearningAndCost from "../../2/generalReactPage/onlineLearningAndCost/onlineLearningAndCost";
import Feedback from "../../components/components/feedback/feedback";
import Footer from "../../components/components/footer/footer";
import Header from "../../components/components/header/header";
import styles from "../../main.module.css";
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
