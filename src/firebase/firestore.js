import { db, firestore } from './firebase';

const increment = firestore.FieldValue.increment(1);

export async function getQuestions() {
    let docRef = db.collection('questions').doc('all');

    let doc = await docRef.get();
    let data = await doc.data();
    let questionsJson = data.data;
    let questions = await JSON.parse(questionsJson);

    return questions;
}

export function submitQuestionnaire (submission) {
    console.log(submission);
    submission.forEach(answer => {

        console.log(answer);

        let id = answer.questionId;
        let answerRef = db.collection("answers").doc(id.toString());

        let updateObject = {};
        let option = answer.answer.replace("~", "").replace("*", "").replace("/", "").replace("[", "").replace("]", "");
        updateObject[option] = increment;

        answerRef.update(updateObject).catch(() => {
            answerRef.set(updateObject);
        });

    });

    let submissionObject = {};
    submission.forEach(item => {
        submissionObject[item.questionID] = item.answer;
    });

    console.log(submissionObject);

    let answerRef = db.collection("answers-writtenout").doc();

    answerRef.set(submissionObject);

}