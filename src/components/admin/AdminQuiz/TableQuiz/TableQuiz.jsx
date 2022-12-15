import {
  ButtonActionsWrap,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "./TableQuiz.styled";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import pathRoutes from "constants/pathRoutes";

const TableQuiz = ({ quizs, handleDelteQuiz }) => {
  const navigate = useNavigate();

  return (
    <div style={{ overflowX: "auto" }}>
      <TableContainer>
        <TableHead>
          <TableRow>
            <TableCell as="th">Id</TableCell>
            <TableCell as="th" colSpan={3}>
              Title
            </TableCell>
            <TableCell as="th" align="right">
              Time
            </TableCell>
            <TableCell as="th" align="right">
              MaxPoint
            </TableCell>
            <TableCell as="th" align="right">
              Ratings
            </TableCell>
            <TableCell as="th" align="right">
              Difficulty
            </TableCell>
            <TableCell as="th" align="right" colSpan={2}>
              Number questions
            </TableCell>
            <TableCell as="th" align="right" colSpan={2}>
              Actions
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {quizs.map((quiz) => (
            <TableRow key={quiz.id}>
              <TableCell lineClamp={3}>{quiz.id} </TableCell>
              <TableCell colSpan={3} lineClamp={3}>
                {quiz.title}
              </TableCell>
              <TableCell align="right">{quiz.time}</TableCell>
              <TableCell align="right">{quiz.maxPoint}</TableCell>
              <TableCell align="right">{quiz.ratings}</TableCell>
              <TableCell align="right">{quiz.difficulty}</TableCell>
              <TableCell align="right" colSpan={2}>
                {quiz.questions.length}
              </TableCell>
              <TableCell align="right" colSpan={2}>
                <ButtonActionsWrap>
                  <button
                    onClick={() =>
                      navigate(`${pathRoutes.editQuiz}/${quiz.id}`)
                    }
                  >
                    <BiEdit />
                  </button>
                  <button onClick={() => handleDelteQuiz(quiz.id)}>
                    <AiFillDelete />
                  </button>
                </ButtonActionsWrap>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </TableContainer>
    </div>
  );
};

export default TableQuiz;
