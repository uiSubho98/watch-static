import React from "react";
import expertImage from "../../assets/expert image.png";
import "./Expert.css";

const Expert = () => {
  return (
    <div className="expert-container" id="expert">
      <div className="expert-header">
        <h2 className="text-center">Expert & Founder</h2>
      </div>
      <div className="expert-image">
        <img className="img-fluid" src={expertImage} alt="" />
      </div>
     <div className="expert-bio container">
     <div className="expert-content">
        <p>
          Susmita Chakraborty is a Counselling psychologist and Psychotherapist.
          She has done her masters in psychology from Christ University in
          Bangalore with specialization in human resource development
          management, She is also a certified trauma-informed and LGBTQ positive
          therapist. She has been trained in a variety of psychological
          assessments and therapeutic interventions. Her goal is to apply her
          abilities and skills in the mental health care system to help people
          live happier lives and to help people who have mental health issues.
          Her approach is electric, and it varies from person to person based on
          the nature and severity of their difficulties. She enjoys reading and
          watching documentaries and movies in her leisure time.
        </p>
      </div>
      <div className="expert-content">
        <p>
          In her words, "Nature brings me joy. I enjoy going on hikes and treks.
          I also enjoys repurposing old goods that might otherwise wind up in
          the rubbish or landfill. If I hadn't been a human psychologist,I would
          have probably become an animal psychologist"
        </p>
      </div>
      <div className="expert-content">
        <p>
          Susmita also works closely with a UK-based coaching company called
          Mindful Dating. Additionally, she serves on the expert panel of
          Heyy.life, a Singapore-based mental health organization that serves
          corporate and individual clients worldwide. She also teaches
          psychology at Archarya Institute, Bangalore as an adjunct faculty.
          Aside from that, she has conducted mental health workshops at colleges
          and universities such as Ramaiah University, Bangalore.
        </p>
      </div>
     </div>
    </div>
  );
};

export default Expert;
