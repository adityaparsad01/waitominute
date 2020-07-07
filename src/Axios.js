import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

// TODO(slightlyoff): factor out common JSON parsing & caching of this file
const DATA_URL = "https://waitominuteapi.tk/faq";

function About(props) {
  const [faq, setFaq] = useState([]);

  useEffect(() => {
    getFAQs();
  }, []);

  const getFAQs = () => {
    fetch(DATA_URL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setFaq(data.faq);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <React.Fragment>
      <Helmet>
        <title>FAQ - WaitOminute.tk</title>
        <meta name="title" content="read me about my self" />
      </Helmet>

      <div className="About">
        {faq.map((faq, index) => {
          return (
            <div
              key={index}
              className="faq fadeInUp"
              style={{ animationDelay: `${0.5 + index * 0.1}s` }}
            >
              <h2 className="question text-capitalize">{faq.question}</h2>
              <h2
                className="answer text-capitalize"
                dangerouslySetInnerHTML={{ __html: faq.answer }}
              ></h2>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
}

export default About;
