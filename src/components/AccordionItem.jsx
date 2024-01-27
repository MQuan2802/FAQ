import React from "react";

export const AccordionItem = (props) => {
    return (
        <div className="faq__question" key={props.item.question}>
        <dt>
          <button
            aria-expanded={props.ariaExpanded}
            aria-controls={`faq${props.index + 1}_desc`}
            data-qa="faq__question-button"
            className={`faq__question-button ${props.fontWeightBold}`}
            onClick={props.onClick}
          >
            {props.item.question}
          </button>
        </dt>
        <dd>
          <p
            id={`faq${props.index + 1}_desc`}
            data-qa="faq__desc"
            className={`faq__desc ${props.showDescription}`}
          >
            {props.item.answer}
          </p>
        </dd>
      </div>
    )
}