import React from "react";
import "./Modal.css";

const Modal = ({ details }) => {
  return (
    <div>
      {/*Modal Area*/}

      <div
        class="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title highlight word" id="staticBackdropLabel">
              Tips for Preparing for Your First Therapy Session
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div className="modal-img-div">
                <img
                  className="img-fluid modal-img"
                  src="https://i.ibb.co/QNdKR3b/pexels-alex-green-5699466.jpg"
                  alt=""
                />
              </div>
              <div className="user-designation mb-4">
                <p>
                  <span className="name-bold">Susmita Chakraborty</span>
                </p>
                <p className="date">
                  {" "}
                  Published :
                  <span className="name-bold"> 23 December, 2022</span>
                </p>
              </div>
              <div className="content-text">
                <p>
                  Visiting a psychologist or any other mental health therapist
                  is still a big taboo in our society, so we have a lot of
                  inhibitions and fear when we decide to visit a therapist. You
                  might have a lot of questions regarding how to prepare for the
                  therapy so that you get the maximum benefit out of the
                  sessions. Worry not, you have come to the right place, and I
                  will help you out with your queries. First of all, you must
                  know that a mental health professional is supposed to be
                  non-judgmental. A therapist is supposed to create a safe place
                  and help you discover yourself.
                </p>
                <p>
                  Here are some expert pointers to help you prepare for your
                  first session.
                </p>
                <p>
                  1. First and foremost, congratulate yourself for taking this
                  risk. Meeting with a therapist takes guts because you're going
                  to meet a stranger and share your inner world with them
                </p>
                <p>2. Be open to asking questions. Your therapist doesn't expect you to know
everything beforehand. You are expected to have doubts. So, don't be hesitant
to ask questions as you prepare for your first therapy appointment. Doing so
frequently calms nerves and better prepares you for what's to come. Don't think
that you will look silly or that the therapist will assume that you don't have basic
knowledge about how a session is going to work. You can start with questions
like, "How is counselling different from therapy?" or you can ask the
therapist "What are your expectations from your clients?"
</p>
<p>
3. Have clarity on what your expectations are from the therapy. Therapy will
not solve all of your problems overnight. A therapist is not a wizard with a wand
who can magically quick-fix all your issues.
</p>
<p>4. Give some thought to what you want to accomplish through
therapy. Nothing is impossible, but it is critical to create goals that are both
practical and realistic. However, you must not overlook your potential. But it is
not possible to achieve everything or sort out all your problems in a short period
of time. The more clear you are, the easier it will be for the therapist to determine
whether they can help you attain your goals.</p>
<p>
5. Therapy is time consuming- The period of therapy for psychological issues
will inevitably vary from person to person. Essentially, the type of treatment and
the length of the treatment is tailored to the nature and severity of the individual's
presenting challenges. Acute problems often need fewer therapy sessions than
chronic issues. Furthermore, the time of therapy varies depending on the type of
treatment delivered; cognitive behavioural treatments that focus on a specific
problem are often shorter than psychotherapies with a broader emphasis.<br></br>
Although the terms therapy and counselling are sometimes used
interchangeably, there are some significant distinctions between them. Working
with a mental health counsellor or professional mental health counsellor on a
specific issue for a certain period of time is what counselling entails. Long-term
therapy focuses on you as an individual – how you view yourself and the world, your thoughts and behaviours, and the underlying patterns of why you do what
you do.
</p>
<p>6. Don't hold preconceived notions- You might have watched movies and
webseries about therapy and therapists. And it is on the basis of these that we
form preconceived notions about therapy and therapists. They frequently provide
information that is far from accurate. Please do not use these videos to judge
what a therapist or mental health professional looks like. If you want to know
what it looks like, you should learn about it from reliable sources.
</p>
<p>
7. Schedule some time before and after the session. If possible, take extra time
off before and after the session to allow yourself to reach a more deeply
contemplative zone. You can be feeling more powerful emotions as you prepare
to open up, and this might cause an increase in your stress. <br></br>
You must know that to get the maximum benefit from therapy, it is essential that
both the therapist and the client put forth equal effort. A therapist cannot help
you if you don't want to be helped. They can't serve you the solution to your
problems on a platter. Therapy is a journey embarked on together by the
therapist and the client. So, it is important to take some time off before the
session to recollect the information (progress, new developments, important
facts) you might want to provide the therapist. It is also essential to repeat the
process after the session. Perhaps you'd like to think about what was discussed
during the session. You might even want to jot down some points that might give
you some insights about yourself.
</p>
<p>
8. Make a list of what brought you to therapy. If you prefer to journal, you can do
it there, but it's also OK to use a phone note app. Writing in any form about your
issues, expectations, and possible questions for the potential therapist will be
very helpful. As new observations come to you, keep adding them to your
notebook. Take a look through your notebook before your session. You can also
take the notebook with you to the session and read it to your therapist from it.<br></br>
Expect that your first therapy session and early self-reflection will not address all
of your questions regarding your condition. Still, you could obtain some useful
insight into your present problem or your feelings towards treatment.
Continue to engage in some self-reflection following your future sessions with
your therapist to help you get the most out of them.<br></br>
Please remember that it takes time to change our belief system, to let go of our
fears, to deal with the loss of a loved one, and to heal from our emotional pain.
Your months and years of issues cannot just go away with a few sessions.
Therapy takes time, effort, and a lot of learning and unlearning
</p>


              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
