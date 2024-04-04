import Feedback from "../componentsCourse/feedback/feedback";
import Footer from "../componentsCourse/footer/footer";
import Header from "../componentsCourse/header/header";
import MainCardReact from "./mainCardReact/mainCardReact";
import ModuleProject from "./moduleProjects/moduleProject";
import OnlineLearningAndCost from "./onlineLearningAndCost/onlineLearningAndCost";
import SoftwareStack from "./softwareStack/softwareStack";

const mainMenuItems = [
  { name: "Практические навыки", link: "#softwareStack" },
  { name: "Программа курса", link: "#moduleProject" },
  { name: "Отзывы", link: "#feedback" },
  { name: "Цены", link: "#onlineLearningAndCost" },
  { name: "Формат обучения", link: "#onlineLearningAndCost" },
];

export default function AppReactPage() {
  return (
    <div style={{ margin: "0 80px" }}>
      <Header menuItems={mainMenuItems} />
      <MainCardReact />
      <SoftwareStack />
      <ModuleProject />
      <OnlineLearningAndCost />
      <Feedback />
      <Footer navbar={mainMenuItems} />
    </div>
  );
}
