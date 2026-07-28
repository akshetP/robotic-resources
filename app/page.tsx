import Hero from "./components/Hero";
import TopicHub from "./components/TopicHub";
import Projects from "./projects/project";
import RoboticsRepositories from "./repositories/repo";
import RosPage from "./ros/ros";
import Ros2Page from "./ros2/ros2";
import RoboticsYoutube from "./youtube/youtube";
import RoboticsCourses from "./freelearning/free";
import RoboticsBooks from "./books/books";
import RoboticsSimulators from "./simulator/sim";
import { AnswerIntro, FaqSection } from "./components/AeoContent";

export default function Main() {
  return (
    <main id="main-content">
      <Hero />
      <AnswerIntro />
      <TopicHub />
      <Projects />
      <RoboticsRepositories />
      <RosPage />
      <Ros2Page />
      <RoboticsYoutube />
      <RoboticsCourses />
      <RoboticsBooks />
      <RoboticsSimulators />
      <FaqSection />
    </main>
  );
}
