
import { Chrono } from "react-chrono";
import "./index.css";

const items = [
  {
    tit: "It's not an easy as 1-2-3",
    cardText:
      "The journey of change may be long, but our sessions are quick. we get to the point and tell you what you want to know(and nothing else)",
  },
  {
    tit: "old not an easy as 1-2-3",
    cardText:
      "The journey of change may be long, but our sessions are quick. we get to the point and tell you what you want to know(and nothing else)",
  },
  {
    tit: "new not an easy as 1-2-3",
    cardText:
      "The journey of change may be long, but our sessions are quick. we get to the point and tell you what you want to know(and nothing else)",
  },
  {
    tit: "It's not an easy as 1-2-3",
    cardText:
      "The journey of change may be long, but our sessions are quick. we get to the point and tell you what you want to know(and nothing else)",
  },
];

const MainContent = () => (
  <div className="main-container">
    <div className="ahead-app-container">
      <div className="master-heading-container">
        <div className="ahead-title-content">
          <p className="ahead-app-text">Ahead app </p>
          <h1 className="ahead-title">
            
            Master your life by mastering emotions{" "}
          </h1>
          <div className="app-store-rating-container">
            <button className="app-store-button">
              <ion-icon name="logo-apple" className="apple-icon"></ion-icon>
              Download on AppStore
            </button>
          </div>
        </div>
        
      </div>
    </div>
    <div className="eq-beats-iq-container">
      <h1 className="eq-iq-heading"> EQ beats IQ </h1>
      <p className="eq-description">
        {" "}
        People with high emotional intelligence(EQ) live more fulfilled lives.
        They tend to be happier and have healthier relationships.{" "}
      </p>
      <p className="eq-description">
        {" "}
        They are more successful in their pursuits and make for inspiring
        leaders. According to science, they earn $29k a year.{" "}
      </p>
    </div>
    <div className="familiar-container">
      <h1 className="familiar-text"> Does this sound familiar... </h1>
      <ul className="emojis-familiar-card">
        <li className="list-card">
          <p> Hello </p>
          <h1 className="familiar-title">You argue with a colleague </h1>
          <p className="familiar-description">
            {" "}
            You get angry and defensive, instead of staying open and working
            towards common ground.{" "}
          </p>
        </li>
      </ul>
    </div>
    <div className="meet-ahead-container">
      <div className="meet-familiar-in-container">
        <div className="meet-description-container">
          <p className="meet-title">Built out of frustration </p>
          <h1 className="meet-description"> Meet the ahead app </h1>
        </div>
        <p className="meet-content">
          A personalized pocket couch that provides bite-sized, science-driven
          tools to boost emotional intelligence. <br />
          Think of it as a pocket cheer leader towards a better, more
          fulfilling.
        </p>
      </div>
    </div>

    <div className="self-improvement-timeline-container">
      <p className="self-improvement-title">
        {" "}
        Wrong with self-improvement & how we are fixing it.{" "}
      </p>
      <h1 className="self-improvement-heading"> Self-improvement. Ugh. </h1>
      <div>
        <Chrono mode="VERTICAL" items={items} />
      </div>
    </div>

    <div className="eq-beats-iq-container">
      <h1 className="eq-iq-heading"> Be the best you with EQ </h1>
      <p className="eq-description">
        {" "}
        Not having your emotions under control might be holding you back.
      </p>
      <p className="eq-description">
        {" "}
        Additionally, not understanding those of others stops you from being
        parent, friend you can be.
      </p>
    </div>

    <div className="Ever-wondered-container">
      <div className="ever-wonder-description">
        <p className="wondered-title">
          {" "}
          Let your friends, family, and co-workers (anonymously) rate your
          social skills.{" "}
        </p>
        <h1 className="wondered-sub-title">
          {" "}
          Ever wondered what others think of you?{" "}
        </h1>
        <div className="flow-wondered-questions">
          <p className="questions"> Answer question on your social skills </p>
          <p className="questions">
            Let others anonymously answer the same questions about you{" "}
          </p>
          <p className="questions">
            {" "}
            Find out where you and others see things the same way - and where
            not!{" "}
          </p>
        </div>
        <Chrono mode="HORIZONTAL" color="red">
          <h1> You </h1>
          <p> anonymous 1 </p>
          <p> anonymous 2 </p>
          <p> anonymous 3 </p>
        </Chrono>
      </div>
    </div>

    <div className="before-start-test-container">
      <div className="test-description-container">
        <p className="privacy-text"> We take privacy seriously </p>
        <h1 className="started-text"> Before you get Started </h1>
        <p className="test-description">
          {" "}
          We won't share your answers with anyone (and won't ever tell you which
          friends said what about you <br />
          <span className="with-love-text"> with love,</span>
        </p>
        <button className="start-test-button">Start a test</button>
        <p className="min-test"> Take only 5 minutes </p>
      </div>
    </div>

    <div className="work-with-us-container">
      <div className="work-with-us-description-container">
        <div className="about-product-container">
          <h1 className="work-with-us-title"> Work with us </h1>
          <div className="about-product-description">
            <div className="about-container">
              <h1 className="about-title"> About </h1>
              <p className="about-content">
                {" "}
                At ahead our goal is to make self-improvement fun and lasting.
                We know there's a way how to make it work. And that's what aHead
                is all about!{" "}
              </p>
            </div>
            <div className="product-container">
              <h1 className="about-title"> Product </h1>
              <p className="about-content">
                {" "}
                Sure, you could spend ages reading books or sitting in seminars
                on how to become a better spouse, parent, or manager - like we
                did...
              </p>
            </div>
          </div>
        </div>

        <div className="cards-products-container">
          <h1 className="ahead-product-heading "> ahead </h1>
          <div className="ahead-card-containers">
            <h1 className="ahead-titled">
              {" "}
              Power through, even when the going sets tough{" "}
            </h1>
            <p className="ahead-content-con">
              {" "}
              We help you spot and work around stands in a way, be it bad
              habits, fears, etc.{" "}
            </p>
          </div>
          <div className="ahead-card-containers">
            <h1 className="ahead-titled">
              {" "}
              Power through, even when the going sets tough{" "}
            </h1>
            <p className="ahead-content-con">
              {" "}
              We help you spot and work around stands in a way, be it bad
              habits, fears, etc.{" "}
            </p>
          </div>
          <div className="ahead-card-containers">
            <h1 className="ahead-titled">
              {" "}
              Power through, even when the going sets tough{" "}
            </h1>
            <p className="ahead-content-con">
              {" "}
              We help you spot and work around stands in a way, be it bad
              habits, fears, etc.{" "}
            </p>
          </div>
          <div className="ahead-card-containers">
            <h1 className="ahead-titled">
              {" "}
              Power through, even when the going sets tough{" "}
            </h1>
            <p className="ahead-content-con">
              {" "}
              We help you spot and work around stands in a way, be it bad
              habits, fears, etc.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="open-vacancies-container">
      <div className="open-vacancies-description">
        <h1 className="open-vacancies-title"> Open Vacancies </h1>
        <div className="open-roles-container">
          <div className="vacancy-card">
            <h1 className="role"> Senior Full-Stack Engineer </h1>
            <ul>
              <li className="role-part"> Full-time position </li>
              <li className="role-part"> Berlin or remote </li>
              <li className="role-part">
                {" "}
                $65-85k, 0.5-1.50% equity share options{" "}
              </li>
            </ul>
          </div>
          <div className="vacancy-card">
            <h1 className="role"> Senior Designer </h1>
            <ul>
              <li className="role-part"> Full-time position </li>
              <li className="role-part"> Berlin or remote </li>
              <li className="role-part">
                {" "}
                $40-55k, 0.25-0.50% equity share options{" "}
              </li>
            </ul>
          </div>
          <div className="vacancy-card">
            <h1 className="role"> Superstar intern </h1>
            <ul>
              <li className="role-part"> Full-time position </li>
              <li className="role-part"> Berlin or remote </li>
              <li className="role-part">
                {" "}
                $20-24k, 0.5-1.50% equity share options{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <hr className="hr-line" />
  </div>
);

export default MainContent;
