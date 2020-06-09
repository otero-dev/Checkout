import React, { useState, useEffect } from 'react';
import Question from './question'
import Answer from './answer'
import { Box, Card } from '../basic';

const Faq = (props) => {
    let tmp_questions = [], 
        tmp_answers = [], 
        tmp_faq_header = '';

    if(props.metadata.length > 0) {
        props.metadata.map(field => {
            if(field.key === 'faq_1') tmp_questions[0] = field.value;
            if(field.key === 'faq_2') tmp_questions[1] = field.value;
            if(field.key === 'faq_3') tmp_questions[2] = field.value;
            if(field.key === 'faq_4') tmp_questions[3] = field.value;
            if(field.key === 'faq_5') tmp_questions[4] = field.value;

            if(field.key === 'faq_answer_1') tmp_answers[0] = field.value;
            if(field.key === 'faq_answer_2') tmp_answers[1] = field.value;
            if(field.key === 'faq_answer_3') tmp_answers[2] = field.value;
            if(field.key === 'faq_answer_4') tmp_answers[3] = field.value;
            if(field.key === 'faq_answer_5') tmp_answers[4] = field.value;
            if(field.key === 'faq_answer_5') tmp_answers[4] = field.value;
            
            if(field.key === 'faq_header') tmp_faq_header = field.value;
        })
    };

    const questions = tmp_questions;
    const answers = tmp_answers;
    const faq_header = tmp_faq_header;
    
    
    return (
        <Box mt={20}>
            <Card>
                <Box display='flex' justifyContent='center'>
                    <h2>{faq_header}</h2>
                </Box>
                {questions.length > 0 && <React.Fragment>
                    {questions.map((question, index) => <Box>
                        <Question question={question} />
                        <Answer answer={answers[index]} />
                    </Box>)}
                </React.Fragment>}
            </Card>
        </Box>
    )
}

export default Faq;