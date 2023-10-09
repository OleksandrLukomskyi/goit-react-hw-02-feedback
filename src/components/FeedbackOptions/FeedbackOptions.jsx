import React from "react";
import css from "./FeedbackOptions.module.css"
 export const FeedbackOptions = ({onLeaveFeedback}) => {
   return (
      <div className={css.feedbackBloc}>
         <h1>Pleace leave feedback</h1>
         <div className={css.blocButton}>
            
            <button className={css.button} type='button' name='good' onClick={onLeaveFeedback}> Good</button>
            <button className={css.button} type='button' name='neutral' onClick={onLeaveFeedback}> Neutral</button>
            <button className={css.button} type='button' name='bad' onClick={onLeaveFeedback}> Bad</button>
         </div>
      </div>
   )
 }