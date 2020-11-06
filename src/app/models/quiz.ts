import Prompt from './prompt';
import Question from './question';

export class Quiz{

    id:string;
    path:number;
    questions:Question[];
    prompts:Prompt[];

}
export default Quiz;